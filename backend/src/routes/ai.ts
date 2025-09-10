import { Hono } from "hono";
import { verify } from "hono/jwt";

export const aiRouter = new Hono<{
  Bindings: {
    GEMINI_API_KEY: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

// Middleware: verify JWT
aiRouter.use("/*", async (c, next) => {
  try {
    const authHeader = c.req.header("Authorization") || "";
    console.log("[JWT Middleware] Authorization header received:", authHeader);

    if (!authHeader) {
      return c.json({ error: "Unauthorized — missing token" }, 401);
    }

    const token = authHeader.split(" ")[1];
    console.log("[JWT Middleware] Token extracted:", token);

    const payload = await verify(token, c.env.JWT_SECRET);
    console.log("[JWT Middleware] JWT payload:", payload);

    if (!payload || !payload.id) {
      return c.json({ error: "Unauthorized — invalid token" }, 401);
    }

    // Store userId in context
    c.set("userId", String(payload.id));
    await next();
  } catch (err: any) {
    console.error("[JWT Middleware Error]:", err);
    return c.json(
      { error: "JWT verification failed", details: err.message },
      500
    );
  }
});

// POST /generate → generate AI content
aiRouter.post("/", async (c) => {
  try {
    const userId = c.get("userId");

    const body = await c.req.json();
    const prompt = body?.prompt;
    if (!prompt || typeof prompt !== "string") {
      return c.json({ error: "Prompt is required and must be a string" }, 400);
    }

    console.log("[/generate] Sending prompt to Gemini API:", prompt);

    // Updated model: gemini-1.5-pro
    const model = "models/gemini-1.5-pro";
    const resp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${c.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    console.log("[/generate] Gemini API response status:", resp.status);

    if (!resp.ok) {
      const errorText = await resp.text();
      console.error("[/generate] Gemini API error response:", errorText);
      return c.json({ error: "AI generation failed", details: errorText }, 500);
    }

    const data: any = await resp.json();
    console.log(
      "[/generate] Gemini API raw response:",
      JSON.stringify(data, null, 2)
    );

    const summarizedText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "No response from AI";

    return c.json({ userId, summarizedText });
  } catch (err: any) {
    console.error("[/generate] AI Route Error:", err);
    return c.json({ error: "AI request failed", details: err.message }, 500);
  }
});

// GET /ping → health check
aiRouter.get("/ping", (c) => {
  console.log("[/ping] Ping received");
  return c.json({ message: "AI route is alive 🚀" });
});

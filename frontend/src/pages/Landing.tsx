import { Link } from "react-router-dom";
import { Appbar } from "../components/Appbar";
export const Landing = () => {
  return (
    <div>
      <div>
        <Appbar></Appbar>
      </div>
      <div>Hello User ByteWrite</div>
      <Link to={"/signup"}>
        <div>
          <button>Signup</button>
        </div>
      </Link>
      <Link to={"/signin"}>
        <div>
          <button>Signin</button>
        </div>
      </Link>
    </div>
  );
};

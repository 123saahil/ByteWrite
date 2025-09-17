import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"
import { Appbar } from "../components/Appbar";
export const Signin = () => {
    return <div>
        <div>
            <Appbar></Appbar>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Auth type="signin" />
            </div>
            <div className="hidden lg:block">
                <Quote />
            </div>
        </div>
    </div>
}
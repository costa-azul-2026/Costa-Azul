import { LoginForm } from "./components/LoginForm";
import { LeftPanel } from "./components/LeftPanel";
import './Login.css';
export function Login(){

    return(

        <>

            <div className="login-container">

                <div className="login-left"> <LeftPanel/> </div>
                <div className="login-right"> <LoginForm/> </div>

            </div>
        
        </>
    );
}
import { Navigate } from "react-router-dom";
import LayoutLogin from "../../components/Layout.Login";

export default function () {

  return (
    <LayoutLogin title="Login" className="grid grid-flow-row">
        <input 
            className="mb-2 text-black"
            placeholder="Email" 
            type="email"></input>
        <input 
            className="mb-2 text-black"
            placeholder="Password" 
            type="password"></input>
        <button>Login</button>
    </LayoutLogin>
  );
}

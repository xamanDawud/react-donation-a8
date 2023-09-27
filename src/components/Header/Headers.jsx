import { NavLink } from "react-router-dom";
import "./Headers.css";

const Headers = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img className="w-[200px]" src="/src/Resources/Logo.png" alt="" />
      </div>
      <div>
        <NavLink className="ml-10 font-semibold" to={"/"}>
          Home
        </NavLink>
        <NavLink className="ml-10 font-semibold" to={"/donation"}>
          Donation
        </NavLink>
        <NavLink className="ml-10 font-semibold" to={"/statistics"}>
          Statistics
        </NavLink>
      </div>
    </div>
  );
};

export default Headers;

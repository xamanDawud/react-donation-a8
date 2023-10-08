import { NavLink } from "react-router-dom";
import "./Headers.css";

const Headers = () => {
  return (
    <div className="lg:flex md:flex  justify-between items-center">
      <div>
        <img src={"https://i.ibb.co/1ZrJGZ7/Logo.png"} alt="" />
      </div>
      <div className="ml-[20%] lg:ml-[0%] md:ml-[0%] mt-10 lg:mt-0 md:mt-30">
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

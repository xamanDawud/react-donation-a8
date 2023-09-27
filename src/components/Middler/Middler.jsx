import { Outlet } from "react-router-dom";
import Headers from "../Header/Headers";
const Middler = () => {
  return (
    <div className="container mx-auto mt-6">
      <Headers></Headers>
      <Outlet></Outlet>
    </div>
  );
};

export default Middler;

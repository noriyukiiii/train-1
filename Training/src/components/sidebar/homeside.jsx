import Home from "../Menu/home";
import Sidebarnav from "./sidebar";

const Homeside = () => {
  return (
    <div className="flex justify-between">
      <div className=" w-auto">
        <Sidebarnav />
      </div>
      <div className="w-full">
        <Home />
      </div>
    </div>
  );
};

export default Homeside;

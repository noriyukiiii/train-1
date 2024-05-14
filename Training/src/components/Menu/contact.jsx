import Nav from "./nav";
import user from "./assets/user.png"
const Contact = () => {
  return (
    <>
      <Nav />
      <div>
        <div className="flex flex-col font-main justify-center items-center  mt-10">
          <div>
            <h1 className="text-4xl font-bold bg-white rounded-3xl p-8">
              Contact
            </h1>
          </div>
          <div className="bg-white p-20 rounded-2xl mt-10 flex flex-col text-center justify-center items-center">
            <img src={user} alt="" className="w-1/2" />
            <h1 className="mt-10 text-2xl"> Phanuphong Sinthusuwan </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

const Register = () => {
  return (
    <>
      <div className=" text-white bg-[#14162E] overflow-hidden h-screen px-8">
        {/* */}
        <div className=" cursor-pointer relative flex justify-between items-center h-screen px-14 ">
          <div className=" hover:scale-110 duration-100 text-4xl aspect-video border-2 border-[rgba(255, 255, 255, 0.80)] rounded-3xl flex justify-center items-center h-[35vh] w-[22vw] bg-[linear-gradient(109deg,rgba(201,201,201,0.24)_1.57%,rgba(196,196,196,0.03)_100%)] font-2 font-sans">
            ORGANIZATION
          </div>
          <img
            className="self-end animated-element"
            src="./Character-yoga.png"
          />
          <div className=" cursor-pointer hover:scale-110 duration-100 text-4xl aspect-video border-2 border-[rgba(255, 255, 255, 0.80)] rounded-3xl flex justify-center items-center h-[35vh] w-[22vw] bg-[linear-gradient(109deg,rgba(201,201,201,0.24)_1.57%,rgba(196,196,196,0.03)_100%)] font-2 font-sans">
            ENJOYER
          </div>

          <div className="aspect-square absolute opacity-65 left-32 top-24 blur-[100px]  rounded-full w-56 bg-[#DDA82A]"></div>
          <div className="aspect-square absolute opacity-65 left-72 top-80 blur-[100px]  rounded-full w-56 bg-[#4461F2]"></div>
        </div>
      </div>
    </>
  );
};

export default Register;

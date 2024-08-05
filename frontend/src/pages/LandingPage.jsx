import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div className="w-screen min-h-screen text-white bg-[#14162E]">
      {/* */}
      <div className="flex relative min-h-[80vh] justify-around px-14 items-center">
        {/* Circles */}
        <div className="flex flex-col items-center justify-around w-[40vw] z-10 ">
          <h1 className="text-6xl text-center opacity-95 tracking-normal font-sans font-bold">
            AADHAR AT YOUR FINGERTIPS
          </h1>
          <button className="bg-white duration-200 rounded-lg hover:scale-105  text-black p-3 text-2xl mt-10">
            Explore Features
          </button>
        </div>
        <div className="animate-pulse ">
          <img src="./Aadhar-image.png" />
        </div>
        <div className="aspect-square absolute opacity-65 left-32 top-24 blur-[100px]  rounded-full w-56 bg-[#DDA82A]"></div>
        <div className="aspect-square absolute opacity-65 left-72 top-80 blur-[100px]  rounded-full w-56 bg-[#4461F2]"></div>
      </div>
    </div>
  );
};

export default LandingPage;

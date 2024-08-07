import Item from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";

const MarketPlace = () => {
  return (
    <>
      <div className="bg-[#14162E] text-white ml-[15vw] p-14 flex flex-col justify-center items-start w-auto min-h-[100vh]">
        {/* Search Bar */}
        <div className="flex justify-between w-full p-4">
          <img
            src="/banner-1.png"
            className="w-[26vw] hover:scale-105 cursor-pointer duration-150"
          />
          <img
            src="/banner-2.png"
            className="w-[26vw] hover:scale-105 cursor-pointer duration-150"
          />
        </div>
        <h1 className="text-3xl">Products</h1>
        <div className="grid grid-cols-3 m-4 gap-4">
          <Item
            title="Slightly used Meta Quest 2"
            description="Experience immersive virtual reality with a lightly used Oculus Meta 2, in excellent condition."
            price="20000"
          />
          <Item
            title="Slightly used Meta Quest 2"
            description="Experience immersive virtual reality with a lightly used Oculus Meta 2, in excellent condition."
            price="20000"
          />
          <Item
            title="Slightly used Meta Quest 2"
            description="Experience immersive virtual reality with a lightly used Oculus Meta 2, in excellent condition."
            price="20000"
          />
          <Item
            title="Slightly used Meta Quest 2"
            description="Experience immersive virtual reality with a lightly used Oculus Meta 2, in excellent condition."
            price="20000"
          />
          <Item
            title="Slightly used Meta Quest 2"
            description="Experience immersive virtual reality with a lightly used Oculus Meta 2, in excellent condition."
            price="20000"
          />
        </div>

        {/* Main Section */}

        {/* Right side section */}
      </div>
    </>
  );
};

export default MarketPlace;

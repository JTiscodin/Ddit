const Sidebar = () => {
  const options = [
    { title: "Home", icon: "" },
    { title: "MarketPlace", icon: "" },
    { title: "Messages", icon: "" },
    { title: "Swapper", icon: "" },
  ];
  return (
    <>
      <div className="flex bg-[#14162E] flex-col h-screen fixed border-x-2 border-l-0  w-[15vw] text-white justify-start gap-10 py-14 items-start px-14">
        {options.map((opt) => {
          return <h1 className="text-xl hover:scale-110 cursor-pointer duration-75">{opt.title}</h1>;
        })}
      </div>
    </>
  );
};

export default Sidebar;

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center font-semibold p-4">
        <div>
          <h1>Logo</h1>
        </div>
        <div className="flex gap-7 justify-evenly">
          <button className="">Sign In</button>
          <button className="rounded-[21px] bg-white p-2 px-5 text-[#4461F2]">
            Register
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

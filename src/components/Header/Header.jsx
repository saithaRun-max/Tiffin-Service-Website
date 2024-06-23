import HeaderLeft from "./headerLeftContainer/HeaderLeft";
import HeaderRight from "./headerRightContainer/HeaderRight";

const Header = () => {
  return (
    <div className="h-[20%] bg-slate-200 w-screen p-4 flex justify-between ">
      <HeaderLeft />
      <HeaderRight />
    </div>
  );
};

export default Header;

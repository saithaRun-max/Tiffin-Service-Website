import HeaderLeft from "./headerLeftContainer/HeaderLeft";
import HeaderRight from "./headerRightContainer/HeaderRight";

const Header = () => {
  return (
    <div className="h-[10%] bg-slate-200 w-screen p-2 flex justify-between ">
      <HeaderLeft />
      <HeaderRight />
    </div>
  );
};

export default Header;

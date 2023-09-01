import ligthmode from "../assets/Icons/ligthmode.svg";
import darkmode from "../assets/Icons/darkmode.svg";

const Header = ({ setIsligthMode, IsligthMode }) => {
  return (
    <header className="w-11/12 mt-10 mb-10 flex justify-between items-center">
      <h1 className="text-2xl text-white font-bold md:text-3xl">devfinder</h1>
      {!IsligthMode ? (
        <div onClick={()=> setIsligthMode(!IsligthMode)} className="flex items-center justify-center gap-2 hover:cursor-pointer">
          <p className="text-md text-white md:text-lg hover:text-blue-button ">
            Light
          </p>
          <img src={ligthmode} className="w-5" alt="" />
        </div>
      ) : (
        <div onClick={()=> setIsligthMode(!IsligthMode)} className="flex items-center justify-center gap-2 hover:cursor-pointer">
          <p className="text-md text-white md:text-lg hover:text-blue-button ">
            Dark
          </p>
          <img src={darkmode} className="w-5" alt="" />
        </div>
      )}
    </header>
  );
};

export default Header;

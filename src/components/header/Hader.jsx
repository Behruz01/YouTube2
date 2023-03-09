import menyu from "../../images/Menu.png";
import youtube from "../../images/YouTube icon.png";
import search from "../../images/search.png";
import camera from "../../images/phone-18.png";
import cambined from "../../images/Combined Shape.png";
import ui from "../../images/ui-11.png";
import parsent from "../../images/Userpic.png";

function Header(props) {
  return (
    <>
      <header className="header items-center w-full fixed bg-zinc-100 ">
        <div className="container  p-8">
          <div className="wrapper hero flex items-center">
            <div className="left flex gap-6 items-center">
              <img className="menu w-5" src={menyu} alt="3" />
              <img className="w-32" src={youtube} alt="3" />
              <span className="search flex items-center">
                <input
                  className="searchInp w-1/2 rounded-3xl  p-1 pl-2 border-0 relative"
                  type="text"
                  placeholder="Search"
                />
                <img className="logo relative" src={search} alt="" />
              </span>
            </div>
            <div className="right flex gap-9 items-center">
              <img src={camera} alt="" />
              <img src={cambined} alt="" />
              <img src={ui} alt="" />
              <img src={parsent} alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

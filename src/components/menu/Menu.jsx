import home from "../../images/ui-71.png";
import tranding from "../../images/ui-01.png";
import combined from "../../images/ui-45.png";
import libery from "../../images/documents-11.png";
import others from "../../images/others-07.png";
import tech from "../../images/tech-25.png";
import start from "../../images/ui-02.png";
import like from "../../images/ui-03.png";
import music from "../../images/Combined-Shape.png";
import game from "../../images/tech-02.png";
import more from "../../images/chevron-down.png";
import user from "../../images/Oval.png";
// import settings from "../../images/Combined-Shape (1).png";

import ListCategory from "./listCategory/ListCategory"
import ChannelCategory from "./channelCategory/ChannelCategory"

function Menu() {
  return (
    <>
      <div className="container p-8 sidebar w-52 fixed bg-zinc-100 overflow-y-scroll ">
        <div className="wrapper">
        <div className="sidebar__categories mb-3">
				<ListCategory icon={home} name={"Home"} />
				<ListCategory icon={tranding} name={"Trending"} />
				<ListCategory icon={combined} name={"Subscriptions"} />
			</div>

      <hr className="h-0.5 bg-zinc-400" />


      <div className="sidebar__categories mt-3 mb-3 ">
				<ListCategory icon={libery} name={"Library"} />
				<ListCategory icon={others} name={"History"} />
				<ListCategory icon={tech} name={"Watch later"} />
				<ListCategory icon={start} name={"Favourites"} />
				<ListCategory icon={like} name={"Liked videos"} />
				<ListCategory icon={music} name={"Music"} />
				<ListCategory icon={game} name={"Games"} />
				<ListCategory icon={more} name={"Show more"} />
			</div>

			<hr className="h-0.5 bg-zinc-400" />

          <div className="sidebar__categories mt-8">
				<h4 className="pl-4 mb-3 font-bold">Subscriptions</h4>

				<ChannelCategory avatar={user} name={"Gussie Singleton"} />
				<ChannelCategory avatar={user} name={"Nora Francis"} />
				<ChannelCategory avatar={user} name={"Belle Briggs"} />
				<ChannelCategory avatar={user} name={"Gussie Singleton"} />
			</div>
        </div>
      </div>
    </>
  );
}

export default Menu;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userImg from "../../images/user_icon.svg";
import BASE_URL from "../BASE_URL/BASE_URL";
import VideoCard from "./videoCard/VideoCard.jsx";

const Recomended = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "products")
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

  console.log(videos);

  return (
    <div className="video pl- 8 bg-zinc-100  w-full mt-16  px-5 pt-2 pb-28 overflow-auto">
      <h1 className="fond-bold mb-4">Recommended</h1>
      <div className="videos__content flex justify-around flex-row ml-56 flex-wrap gap-2">
        {videos.map((video) => (
          <Link key={video.id} to={"/single/" + video.id}>
            <VideoCard
              key={video.id}
              video={video.image}
              avatar={userImg}
              sfssfsfs
              title={video.title}
              author={video.category}
              date={video.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recomended;

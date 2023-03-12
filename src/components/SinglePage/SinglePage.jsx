import BASE_URL from "../BASE_URL/BASE_URL";
import userImg from "../../images/Oval.png";
import Comments from "./comments/comments";

import likeIcon from "../../images/like.svg";
import dislikeIcon from "../../images/dislike.svg";
import shareIcon from "../../images/share.svg";
import circleIcon from "../../images/circle.svg";

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../layout/Layout";

const SinglePage = () => {
  const { id } = useParams();
  const [videoData, setVideoData] = useState({});
  const [IsError, setIsError] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(BASE_URL + "products/" + id);

        if (res.status === 500) {
          throw new Error("Ma'lumot topilmadi!");
        }

        const data = await res.json();
        setVideoData(data);
      } catch (error) {
        setIsError(true);
      }
    };
    fetch(BASE_URL + "products")
      .then((res) => res.json())
      .then((data) => setVideos(data));
    getData();
  }, [id]);

  return (
    <Layout isSinglePage>
      {!IsError ? (
        <div className="flex justify-between">
          <div className="video__content ml-16 w-7/12  mb-10 my-32">
            <div className="video__img cursor-pointer">
              <img className="w-full h-96" src={videoData.image} alt="img" />
            </div>
            <div className="video__desc flex  gap-3 mt-3">
              <div className="video__user">
                <img
                  className="rounded-xl w-12 cursor-pointer"
                  src={userImg}
                  alt=""
                />
              </div>
              <div className="video__text flex w-full justify-between">
                <div>
                  <h3 className="font-medium cursor-pointer">
                    {videoData.title}
                  </h3>
                  <p className="text-sm">{videoData.description}</p>
                  <p className="text-sm">{videoData.price}</p>
                </div>
                <div className="flex items-center justify-between">
                  <img className="w-5 cursor-pointer" src={likeIcon} alt="" />
                  <img
                    className="w-5 cursor-pointer ml-4 mt-1"
                    src={dislikeIcon}
                    alt=""
                  />
                  <div className="flex items-center gap-1 ml-7 cursor-pointer">
                    <img className="w-6 mt-1" src={shareIcon} alt="" />
                    <p className="font-normal">Share</p>
                  </div>
                  <img
                    className="w-5 ml-7 cursor-pointer"
                    src={circleIcon}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h1 className="font-bold">
                <span>13</span> Comments
              </h1>
            </div>
            <Comments
              userName={"John Doe"}
              avatar={userImg}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ab."
              }
              likeIcon={likeIcon}
              dislikeIcon={dislikeIcon}
            />
            <Comments
              userName={"John Doe"}
              avatar={userImg}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ab."
              }
              likeIcon={likeIcon}
              dislikeIcon={dislikeIcon}
            />
            <Comments
              userName={"John Doe"}
              avatar={userImg}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ab."
              }
              likeIcon={likeIcon}
              dislikeIcon={dislikeIcon}
            />
            <Comments
              userName={"John Doe"}
              avatar={userImg}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ab."
              }
              likeIcon={likeIcon}
              dislikeIcon={dislikeIcon}
            />
            <Comments
              userName={"John Doe"}
              avatar={userImg}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ab."
              }
              likeIcon={likeIcon}
              dislikeIcon={dislikeIcon}
            />
            <Comments
              userName={"John Doe"}
              avatar={userImg}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ab."
              }
              likeIcon={likeIcon}
              dislikeIcon={dislikeIcon}
            />
            <Comments
              userName={"John Doe"}
              avatar={userImg}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ab."
              }
              likeIcon={likeIcon}
              dislikeIcon={dislikeIcon}
            />
            <Comments
              userName={"John Doe"}
              avatar={userImg}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ab."
              }
              likeIcon={likeIcon}
              dislikeIcon={dislikeIcon}
            />
            <Comments
              userName={"John Doe"}
              avatar={userImg}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ab."
              }
              likeIcon={likeIcon}
              dislikeIcon={dislikeIcon}
            />
            <Comments
              userName={"John Doe"}
              avatar={userImg}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ab."
              }
              likeIcon={likeIcon}
              dislikeIcon={dislikeIcon}
            />
          </div>
          <div className="my-32 pl-10">
            {videos.map((video) => (
              <Link key={video.id} to={"/single/" + video.id}>
                <div className="flex mb-5 justify-between cursor-pointer">
                  <img
                    className="w-36 rounded-md"
                    src={video.image}
                    alt="img"
                  />
                  <div className="w-full pl-5">
                    <h4 className="font-bold">{video.title}</h4>
                    <p>{video.description}</p>
                    <p>{video.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-20 text-center">
          <p className="bg-red-400 font-mono text-white text-lg">
            !OOPS VIDEO NOT FOUND
          </p>
        </div>
      )}
    </Layout>
  );
};

export default SinglePage;

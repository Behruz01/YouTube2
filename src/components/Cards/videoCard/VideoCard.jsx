


const VideoCard = ({video, avatar,author,title,date})=>{
    return(
        <div className="video__card cursor-pointer mb-10">
            <div className="video__img">
                <img className="rounded-xl w-56" src={video} alt="" />
            </div>
            <div className="video__desc flex  gap-3 mt-2">
            <div className="video__user ">
                <img className="rounded-xl" src={avatar} alt="" />
            </div>
            <div className="video__info w-50">
                <h3 className="font-medium">{title}</h3>
                <a className="text-sm">
                    {author}
                </a>
                <p className="text-sm">
                    {date}
                </p>
            </div>
            </div>
           
        </div>
    )
}
export default VideoCard
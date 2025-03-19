import { useState } from "react";

const videos = [
  { title: "Film1", id: "" },
  {
    title: "Film2",
    id: "",
  },
  { title: "Film3", id: "" },
];

function ZosiaPlayer() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0].id);

  return (
    <div className="flex p-4 bg-gray-900 text-white">
      <div className="w-1/4 border-r border-gray-700 pr-4 overflow-auto max-h-96">
        <h2 className="text-xl font-bold mb-4">
          Ostatnie wykłady:
        </h2>
        <ul className="overflow-auto">
          {videos.map((video) => (
            <li
              key={video.id}
              className={`p-2 cursor-pointer rounded-lg hover:bg-action-blue-secondary transition ${selectedVideo === video.id ? "bg-action-blue" : ""
                }`}
              onClick={() => setSelectedVideo(video.id)}
            >
              {video.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-3/4 flex items-center justify-center">
        <iframe
          width={560}
          height={315}
          className="shadow-lg"
          src={`https://www.youtube.com/embed/${selectedVideo}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default ZosiaPlayer;

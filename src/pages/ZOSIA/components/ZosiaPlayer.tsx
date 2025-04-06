import { useState } from "react";

const videos = [
  { title: "Hero - Skillet", id: "uGcsIdGOuZY" },
  {
    title: "A place for my head - Linkin Park",
    id: "3t2WkCudwfY",
  },
  {
    title: "The Diary of Jane - Breaking Benjamin",
    id: "DWaB4PXCwFU",
  },
  {
    title: "I hate everything about you - Three Days Grace",
    id: "d8ekz_CSBVg",
  },
  {
    title: "Night Witches - Sabaton",
    id: "jcemHIqmkYI",
  },
  {
    title: "Tears Don't Fall - Bullet For My Valentine",
    id: "9sTQ0QdkN3Q",
  },
  {
    title: "Never Too Late - Three Days Grace",
    id: "lL2ZwXj1tXM",
  },
];

function ZosiaPlayer() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0].id);

  return (
    <div className="flex bg-action-blue-secondary text-dark-text-primary shadow-lg">
      <div className="border-r-4 border-dark-section-secondary overflow-auto text-center">
        <h2 className="text-xl font-bold pb-2 bg-dark-section-secondary py-4">
          Ostatnie wykłady:
        </h2>
        <ul className="overflow-auto p-4 max-h-85">
          {videos.map((video) => (
            <li
              key={video.id}
              className={`p-2 cursor-pointer  hover:bg-dark-section-secondary transition ${
                selectedVideo === video.id ? "bg-action-blue" : ""
              }`}
              onClick={() => setSelectedVideo(video.id)}
            >
              {video.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center">
        <iframe
          width={700}
          height={394}
          className=""
          src={`https://www.youtube.com/embed/${selectedVideo}`}
          title="ZOSIA Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default ZosiaPlayer;
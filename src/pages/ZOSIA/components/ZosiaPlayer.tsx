import { useState } from "react";

const videos = [
  { title: "Hero - Skillet", id: "uGcsIdGOuZY" },
  { title: "A place for my head - Linkin Park", id: "3t2WkCudwfY" },
  { title: "The Diary of Jane - Breaking Benjamin", id: "DWaB4PXCwFU" },
  {
    title: "I hate everything about you - Three Days Grace",
    id: "d8ekz_CSBVg",
  },
  { title: "Night Witches - Sabaton", id: "jcemHIqmkYI" },
  { title: "Tears Don't Fall - Bullet For My Valentine", id: "9sTQ0QdkN3Q" },
  { title: "Never Too Late - Three Days Grace", id: "lL2ZwXj1tXM" },
];

/**
 * Displays a video player with a list of available videos.
 *
 * @returns {JSX.Element} A React component representing the video player.
 */
function ZosiaPlayer() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0].id);

  return (
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row bg-action-blue-secondary text-primary shadow-lg rounded-2xl overflow-hidden">
      {/* Lecture List Section */}
      <div className="w-full md:w-1/3 lg:w-1/4 md:border-r-4 border-b-4 md:border-b-0 border-dark-section-secondary text-center">
        <h2 className="text-xl font-bold pb-2 border-b-4 border-dark-section-secondary  bg-section-primary pt-4">
          Ostatnie wykłady:
        </h2>
        <ul className="p-2 overflow-auto  bg-section-primary">
          {videos.map((video) => (
            <li
              key={video.id}
              className={`p-2 cursor-pointer hover:bg-section-secondary transition ${
                selectedVideo === video.id ? "bg-action-blue text-dark-text-primary" : ""
              }`}
              onClick={() => setSelectedVideo(video.id)}
            >
              {video.title}
            </li>
          ))}
        </ul>
      </div>
      {/* Video Player Section */}
      <div className="flex items-center bg-section-primary justify-center p-4 w-full md:w-2/3 lg:w-3/4">
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${selectedVideo}`}
            title="ZOSIA Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ZosiaPlayer;

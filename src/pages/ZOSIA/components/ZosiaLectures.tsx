import ZosiaPlayer from "./ZosiaPlayer";

/**
 * Displays a container with a player and a list of available videos.
 *
 * @returns {JSX.Element} A React component representing the player and the
 * list of available videos.
 */
function ZosiaLectures() {
  return (
    <div className="z-10 pt-12 md:pt-20 pb-12 md:pb-24 flex items-center justify-center">
      <div className="container flex flex-col md:flex-row gap-8 md:gap-20 mx-auto max-w-4xl items-center">
        <div className="flex-1">
          <ZosiaPlayer />
        </div>
      </div>
    </div>
  );
}

export default ZosiaLectures;

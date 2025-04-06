import ZosiaPlayer from "./ZosiaPlayer";

function ZosiaLectures() {
  return (
    <div className="z-10 pt-20 pb-24 items-center justify-center">
      <div className="container flex flex-row gap-20 mx-auto max-w-350 items-center">
        <div className="grow-2">
          <ZosiaPlayer />
        </div>
      </div>
    </div>
  );
}

export default ZosiaLectures;
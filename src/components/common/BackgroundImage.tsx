/**
 * Renders a background image of the KSI logo. The image is
 * a circle that is always visible, positioned at the center
 * of the screen for smaller screens, but slightly to the bottom of it for bigger ones.
 * Scales with the screen size.
 */
const BackgroundImage = () => {
  return (
    <div
      className="fixed m-auto rounded-full top-1/2 left-1/2 mt-[10vw]
                 w-[90vw] h-[90vw] md:w-[85vw] md:h-[85vw] lg:w-[70vw] lg:h-[70vw]"
      style={{
        backgroundImage: "url('/images/logo_ksi.svg')",
        backgroundColor: "rgba(242, 242, 242, 0.2)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        zIndex: "-1",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default BackgroundImage;

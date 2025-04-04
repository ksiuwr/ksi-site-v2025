const BackgroundImage = () => {
  return (
    <div
      className="opacity-25 dark:opacity-100 fixed top-[35vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:top-1/5 lg:left-auto lg:transform-none lg:inset-24 rounded-full md:w-4/5 md:h-4/5 lg:w-[80vw] w-[90vw] h-[90vw] lg:h-[160vh]"
      style={{
        backgroundImage: "url('/images/logo_ksi.svg')",
        backgroundColor: "rgba(242, 242, 242, 0.3)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        zIndex: "-1",
      }}
    />
  );
};
export default BackgroundImage;

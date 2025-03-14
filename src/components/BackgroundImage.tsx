const BackgroundImage = () => {
  return (
    <div
      className="fixed inset-24 rounded-full opacity-25 dark:opacity-100"
      style={{
        width: "80vw",
        height: "160vh",
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

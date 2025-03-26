const ZosiaBackgroundImage = () => {
  return (
    <div
      className="fixed inset-24 rounded-full"
      style={{
        backgroundImage: "url('/images/zosia.svg')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        opacity: "0.3",
        zIndex: "-1",
      }}
    />
  );
};
export default ZosiaBackgroundImage;

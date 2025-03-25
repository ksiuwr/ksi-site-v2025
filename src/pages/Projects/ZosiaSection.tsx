const ZosiaSection: React.FC = () => {
    return (
        <div className="relative bg-dark-background-primary h-[60vh]  text-white flex flex-col items-center">


            <div
                className="absolute top-10 left-0 right-0 bg-no-repeat bg-contain bg-center opacity-20"
                style={{
                    backgroundImage: "url('/zosia.png')",
                    backgroundSize: "contain",
                    backgroundPosition: "center top",
                    backgroundRepeat: "no-repeat",
                    height: "25vh",
                }}
            ></div>

            <div className="relative z-10 pt-[32vh] p-10 text-center">
                <h2 className="text-dark-text-primary text-4xl ">Nasze Projekty</h2>
                <div className="w-[811px] h-1 bg-action-blue mx-auto mt-2"></div>

                <p className="mt-4 mx-auto text-center text-dark-text-secondary max-w-2xl">
                    "Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                </p>
            </div>
        </div>
    );
};
export default ZosiaSection;

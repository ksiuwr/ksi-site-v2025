import { MemberWindow } from "./MemberWindow";

export const RegularMembers = () => {
	return (
		<section className="bg-dark-section-secondary z-20 pt-24 pb-36 mt-[-14vh] items-center justify-center">
      <h2 className="text-sans text-5xl font-bold ml-[13vw] mt-[4vw]">Członkowie</h2>
      <hr className="border-action-blue border-t-4 mt-2 ml-[13vw] mr-[45vw]"/>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-20">
          {Array(50).fill(0).map((_, index) => (
						<MemberWindow key={index} index={index}/>
          ))}
        </div>
      </div>
    </section>
	);
};
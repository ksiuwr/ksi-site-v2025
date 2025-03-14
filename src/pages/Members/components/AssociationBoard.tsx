
export const AssociationBoard = () => {
  return (
		<section className="bg-section-primary z-10 pt-24 pb-36 relative items-center justify-center">
          <h2 className="text-sans text-4xl font-bold ml-[13vw] mt-[4vw]">Zarząd koła</h2>
          <hr className="border-action-blue border-t-2 mt-2 ml-[13vw] mr-[45vw]"/>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-14 mx-[13vw] pt-10">
              {/* Przewodniczący */}
              <div className="flex flex-row items-center gap-8 mt-[3vw]">
                <div className='flex flex-col'>
                  <h3 className="font-bold mb-2">Przewodniczący</h3>
                  <hr className="border-action-blue border-t-2 mb-6 mr-24"/>
                  <p className="text-secondary mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
                
                <div>
                  <img src="/images/placeholder.webp" alt="Przewodniczacy" className="rounded-lg min-w-[210px] aspect-square object-cover"/>
                </div>
              </div>

              {/* Wiceprzewodniczący */}
              <div className='flex flex-row items-center gap-8'>
                <div>
                    <img src="/images/placeholder.webp" alt="Wiceprzewodniczacy" className="rounded-lg min-w-[210px] aspect-square object-cover"/>
                </div>

                <div className='flex flex-col'>
                  <h3 className="font-bold mb-2">Wiceprzewodniczący</h3>
                  <hr className="border-action-blue border-t-2 mb-6 mr-24"/>
                  <p className="text-secondary mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
              </div>

              {/* Sekretarz */}
              <div className="flex flex-row items-center gap-8">
                <div className='flex flex-col'>
                  <h3 className="font-bold mb-2">Sekretarz</h3>
                  <hr className="border-action-blue border-t-2 mb-6 mr-24"/>
                  <p className="text-secondary mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>

                <div>
                  <img src="/images/placeholder.webp" alt="Sekretarz" className="rounded-lg min-w-[210px] aspect-square object-cover"/>
              </div>
              </div>

              {/* Sekretarz */}
              <div className='flex flex-row items-center gap-8 mt-[-3vw]'>
                <div>
                    <img src="/images/placeholder.webp" alt="Sekretarz" className="rounded-lg min-w-[210px] aspect-square object-cover"/>
                </div>

                <div className='flex flex-col'>
                  <h3 className="font-bold mb-2">Sekretarz</h3>
                  <hr className="border-action-blue border-t-2 mb-6 mr-24"/>
                  <p className="text-secondary mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
              </div>
            </div>
      </section>
	);
};
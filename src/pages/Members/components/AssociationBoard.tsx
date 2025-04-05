{/* <div class="absolute w-full h-full min-h-[800px] bg-dark-section-primary origin-top-left"
style="width: 100vw; margin-left: calc(50% - 50vw); transform: skewY(-3deg);"></div> */}

export const AssociationBoard = () => {
  return (
		<section className="bg-dark-section-primary z-10 pt-24 pb-36 relative items-center justify-center">
      <h2 className="text-sans text-2xl sm:text-4xl font-bold ml-[13vw] mt-[4vw]">Zarząd koła</h2>
      <hr className="border-action-blue border-t-2 mt-2 ml-[12vw] mr-[13vw] md:mr-[45vw]"/>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-14 px-4 sm:px-10 pt-10">

        {/* Przewodniczący */}
        <div className="flex flex-row items-center gap-8 mt-[3vw] max-w-[75%] sm:max-w-none">
          <div className='flex flex-col max-w-[50%] sm:max-w-none'>
            <h3 className="font-bold mb-2 break-words">Przewodniczący</h3>
            <hr className="border-action-blue border-t-2 mb-6"/>
            <p className="text-dark-text-secondary mb-4 text-xs sm:text-xl break-word">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
                
          <div>
            <img src="/images/placeholder.webp" alt="Przwodniczacy" className="rounded-lg min-w-[120px] md:w-[210px] aspect-square object-cover"/>
          </div>
        </div>

        {/* Wiceprzewodniczący */}
        <div className='flex flex-row items-center gap-8 max-w-[75%] sm:max-w-none'>
          <div>
              <img src="/images/placeholder.webp" alt="Wicerzwodniczacy" className="rounded-lg min-w-[120px] md:min-w-[210px] aspect-square object-cover"/>
            </div>

          <div className='flex flex-col max-w-[50%] sm:max-w-none'>
            <h3 className="font-bold mb-2 break-all">Wicerzewodniczący</h3>
            <hr className="border-action-blue border-t-2 mb-6"/>
            <p className="text-dark-text-secondary mb-4 text-xs sm:text-xl break-word">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
        </div>

        
        <div className="flex flex-row items-center gap-8 max-w-[75%] sm:max-w-none">
          <div className='flex flex-col max-w-[90%] sm:max-w-none'>
            <h3 className="font-bold mb-2 break-words">Sekretarz</h3>
            <hr className="border-action-blue border-t-2 mb-6"/>
            <p className="text-dark-text-secondary mb-4 text-xs sm:text-xl brea-word">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>

          <div>
            <img src="/images/placeholder.webp" alt="Wicerzwodniczacy" className="rounded-lg min-w-[120px] md:min-w-[210px] aspect-square object-cover"/>
          </div>
        </div>

        
        <div className='flex flex-row items-center gap-8 sm:mt-[-3vw] max-w-[75%] sm:max-w-none'>
          <div>
              <img src="/images/placeholder.webp" alt="Wicerzwodniczacy" className="rounded-lg min-w-[120px] md:min-w-[210px] aspect-square object-cover"/>
          </div>

          <div className='flex flex-col max-w-[90%] sm:max-w-none'>
            <h3 className="font-bold mb-2 break-words">Sekretarz</h3>
            <hr className="border-action-blue border-t-2 mb-6"/>
            <p className="text-dark-text-secondary mb-4 text-xs sm:text-xl break-word">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
        </div>
      </div>
    </section>
	);
};
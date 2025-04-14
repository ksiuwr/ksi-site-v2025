export const AssociationBoard = () => {
  return (
 <section className="bg-dark-section-primary z-10 pt-24 pb-36 relative items-center justify-center ">
  <h2 className="text-sans text-5xl font-bold mx-4 lg:ml-[13vw]">Zarząd koła</h2>
  <hr className="border-action-blue border-t-4 mt-2 mx-4 lg:ml-[13vw] lg:mr-[45vw]"/>
  <div className="lg:grid lg:grid-cols-2 flex flex-col gap-14 mx-4 lg:mx-[13vw] pt-10">
  {/* Przewodniczący */}
  <div className="flex flex-col lg:flex-row items-center gap-8">
    <div className='flex flex-col lg:ml-4 order-first'>
      <h3 className="font-bold text-2xl lg:text-3xl mb-2">Przewodniczący</h3>
      <hr className="border-action-blue border-t-2 mb-6 mr-24"/>
      <p className="text-dark-text-secondary mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
    </div>
    <div className="mx-auto lg:order-last order-last">
      <img src="/images/placeholder.webp" alt="Przewodniczący" className="rounded-lg min-w-[210px] aspect-square object-cover"/>
    </div>
  </div>
  {/* Wiceprzewodniczący */}
  <div className='flex flex-col lg:flex-row items-center gap-8 lg:mt-[-3vw]'>
    <div className="mx-auto lg:order-first order-last">
      <img src="/images/placeholder.webp" alt="Wiceprzewodniczący" className="rounded-lg min-w-[210px] aspect-square object-cover"/>
    </div>
      <div className='flex flex-col lg:ml-4 order-first lg:order-last'>
          <h3 className="font-bold text-2xl lg:text-3xl mb-2">Wiceprzewodniczący</h3>
          <hr className="border-action-blue border-t-2 mb-6 mr-24"/>
          <p className="text-dark-text-secondary mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </div>
    </div>
  
  {/* Sekretarz */}
  <div className="flex flex-col lg:flex-row items-center gap-8">
    <div className='flex flex-col lg:ml-4 order-first'>
      <h3 className="font-bold text-2xl lg:text-3xl mb-2">Sekretarz</h3>
      <hr className="border-action-blue border-t-2 mb-6 mr-24"/>
      <p className="text-dark-text-secondary mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
    </div>
    <div className="mx-auto lg:order-last order-last">
      <img src="/images/placeholder.webp" alt="Sekretarz" className="rounded-lg min-w-[210px] aspect-square object-cover"/>
    </div>
  </div>
  {/* Skarbnik (I changed this from duplicated "Sekretarz") */}
  <div className='flex flex-col lg:flex-row items-center gap-8 lg:mt-[-3vw]'>
    <div className="mx-auto lg:order-first order-last">
    <img src="/images/placeholder.webp" alt="Skarbnik" className="rounded-lg min-w-[210px] aspect-square object-cover"/>
    </div>
      <div className='flex flex-col lg:ml-4 order-first lg:order-last'>
          <h3 className="font-bold text-2xl lg:text-3xl mb-2">Skarbnik</h3>
          <hr className="border-action-blue border-t-2 mb-6 mr-24"/>
          <p className="text-dark-text-secondary mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </div>
    </div>
  </div>
 </section>
  );
 };
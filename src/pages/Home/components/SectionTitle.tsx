    interface SectionTitleProps {
    title: string;
    description?: string;
  }
  
  
  export const SectionTitle = ({ 
    title, 
    description
  }: SectionTitleProps) => {
    return (
      <div className="flex flex-col">
        <h2 className={'lg:text-6xl text-4xl leading-none text-primary'}>
          {title}
        </h2>
        <div className="mt-4 border-action-blue border-solid lg:border-4 border-2" />
        {description && (
          <p className={'text-base lg:text-xl text-secondary mt-4'}>
            {description}
          </p>
        )}
      </div>
    );
  };
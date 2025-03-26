    interface SectionTitleProps {
    title: string;
    description?: string;
    descriptionSize?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  }
  
  
  export const SectionTitle = ({ 
    title, 
    description
  }: SectionTitleProps) => {
    return (
      <div className="flex flex-col">
        <h2 className={'lg:text-6xl text-4xl leading-none text-dark-text-primary'}>
          {title}
        </h2>
        <div className="mt-4 border-action-blue border-solid border-4" />
        {description && (
          <p className={'text-base lg:text-xl text-dark-text-secondary mt-4'}>
            {description}
          </p>
        )}
      </div>
    );
  };
type TextSizeMapping = {
    1: 'text-lg';
    2: 'text-xl';
    3: 'text-2xl';
    4: 'text-3xl';
    5: 'text-4xl';
    6: 'text-5xl';
    7: 'text-6xl';
    8: 'text-7xl';
    9: 'text-8xl';
    10: 'text-9xl';
  };
  
  interface SectionTitleProps {
    title: string;
    description?: string;
    titleSize?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    descriptionSize?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  }
  
  const getTextSize = (size?: number) => {
    const sizeMap: Record<number, string> = {
      1: 'text-lg',
      2: 'text-xl',
      3: 'text-2xl',
      4: 'text-3xl',
      5: 'text-4xl',
      6: 'text-5xl',
      7: 'text-6xl',
      8: 'text-7xl',
      9: 'text-8xl',
      10: 'text-9xl',
    };
    return size ? sizeMap[size] : 'text-6xl'; // default size
  };
  
  export const SectionTitle = ({ 
    title, 
    description, 
    titleSize, 
    descriptionSize 
  }: SectionTitleProps) => {
    return (
      <div className="flex flex-col">
        <h2 className={`${getTextSize(titleSize)} leading-none text-dark-text-primary`}>
          {title}
        </h2>
        <div className="mt-4 border-action-blue border-solid border-4" />
        {description && (
          <p className={`${getTextSize(descriptionSize || 3)} text-dark-text-secondary mt-4`}>
            {description}
          </p>
        )}
      </div>
    );
  };
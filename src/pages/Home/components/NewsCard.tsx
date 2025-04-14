import ReadMoreBtn from "../../../components/common/ReadMoreBtn";

interface NewsCardProps {
  imageUrl?: string;
  title: string;
  content: string;
  path?: string;
}

/**
 * Component for displaying a news card.
 *
 * @param {object} props - The component properties.
 * @param {string} [props.imageUrl] - Optional URL for the news image.
 * @param {string} props.title - The title of the news card.
 * @param {string} props.content - The content or description of the news item.
 * @param {string} [props.path] - Optional path for linking to the full news article.
 * @returns {JSX.Element} A styled card with an optional image, title, content, and a read more button.
 */
function NewsCard({ imageUrl, title, content, path }: NewsCardProps) {
  return (
    <div className="bg-dark-section-secondary">
      {imageUrl && (
        <img
          src={imageUrl}
          alt="news"
          className="w-full h-fit max-h-40 md:max-h-66 object-cover"
        />
      )}
      <div className="p-6">
        <h2 className="text-xl md:text-2xl text-dark-text-secondary">
          {title}
        </h2>
        <p className="mt-2 text-sm md:text-base">{content}</p>
        <div className="flex justify-end mt-4">
          {path && <ReadMoreBtn link={path} text="Czytaj więcej"/>}
        </div>
      </div>
    </div>
  );
}

export default NewsCard;

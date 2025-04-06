import ReadMoreBtn from "../../../components/common/ReadMoreBtn";

interface NewsCardProps {
  imageUrl?: string;
  title: string;
  content: string;
  path?: string;
}

function NewsCard({ imageUrl, title, content, path }: NewsCardProps) {
  return (
    <div className="bg-dark-section-secondary">
      {imageUrl && (
        <img
          src={imageUrl}
          alt="news"
          className="w-full h-fit max-h-66 object-cover"
        />
      )}
      <div className="p-6">
        <h2 className="text-2xl text-dark-text-secondary">{title}</h2>
        <p className="mt-2">{content}</p>
        <div className="flex justify-end mt-4">
          {path && <ReadMoreBtn link={path} />}
        </div>
      </div>
    </div>
  );
}

export default NewsCard;

import { ArrowRight } from 'lucide-react';

interface NewsCardProps {
  date: string;
  title: string;
  image: string;
}

const NewsCard = ({ date, title, image }: NewsCardProps) => {
  return (
    <div className="news-card overflow-hidden bg-white">
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="news-card-image"
        />
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-2">{date}</div>
        <h3 className="font-bold text-lg mb-4 line-clamp-2">{title}</h3>
        <button className="inline-flex items-center text-ecorun-green font-medium hover:text-ecorun-darkgreen transition-colors">
          <span>Citeste mai mult</span>
          <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default NewsCard;

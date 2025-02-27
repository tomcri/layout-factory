
import { ArrowRight } from 'lucide-react';

interface EventCardProps {
  id: string;
  title: string;
  image: string;
  distance: string;
  elevation: string;
  date?: string;
}

const EventCard = ({ id, title, image, distance, elevation, date }: EventCardProps) => {
  return (
    <div className="event-card bg-white overflow-hidden">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded flex items-center gap-1 text-sm font-medium">
          <span>{id}</span>
        </div>
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded text-xs flex items-center gap-2">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-ecorun-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>{distance}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-ecorun-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>{elevation}</span>
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col justify-between h-32">
        <h3 className="font-bold text-xl mb-2 text-ecorun-gray uppercase">{title}</h3>
        <div className="flex justify-between items-center mt-auto">
          {date && <span className="text-sm text-gray-500">{date}</span>}
          <button className="inline-flex items-center text-ecorun-green font-medium hover:text-ecorun-darkgreen transition-colors">
            <span>Inscriere</span>
            <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

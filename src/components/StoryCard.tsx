import React from 'react';
import { cn } from "@/lib/utils";

interface StoryCardProps {
  image: string;
  title: string;
  description: string;
  date?: string;
  className?: string;
  imageClassName?: string;
  delay?: number;
  onClick?: () => void;
}

const StoryCard: React.FC<StoryCardProps> = ({
  image,
  title,
  description,
  date,
  className,
  imageClassName,
  delay = 0,
  onClick
}) => {
  return (
    <div 
      className={cn(
        "story-card animate-fade-in group cursor-pointer", 
        className
      )}
      style={{ animationDelay: `${delay * 0.1}s` }}
      onClick={onClick}
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className={cn(
            "story-card-image h-full w-full object-cover transition-transform duration-700",
            imageClassName
          )}
          loading="lazy"
          width="400"
          height="300"
        />
        <div className="story-card-overlay">
          <h3 className="text-white font-medium text-xl mb-2">{title}</h3>
          {date && (
            <div className="inline-block bg-himtech-lightBlue/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs mb-2">
              {date}
            </div>
          )}
          <p className="text-white/80 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
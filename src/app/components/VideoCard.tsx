import { useState } from 'react';
import { Maximize2, Play } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface VideoCardProps {
  id: string;
  embedCode: string;
  title: string;
  onExpand: (id: string) => void;
}

export function VideoCard({ id, embedCode, title, onExpand }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="overflow-hidden relative group border-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative aspect-video bg-black">
          <div 
            className="w-full h-full"
            dangerouslySetInnerHTML={{ __html: embedCode }}
          />
          
          {/* Gradient overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
          
          {/* Expand button */}
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="lg"
                onClick={() => onExpand(id)}
                className="bg-white/90 hover:bg-white text-black backdrop-blur-sm shadow-2xl transform transition-all duration-300 hover:scale-110 gap-2"
              >
                <Maximize2 className="size-5" />
                Expand
              </Button>
            </div>
          )}
        </div>
        
        {/* Title section with gradient background */}
        <div className="p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border-t border-white/10">
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse" />
            <h3 className="font-semibold text-white">{title}</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

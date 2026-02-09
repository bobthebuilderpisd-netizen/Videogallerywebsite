import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { Button } from './ui/button';

interface VideoExpandDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  embedCode: string;
}

export function VideoExpandDialog({ 
  open, 
  onOpenChange, 
  title, 
  embedCode 
}: VideoExpandDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl p-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 border-purple-500/30">
        <DialogHeader className="p-6 pb-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {title || 'Video'}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              <X className="size-5" />
            </Button>
          </div>
          <DialogDescription className="sr-only">
            Expanded video player view
          </DialogDescription>
        </DialogHeader>
        
        <div className="aspect-video w-full p-6 pt-0">
          <div 
            className="w-full h-full rounded-lg overflow-hidden shadow-2xl"
            dangerouslySetInnerHTML={{ __html: embedCode }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
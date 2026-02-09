import { useState } from 'react';
import { Video, Sparkles } from 'lucide-react';
import { VideoCard } from './components/VideoCard';
import { VideoExpandDialog } from './components/VideoExpandDialog';
import { GALLERY_VIDEOS, VideoItem } from './data/videos';

export default function App() {
  const [expandedVideo, setExpandedVideo] = useState<VideoItem | null>(null);

  const handleExpandVideo = (id: string) => {
    const video = GALLERY_VIDEOS.find(v => v.id === id);
    if (video) {
      setExpandedVideo(video);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Header */}
      <header className="relative border-b border-white/10 backdrop-blur-xl bg-black/20 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="size-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/50 relative">
                <Video className="size-7 text-white" />
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="size-4 text-yellow-400 animate-pulse" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  My Video Gallery
                </h1>
                <p className="text-sm text-purple-300/80 flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-green-400 animate-pulse" />
                  {GALLERY_VIDEOS.length} {GALLERY_VIDEOS.length === 1 ? 'video' : 'videos'} in collection
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative container mx-auto px-4 py-12">
        {GALLERY_VIDEOS.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="size-24 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 flex items-center justify-center mb-6 backdrop-blur-sm">
              <Video className="size-12 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">No videos configured</h2>
            <p className="text-purple-300/60 max-w-md mb-2">
              Edit the videos configuration file to add videos to your gallery
            </p>
            <code className="px-4 py-2 bg-black/40 border border-purple-500/30 rounded-lg text-sm text-purple-300 backdrop-blur-sm">
              /src/app/data/videos.ts
            </code>
          </div>
        ) : (
          <>
            {/* Video count badge */}
            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-white/10 rounded-full backdrop-blur-sm">
                <Sparkles className="size-4 text-yellow-400" />
                <span className="text-white font-medium">
                  Showing {GALLERY_VIDEOS.length} amazing {GALLERY_VIDEOS.length === 1 ? 'video' : 'videos'}
                </span>
              </div>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {GALLERY_VIDEOS.map((video) => (
                <VideoCard
                  key={video.id}
                  id={video.id}
                  title={video.title}
                  embedCode={video.embedCode}
                  onExpand={handleExpandVideo}
                />
              ))}
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="relative mt-20 border-t border-white/10 backdrop-blur-xl bg-black/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-purple-300/60 text-sm">
            Built with ❤️ • Personal Video Collection
          </p>
        </div>
      </footer>

      {/* Expanded Video Dialog */}
      {expandedVideo && (
        <VideoExpandDialog
          open={!!expandedVideo}
          onOpenChange={(open) => !open && setExpandedVideo(null)}
          title={expandedVideo.title}
          embedCode={expandedVideo.embedCode}
        />
      )}
    </div>
  );
}

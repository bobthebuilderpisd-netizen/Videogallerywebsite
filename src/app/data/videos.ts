// Edit this file to add or remove videos from your gallery
// To add a new video:
// 1. Get the embed code from your video platform (YouTube, Vimeo, Streamable, etc.)
// 2. Add a new object to the array below with a unique id, title, and embedCode

export interface VideoItem {
  id: string;
  title: string;
  embedCode: string;
}

export const GALLERY_VIDEOS: VideoItem[] = [
  {
    id: '1',
    title: 'Streamable Video',
    embedCode: '<div style="position:relative; width:100%; height:0px; padding-bottom:56.206%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/yp2xud?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>',
  },
  {
    id: '2',
    title: 'Streamable Video 2',
    embedCode: '<div style="position:relative; width:100%; height:0px; padding-bottom:56.206%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/vyu8yh?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>',
  },
  {
    id: '3',
    title: 'Streamable Video 3',
    embedCode: '<div style="position:relative; width:100%; height:0px; padding-bottom:56.206%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/7kp271?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>',
  },
  // Add more videos here following the same format
  // {
  //   id: '4',
  //   title: 'Your Video Title',
  //   embedCode: '<iframe ... your embed code here ... ></iframe>',
  // },
];
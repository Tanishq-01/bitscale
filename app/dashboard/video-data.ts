export interface VideoSlide {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  bgColor: string;
  dotColor: string;
}

export const videoSlides: VideoSlide[] = [
  {
    id: '1',
    title: 'How to Integrate 2 Way HubSpot',
    description:
      'Prerequisites for this Integration is that you should have a HubSpot account and Copy the API key. We simple aad our API key through the integrations pa...',
    videoUrl: 'https://www.youtube.com/watch?v=video1',
    thumbnail: 'https://via.placeholder.com/192x112?text=Video+1',
    bgColor: '#347FA9',
    dotColor: '#347FA9',
  },
  {
    id: '2',
    title: 'Mastering Data Analytics',
    description:
      'Learn how to leverage data analytics to drive business growth and make informed decisions.',
    videoUrl: 'https://www.youtube.com/watch?v=video2',
    thumbnail: 'https://via.placeholder.com/192x112?text=Video+2',
    bgColor: '#8DBAD0',
    dotColor: '#8DBAD0',
  },
  {
    id: '3',
    title: 'Understanding Cloud Computing',
    description:
      'A comprehensive guide to cloud computing, its benefits, and how to get started.',
    videoUrl: 'https://www.youtube.com/watch?v=video3',
    thumbnail: 'https://via.placeholder.com/192x112?text=Video+3',
    bgColor: '#347FA9',
    dotColor: '#347FA9',
  },
];

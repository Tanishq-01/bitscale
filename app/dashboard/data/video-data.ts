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
    title: 'Bitscale is the best for BDRs',
    description:
      'Prerequisites for this Integration is that you should have a HubSpot account and Copy the API key. We simple aad our API key through the integrations pa...',
    videoUrl: 'https://www.youtube.com/watch?v=mR3YaA2m7KQ',
    thumbnail: 'https://img.youtube.com/vi/mR3YaA2m7KQ/0.jpg',
    bgColor: '#347FA9',
    dotColor: '#347FA9',
  },
  {
    id: '2',
    title: 'Hiring Signal based Outreach',
    description:
    'Prerequisites for this Integration is that you should have a HubSpot account and Copy the API key. We simple aad our API key through the integrations pa...',
    videoUrl: 'https://www.youtube.com/watch?v=of5FDgfAbaQ',
    thumbnail: 'https://img.youtube.com/vi/of5FDgfAbaQ/0.jpg',
    bgColor: '#347FA9',
    dotColor: '#347FA9',
  },
  {
    id: '3',
    title: 'Set up your first integration on Bitscale',
    description:
      'Integrate Bitscale with CRMs, outbound tools, or data platforms using Bridge, API Key, or Webhook methods. Connect HubSpot, Instantly, Smartlead, and more to automate data syncs and workflows.',
    videoUrl: 'https://www.youtube.com/watch?v=GYg-gksF2dc',
    thumbnail: 'https://img.youtube.com/vi/GYg-gksF2dc/0.jpg',
    bgColor: '#347FA9',
    dotColor: '#347FA9',
  },
  {
    id: '4',
    title: 'Linkup X Bitscale',
    description:
    'In a world where speed matters and relevance wins deals, waiting on traditional tools or parsing long summaries from chatbots won’t cut it. Bitscale and LinkUp together give sales teams exactly what they need:',
    videoUrl: 'https://www.youtube.com/watch?v=OkK4vrUWtkg',
    thumbnail: 'https://img.youtube.com/vi/OkK4vrUWtkg/0.jpg',
    bgColor: '#347FA9',
    dotColor: '#347FA9',
  },
];

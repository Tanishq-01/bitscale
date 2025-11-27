export interface GridItem {
  id: string;
  name: string;
  editedBy: string;
  lastEdited: string;
  typeIcons: string[];
  isStarred?: boolean; // New property
}

export const dummyGridData: GridItem[] = [
  {
    id: '1',
    name: 'Workbook - Testing design Ideas for grid and workbook',
    editedBy: 'Sam Taylor',
    lastEdited: '06 Aug, 2025',
    typeIcons: ['/vercel.svg', '/next.svg', '/file.svg'],
  },
  {
    id: '2',
    name: 'LinkedIn',
    editedBy: 'Chris Parker',
    lastEdited: '06 Aug, 2025',
    typeIcons: ['/vercel.svg'],
    isStarred: true,
  },
  {
    id: '3',
    name: 'Sales nav',
    editedBy: 'Jone Doe',
    lastEdited: '06 Aug, 2025',
    typeIcons: ['/vercel.svg'],
  },
  {
    id: '4',
    name: 'find company',
    editedBy: 'Alex Morgan',
    lastEdited: '06 Aug, 2025',
    typeIcons: ['/vercel.svg'],
    isStarred: true,
  },
  {
    id: '5',
    name: 'import csv',
    editedBy: 'Drew Wilson',
    lastEdited: '06 Aug, 2025',
    typeIcons: ['/vercel.svg'],
  },
  {
    id: '6',
    name: 'Find people',
    editedBy: 'Jone Doe',
    lastEdited: '06 Aug, 2025',
    typeIcons: ['/vercel.svg'],
  },
  {
    id: '7',
    name: 'Google maps',
    editedBy: 'Jone Doe',
    lastEdited: '06 Aug, 2025',
    typeIcons: ['/vercel.svg'],
    isStarred: true,
  },
  {
    id: '8',
    name: 'google search results',
    editedBy: 'Jone Doe',
    lastEdited: '06 Aug, 2025',
    typeIcons: ['/vercel.svg'],
  },
  {
    id: '9',
    name: 'factors',
    editedBy: 'Jone Doe',
    lastEdited: '06 Aug, 2025',
    typeIcons: ['/vercel.svg'],
  },
  {
    id: '10',
    name: 'Hubspot List - 10 (05 Aug 25)',
    editedBy: 'Jone Doe',
    lastEdited: '06 Aug, 2025',
    typeIcons: ['/vercel.svg'],
  },
];

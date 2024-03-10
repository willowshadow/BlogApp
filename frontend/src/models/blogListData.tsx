export interface BlogListObject {
  title: string;
  author: string;
  text: string;
  image: string;
  type: string;
  minutesToRead: number;
  date: string;
}
interface BlogListProps {}

interface BlogListState {
  blogListData: BlogListState[];
}

const blogListData = [
  {
    title: 'Blog 1',
    author: 'John Doe',
    text: 'This is a brief description of blog 1 content.',
    image: 'https://via.placeholder.com/200x150', // Dummy content picture
    type: 'Technology',
    minutesToRead: 5,
    date: 'March 9, 2024'
  },
  {
    title: 'Blog 2',
    author: 'Jane Smith',
    text: 'This is a brief description of blog 2 content.',
    image: 'https://via.placeholder.com/200x150', // Dummy content picture
    type: 'Health',
    minutesToRead: 8,
    date: 'March 10, 2024'
  },
  {
    title: 'Blog 3',
    author: 'Bob Johnson',
    text: 'This is a brief description of blog 3 content.',
    image: 'https://via.placeholder.com/200x150', // Dummy content picture
    type: 'Science',
    minutesToRead: 10,
    date: 'March 11, 2024'
  },
  // Add more blog entries as needed
];

export default blogListData;
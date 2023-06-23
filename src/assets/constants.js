import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';

export const genres = [
  { title: 'Sports', value: 'SPORTS' },
  { title: 'Science', value: 'SCIENCE' },
  { title: 'Politics', value: 'POLITICS' },
  { title: 'Health and Fitness', value: 'HEALTH_AND_FITNESS' },
  { title: 'Worldwide', value: 'WORLDWIDE' },
];

export const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];

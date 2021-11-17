import {FaHome} from 'react-icons/fa'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

export default [
  {
    id: 1,
    title: 'Home',
    path: '/',
    icon: <FaHome />,
  },
  {
    id: 2,
    title: 'Trending',
    path: '/trending',
    icon: <HiFire />,
  },
  {
    id: 3,
    title: 'Gaming',
    path: '/gaming',
    icon: <SiYoutubegaming />,
  },
  {
    id: 4,
    title: 'Saved videos',
    path: '/savedvideos',
    icon: <MdPlaylistAdd />,
  },
]

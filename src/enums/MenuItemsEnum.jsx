import {
  Home, Route,
} from '@mui/icons-material';

import TracksEnum from './TracksEnum';

export default [
  {
    display: 'Home',
    icon: <Home />,
    to: '/',
    section: '',
  },
  {
    display: 'Fullstack',
    icon: <Route />,
    to: `/track/${TracksEnum.fullstack}`,
    section: `${TracksEnum.fullstack}`,
  },
  {
    display: 'UX/UI',
    icon: <Route />,
    to: `/track/${TracksEnum.uxui}`,
    section: `${TracksEnum.uxui}`,
  },
  {
    display: 'QA',
    icon: <Route />,
    to: `/track/${TracksEnum.qa}`,
    section: `${TracksEnum.qa}`,
  },
];

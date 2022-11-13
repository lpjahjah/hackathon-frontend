import {
  Home, Route,
} from '@mui/icons-material';

import TracksEnum from '../enums/TracksEnum';

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
    to: `${TracksEnum.fullstack}`,
    section: `${TracksEnum.fullstack}`,
  },
  {
    display: 'UX/UI',
    icon: <Route />,
    to: `${TracksEnum.uxui}`,
    section: `${TracksEnum.uxui}`,
  },
  {
    display: 'QA',
    icon: <Route />,
    to: `${TracksEnum.qa}`,
    section: `${TracksEnum.qa}`,
  },
];

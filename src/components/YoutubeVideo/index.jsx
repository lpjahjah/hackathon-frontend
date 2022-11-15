import PropTypes from 'prop-types';
import { useMemo } from 'react';

const YoutubeVideo = ({ title, url }) => {
  const embedUrl = useMemo(() => url.replace('/watch?v=', '/embed/'), [url]);

  return (
    <iframe
      width="90%"
      height="90%"
      src={embedUrl}
      title={title}
      frameBorder="0"
      allowFullScreen
    />
  );
};

YoutubeVideo.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default YoutubeVideo;

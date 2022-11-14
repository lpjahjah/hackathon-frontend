import PropTypes from 'prop-types';

const YoutubeVideo = ({ title, url }) => (
  <iframe
    width="560"
    height="315"
    src={url}
    title={title}
    frameBorder="0"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
);

YoutubeVideo.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default YoutubeVideo;

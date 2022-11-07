import {
  useEffect,
  useRef, useState,
} from 'react';
import {
  Link, useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';

const Sidebar = ({ menuItems = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useState();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split('/')[1];
    const activeItem = menuItems.findIndex((item) => item.section === curPath);
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        Animate
      </div>
      <div ref={sidebarRef} className="sidebar__menu">
        <div
          ref={indicatorRef}
          className="sidebar__menu__indicator"
          style={{
            transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`,
          }}
        />
        {
                menuItems.map((item, index) => (
                  <Link to={item.to} key={item.toString()}>
                    <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                      <div className="sidebar__menu__item__icon">
                        {item.icon}
                      </div>
                      <div className="sidebar__menu__item__text">
                        {item.display}
                      </div>
                    </div>
                  </Link>
                ))
            }
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    display: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    to: PropTypes.string.isRequired,
    section: PropTypes.string.isRequired,
  })).isRequired,
};

export default Sidebar;

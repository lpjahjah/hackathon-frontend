import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import {
  Link, useLocation,
} from 'react-router-dom';
import './style.css';
import { Menu } from '@mui/icons-material';
import MenuItems from '../../enums/MenuItemsEnum';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const sidebarItem = sidebarRef.current.querySelector(
      '.sidebar__menu__item'
    );
    indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
    setStepHeight(sidebarItem.clientHeight);
  }, [location]);

  useEffect(() => {
    const paths = location.pathname.split('/');
    const curPath = paths[paths.length - 1];
    const activeItem = MenuItems.findIndex((item) => item.section === curPath);
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  const toggleSidebar = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <>
      <div
        onClick={() => toggleSidebar()}
        aria-hidden="true"
        className="sidebar-button"
      >
        <Menu
          sx={{
            fontSize: '3em',
          }}
        />
      </div>

      <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
        <div className="sidebar__logo title-b-l">Username Placeholder</div>
        <div ref={sidebarRef} className="sidebar__menu">
          <div
            ref={indicatorRef}
            className={`sidebar__menu__indicator ${activeIndex === -1 ? 'hide' : ''}`}
            style={{
              transform: `translateX(-50%) translateY(${
                activeIndex * stepHeight
              }px)`,
            }}
          />
          {MenuItems.map((item, index) => (
            <Link to={item.to} key={item.section} onClick={() => setTimeout(toggleSidebar, 300)}>
              <div
                className={`sidebar__menu__item ${
                  activeIndex === index ? 'active' : ''
                }`}
              >
                <div className="sidebar__menu__item__icon">{item.icon}</div>
                <div className="sidebar__menu__item__text">{item.display}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div
        className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`}
        aria-hidden="true"
        onClick={() => toggleSidebar()}
      />
    </>
  );
};

export default Sidebar;

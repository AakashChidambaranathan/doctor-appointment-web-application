import React, { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import avatarIcon from '../../assets/images/avatar-icon.png';
// Import the correct icon if needed
import { BiMenu } from 'react-icons/bi';

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a Doctor'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
];

const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classLint.add('sticky_header')
      } else {
        headerRef.current.classLint.remove('sticky_list')
      }
    })
  }
  useEffect(() => {
    handleStickyHeader()
    return () => window.removeEventListener('scroll', handleStickyHeader)
})
return (
  <header className='header flex items-center' ref={headerRef}>
    <div className='container'>
      <div className='flex items-center justify-between'>
        {/*=====================logo==================*/}
        <div>
          <img src={logo} alt='logo' />
        </div>
        {/*==================menu==============*/}
        <div className='navigation'>
          <ul className='menu flex items-center gap-[2.7rem]'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={navClass =>
                    navClass.isActive
                      ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                      : 'text-textColor text-[16px] leading-7 font-[600]'
                  }
                >
                  {link.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/*========== nav right=========*/}
        <div className='flex items-center gap-4'>
          <div className='hidden'>
            <Link to='/'>
              <figure className='w-[35px] h-[35px] rounded-full'>
                <img src={avatarIcon} className='w-full rounded-full' alt="User avatar" />
              </figure>
            </Link>
          </div>
          <Link to='/login'>
            <button className='testcolor py-2 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Login</button>
          </Link>
          <span className='md:hidden'>
            {/* Replace this with the correct icon */}
            <BiMenu className='w-6 h-6 cursor-pointer'></BiMenu>
            <span />
          </span>
        </div>
      </div>
    </div>
  </header>
);
};
export default Header;

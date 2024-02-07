import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { Tooltip, TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/contextProvider';

const Sidebar = () => {

  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  const activeLink = 'text-base flex items-center gap-5 pl-4 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'text-base flex items-center gap-5 pl-4 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 text-gray-700 dark:text-grey-200 dark:hover:text-black hover:bg-light-gray';

  const handlecloseSideBar = () => {
    if(activeMenu && screenSize <= 900){
      setActiveMenu(false);
    }
  }

  return (
    <div className='ml-3 h-screen md:overflow-hidden md:hover:overflow-auto
    pb-10'>
      {activeMenu &&
        (<>
          <div className='flex justify-between items-center'>
            <Link className='items-center gap-3 ml-3
                mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900' to='/' onClick={() => handlecloseSideBar} >
              <SiShopware /> <span>Shoppy</span>
            </Link>
            <TooltipComponent content='Menu'
              position='BottomCenter'>
              <button type='button' onClick={() => setActiveMenu((prev) => !prev)}
                className='text-xl rounded-full p-3 
                  hover:bg-light-gray mt-4 block 
                  md:hidden'>
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className='mt-10'>
            {links.map((link) => (
              <div key={link.title}>
                <p className='text-gray-400 m-3 mt-4 uppercase text-sm'>
                  {link.title}
                </p>

                {link.links.map((item) => (
                  <NavLink
                    to={`/${item.name}`}
                    key={item.name}
                    onClick={handlecloseSideBar}
                    className={({ isActive }) => isActive ? activeLink : normalLink}
                  >
                     {item.icon}
                     <span className='capitalize'>{item.name}</span>
                  </NavLink>
                ))}

              </div>
            ))}
          </div>

        </>
        )}
    </div>
  )
}

export default Sidebar
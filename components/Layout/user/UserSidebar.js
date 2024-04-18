import React from 'react'
import Link from 'next/link'
import { SidebarData } from './SidebarData'
import { usePathname } from 'next/navigation'
const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="ud-lhs">
    <div className="ud-lhs-s1">
      <img src="/user/62736rn53themes.png" alt />
      <div className="ud-lhs-pro-bio">
        <h4>Rn53</h4>
        <b>Join on 15, Apr 2024</b>
        <a className="ud-lhs-view-pro" target="_blank" href="https://bizbookdirectorytemplate.com/profile/rn53">My Profile</a>
  </div>
    </div>

    <div className="ud-lhs-s2">
    <ul>
      {SidebarData.map((item,index) =>{
      return <li key={index}>
        {item.heading && <h4>{item.heading}</h4> }
        <Link href={item.path} className={pathname == item.path && 'db-lact'}>
          <img src={item.icon} alt="theme" />
          {item.title}
        </Link>
      </li>
      })}
      
    </ul>
  </div>
  </div>
  )
}

export default LeftSidebar
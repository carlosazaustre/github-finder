import React from 'react'

export const Navbar = ({
  title = 'GitHub Finder',
  icon = 'fab fa-github'
}) => {
  return (
    <nav className="navbar bg-dark text-white">
      <div>
        <span className={icon}></span> {title}
      </div>
    </nav>
  )
}
import React from 'react'
import PropTypes from 'prop-types'

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

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}
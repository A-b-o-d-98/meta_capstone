import React from 'react'
import firstp from "./images/1.png"

const Nav = () => {
  return (
    <nav>
        <img src={firstp} ></img>

        <ul>
            <li>
               <a href='#'>Home</a>

            </li>
            <li>
                <a href='#'>Services</a>
            </li>
            <li>
                 <a href='#' >About us</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
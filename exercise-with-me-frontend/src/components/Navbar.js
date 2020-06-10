import React from 'react';
import {Link, Route} from 'react-router-dom'
import AboutMe from './AboutMe'

class Navbar extends React.Component{

render(){
  return(
    <div>
      <ul id="nav">
               <li><Link to={'/routines'}>Routines</Link></li>
               <li><Link to={'/routines/new'}>New Routine</Link></li>
               <li><Link to={'/aboutme'}>About Me</Link></li>

      </ul>
          
    </div>
  )
}
}

export default Navbar

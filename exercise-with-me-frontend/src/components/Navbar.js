import React from 'react';
import {Link} from 'react-router-dom'

class Navbar extends React.Component{

render(){
  return(
    <div>
      <ul id="nav">
               <li><Link to={'/routines'}>Routines</Link></li>
               <li><Link to={'/routines/new'}>New Routine</Link></li>
               <li><a href="/aboutme">About Me</a></li>
      </ul>
    </div>
  )
}
}

export default Navbar

import { Link, Outlet } from "react-router-dom";

const Menu=() => {
    return (
        <>
            <nav>
                <ul>
                   <li> <Link to="Login">Login</Link> </li>
                    {/* <li> <Link to="testOne">Test One</Link>  </li> */}
                    <li> <Link to="GetJson">Json Placeholder</Link></li>
                    <li> <Link to="GetAuthors">Authors</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default Menu;

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// class NavBar extends Component {
// render() {
//   return <div>
// 	<Link to="Login">Login</Link>
//     <Link to="GetJson">Json Placeholder</Link>
//     <Link to="GetAuthors">Authors</Link>
//   </div>
// }
// }
// export default NavBar;
import React from 'react';


class Nav extends React.Component{
    render() {
        return(
            <div>
                <nav>
                <ul className="side-nav fixed">
                    <li><a href="/">class 1</a></li>
                    <li><a href="/">Class 2</a></li>
                    <li><a href="/">class 3</a></li>
                </ul>
            </nav>  
            <ul className="sidenav">
                <li><div class="user-view">
                    <div class="background">
                        </div></div></li>
            </ul>
            </div>
        );
    }
}
export default Nav;
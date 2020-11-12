import React from 'react';


function Header() {

    return(
        <div className="nav">
            <h1 className="heading">Title</h1>
            <wrapper className="nav-wrap">
                <ul className="nav-list">
                    <li className="nav-item">
                        nav item 1
                    </li>
                    <li className="nav-item">
                        nav item 2
                    </li>
                    <li className="nav-item">
                        nav item 3
                    </li>
                    <li className="nav-item">
                        nav item 4
                    </li>
                    
                </ul>
            </wrapper>
        </div>
    )
}

export default Header;
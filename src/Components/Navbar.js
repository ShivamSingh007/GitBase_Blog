import React from 'react';
import Img from '../Images/Svm.jpeg';

function Navbar() {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src={Img} alt="" width="30" height="24" class="d-inline-block align-text-top" style={{borderRadius:"30%"}}/>
                    &nbsp; GitBase Blog
                </a>
            </div>
        </nav>
    )
}

export default Navbar

import React from 'react'

function Installation() {
    return (
        <div>
            <h4 className="my-3">How to download Git</h4>
            <ol>
                <li className="my-2" style={{cursor:"pointer"}}>
                    <a href="https://git-scm.com/downloads" alt="https://git-scm.com/downloads" target="_blank" rel="noreferrer">
                    Click here for downloading Git Base
                    </a>
                </li>
                <li className="my-2">
                    Now click on your using Operating System
                </li>
                <li className="my-2">
                    Now open the downloaded '.exe' file.
                </li>
                <li className="my-2">
                    Now follow the instraction and install in your System.
                </li>
            </ol>
        </div>
    )
}

export default Installation

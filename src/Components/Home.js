import React from 'react'
import AllCommands from './AllCommands'
import Installation from './Installation'
import Settingup from './Settingup'

function Home() {
    return (
        <div className="container">
            <div className="row">
                <Installation />
            </div>
            <div className="row my-3">
                <p>After installing Git. it’s time to select the directory which you want to send to the Git Server. open the directory in git base and press Right-click. and select 'git base here'</p>
            </div>
            <div className="row">
                <Settingup />
            </div>
            <h5 className="my-3">Command for opening VS Code</h5>
            <div className="row">
                <code><pre className="my-3">$ Code .</pre></code>
            </div>
            <h5 className="my-3">Command for list your all file</h5>
            <div className="row">
                <code><pre className="my-3">$ ls</pre></code>
            </div>
            <h5 className="my-3">Command for showing hidden folder</h5>
            <div className="row">
                <code><pre className="my-3">$ ls -lart</pre></code>
            </div>
            <h5 className="my-3">Command for clear your terminal</h5>
            <div className="row">
                <code><pre className="my-3">$ clear</pre></code>
            </div>
            <h5 className="my-3">Command for creating a file in current directory</h5>
            <div className="row">
                <code><pre className="my-3">$ touch File_Name.Extention</pre></code>
            </div>
            <div className="row">
                <AllCommands />
            </div>
        </div>
    )
}

export default Home

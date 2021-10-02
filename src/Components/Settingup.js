import React from 'react'

function Settingup() {
    return (
        <div>
            <h4 className="my-3">Git Base Configuration</h4>
            <p className="my-2">When we use first time git then first of all we give them our some basic detail like user name and user email.</p>
            <h5 className="my-3"> Git Command for giving user name</h5>
            <div className="row">
               <code><pre className="my-3">$ git config --global user.name "YOUR NAME"</pre></code>
            </div>
            <h5 className="my-3"> Git Command for giving user email</h5>
            <div className="row">
               <code><pre className="my-3">$ git config --global user.email "EMAIL"</pre></code>
            </div>
            <p className="my-3">If you want to know user name and user email which are set on the terminal you perform these tow command.</p>
            <h5 className="my-3"> Git Command for knowing user name</h5>
            <div className="row">
               <code><pre className="my-3">$ git config --global user.name</pre></code>
            </div>
            <h5 className="my-3"> Git Command for knowing user email</h5>
            <div className="row">
               <code><pre className="my-3">$ git config --global user.email</pre></code>
            </div>
            <p className="my-3">This is the some important and basic git command which are use after installing git for the Configuration. Now we will learn how to use git.</p>
        </div>
    )
}

export default Settingup

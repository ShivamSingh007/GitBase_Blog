import React from 'react'

function AllCommands() {
    return (
        <div>
            <h4 className="my-3">Git Commands</h4>
            <h5 className="my-3"> Git Command for initializing git</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git init</pre></code>
            </div>
            <h5 className="my-3"> Git Command for knowing your current file Status</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git status</pre></code>
            </div>
            <h5 className="my-3"> Git Command for knowing sort Status</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git status -s</pre></code>
            </div>
            <h5 className="my-3"> Git Command for Staging your single file</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git add FILE_NAME</pre></code>
            </div>
            <h5 className="my-3"> Git Command for Staging your all file</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git add -A</pre></code>
            </div>
            <h5 className="my-3"> Git Command for Commit</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git commit</pre></code>
            </div>
            <div className="my">
            <pre>Here open your VIM Editor, after this we can click on "i" button and write their your comment like "Initial Commit". </pre><pre>After Writing your comment we need to click on "ESC" button and write their ":wq" to do this we are exit from the VIM Editor. </pre>
            </div>
            <h5 className="my-3"> Another way for Commit</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git commit -m "Write Your Message Here"</pre></code>
            </div>
            <h5 className="my-3"> Git Command for Staging and commit together</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git commit -a -m "Write Your Message Here"</pre></code>
            </div>
            <h5 className="my-3"> Git Command for matching your single page code with your last commit</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git checkout File_Name</pre></code>
            </div>
            <h5 className="my-3"> Git Command for matching your all pages code with your last commit</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git checkout -f</pre></code>
            </div>
            <h5 className="my-3"> Git Command for knowing your last commit</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git commit log</pre></code>
            </div>
            <h5 className="my-3"> Git Command for knowing your last number (number of commit you want to know) commit</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git commit log -p -number</pre></code>
            </div>
            <pre>number denotes to : 1,2,3,4... </pre>
            <pre>And after this we need to click on "q" button.</pre>
            <h5 className="my-3"> Git Command for comparing working or modified area with staging area</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git diff</pre></code>
            </div>
            <h5 className="my-3"> Git Command for comparing staging area with your last commit</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git diff --staged</pre></code>
            </div>
            <h5 className="my-3"> Git Command for removing file</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git rm --cached File_Name</pre></code>
            </div>
            <h5 className="my-3"> Git Command for permananent removing file</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git rm File_Name</pre></code>
            </div>
            <h5 className="my-3"> Git Command for Creating Branch</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git branch Branch_Name</pre></code>
            </div>
            <h5 className="my-3"> Git Command for knowing how many branches are their</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git branch</pre></code>
            </div>
            <h5 className="my-3"> Git Command for Switching to another branch</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git checkout Branch_Name</pre></code>
            </div>
            <h5 className="my-3"> Git Command for Creating Branch and Switching to that Branch</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git checkout -b Branch_Name</pre></code>
            </div>
            <h5 className="my-3"> Git Command to Merge Another Branch to current Branch</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git merge Another_Branch_Name</pre></code>
            </div>
            <h5 className="my-3"> Git Command for Set Remote</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git remote set-url origin REMOTE_url</pre></code>
            </div>
            <h5 className="my-3"> Git Command for Knowing Remote</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git remote</pre></code>
            </div>
            <h5 className="my-3"> Git Command for Knowing Remote Version</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git remote -v</pre></code>
            </div>
            <h5 className="my-3"> Git Command for push to the server</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git push -u origin master</pre></code>
            </div>
            <pre>For next Pushing the data on master branch we use "$ git push"</pre>
            <pre>master : here master represent the main branch</pre>
            <pre>At the place of master we can write that branch name which you want to push to the server </pre>
            <h5 className="my-3"> Git Command for clone Repository</h5>
            <div className="row my-3">
               <code><pre className="my-3">$ git clone url</pre></code>
            </div>
        </div>
    )
}

export default AllCommands

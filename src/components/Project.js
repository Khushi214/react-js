import React from 'react'
import './Project.css'
import img from './react.jpg'
import image from './images.jpg'
import image1 from './profimage.jpg'

export const Project = () => {
  return (
    <>
    <div className="main">
    <div className="menu">
                <div className="items"> REACT JS</div>
                <div className="items"> VIRTUAL DOM</div>
                <div className="items"> COMPONENTS</div>
                <div className="items"> ROUTING</div>
                <div className="items"> REACT PROPS</div>
            </div>
            </div>
            {/* <div className="image">
            <img src= {img} alt='image not found'/>
            </div> */}
            <div className="intro">
              <h1>Introduction to React JS</h1>
             <p>
              <h2> React is a JavaScript library for building user interfaces.<br/>

             React is used to build single-page applications.<br/>

             React allows us to create reusable UI components.</h2></p>
             <div className="image">
              <img src= { img }/>
             </div>
            </div>
            <div className="reactapp">
              <h1>Create React App</h1>
              <div className="image1">
                <img src= { image }/>
                </div>
              <div className="para1">
              To learn and test React, you should set up a React Environment on your computer.<br/>

              This tutorial uses the create-react-app.<br/>

              The create-react-app tool is an officially supported way to create React applications.<br/>

              Node.js is required to use create-react-app.<br/>

              Open your terminal in the directory you would like to create your application.<br/>

              Run this command to create a React application named my-react-app<br/>
              </div>
            </div>
            <div className="whatisreact">
              <h1>What is React JS?</h1>
              <div className="para2">
              React, sometimes referred to as a frontend JavaScript framework, 
              is a JavaScript library created by Facebook.<br/>

              React is a tool for building UI components.<br/>
              <div className="reactwork">
              <h1>How does React work?</h1>
              <div className="para3">
              React creates a VIRTUAL DOM in memory.<br/>

              Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory,
              where it does all the necessary manipulating, before making the changes in the browser DOM.<br/>

              React only changes what needs to be changed!<br/>

              React finds out what changes have been made, and changes only what needs to 
              be changed.

              You will learn the various aspects of how React does this in the rest of 
              this tutorial.<br/>
              </div>
              </div>
              </div>
            </div>
          
              <div >
                <img className="image2" width="100%" height="70%" src= { image1 }/>
                <div className="virtualdom">
                <h1>Virtual DOM in React JS</h1>
                <div className="dom">
                React uses Virtual DOM exists which is like a lightweight copy of the<br/>
                actual DOM(a virtual representation of the DOM). So for every object that<br/> 
                exists in the original DOM, there is an object for that in React Virtual <br/>
                DOM. It is exactly the same, but it does not have the power to directly <br/>
                change the layout of the document. <br/><br/>

                Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing<br/>
                 gets drawn on the screen. So each time there is a change in the state of <br/>
                 our application, the virtual DOM gets updated first instead of the real
                 DOM. 
                 </div>
                </div>
              </div>
          
            </>
  )
}

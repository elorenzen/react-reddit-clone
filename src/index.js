// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import TopNavbar from './components/TopNavbar';
import SecondNavbar from './components/SecondNavbar';
import Sidebar from './components/Sidebar';
import Post from './components/Post';
import Buttons from './components/Buttons';


// Create React nav component
const App = () => {
    return (
        <div>
            <TopNavbar />
            <SecondNavbar />
            <div className="reddit_container" style={{maxWidth: '100%'}}>
                <div className="post_container">
                    <div className="post_list">
                        <Post> 
                            <Buttons />
                        </Post>
                        <Post> 
                            <Buttons />
                        </Post>
                        <Post> 
                            <Buttons />
                        </Post>    
                    </div>
                </div>
                <Sidebar />
            </div>
        </div>
    ) 
};

// Take React component and show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
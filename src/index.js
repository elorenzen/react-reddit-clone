// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import TopNavbar from './TopNavbar';
import SecondNavbar from './SecondNavbar';
import Sidebar from './Sidebar';
import Post from './Post';
import faker from 'faker';

// Create React nav component
const App = () => {
    return (
        <div>
            <TopNavbar />
            <SecondNavbar />
            <div className="reddit_container" style={{maxWidth: '100%'}}>
                <div className="post_container">
                    <div className="post_list">
                        <Post
                            votes={faker.random.number()}
                            subredditName={faker.random.word()}
                            author={faker.internet.userName()}
                            hoursSincePosting={faker.random.number({min: 1, max: 23})}
                            title={faker.random.words()}
                            text={faker.lorem.sentences()}
                        />
                        <Post
                            votes={faker.random.number()}
                            subredditName={faker.random.word()}
                            author={faker.internet.userName()}
                            hoursSincePosting={faker.random.number({min: 1, max: 23})}
                            title={faker.random.words()}
                            text={faker.lorem.sentences()}
                        />
                        <Post
                            votes={faker.random.number()}
                            subredditName={faker.random.word()}
                            author={faker.internet.userName()}
                            hoursSincePosting={faker.random.number({min: 1, max: 23})}
                            title={faker.random.words()}
                            text={faker.lorem.sentences()}
                        />
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
import React from 'react';

import TopNavbar from './TopNavbar';
import SecondNavbar from './SecondNavbar';
import Sidebar from './Sidebar';
import Post from './Post';
import Buttons from './Buttons';
import Creator from './Creator';

class App extends React.Component {

    onTitleSubmit(title) {
        console.log(title);
    }

    onTextSubmit(text) {
        console.log(text);
    }

    render() {
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
                <Creator
                    titleClick={event => this.onTitleSubmit(event)} 
                    textClick={event => this.onTextSubmit(event)}
                />
            </div>
        ) 
    }
};

export default App;
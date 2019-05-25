import React from 'react';
import faker from 'faker';

const Post = (props) => {
    return (
        <div className="post">
            {/* POST SHOULDER */}
            <div className="post_shoulder" style={{width: '40px', borderLeft: '4px solid transparent'}}>
                <div className="post_shoulder_content">
                    <button className="upvote">
                        <i className="fas fa-arrow-up"></i>
                    </button>
                    <div className="post_votes" style={{display: 'block', color: 'rgb(26, 26, 27)'}}>
                        {faker.random.number()}                 
                    </div>
                    <button className="downvote">
                        <i className="fas fa-arrow-down"></i>
                    </button>
                </div>
            </div>

            {/* POST CONTENT */}
            <div className="post_content_container">
                <article className="post_content">
                    <div className="post_content_text">
                        <div className="post_content_header">
                            {/* CODE FOR THE HEADER CONTAINING SUBREDDIT NAME POSTED BY USER */}
                            <div style={{flex: '1 1 auto'}}>
                                <div className="post_content_header_text">
                                    <div style={{display: 'inline-block', flex: '0 0 auto'}}>
                                        <a href="/" className="subreddit_name" style={{color: 'rgb(28, 28, 28)'}}>
                                            r/{faker.random.word()}
                                        </a>
                                    </div>
                                    <span className="post_divider">•</span>
                                    <span className="posted_by">Posted by</span>
                                    <div style={{display: 'inline-block'}}>
                                        <a href="/" className="post_author">
                                            {faker.internet.userName()}
                                        </a>
                                    </div>
                                    <a href="/" className="posted_date">
                                        {faker.random.number({min: 1, max: 23})} hours ago
                                    </a>
                                </div>
                            </div>
                        </div> {/* End of 'post_content_header' */}

                        {/* CODE FOR THE POST TITLE */}
                        <div style={{margin: '0px 8px', display: 'block'}}>
                            <span className="post_content_title_container">
                                <a href="/" className="post_title_url">
                                    <h2 className="post_title">
                                        {faker.random.words()}
                                    </h2>
                                </a>
                            </span>
                        </div>
                                            
                        {/* CODE FOR THE POST TEXT */}
                        <div className="post_text">
                            {faker.lorem.sentences()}
                        </div>
                    </div> {/* End of 'post_content_text' */}

                    <div className="post_content_media">
                        <button className="post_content_join">
                            <i className="fas fa-plus"></i>
                            Join
                        </button>
                    </div>
                </article>
                {props.children}
            </div>
        </div>
    )
};

export default Post;

import React from 'react';

const Post = () => {
    return (
        <div className="post">
            {/* POST SHOULDER */}
            <div className="post_shoulder" style={{width: '40px', borderLeft: '4px solid transparent'}}>
                <div className="post_shoulder_content">
                    <button className="upvote">
                        <i className="fas fa-arrow-up"></i>
                    </button>
                    <div className="post_votes" style={{display: 'block', color: 'rgb(26, 26, 27)'}}>
                        votes                 
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
                                            subredditName
                                        </a>
                                    </div>
                                    <span className="post_divider">•</span>
                                    <span className="posted_by">Posted by</span>
                                    <div style={{display: 'inline-block'}}>
                                        <a href="/" className="post_author">
                                            author
                                        </a>
                                    </div>
                                    <a href="/" className="posted_date">
                                        timeSincePosting
                                    </a>
                                </div>
                            </div>
                        </div> {/* End of 'post_content_header' */}

                        {/* CODE FOR THE POST TITLE */}
                        <div style={{margin: '0px 8px', display: 'block'}}>
                            <span className="post_content_title_container">
                                <a href="/" className="post_title_url">
                                    <h2 className="post_title">
                                        title
                                    </h2>
                                </a>
                            </span>
                        </div>
                                            
                        {/* CODE FOR THE POST TEXT */}
                        <div className="post_text">
                            text
                        </div>
                    </div> {/* End of 'post_content_text' */}

                    <div className="post_content_media">
                        <button className="post_content_join">
                            <i className="fas fa-plus"></i>
                            Join
                        </button>
                    </div>
                </article>

                {/* POST BUTTONS */}
                <div className='post_content_buttons_container'>
                    <div className='post_content_buttons'>
                        <a href="/" style={{textDecoration: 'none', color: 'inherit'}} className='comment_button'>
                            <i className='fas fa-comment-alt'></i>
                            <span className='post_comments'>
                                Comments
                            </span>
                        </a>
                        <div className='share_button_container'>
                            <button className='share_button'>
                                <i className='fas fa-share'></i>
                                <span style={{display: 'inlineBlock', lineHeight: '1', verticalAlign: 'middle'}}>share</span>
                            </button>
                        </div>
                        <button className='save_button'>
                            <i className='fas fa-bookmark'></i>
                            <span>save</span>
                        </button>
                        <a href="/" style={{textDecoration: 'none', color: 'inherit'}}>
                            <i className='fas fa-edit'></i>
                            <span>Edit</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Post;

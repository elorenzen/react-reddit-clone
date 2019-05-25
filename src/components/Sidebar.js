import React from 'react';

const Sidebar = (props) => {
    return (
        <div className="reddit_sidebar">
            <div className="reddit_sidebar_flex">
                <div className="sidebar_item_container">
                    <div style={{padding: '12px'}}>
                        <div id='sidebar-home-picture'></div>
                        <div className="home_header">
                            <div className="home_reddit_robot"></div>
                            <div className="home_title_container">
                                <span className="home_title">Home</span>
                            </div>
                        </div>
                        <p className="home_content">Your personal Reddit frontpage. Come here to check in with your favorite communities.</p>
                        <div style={{marginTop: "12px"}}>
                            <a href="/" className="home_create_button">Create Post</a>
                        </div>
                    </div>
                </div>
                        
                {/* CODE FOR ADVERTISEMENT ITEM */}
                <div className="sidebar_item_layout">
                    <div className="sidebar_item_container">
                        ADVERTISEMENT
                    </div>
                </div>
                        
                {/* CODE FOR REDDIT PREMIUM ITEM */}
                <div className="sidebar_item_layout">
                    <div className="sidebar_item_container">
                        <div className="flexbox-content" id='sidebar-premium'>
                            <div className="m-auto">
                                <i className="fas fa-shield-alt" id='sidebar-premium-icon'></i>
                            </div>
                            <div id='sidebar-premium-content'>
                                <h1>Reddit Premium</h1>
                                <p>The best Reddit experience, with monthly coins</p>
                            </div>
                            <div className="m-auto">
                                <button className="btn btn-sm btn-danger" id='sidebar-premium-button'>TRY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
 
                {/* CODE FOR TRENDING COMMUNITIES ITEM */}                    
                <div className="sidebar_item_layout">
                    <div className="sidebar_item_container">
                        <div className="communities_title_container">
                            <div style={{padding: '12px'}}>trending communities</div>
                        </div>
                        <div style={{padding: '12px'}}>
                            <div style={{width: '100%'}}>
                                <div className="com_subreddit_container">
                                    <div className="com_subreddit_content">
                                        <div style={{flex: '0 0 0%'}}>
                                            <div className='com_subreddit_icon'>
                                                <i className="fab fa-reddit"></i>
                                            </div>
                                        </div>
                                        <div style={{width: '100%', flex: '1 1 100%'}}>
                                            <div style={{paddingRight: '8px'}}>
                                                <a href='/' className="com_subreddit_name">
                                                    r/ThanksManagement
                                                </a>
                                                <div style={{display: 'block'}}>
                                                    <p className="com_subreddit_members">13.6k members</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{flex: '0 0 106px'}}>
                                            <button className="com_button_join">Join</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="com_subreddit_container">
                                    <div className="com_subreddit_content">
                                        <div style={{flex: '0 0 0%'}}>
                                            <div className='com_subreddit_icon'>
                                                <i className="fab fa-reddit"></i>
                                            </div>
                                        </div>
                                        <div style={{width: '100%', flex: '1 1 100%'}}>
                                            <div style={{paddingRight: '8px'}}>
                                                <a href='/' className="com_subreddit_name">
                                                    r/15minutefood
                                                </a>
                                                <div style={{display: 'block'}}>
                                                    <p className="com_subreddit_members">42.3k members</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{flex: '0 0 106px'}}>
                                            <button className="com_button_join">Join</button>                                                </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="com_subreddit_container">
                                    <div className="com_subreddit_content">
                                        <div style={{flex: '0 0 0%'}}>
                                            <div className='com_subreddit_icon'>
                                                <i className="fab fa-reddit"></i>
                                            </div>
                                        </div>
                                        <div style={{width: '100%', flex: '1 1 100%'}}>
                                            <div style={{paddingRight: '8px'}}>
                                                <a href='/' className="com_subreddit_name">
                                                    r/awwtf
                                                </a>
                                                <div style={{display: 'block'}}>
                                                    <p className="com_subreddit_members">29.6k members</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{flex: '0 0 106px'}}>
                                            <button className="com_button_join">Join</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="com_subreddit_container">
                                    <div className="com_subreddit_content">
                                        <div style={{flex: '0 0 0%'}}>
                                            <div className='com_subreddit_icon'>
                                                <i className="fab fa-reddit"></i>
                                            </div>
                                        </div>
                                        <div style={{width: '100%', flex: '1 1 100%'}}>
                                            <div style={{paddingRight: '8px'}}>
                                                <a href='/' className="com_subreddit_name">
                                                    r/dogsonroofs
                                                </a>
                                                <div style={{display: 'block'}}>
                                                    <p className="com_subreddit_members">23.1k members</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{flex: '0 0 106px'}}>
                                            <button className="com_button_join">Join</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="com_subreddit_container">
                                    <div className="com_subreddit_content">
                                        <div style={{flex: '0 0 0%'}}>
                                            <div className='com_subreddit_icon'>
                                                <i className="fab fa-reddit"></i>
                                            </div>
                                        </div>
                                        <div style={{width: '100%', flex: '1 1 100%'}}>
                                            <div style={{paddingRight: '8px'}}>
                                                <a href='/' className="com_subreddit_name">
                                                    r/NatureIsFuckingLit
                                                </a>
                                                <div style={{display: 'block'}}>
                                                    <p className="com_subreddit_members">2.2m members</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{flex: '0 0 106px'}}>
                                            <button className="com_button_join">Join</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> {/* End of "sidebar_item_container" */}
                </div> 
                {/* END OF TRENDING COMMUNITIES ITEM */}
                        
                {/* CODE FOR ADVERTISEMENT ITEM */}
                <div className="sidebar_item_layout">
                    <div className="sidebar_item_container">ADVERTISEMENT</div>
                </div>

                <div className="sidebar_item_layout">
                    <div className="sidebar_item_container">
                        <div className="sidebar_sitemap">
                            <div className="sitemap_column">
                                <div>
                                    <a href='/' className="sitemap_link">About</a>
                                    <a href="/" className="sitemap_link">Careers</a>
                                    <a href="/" className="sitemap_link">Press</a>
                                </div>
                            </div>
                            <div className="sitemap_column">
                                <div>
                                    <a href="/" className="sitemap_link">Advertise</a>
                                    <a href="/" className="sitemap_link">Blog</a>
                                    <a href="/" className="sitemap_link">Help</a>
                                </div>
                            </div>
                            <div className="sitemap_column">
                                <div>
                                    <a href="/" className="sitemap_link">The Reddit App</a>
                                    <a href="/" className="sitemap_link">Reddit Coins</a>
                                    <a href="/" className="sitemap_link">Reddit Premium</a>
                                    <a href="/" className="sitemap_link">Reddit Gifts</a>
                                </div>
                            </div>
                        </div>

                        <div className="sitemap_footer">
                            <div>
                                <a href="/" className="sidebar_footer_link">content policy</a>
                                <span>|</span>
                                <a href="/" className="sidebar_footer_link">privacy policy</a>
                            </div>
                            <div>
                                <a href="/" className="sidebar_footer_link">user agreement</a>
                                <span>|</span>
                                <a href="/" className="sidebar_footer_link">mod policy</a>
                            </div>
                            <div>© 2019 Reddit, Inc. All rights reserved</div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
};

export default Sidebar;
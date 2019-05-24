import React from 'react';

const Sidebar = (props) => {
    return (
        <div className="reddit_sidebar">
            <div className="reddit_sidebar_flex">
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
        </div>
    )
}

export default Sidebar;
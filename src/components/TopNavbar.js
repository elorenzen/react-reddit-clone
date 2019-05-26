import React from 'react';
import SearchBar from './SearchBar';

class TopNavbar extends React.Component {

    onSearchSubmit(term) {
        console.log(term)
    }

    render() {
        return (
            <nav id='top-nav'>
                <div className='flexbox'>
                    <a className="navbar-brand" href="/">
                        <i className="fab fa-reddit"> reddit</i>
                    </a>
                    <div className="nav-item dropdown" id='home-dropdown'>
                        <a className="nav-link dropdown-toggle default_feed" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-rocket"></i> Home
                        </a>
                        <div className="dropdown-menu" id='nav1-dropdown' aria-labelledby="navbarDropdownMenuLink">
                            <input type="text" placeholder="Filter" />
                            <p>REDDIT FEEDS</p>
                            <ul>
                                <a className="dropdown-item feed_home" href="/"><i className="fas fa-rocket"></i>Home</a>
                                <a className="dropdown-item feed_popular" href="/"><i className="fas fa-chart-line"></i>Popular</a>
                                <a className="dropdown-item feed_all" href="/"><i className="fas fa-chart-pie"></i>All</a>
                                <a className="dropdown-item feed_oc" href="/"><i className="fas fa-quote-left"></i>Original Content</a>
                            </ul>
                            <p>MY COMMUNITIES</p>
                            <ul>
                                <a className="dropdown-item" href="/"><i className="far fa-circle"></i>r/askReddit</a>
                                <a className="dropdown-item" href="/"><i className="far fa-circle"></i>r/travel</a>
                                <a className="dropdown-item" href="/"><i className="far fa-circle"></i>r/Showerthoughts</a>
                            </ul>
                            <p>OTHER</p>
                            <ul>
                                <a className="dropdown-item" href="/"><i className="fas fa-user-cog"></i>User Settings</a>
                                <a className="dropdown-item" href="/"><i className="fas fa-envelope"></i>   Messages</a>                                
                                <a className="dropdown-item" href="/"><i className="fas fa-edit"></i> Create Post</a>
                                <a className="dropdown-item" href="/"><i className="fas fa-coins"></i>  Coins</a>
                                <a className="dropdown-item" href="/"><i className="fas fa-shield-alt"></i>   Premium</a>
                            </ul>
                        </div>
                    </div>
    
                    <SearchBar onSubmit={this.onSearchSubmit} />              
                    
                    <div className="nav-item" id='nav-icons'>
                        <a href="/"><i className="fas fa-chart-line"></i></a>
                        <a href="/"><i className="fas fa-chart-pie"></i></a>
                        <a href="/" className="border-right"><i className="fas fa-quote-left"></i></a>
                        <a href="/"><i className="fas fa-comment"></i></a>
                        <a href="/"><i className="fas fa-envelope"></i></a>
                        <a href="/"><i className="fas fa-edit"></i></a>
                    </div>
    
                    <div className="nav-item dropdown" id='profile-dropdown'>
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Username
                        </a>
                            <div className="dropdown-menu" id='profile-icons' aria-labelledby="navbarDropdownMenuLink">
                            <p>MY STUFF</p>
                            <ul>
                                <a className="dropdown-item" href="/"><i className="fas fa-user"></i>My Profile</a>
                                <a className="dropdown-item" href="/"><i className="fas fa-cog"></i>User Settings</a>
                            </ul>
                            <p>VIEW OPTIONS</p>
                            <ul>
                                <a className="dropdown-item" href="/"><i className="fas fa-moon"></i>Night Mode</a>
                            </ul>
                            <p>MORE STUFF</p>
                            <ul>
                                <a className="dropdown-item" href="/"><i className="fas fa-coins"></i>Reddit Coins</a>
                                <a className="dropdown-item" href="/"><i className="fas fa-shield-alt"></i>Reddit Premium</a>
                                <a className="dropdown-item" href="/"><i className="far fa-question-circle"></i>Help Center<small><i className="fas fa-external-link-alt"></i></small></a>
                                <a className="dropdown-item" href="/"><i className="fas fa-external-link-alt"></i>Visit Old Reddit<small><i className="fas fa-external-link-alt"></i></small></a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/"><i className="fas fa-sign-out-alt"></i>Log Out</a>
                            </ul>
                        </div>
                    </div>
                </div>   
            </nav>
        )
    }
};

export default TopNavbar;
    
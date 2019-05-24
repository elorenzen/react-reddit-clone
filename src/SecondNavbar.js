import React from 'react';

const SecondNavbar = () => {
    return (
        <div className='second-nav'>
            <div className='second-nav-responsive'>
                <div className='second-nav-container'>
                    <div className='second-nav-items-container'>
                        <div className='second-nav-view-container'>
                            <div className='second-nav-items-title'>View</div>
                            <div className='second-nav-view-displays'>
                                <button>
                                    <i className="fas fa-minus second-nav-view-displays-options-active"></i>
                                </button>
                                <button>
                                    <i className="fas fa-bars second-nav-view-displays-options"></i>
                                </button>
                                <button>
                                    <i className="fas fa-align-justify second-nav-view-displays-options"></i>
                                </button>
                            </div>
                        </div>
                        <div className='second-nav-sort-container'>
                            <div className='second-nav-items-title'>Sort</div>
                            <div className="dropdown">
                                <a className="dropdown-toggle" href="/" id="dropdown08" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className='default_list' style={{display: 'inline-block'}}><i className='fas fa-splotch dropdown-item-icon'></i>BEST</span>
                                </a>
                                <div className="dropdown-menu sort-dropdown-list" aria-labelledby="dropdown08">
                                    <a className="dropdown-item sort-dropdown-item" href="/"><i className="fas fa-splotch"></i>Best</a>
                                    
                                    <a className="dropdown-item sort-dropdown-item filter_hot" href="/"><i className="fas fa-fire"></i>Hot</a>

                                    <a className="dropdown-item sort-dropdown-item filter_new" href="/"><i className="fas fa-paper-plane"></i>New</a>

                                    <a className="dropdown-item sort-dropdown-item filter_controversial" href="/"><i className="fas fa-exclamation-circle"></i>Controversial</a>

                                    <a className="dropdown-item sort-dropdown-item filter_top" href="/"><i className="fas fa-level-up-alt"></i>Top</a>

                                    <a className="dropdown-item sort-dropdown-item filter_rising" href="/"><i className="fas fa-signal"></i>Rising</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondNavbar;
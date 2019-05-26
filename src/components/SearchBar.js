import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    render() {
        return (
            <div className="nav navbar-nav">
                <form className="nav-item">
                    <input  
                        value={this.state.term}
                        onChange={event => this.setState({ term: event.target.value })}
                        className="form-control mr-sm-2" id='nav-search' 
                        type="search" placeholder="Search Reddit" 
                        aria-label="Search" 
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar;
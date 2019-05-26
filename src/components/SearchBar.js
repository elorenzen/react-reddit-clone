import React from 'react';

class SearchBar extends React.Component {

    onInputChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="nav navbar-nav">
                <form className="nav-item">
                    <input onChange={this.onInputChange} className="form-control mr-sm-2" id='nav-search' type="search" placeholder="Search Reddit" aria-label="Search" />
                </form>
            </div>
        )
    }
}

export default SearchBar;
import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onFormSubmit = (event) => {
        // Prevents form from submitting on automatic refresh
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="nav navbar-nav">
                <form onSubmit={(event) => this.onFormSubmit(event)} className="nav-item">
                    <input  
                        value={this.state.term}
                        onChange={this.onInputChange}
                        className="form-control mr-sm-2" id='nav-search' 
                        type="text" placeholder="Search Reddit" 
                        aria-label="Search" 
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar;
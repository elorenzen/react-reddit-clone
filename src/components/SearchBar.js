import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onFormSubmit(event) {
        // Prevents form from submitting on automatic refresh
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="nav navbar-nav">
                <form onSubmit={() => this.onFormSubmit()} className="nav-item">
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
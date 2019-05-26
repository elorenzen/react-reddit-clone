import React from 'react';

class Creator extends React.Component {
    state = { 
        title: '',
        text: ''
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.titleClick(this.state.title);
        this.props.textClick(this.state.text);
    }

    render() {
        return (
            <div style={{backgroundColor: 'white', marginBottom: '15px', borderRadius: '5px'}}>
                <div style={{margin: '16px'}}>
                    <form>
                        <div>
                            <input 
                                value={this.state.title}
                                onChange={event => this.setState({ title: event.target.value })}
                                type="text" 
                                className="new_post_title_textarea" 
                                placeholder="Title"  
                                style={{height: '39px'}} 
                            />
                        </div>
                        <div className="new_post_text_container">
                            <input
                                value={this.state.text} 
                                onChange={event => this.setState({ text: event.target.value })}
                                type="text" 
                                className="new_post_text_editor" 
                                placeholder="Text (optional)" 
                            />
                        </div>
                        <div className="new_post_button_container">
                            <button onClick={event => this.onFormSubmit(event)} className="new_post_post_button">
                                post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    };
};

export default Creator;
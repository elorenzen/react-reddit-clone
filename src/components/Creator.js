import React from 'react';

class Creator extends React.Component {

    render() {
        return (
            <div style={{backgroundColor: 'white', marginBottom: '15px', borderRadius: '5px'}}>
                <div style={{margin: '16px'}}>
                    <form action="/reddit-posts" method="POST">
                        <div>
                            <textarea type="text" className="new_post_title_textarea" placeholder="Title"  style={{height: '39px'}}></textarea>
                        </div>
                        <div className="new_post_text_container">
                            <input type="text" className="new_post_text_editor" placeholder="Text (optional)" />
                        </div>
                        <div className="new_post_button_container">
                            <button className="new_post_post_button">
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
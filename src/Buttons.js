import React from 'react';
import faker from 'faker';

const Buttons = (props) => {
    return (
        <div className='post_content_buttons_container'>
            <div className='post_content_buttons'>
                <a href="/" style={{textDecoration: 'none', color: 'inherit'}} className='comment_button'>
                    <i className='fas fa-comment-alt'></i>
                    <span className='post_comments'>
                        {faker.random.number()} Comments
                    </span>
                </a>
                <div className='share_button_container'>
                    <button className='share_button'>
                        <i className='fas fa-share'></i>
                        <span style={{display: 'inlineBlock', lineHeight: '1', verticalAlign: 'middle'}}>share</span>
                    </button>
                </div>
                <button className='save_button'>
                    <i className='fas fa-bookmark'></i>
                    <span>save</span>
                </button>
                <a href="/" style={{textDecoration: 'none', color: 'inherit'}}>
                    <i className='fas fa-edit'></i>
                    <span>Edit</span>
                </a>
            </div>
        </div>
    )
};

export default Buttons;
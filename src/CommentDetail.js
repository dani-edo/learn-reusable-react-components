import React from 'react';

const CommentDetail = (props) => {
    console.log(props.avatar)
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="Avatar" src={props.avatar} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{props.time}</span>
                    </div>
                    <div className="text">{props.comment}</div>
                </div>
            </div>
        </div>
    );
};

export default CommentDetail
import React from "react";

import './post-add-form.css'

const PostAddFrom = ({onAdd}) => {
    return (
        <div className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="О чём вы думаете сейчас?"
                className="form-control new-post-label"
            />
            <button 
                type="submit" 
                className="btn-outline-secondary"
                onClick={() => onAdd("Hello")}>
                Добавить
            </button>
        </div>
    )

}

export default PostAddFrom;
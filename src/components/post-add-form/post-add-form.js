import React from "react";

import './post-add-form'

const PostAddFrom = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="О чём вы думаете сейчас?"
                className="form-control new-post-label"
            />
            <button 
                type="submit" 
                className="btn-outline-secondary">
                Добавить
            </button>
        </form>
    )

}

export default PostAddFrom;
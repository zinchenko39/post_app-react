import React, {Component} from "react";

import './post-add-form.css'

export default class PostAddFrom extends Component  {
    constructor (props) {
        super (props);
        this.state = {
            text: ""
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange (e) {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit (e) {
        e.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        })
    }

    render () {
        return (
            <form 
            className="bottom-panel d-flex"
            onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="О чём вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button 
                    type="submit" 
                    className="btn-outline-secondary">
                    Добавить
                </button>
            </form>
        )
    }
}
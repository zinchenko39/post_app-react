import React, {Component} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddFrom from "../post-add-form";

import './app.css'
import './index.css'

export default class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data : [
                {label: 'Going to learn JS', important: true, id: 'qws', color: 'white'},
                {label: 'I am learning React', important: false, id: 'dsa', color: 'white'},
                {label: 'I need a break...', important: false, id: 'asd', color: 'white'}
            ]
        }
        this.deleteItem = this.deleteItem.bind(this);
    }
    
    deleteItem (id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)            
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }

   render () {
    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={this.state.data}
            onDelete={this.deleteItem}
            />
            <PostAddFrom/>
        </div>
    )
   }
}

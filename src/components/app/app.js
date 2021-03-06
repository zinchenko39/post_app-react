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
                {label: 'Going to learn JS', important: true, liked: false, id: 1},
                {label: 'I am learning React', important: false, liked: false, id: 2},
                {label: 'I need a break...', important: false, liked: false, id: 3}
            ]
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);

        this.maxId = 4;
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

    addItem (body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleImportant (id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)

            const old = data[index]
            const newItem = {...old, important: !old.important};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }
    
    onToggleLiked (id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)

            const old = data[index]
            const newItem = {...old, liked: !old.liked};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

   render () {
    const {data} = this.state;
    const liked = data.filter(item => item.liked).length;
    const allPosts = data.length;

    return (
        <div className="app">
            <AppHeader
            liked={liked}
            allPosts={allPosts}
            />
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={this.state.data}
            onDelete={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleLiked={this.onToggleLiked}
            />
            <PostAddFrom
            onAdd={this.addItem}/>
        </div>
    )
   }
}

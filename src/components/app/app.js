import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddFrom from "../post-add-form";

import './app.css'
import './index.css'

const App = () => {

    const data = [
        {label: 'Going to learn JS', important: true, id: 'qws'},
        {label: 'I am learning React', important: false, id: 'dsa'},
        {label: 'I need a break...', important: false, id: 'asd'}
    ];


    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddFrom/>
        </div>
    )
}
export default App;
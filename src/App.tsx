import React, {useEffect, useState} from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

function TodosItem() {
    return null;
}

const App = () => {
    let children;
    return (
        <BrowserRouter>
            <div>
                <Link to='/users'>Users</Link>
                <Link to='/todos'>Todos</Link>
            </div>
            <Routes>
                <Route path="/users" element={<UsersPage/>}/>
                <Route path="/todos" element={<TodosPage/>}/>
                <Route path="/user:id" element={<UserItemPage/>}/>
                <Route path="/todos:id" element={<TodoItemPage/>}/>
            </Routes>
        </BrowserRouter>

    );
};

export default App;
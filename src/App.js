import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import './App.css'
import ChatFeed from './component//ChatFeed';
import LoginForm from './component/LoginForm';

const App = () =>{
    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine
        height = '100vh'
        projectID = 'a7111608-3917-480a-b680-51305bdadb29'
        userName = {localStorage.getItem('username')}
        userSecret ={localStorage.getItem('password')}
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App

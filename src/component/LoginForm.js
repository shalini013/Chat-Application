import React ,{useState} from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmitForm = async( e) =>{
        e.preventDefault();
        const authObj ={'Project-ID':'a7111608-3917-480a-b680-51305bdadb29','User-Name': username, 'User-Secret':password}
      
        try {
           await axios.get('https://api.chatengine.io/chats', {headers:authObj}) 

           localStorage.setItem('username',username)
           localStorage.setItem('password',password)

           window.location.reload();

        } catch (error) {
            setError('ooops wrong credentials')
            
        }
    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmitForm}>
                    <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} className='input' value={username} required/>
                    <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} className='input' value={password} required/>

                    <div align='center'>
                    <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 style={{color:'white'}} align='center' className='error'>{error}</h2>
                </form>
                
            </div>
            
        </div>
    )
}

export default LoginForm

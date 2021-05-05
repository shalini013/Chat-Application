import React ,{useState}from 'react';
import {sendMessage, isTyping} from 'react-chat-engine';
import {PictureOutlined, SendOutlined } from '@ant-design/icons';

const MessageForm = (props) => {
    const {creds, chatID} = props;
    const [value, setValue] = useState('')
   

    const handleSubmit = (event) =>{
        event.preventDefault();
         const text = value.trim();

         if(text.length > 0) sendMessage(creds, chatID, {text})
         setValue('');
       

    }
    
    const onChangeHandler = (event) =>{
        setValue(event.target.value)

        isTyping(creds, chatID)
    }

    const handleUpload = (event) =>{
        sendMessage(creds, chatID , {file:event.target.files , text:''})

    }
    
    return (
            <form onSubmit={handleSubmit} className='message-form'>
                <input 
                className='message-input'
                 placeholder='send a message ...'
                 value={value}
                 onChange={onChangeHandler}
                 onSubmit={handleSubmit}
                /*  style={{width:'100%'}} */
                />
                <label htmlFor="upload-button">
                    <span className='image-button'>
                        <PictureOutlined className='picture-icon'/>
                    </span>
                </label>
                <input
                type='file'
                style={{display:'none'}}
                id='upload-button'
                multiple={false}
                onChange={handleUpload}
                />
                <button type='submit' className='send-button'>
                    <SendOutlined className='send-icon'/>

                </button>

            </form>
       
    )
}

export default MessageForm;

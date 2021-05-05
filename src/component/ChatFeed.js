import React from 'react'
import MessageForm from './MessageForm';
import TheirMessage from './TheirMessage';
import MyMessage from './MyMessage';

const ChatFeed = (props) => {

    const { chats, activeChat, messages, userName } = props;

    const chat = chats && chats[activeChat];
    console.log(chat)


    const handleReadRecipets = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
        <div
          key={`read_${index}`}
          className="read-receipt"
          style={{
            float: isMyMessage ? 'right' : 'left',
            backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
          }}
        />
      ));


    const renderMessage = () => {
        const keys = Object.keys(messages)

        return keys.map((key, index) => {
            const message = messages[key]
          

            const lastMessage = index === 0 ? null : keys[index - 1]
            const isMyMessage = userName === message.sender.username


            return (
                <div style={{ width: '100%' }} key={`msg ${index}`}>
                    <div className='message-block'>
                        {isMyMessage ? <MyMessage message={message} lastMessage={messages[lastMessage]} /> : <TheirMessage lastMessage={lastMessage} message={message} />}
                    </div>
                    <div className='read-receipts' style={{ marginLeft: isMyMessage ? '18px' : '0px', marginRight: isMyMessage ? '0px' : '68px' }}>
                       {handleReadRecipets(message, isMyMessage)}

                   </div>

                </div>
            )
        })

    }

    if (!chat) return 'loading.........'


    return (
        <div className='chat-feed'>

            <div className='chat-title-container'>
                <div className='chat-title'>{chat.title}</div>
                <div className='chat-subtitle'>
                    {chat.people.map((person) => ` ${person.person.username}`)}
                </div>
            </div>
            {renderMessage()}
            <div style={{ height: '100px' }} />
            <div className='message-form-container'>
                <MessageForm {...props} chatID={activeChat} />

            </div>

        </div>
    )
}

export default ChatFeed

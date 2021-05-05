import React from 'react'

const TheirMessage = ({ lastMessage, message }) => {
    const isUserFirstMessage = !lastMessage 
    return (
        <div className='message-row'>

            {isUserFirstMessage &&
                (<div
                    className='message-avatar'
                    style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
                />
                )}
            { (message?.attachments?.length > 0) ?
                     (
                        <img
                            src={message.attachments[0].file}
                            alt='message-attachment'
                            className='message-image'
                            style={{ marginLeft: isUserFirstMessage ? '4px' :'48px' }}
                        />
                    ) : (
                        <div className='message' style={{ float: 'right',marginLeft: isUserFirstMessage ? '4px' :'48px' , backgroundColor: '#CABADC' }}>
                            {message.text}
                        </div>
                    )

            }


        </div>
    )
}

export default TheirMessage

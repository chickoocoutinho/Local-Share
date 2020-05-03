import React from 'react';
import SentMessages from './SentMessages';
import ReceivedMessages from './ReceivedMessages';

const Message = ({message:{user , text} , name}) => {
    
    let isSentByCurrentUser = false;
    const trimmedName= name.trim().toLowerCase();

    if( user === trimmedName){
        isSentByCurrentUser=true
    }

    return (
            isSentByCurrentUser?(
                <SentMessages text={text} user={user}/>
            ):(
                <ReceivedMessages text={text} user={user}/>
            )
    );
}

export default Message;
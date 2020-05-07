import React from 'react';
import SentMessages from './SentMessages/SentMessages';
import ReceivedMessages from './ReceivedMessages/ReceivedMessages';

const Message = ({message:{user , text, path, type} , name }) => {
    
    let isSentByCurrentUser = false;
    const trimmedName= name.trim().toLowerCase();

    if( user === trimmedName){
        isSentByCurrentUser=true
    }

    //put messages in card
    return (
            isSentByCurrentUser?(
                <SentMessages text={text} user={user} type={type} path={path} />
            ):(
                <ReceivedMessages text={text} user={user} type={type} path={path}/>
            )
    );
}

export default Message;
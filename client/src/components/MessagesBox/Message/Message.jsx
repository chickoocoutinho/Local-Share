import React from 'react';
import SentMessages from './SentMessages';
import ReceivedMessages from './ReceivedMessages';

const Message = ({message:{user , text, type} , name, socket, path}) => {
    
    /*const [filePath, setFilePath]= useState([]);
    useEffect(()=>{
        
    },[socket]);

    useEffect(()=>{
        
    },[]);  */

    let isSentByCurrentUser = false;
    const trimmedName= name.trim().toLowerCase();

    if( user === trimmedName){
        isSentByCurrentUser=true
    }

    const file = (file)=>{
        let fileStream = file.stream();
    }

    return (
            isSentByCurrentUser?(
                <SentMessages text={text} user={user} type={type} socket={socket} path={path}/>
            ):(
                <ReceivedMessages text={text} user={user}/>
            )
    );
}

export default Message;
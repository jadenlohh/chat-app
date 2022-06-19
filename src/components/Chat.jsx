import React, { useEffect, useState } from 'react'
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore'
import db from './Firebase'

const Chat = () => {
    const [messages, setMessages] = useState([])
    const q = query(collection(db, 'messages'), orderBy('createdAt'), limit(50))

    useEffect(() => {
        onSnapshot(q, snapshots => {
            setMessages(snapshots.docs.map(msg => ({
                ...msg.data(),
                id: msg.id
            })))
        })
    }, [])

    return (
        <div className='chat'>
            {messages.map(msg => <Message sender={msg.sender} text={msg.text} createdAt={msg.createdAt} key={msg.id} />)}
        </div>
    )
}

const Message = ({sender, text, createdAt}) => {
    const messageType = sender === 'jadenlohh' ? 'sent' : 'received'

    var d = new Date(createdAt.seconds * 1000)

    return (
        <div className={`message ${messageType}`}>
            <span>jadenlohh</span><span className='messageDate'>{d.toLocaleString().split(', ')[0]}</span>
            <p>{text}</p>
        </div>
    )
}

export default Chat
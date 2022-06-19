import { collection, doc, setDoc, Timestamp } from 'firebase/firestore'
import React from 'react'
import Chat from './Chat'
import db from './Firebase'

const ChatRoom = () => {
  return (
    <>
        <Chat />
        <TextBox />
    </>
  )
}

const TextBox = () => {
    return (
        <form onSubmit={sendMessage} className='inputMessageForm'>
            <input type='text' id='textBox' placeholder='Send message' />
            <button type='submit'><i className="fa-regular fa-paper-plane"></i></button>
        </form>
    )
}

const sendMessage = e => {
    e.preventDefault()

    const msg = document.getElementById('textBox').value

    if (msg.trim() !== '') {
        setDoc(doc(collection(db, 'messages')), {
            sender: 'jadenlohh',
            text: msg,
            createdAt: Timestamp.now()
        })

        document.getElementById('textBox').value = ''
    }
}

export default ChatRoom
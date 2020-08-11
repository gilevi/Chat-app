
import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

import './Chat.css';
import chatBack from '../../img/chat2.jpg';


let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'https://react-chat-app-gils.herokuapp.com/';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
	  <div>
	  <Navigation />
	<div id="features" className="text-center" style={{background:`url(${chatBack}) no-repeat center center fixed`, 'background-size': 'cover' }}>
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Start Chatting</h2>
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
	        <TextContainer users={users}/>
          </div>
        </div>
      </div>
	  <Footer />
	  </div>
  );
}

export default Chat;

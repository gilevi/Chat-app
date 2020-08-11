import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Join.css';
import mylogo from '../../img/chatlogo.webp';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';




const Join = () => {
	const [name,setName] = useState('');
	const [room,setRoom] = useState('');
        return (
		<div>
		<Navigation />
		 <header id="header">
			<div className="intro">
			  <div className="overlay">
			    <div className="container">
			      <div className="row">
				<div className="col-md-8 col-md-offset-2 intro-text">
				  <h1>
					Join chatting
				    <span></span>
				  </h1>
 			<input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
                        <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
                        <Link onClick={ event =>(!name || !room) ? event.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
                                <button className="button mt-20" type="submit"> Sign In </button>
                        </Link>

				</div>
			      </div>
			    </div>
			  </div>
			</div>
		      </header>
		<Footer />

		</div>
        )
}
export default Join;


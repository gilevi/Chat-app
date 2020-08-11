import React from 'react';

import onlineIcon from '../../img/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div >
    {
      users
        ? (
          <div>
            <h3>People currently chatting:</h3>
              <h3>
                {users.map(({name}) => (
                  <div key={name} >
                    <img alt="Online Icon" src={onlineIcon}/>
                   {name}
                  </div>
                ))}
              </h3>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;

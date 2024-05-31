import React, { useState } from 'react'
import Client from '../components/Client';

function EditerPage() {
  const [clients,setClients] =useState([
    {socketId:1,username:'sangam s',},
    {socketId:2,username:'pavan s',}
  ]);




  return (
    <div className="mainWrap">
    <div className="aside">
      <div className="asideInner">
        <div className="logo">
          <img className="logoImage logo" src="/codeediter.png" alt="code logo"/>
        </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {
              clients.map((client)=>(
              <Client  key={client.socketId} username={client.username}/>
            ))
            }
          </div>
      </div>
    </div>
    <div className="editorWrap">Editer goes here....</div>
      
    </div>
  )
}

export default EditerPage

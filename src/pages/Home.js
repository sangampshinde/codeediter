import React from 'react'
import'./Home.css'

function Home() {
  return (
    <div className='homePageWrapper'>
     <div className='formWrapper'>
      <img src='/codeediter.png' alt='codeediter logo' className='logo' />
      <h4 className="mainLabel">Enter Your Room ID</h4>
      <div className="inputGroup">
      <input type='text' placeholder='ROOM ID' className="inputBox"></input>
      <input type='text' placeholder='USER NAME' className="inputBox"></input>
      <button className='btn joinBtn'>Join</button>
      <span className="createInfo">
        If you dont have invite then Create One &nbsp;
        <a href=''className="createNewBtn">new room</a>
      </span>
      </div>
      

     </div>
    </div>
  )
}

export default Home

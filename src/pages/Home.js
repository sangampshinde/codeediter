import React,{useState} from 'react'
import { useNavigate } from 'react-router'; 
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import'./Home.css'


function Home() {


  const navigate = useNavigate();
  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');

  const creatNewRoom = (e)=>{
    e.preventDefault();
    const id = uuidV4();
    // console.log(id);
    setRoomId(id);
    toast.success('New room created');

  }

  // room join 
  const joinRoom=()=>{
    // condition-1 to check weather room id& username present or not to proceed.
    if(!roomId||!username)
    {
      toast.error('ROOM ID & username is required');
      return;
    }

    // if both are present then
    navigate(`/editer/${roomId}`,{
      
      state: {
        username,
    },

    });

  };
   //we handle  enter key page entery 
  const handleInputEnter =(e)=>{
    // console.log('event: ',e.code)

    if (e.code === 'Enter') {
      joinRoom();
   }

  }


  return (
    <div className='homePageWrapper'>
     <div className='formWrapper'>
      <img src='/codeediter.png' alt='codeediter logo' className='logo' />
      <h4 className="mainLabel">Enter Your Room ID</h4>
      <div className="inputGroup">

      <input 
      type='text' 
      placeholder='ROOM ID' 
      className="inputBox" 
      onChange={(e) => setRoomId(e.target.value)}
      value={roomId}
      onKeyUp={handleInputEnter}
      />

      <input 
      type='text' 
      placeholder='USER NAME' 
      className="inputBox"  
      onChange={(e) => setUsername(e.target.value)} 
      value={username}
      onKeyUp={handleInputEnter}
      />

      <button className='btn joinBtn' onClick={joinRoom}>Join</button>
      <span className="createInfo">
        If you dont have invite then Create One &nbsp;
        <a onClick={creatNewRoom} href=''className="createNewBtn">new room</a>
      </span>
      </div>
      

     </div>
    </div>
  )
}

export default Home

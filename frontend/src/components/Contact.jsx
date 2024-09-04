import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners'
import axios from "axios"
import { toast } from "react-toastify"

const Contact = () => {
  const [name, setname]=useState("");
  const [email, setemail]=useState("");
  const [message, setmessage]=useState("");
  const [loading, setloading]=useState(false);

  const sendMail = async (event)=>{
    event.preventDefault();
    setloading(true);

    try{
      const {data} = await axios.post(
        "http://localhost:4000/send/mail", 
        {
          name,
          email,
          message,
        },
        {
          withCredentials: true,
          headers: {"Content-Type": "application/json"},
        }
      );
      setname("");
      setemail("");
      setmessage("");
      toast.success(data.message);
      setloading(false);
    }
    catch(error){
      setloading(false);
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className='contact'>
      <form onSubmit={sendMail}>
        <h1>CONTACT US</h1>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(event)=> setname(event.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(event)=> setemail(event.target.value)}/>
        </div>
        <div>
          <label>Message</label>
          <input type="text" value={message} onChange={(event)=> setmessage(event.target.value)} />
        </div>
        <button 
          type='submit' 
          disabled={loading} 
          style={{
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            gap: "15px",
          }} 
        >
          {loading && <ClipLoader size={20} color="white" />}
          Send
        </button>
      </form>
    </section>
  )
}

export default Contact
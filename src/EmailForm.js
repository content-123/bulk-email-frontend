import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
  const [to, setTo] = useState([]);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSendEmail = async () => {
    try {
      const response = await axios.post('http://localhost:3001/send-bulk-email', {
        to,
        subject,
        body,
      });
if(response.data){
      alert("Message sent successfully");
}else{
    console.log("Not sent")
}
    } catch (error) {
      console.error('Error sending email:', error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Bulk Email Sender</h2>
      <label>To:</label>
      <input id="email" type="email" value={to} onChange={(e) => setTo(e.target.value)} />
      <br /><br/>
      <label>Subject:</label>
      <input id="subject" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
      <br /><br/>
      <label>Body:</label>
      <input id="body" type="text" value={body} onChange={(e) => setBody(e.target.value)} />
      <br /><br/>
      <button onClick={handleSendEmail}>Send Email</button>
    </div>
  );
};

export default EmailForm;

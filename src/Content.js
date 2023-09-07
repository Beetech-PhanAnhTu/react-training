import { useContext, useEffect, useState } from "react";
import { chatContext, useChat } from "./context";


function Content() {

    const [state, dispatch] = useChat();
    const {message, messages} = state;
    return (
        <div>
          <h3>Message</h3>
          <input 
              placeholder="Enter"
              value={message}
              
            />
            {/* <h3>To do</h3>
            <input 
              value={job}
              placeholder="Enter todo..."
              onChange={(e) => {
                dispatch(setJob(e.target.value));
              }}
            />
          <ul>
            {jobs.map((j, index) => (
              <li key={index}>{j} <span onClick={() => {dispatch(removeJob(index))}}>&times;</span></li>
            ))}
          </ul> */}
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message} <span>&times;</span></li>
                ))}
            </ul>
            <button>Bam</button>
        </div>
    )
}

export default Content;
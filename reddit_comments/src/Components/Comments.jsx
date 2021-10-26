import { useEffect, useState } from "react";
import App from "../App";

export const Comments = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [body, setBody] = useState("");
  const [obj, setObj] = useState(data);

  //   useEffect(() => {}, []);

  const handleAdd = (data) => {
    let updated = { ...data };

    const payload = {
      id: Math.floor(Math.random() * 30),
      author: "Bharadwaj",
      body: body,
      timestamp: Date().split(" ")[4],
      points: 10,
    };
    if (updated.replies) {
      updated.replies.push(payload);
    } else {
      updated.replies = [payload];
    }
    setObj(updated);
    setBody("");
  };

  const getTime = (time) => {
    let now = Date().split(" ")[4].split(":");
    time = time.split(":");

    if (time[0] < now[0]) {
      let hrs = now[0] - time[0];
      let x = hrs === 1 ? " hour" : " hours";
      return hrs + x;
    }
    if (time[2] < now[2]) {
      let diff = Math.abs(Number(now[2]) - Number(time[2]));
      console.log(diff);
      return diff + " sec";
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <p>
          {obj.author} {obj.points} points,{" "}
          {getTime(obj.timestamp) || "few seconds"} ago
        </p>
      </div>
      <h3>{obj.body}</h3>
      <div
        style={{
          display: "flex",
          width: "300px",
          justifyContent: "space-around",
          cursor: "pointer",
        }}
      >
        <p onClick={() => setIsOpen(!isOpen)}>reply</p>
        <p>Give award</p>
        <p>Share</p>
        <p>Report</p>
        <p>Save</p>
      </div>
      {isOpen && (
        <div style={{ display: "flex", marginLeft: "5px" }}>
          <input
            onChange={(e) => setBody(e.target.value)}
            type="text"
            name=""
            id=""
            placeholder="What's on Your mind"
            value={body}
          />
          <button onClick={() => handleAdd(obj)}> Add </button>
        </div>
      )}

      {obj.replies &&
        obj.replies.map((el) => (
          <div key={el.id} style={{ marginLeft: "20px" }}>
            <App mock={el} />
          </div>
        ))}
    </div>
  );
};

/**
 * 
 * id: "001",
author: "albert",
body: "Whats the status?",
timestamp: "Sun Aug 02 2020 18:08:45 GMT+0530",
points: "2",
 */

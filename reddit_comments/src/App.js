import "./App.css";
import { Comments } from "./Components/Comments";

let data = {
  id: "001",
  author: "albert",
  body: "Whats the status?",
  timestamp: "18:08:45 ",
  points: "2",
  replies: [
    {
      id: "003",
      author: "haren",
      body: "Wrote the test suites, waiting for approval?",
      timestamp: "18:12:45 ",
      points: "3",
      replies: [
        {
          id: "004",
          author: "albert",
          body: "Thanks for the update!",
          timestamp: "18:15:45 ",
          points: "8",
        },
      ],
    },
    {
      id: "002",
      author: "Nrupul",
      body: "looking forward for the demo!",
      timestamp: "18:10:45 ",
      points: "2",
    },
  ],
};

function App({ mock }) {
  mock = mock || data;
  return <div className="App">{mock && <Comments data={mock} />}</div>;
}

export default App;

/*


*/

import "./App.css";
import TypingText from "./components/TypingTest";
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <div className="">
      <TypingText />
      <Analytics/>
    </div>
  );
}

export default App;

import { useState, useRef } from "react";
import {
  getRandomSentence,
  calculateWpm,
  calculateAccuracy,
} from "../utils/typingHelpers";
import { sentences } from "../data/sentences";
import CharacterDisplay from "./CharacterDisplay";
import ResultCard from "./ResultCard";
import RestartButton from "./RestartButton";

function TypingText() {
  const [typedText, setTypedText] = useState("");
  const [targetText, setTargetText] = useState(() =>
    getRandomSentence(sentences),
  );
  const characters = targetText.split("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(null);
  const [accuracy, setAccuracy] = useState(null);
  const inputRef = useRef(null);
  const [totalTyped, setTotalTyped] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);

  function restart() {
    setTargetText(getRandomSentence(sentences));
    setTypedText("");
    setStartTime(null);
    setWpm(null);
    setAccuracy(null);
    setTotalTyped(0);
    setTotalCorrect(0);
    setTimeout(() => inputRef.current.focus(), 0);
  }

  return (
    <div
      className="font-mono text-2xl tracking-wide relative min-h-screen p-8 bg-neutral-900 text-white flex flex-col items-center justify-center"
      onClick={() => {
        setTimeout(() => inputRef.current.focus(), 0);
      }}
    >
      <CharacterDisplay characters={characters} typedText={typedText} />
      <input
        ref={inputRef}
        onChange={(e) => {
          const value = e.target.value;

          let newTotalTyped = totalTyped;
          let newTotalCorrect = totalCorrect;

          if (value.length > typedText.length) {
            const newCharIndex = value.length - 1;
            const newChar = value[newCharIndex];
            const expectedChar = targetText[newCharIndex];

            newTotalTyped = totalTyped + 1;
            setTotalTyped(newTotalTyped);

            if (newChar === expectedChar) {
              newTotalCorrect = totalCorrect + 1;
              setTotalCorrect(newTotalCorrect);
            }
          }

          if (startTime === null) {
            setStartTime(Date.now());
          }

          if (value.length === targetText.length) {
            const endTime = Date.now();
            const calculatedWpm = calculateWpm(value.length, startTime, endTime);
            setWpm(calculatedWpm);

            const calculatedAccuracy = calculateAccuracy(newTotalCorrect, newTotalTyped);
            setAccuracy(calculatedAccuracy);
          }

          setTypedText(value);
        }}
        type="text"
        value={typedText}
        className="absolute opacity-0 border border-black"
        autoFocus
      />
      <ResultCard wpm={wpm} accuracy={accuracy} />
      <RestartButton onRestart={restart} />
    </div>
  );
}

export default TypingText;
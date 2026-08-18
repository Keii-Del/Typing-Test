import { getCharClass } from "../utils/typingHelpers";

function CharacterDisplay({ characters, typedText }) {
  return (
    <div className="max-w-3xl flex flex-wrap">
      {characters.map((x, z) => {
        const isCurrent = z === typedText.length;
        return (
          <span
            key={z}
            className={`${getCharClass(x, z, typedText)} whitespace-pre ${
              isCurrent ? "border-l-2 border-yellow-400 animate-pulse" : ""
            }`}
          >
            {x}
          </span>
        );
      })}
    </div>
  );
}

export default CharacterDisplay;
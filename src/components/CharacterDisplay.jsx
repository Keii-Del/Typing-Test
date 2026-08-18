import { getCharClass } from "../utils/typingHelpers";

function CharacterDisplay({ characters, typedText }) {
  const words = [];
  let currentWord = [];

  characters.forEach((char) => {
    if (char === " ") {
      words.push(currentWord);
      currentWord = [];
    } else {
      currentWord.push(char);
    }
  });
  words.push(currentWord);

  let globalIndex = 0;

  return (
    <div className="max-w-3xl flex flex-wrap">
      {words.map((word, wordIndex) => {
        const isLastWord = wordIndex === words.length - 1;

        return (
          <span key={wordIndex} className="inline-flex">
            {word.map((x) => {
              const z = globalIndex;
              globalIndex++;
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

            {!isLastWord &&
              (() => {
                const z = globalIndex;
                globalIndex++;
                const isCurrent = z === typedText.length;
                return (
                  <span
                    key={`space-${wordIndex}`}
                    className={`${getCharClass(" ", z, typedText)} whitespace-pre ${
                      isCurrent ? "border-l-2 border-yellow-400 animate-pulse" : ""
                    }`}
                  >
                    {" "}
                  </span>
                );
              })()}
          </span>
        );
      })}
    </div>
  );
}

export default CharacterDisplay;
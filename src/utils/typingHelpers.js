export function getRandomSentence(sentences) {
  return sentences[Math.floor(Math.random() * sentences.length)];
}

export function getCharClass(x, z, typedText) {
  if (z >= typedText.length) {
    return "text-neutral-600";
  } else if (x === typedText[z]) {
    return "text-neutral-100";
  } else {
    if (x === " ") {
      return "bg-red-400";
    }
    return "text-red-400";
  }
}

export function calculateWpm(charCount, startTime, endTime) {
  const minutes = (endTime - startTime) / 1000 / 60;
  const words = charCount / 5;
  return Math.round(words / minutes);
}

export function calculateAccuracy(correctCount, totalCount) {
  return Math.round((correctCount / totalCount) * 100);
}
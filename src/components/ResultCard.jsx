function ResultCard({ wpm, accuracy }) {
  return (
    <div>
      {wpm !== null && (
        <div className="mt-6 text-center">
          <p className="text-5xl font-bold text-yellow-400">{wpm}</p>
          <p className="text-neutral-400 text-sm uppercase tracking-widest">
            WPM
          </p>
        </div>
      )}
      {accuracy !== null && (
        <div className="mt-2 text-center">
          <p className="text-2xl text-neutral-300">{accuracy}%</p>
          <p className="text-neutral-500 text-xs uppercase tracking-widest">
            Accuracy
          </p>
        </div>
      )}
    </div>
  );
}

export default ResultCard;
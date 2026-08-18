function RestartButton({ onRestart }) {
  return (
    <button
      onClick={onRestart}
      className="mt-6 px-6 py-2 bg-neutral-800 text-neutral-200 rounded-lg border border-neutral-700 hover:bg-neutral-700 hover:text-white transition-colors"
    >
      Restart
    </button>
  );
}

export default RestartButton;
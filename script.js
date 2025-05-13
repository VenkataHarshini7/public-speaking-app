const tips = [
  "Pause instead of using filler words like 'uh' or 'um'.",
  "Speak slowly to emphasize important ideas.",
  "Maintain eye contact with your audience.",
  "Use rising intonation for questions and falling for statements.",
  "Record your speech to analyze vocal variety."
];

function showTip() {
  const randomIndex = Math.floor(Math.random() * tips.length);
  document.getElementById("tip-box").textContent = tips[randomIndex];
}
function simulateRecording() {
  const msg = document.getElementById("recording-msg");
  msg.innerText = "🎤 Recording... (simulated)";
  setTimeout(() => {
    msg.innerText = "✅ Recording complete! You can now proceed to assessment.";
  }, 3000);
}

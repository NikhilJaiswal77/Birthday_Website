function showMessage() {
    alert("🎉 Have an amazing year ahead filled with love, laughter, and success! 🎂🎈");
  }

  // Generate confetti
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    confetti.style.animationDelay = Math.random() + 's';
    document.body.appendChild(confetti);
  }

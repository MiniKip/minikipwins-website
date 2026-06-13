// hire button runs away
document.getElementById('hire').onmouseenter = function() {
  if (Math.random() > 0.5) {
    this.style.position = 'fixed';
    this.style.left = Math.random() * (innerWidth - 200) + 'px';
    this.style.top = Math.random() * (innerHeight - 100) + 'px';
  }
};
document.getElementById('hire').onclick = function() {
  document.getElementById('nope').style.display = 'block';
  this.textContent = 'STOP';
  setTimeout(() => { this.textContent = 'Hire Me (Please?)'; }, 1500);
};

// face dance + beep
document.getElementById('kip').onclick = function() {
  const moves = ['rotate(10deg)','rotate(-10deg)','rotate(20deg)','rotate(-20deg)','rotate(360deg)'];
  let i = 0;
  const d = setInterval(() => {
    this.style.transform = moves[i % moves.length];
    i++;
    if (i > 10) { clearInterval(d); this.style.transform = ''; }
  }, 120);
  const a = new (AudioContext || webkitAudioContext)();
  const o = a.createOscillator();
  const g = a.createGain();
  o.type = 'square'; o.frequency.value = 400;
  g.gain.value = 0.1; g.gain.exponentialRampToValueAtTime(0.001, a.currentTime + 0.3);
  o.connect(g); g.connect(a.destination); o.start(); o.stop(a.currentTime + 0.3);
};

// fake social links
window.egg = function() {
  alert(['You really thought?','Imagine clicking again','This link goes nowhere','🦐'][Math.floor(Math.random() * 4)]);
};

// form yeet
document.getElementById('frm').onsubmit = function(e) {
  e.preventDefault();
  document.getElementById('void').style.display = 'block';
  this.reset();
  setTimeout(() => document.getElementById('void').style.display = 'none', 2500);
};

// skill bars fill on scroll
const bars = document.querySelectorAll('.fill');
new IntersectionObserver((e) => {
  e.forEach(entry => {
    if (entry.isIntersecting) {
      const w = entry.target.style.width;
      entry.target.style.width = '0';
      setTimeout(() => entry.target.style.width = w, 100);
    }
  });
}).observe(document.querySelector('.skill'));

// console troll :>
console.log('%c🦐 MiniKip loaded. You are now part of the cult.', 'font-size:16px;color:#ff6b6b;font-weight:bold;');
console.log('%cThere is no escape.', 'font-size:12px;color:#ffd93d;');

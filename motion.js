/* Bottom Dollar motion: plays each animation once when it scrolls into view.
   The head script only adds .motion when the visitor allows motion.
   Without JS, or with reduced motion, everything shows in its final state. */
(function () {
  var root = document.documentElement;
  clearTimeout(window.__bdFailsafe);
  if (!root.classList.contains('motion')) return;

  /* Hero thread: step 1 at 0.2s, step 2 at 1.1s, step 3 at 2.0s */
  function playThread(phone) {
    phone.querySelectorAll('[data-step]').forEach(function (el) {
      var step = parseInt(el.getAttribute('data-step'), 10) || 1;
      setTimeout(function () { el.classList.add('shown'); }, 200 + (step - 1) * 900);
    });
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('play');
      if (entry.target.classList.contains('phone')) playThread(entry.target);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.35 });

  document.querySelectorAll('[data-play]').forEach(function (el) { io.observe(el); });
})();

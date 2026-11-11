/* Bottom Dollar motion: plays each animation once when it scrolls into view.
   The head script only adds .motion when the visitor allows motion.
   Without JS, or with reduced motion, everything shows in its final state. */
(function () {
  var root = document.documentElement;
  clearTimeout(window.__bdFailsafe);
  if (!root.classList.contains('motion')) return;

  var targets = document.querySelectorAll('[data-play]');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('play');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.35 });

  targets.forEach(function (el) { io.observe(el); });
})();

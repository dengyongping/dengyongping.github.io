// 页脚年份
document.getElementById('year').textContent = new Date().getFullYear();

// 区块滚动淡入
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// 导航当前区块高亮
const navLinks = new Map(
  [...document.querySelectorAll('.nav-links a[href^="#"]')]
    .map((a) => [a.getAttribute('href').slice(1), a])
);
const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const link = navLinks.get(entry.target.id);
    if (link && entry.isIntersecting) {
      navLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
document.querySelectorAll('main section[id]').forEach((s) => spyObserver.observe(s));

/* ============================================================
   Asibur Rahman Bappy — Portfolio script
   ============================================================ */
(function () {
  'use strict';

  // Helpers
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Nav height for spacer/progress ----
  const topNav = $('#topNav');
  function setNavHeight() {
    const h = topNav?.offsetHeight || 68;
    document.documentElement.style.setProperty('--navH', h + 'px');
  }
  window.addEventListener('load', setNavHeight);
  addEventListener('resize', setNavHeight);

  // ---- Reading progress bar ----
  const progress = $('#progress');
  const setProgress = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const scrolled = max > 0 ? h.scrollTop / max : 0;
    progress.style.width = (scrolled * 100).toFixed(2) + '%';
  };
  document.addEventListener('scroll', setProgress, { passive: true });
  setProgress();

  // ---- Reveal on scroll ----
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: .18 });
  $$('.reveal').forEach(el => io.observe(el));

  // ---- Theme (single source of truth) ----
  const root = document.documentElement;
  const themeToggle = $('#themeToggle');
  const themeIcon = $('#themeIcon');

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    // When in dark mode, show a SUN icon (click to go light).
    // When in light mode, show a MOON icon (click to go dark).
    if (themeIcon) {
      themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
    // Update theme-color meta
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#070a12' : '#f1f5fa');
  }

  // Initial theme: saved → system preference → dark
  (function initTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  })();

  themeToggle?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  // Sync with system theme changes if user hasn't set a preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  // ---- Typing effect (cycles through multiple roles) ----
  const typingTarget = document.getElementById('typing');
  const roles = [
    'EEE Engineer',
    'VLSI Design Enthusiast',
    'Embedded Systems Developer',
    'Electronics Researcher',
  ];

  let roleIdx = 0, charIdx = 0, deleting = false;

  function typeLoop() {
    if (!typingTarget) return;
    const word = roles[roleIdx % roles.length];

    if (!deleting) {
      typingTarget.textContent = word.slice(0, ++charIdx);
      if (charIdx === word.length) {
        deleting = true;
        setTimeout(typeLoop, 1800);
        return;
      }
    } else {
      typingTarget.textContent = word.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx++;
      }
    }
    setTimeout(typeLoop, deleting ? 45 : 85);
  }
  if (!prefersReduced) typeLoop();
  else if (typingTarget) typingTarget.textContent = roles[0];

  // ---- Mobile FAB quick menu ----
  const mobileFab = $('#mobileFab');
  const fabPanel = $('#fabPanel');
  const toggleFab = (state) => {
    const open = state ?? !fabPanel.classList.contains('open');
    fabPanel.classList.toggle('open', open);
    mobileFab.setAttribute('aria-expanded', open ? 'true' : 'false');
  };
  mobileFab?.addEventListener('click', (e) => { e.stopPropagation(); toggleFab(); });
  document.addEventListener('click', e => {
    if (fabPanel && !fabPanel.contains(e.target) && e.target !== mobileFab && !mobileFab.contains(e.target)) {
      toggleFab(false);
    }
  }, { passive: true });
  fabPanel?.addEventListener('click', e => {
    if (e.target.matches('a')) toggleFab(false);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') toggleFab(false);
  });

  // ---- Buttons ripple ----
  document.addEventListener('click', e => {
    const btn = e.target.closest('.btn');
    if (!btn) return;
    const r = document.createElement('span');
    r.className = 'ripple';
    const rect = btn.getBoundingClientRect();
    r.style.left = (e.clientX - rect.left) + 'px';
    r.style.top = (e.clientY - rect.top) + 'px';
    btn.appendChild(r);
    setTimeout(() => r.remove(), 900);
  });

  // ---- Toast ----
  const toastEl = $('#toast');
  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toastEl.classList.remove('show'), 2200);
  }

  // ---- Back to top ----
  const toTop = $('#toTop');
  const onScrollTop = () => toTop?.classList.toggle('show', window.scrollY > 600);
  document.addEventListener('scroll', onScrollTop, { passive: true });
  onScrollTop();
  toTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' }));

  // ---- Custom cursor + background parallax (desktop only) ----
  const cursor = $('#cursor');
  const bgVideo = $('#bgVideo');
  let cx = innerWidth / 2, cy = innerHeight / 2, tx = cx, ty = cy;
  const loop = () => {
    cx += (tx - cx) * .14;
    cy += (ty - cy) * .14;
    if (cursor) cursor.style.transform = `translate(${cx}px, ${cy}px)`;
    if (bgVideo) {
      const dx = (cx - innerWidth / 2) * .04;
      const dy = (cy - innerHeight / 2) * .04;
      bgVideo.style.transform = `translate(-50%, -50%) translate(${dx}px, ${dy}px) scale(1.12)`;
    }
    requestAnimationFrame(loop);
  };
  if (!prefersReduced && matchMedia('(pointer: fine)').matches) {
    requestAnimationFrame(loop);
    addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; }, { passive: true });
  }

  // ---- Parallax for hero elements ----
  const parEls = $$('[data-parallax]');
  let ticking = false;
  const runParallax = () => {
    const vhMid = scrollY + innerHeight * .5;
    parEls.forEach(el => {
      const speed = parseFloat(el.dataset.parallax || '0.03');
      const rect = el.getBoundingClientRect();
      const elMid = scrollY + rect.top + rect.height * .5;
      const delta = (elMid - vhMid) * speed;
      const dy = Math.max(-24, Math.min(24, -delta));
      el.style.transform = `translate3d(0, ${dy.toFixed(1)}px, 0)`;
    });
    ticking = false;
  };
  const onScrollPar = () => {
    if (!ticking) { ticking = true; requestAnimationFrame(runParallax); }
  };
  if (!prefersReduced && parEls.length) {
    document.addEventListener('scroll', onScrollPar, { passive: true });
    addEventListener('resize', runParallax);
    runParallax();
  }

  // ---- Tilt effect for cards (desktop only) ----
  const tilts = $$('.card.tilt');
  if (matchMedia('(pointer: fine)').matches && !prefersReduced) {
    tilts.forEach(card => {
      let raf = 0;
      const onMove = e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        if (!raf) raf = requestAnimationFrame(() => {
          const rx = (.5 - y) * 6;
          const ry = (x - .5) * 8;
          card.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateZ(0)`;
          raf = 0;
        });
      };
      const reset = () => { card.style.transform = ''; };
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', reset);
    });
  }

  // ---- Nav scroll spy + indicator ----
  const navLinks = $$('#navlinks a');
  const navIndicator = $('#navIndicator');
  const sectionIds = ['home', 'profile', 'experience', 'skills', 'projects', 'education', 'reference', 'contact'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  function updateActive() {
    const navH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--navH')) || 72;
    const y = scrollY + navH + 80;
    let current = sections[0]?.id || 'home';
    sections.forEach(s => {
      const top = s.getBoundingClientRect().top + scrollY;
      if (y >= top) current = s.id;
    });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
    const active = $('#navlinks a.active');
    const navlinksEl = $('#navlinks');
    if (active && navlinksEl) {
      const r = active.getBoundingClientRect();
      const c = navlinksEl.getBoundingClientRect();
      navIndicator.style.width = r.width + 'px';
      navIndicator.style.transform = `translateX(${r.left - c.left}px)`;
    }
  }
  document.addEventListener('scroll', updateActive, { passive: true });
  addEventListener('resize', () => { setNavHeight(); updateActive(); });
  updateActive();

  // ---- Hover highlight that follows cursor ----
  const popEls = $$('.panel, .card, .tl-card, .contact-item');
  if (matchMedia('(pointer: fine)').matches) {
    popEls.forEach(el => {
      let raf = 0;
      const move = e => {
        const r = el.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width * 100).toFixed(2) + '%';
        const y = ((e.clientY - r.top) / r.height * 100).toFixed(2) + '%';
        if (!raf) raf = requestAnimationFrame(() => {
          el.style.setProperty('--hx', x);
          el.style.setProperty('--hy', y);
          raf = 0;
        });
      };
      el.addEventListener('mousemove', move);
      el.addEventListener('mouseleave', () => {
        el.style.removeProperty('--hx');
        el.style.removeProperty('--hy');
      });
    });
  }

  // ---- Preloader hide ----
  function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    preloader.classList.add('hide');
    setTimeout(() => { preloader.style.display = 'none'; }, 500);
  }
  window.addEventListener('load', hidePreloader);
  // Safety: hide after 3s no matter what
  setTimeout(hidePreloader, 3000);

  // ---- Background video ----
  bgVideo?.addEventListener('loadeddata', () => bgVideo.classList.add('ready'));
  if (prefersReduced) {
    try { bgVideo?.pause(); } catch (_) {}
    bgVideo?.removeAttribute('autoplay');
  }

  // ---- Footer year ----
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Contact form validation ----
  const form = $('#contactForm');
  const formStatus = $('#formStatus');

  function setFieldError(input, hasError) {
    const field = input.closest('.field');
    if (field) field.classList.toggle('invalid', hasError);
  }

  function validateField(input) {
    const value = input.value.trim();
    let valid = value !== '';
    if (valid && input.type === 'email') {
      valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    setFieldError(input, !valid);
    return valid;
  }

  if (form) {
    // Live validation after first blur
    form.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        const field = input.closest('.field');
        if (field?.classList.contains('invalid')) validateField(input);
      });
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const inputs = Array.from(form.querySelectorAll('input[required], textarea[required]'));
      const allValid = inputs.map(validateField).every(Boolean);

      if (!allValid) {
        if (formStatus) {
          formStatus.textContent = 'Please fill in all required fields correctly.';
          formStatus.className = 'form__status error';
        }
        const firstInvalid = form.querySelector('.field.invalid input, .field.invalid textarea');
        firstInvalid?.focus();
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn?.innerHTML;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Sending…';
      }
      if (formStatus) {
        formStatus.textContent = 'Sending your message…';
        formStatus.className = 'form__status';
      }

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });

        if (response.ok) {
          if (formStatus) {
            formStatus.textContent = 'Thank you! Your message has been sent.';
            formStatus.className = 'form__status success';
          }
          form.reset();
          showToast('Message sent successfully!');
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (err) {
        if (formStatus) {
          formStatus.textContent = 'Sorry, something went wrong. Please try again or email me directly.';
          formStatus.className = 'form__status error';
        }
        showToast('Failed to send message. Please email me directly.');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }
    });
  }

  // ---- AOS init ----
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-quad',
      once: true,
      offset: 100,
      disable: prefersReduced
    });
  }
})();

(() => {
  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];

  document.documentElement.classList.add('js');
  $('[data-year]').textContent = new Date().getFullYear();

  const progress = $('.scroll-progress span');
  const header = $('[data-nav]');
  const sections = ['manifesto','awakening','works','scripture','listen'].map(id => document.getElementById(id));
  const navLinks = $$('.nav-link');

  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    const p = max > 0 ? scrollY / max : 0;
    progress.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
    header.classList.toggle('is-scrolled', scrollY > 24);

    let current = '';
    for (const section of sections) {
      if (section && section.getBoundingClientRect().top <= innerHeight * .38) current = section.id;
    }
    navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${current}`));
  };
  addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold:.12, rootMargin:'0px 0px -6% 0px' });
  $$('.reveal').forEach(el => io.observe(el));

  const cursor = $('.cursor-halo');
  if (matchMedia('(pointer:fine)').matches) {
    let tx = innerWidth/2, ty = innerHeight/2, x = tx, y = ty;
    addEventListener('mousemove', e => { tx=e.clientX; ty=e.clientY; cursor.style.opacity='1'; }, {passive:true});
    const tick = () => {
      x += (tx-x)*.16; y += (ty-y)*.16;
      cursor.style.left = `${x}px`; cursor.style.top = `${y}px`;
      requestAnimationFrame(tick);
    };
    tick();
    $$('a,button,[data-tilt]').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('is-active'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('is-active'));
    });
  }

  if (matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    $$('.magnetic').forEach(el => {
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left+r.width/2);
        const dy = e.clientY - (r.top+r.height/2);
        el.style.transform = `translate(${dx*.09}px,${dy*.11}px)`;
      });
      el.addEventListener('mouseleave', () => el.style.transform = '');
    });

    $$('[data-parallax]').forEach(el => {
      const amount = parseFloat(el.dataset.parallax || '.04');
      addEventListener('scroll', () => {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) return;
        el.style.translate = `0 ${((r.top - innerHeight/2) * amount).toFixed(2)}px`;
      }, {passive:true});
    });
  }

  const tilts = $$('[data-tilt]');
  if (tilts.length && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    tilts.forEach(tilt => {
      tilt.addEventListener('mousemove', e => {
        const r = tilt.getBoundingClientRect();
        const px = (e.clientX-r.left)/r.width;
        const py = (e.clientY-r.top)/r.height;
        tilt.style.transform = `perspective(1100px) rotateX(${(0.5-py)*3.2}deg) rotateY(${(px-0.5)*4.2}deg)`;
        tilt.style.setProperty('--mx', `${px*100}%`);
        tilt.style.setProperty('--my', `${py*100}%`);
      });
      tilt.addEventListener('mouseleave', () => tilt.style.transform='');
    });
  }

  const cards = $$('.canon-card');
  const responseNumber = $('.canon-response__number');
  const responseLabel = $('.canon-response__label');
  const responseCopy = $('.canon-response__copy');
  cards.forEach((card, index) => card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('is-active'));
    card.classList.add('is-active');
    responseNumber.textContent = String(index + 1).padStart(2,'0');
    responseLabel.textContent = card.dataset.label;
    responseCopy.animate([{opacity:.18,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:360,easing:'cubic-bezier(.22,.78,.22,1)'});
    responseCopy.textContent = card.dataset.copy;
  }));

  const toggle = $('.menu-toggle');
  const menu = $('#mobile-menu');
  const setMenu = open => {
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  $$('#mobile-menu a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
})();

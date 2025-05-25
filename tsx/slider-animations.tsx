// slider‑animations.tsx

function injectSliderAnimation() {
    // 1. Grab the slider element
    const slider = document.querySelector('.header .slider') as HTMLElement | null;
    if (!slider) return;

    // 2. Measure its width
    const sliderWidth = slider.clientWidth;

    // 3. Compute start/end positions
    const startPx = sliderWidth;    // starts just off the right edge
    const endPx   = -sliderWidth;   // ends just off the left edge

    // 4. Build & inject the CSS
    const css = `
    @keyframes autoRun {
      from { left: ${startPx}px; }
      to   { left: ${endPx}px; }
    }

    .header .slider .list .item {
      animation: autoRun var(--duration) linear infinite;
      animation-delay: calc((var(--duration) / var(--quantity)) * var(--position));
    }

    .header .slider:hover .item {
      animation-play-state: paused !important;
    }
  `;

    let styleEl = document.getElementById('slider-anim-style') as HTMLStyleElement;
    if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'slider-anim-style';
        document.head.appendChild(styleEl);
    }
    styleEl.textContent = css;
}

// Re‑inject on load & resize
window.addEventListener('load',   injectSliderAnimation);
window.addEventListener('resize', injectSliderAnimation);

export {};  // satisfy TS

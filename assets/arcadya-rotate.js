/* ARCADYA — landscape rotation prompt.
 * Tiny shared module loaded by every game. Injects an overlay that becomes
 * visible only when the device is in small landscape (phones in landscape).
 * No JS logic needed — pure CSS media query handles the visibility. */
(function(){
  if (document.getElementById('arcadya-rotate-prompt')) return;
  const css = `
    #arcadya-rotate-prompt {
      display: none;
      position: fixed; inset: 0;
      background: #05010f;
      z-index: 99998;
      align-items: center; justify-content: center;
      flex-direction: column;
      gap: 18px;
      padding: 24px;
      text-align: center;
    }
    .arcadya-rot-icon {
      width: 70px; height: 70px;
      border: 3px solid #00e6ff;
      border-radius: 12px;
      position: relative;
      animation: arcadyaRotateAnim 2.4s infinite ease-in-out;
      box-shadow: 0 0 18px rgba(0,230,255,0.6);
    }
    .arcadya-rot-icon::before {
      content: ''; position: absolute;
      top: 6px; left: 50%; transform: translateX(-50%);
      width: 18px; height: 3px; border-radius: 2px;
      background: #00e6ff;
    }
    .arcadya-rot-icon::after {
      content: ''; position: absolute;
      bottom: 6px; left: 50%; transform: translateX(-50%);
      width: 8px; height: 8px; border-radius: 50%;
      background: #00e6ff;
    }
    @keyframes arcadyaRotateAnim {
      0%, 100% { transform: rotate(0); }
      25% { transform: rotate(-90deg); }
      50% { transform: rotate(-90deg); }
      75% { transform: rotate(0); }
    }
    .arcadya-rot-text { color: #fff; font-size: 18px; font-weight: 800; letter-spacing: 2px; }
    .arcadya-rot-sub  { color: #a79ec9; font-size: 13px; }
    @media (orientation: landscape) and (max-height: 500px) {
      #arcadya-rotate-prompt { display: flex; }
    }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
  const div = document.createElement('div');
  div.id = 'arcadya-rotate-prompt';
  div.innerHTML = '<div class="arcadya-rot-icon"></div>' +
    '<div class="arcadya-rot-text">סובב את המכשיר</div>' +
    '<div class="arcadya-rot-sub">ARCADYA מותאם למצב אנכי</div>';
  document.body.appendChild(div);
})();

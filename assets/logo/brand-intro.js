function initBrandIntro(config) {
  var mode = config.mode || 'once';
  var storageKey = config.storageKey || 'brand_intro_seen';
  var duration = config.duration || 7000;
  var onComplete = config.onComplete || function() {};
  if (mode === 'off') { onComplete(); return; }
  if (mode === 'once' && localStorage.getItem(storageKey)) { onComplete(); return; }
  var style = document.createElement('style');
  style.textContent = '#brand-intro-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:#1A1A1E;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;opacity:1;transition:opacity 0.6s ease-in;}#brand-intro-overlay.fade-out{opacity:0;}.brand-intro-logo{display:flex;align-items:baseline;font-family:Segoe UI,system-ui,-apple-system,sans-serif;font-weight:600;font-size:56px;letter-spacing:7px;color:#E8E8EC;}.brand-intro-letter-a{opacity:0;animation:brandFadeIn 0.8s ease-out 0.4s forwards;}.brand-intro-letter-i{opacity:0;display:inline-block;overflow:hidden;font-size:54px;animation:brandFadeIn 0.8s ease-out 0.4s forwards,brandFadeOutI 1s ease-in-out 2.0s forwards;}.brand-intro-letters-ttas{opacity:0;animation:brandSlideTTAS 1s ease-out 3.0s forwards;}.brand-intro-line{position:absolute;bottom:calc(50% - 40px);left:50%;transform:translateX(-50%);width:0;height:1px;background:#38BDF8;animation:brandLineGrow 0.6s ease-out 3.8s forwards,brandLineFade 0.4s ease-in 6.2s forwards;}.brand-intro-tagline{position:absolute;bottom:calc(50% - 65px);font-family:Segoe UI,system-ui,sans-serif;font-size:13px;letter-spacing:4px;color:#555;opacity:0;animation:brandFadeIn 0.5s ease-out 4.0s forwards,brandTagFade 0.4s ease-in 6.2s forwards;}@keyframes brandFadeIn{0%{opacity:0;filter:blur(3px);}100%{opacity:1;filter:blur(0);}}@keyframes brandFadeOutI{0%{opacity:1;max-width:40px;letter-spacing:7px;}50%{opacity:0;max-width:40px;}100%{opacity:0;max-width:0;letter-spacing:0;padding:0;margin:0;}}@keyframes brandSlideTTAS{0%{opacity:0;filter:blur(2px);transform:translateX(-10px);}100%{opacity:1;filter:blur(0);transform:translateX(0);}}@keyframes brandLineGrow{0%{width:0;opacity:0;}100%{width:50px;opacity:0.4;}}@keyframes brandLineFade{0%{opacity:0.4;}100%{opacity:0;}}@keyframes brandTagFade{0%{opacity:1;}100%{opacity:0;}}';
  document.head.appendChild(style);
  var overlay = document.createElement('div');
  overlay.id = 'brand-intro-overlay';
  overlay.innerHTML = '<div class="brand-intro-logo"><span class="brand-intro-letters-ttas">TTAS</span><span class="brand-intro-letter-i">i</span><span class="brand-intro-letter-a">A</span></div><div class="brand-intro-line"></div><div class="brand-intro-tagline">DIGITAL PRODUCTS</div>';
  document.body.appendChild(overlay);
  setTimeout(function() { overlay.classList.add('fade-out'); setTimeout(function() { overlay.remove(); style.remove(); if (mode === 'once') { localStorage.setItem(storageKey, 'true'); } onComplete(); }, 600); }, duration - 600);
}

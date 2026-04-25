/* ARCADYA — shared JS shell.
 * Exposes window.ARCADYA with:
 *   - $(id):          shorthand for getElementById
 *   - audio.beep():   primitive Web Audio tone (respects mute state)
 *   - audio.muted():  true if globally muted
 *   - audio.toggle(): flip mute state, persists in localStorage
 *   - makeSFX(extras): build a sound-effects object with common click/open
 *                      tones plus any game-specific functions in `extras`.
 *                      Each game function receives `beep` for use.
 *   - exitToHome(): navigates back to the main menu (with ?home=1 flag).
 */
(function(){
  const $ = id => document.getElementById(id);

  let ctx = null;
  let muted = (function(){
    try { return localStorage.getItem('arcadya_sound_enabled') === 'false'; }
    catch(e){ return false; }
  })();

  function ensureCtx(){
    if(!ctx){
      try { ctx = new (window.AudioContext || window.webkitAudioContext)(); }
      catch(e){ ctx = null; }
    }
  }

  function beep(freq=440, dur=0.08, type='square', vol=0.12){
    if(muted) return;
    ensureCtx();
    if(!ctx) return;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.value = freq; g.gain.value = vol;
    o.connect(g).connect(ctx.destination);
    const t = ctx.currentTime;
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.start(t); o.stop(t + dur + 0.02);
  }

  /* Build a per-game SFX object with shared base sounds and game extras.
   * `extras` is an object whose values are functions: (beep) => void.
   * Each extra is wrapped so it can call beep(...) directly.            */
  function makeSFX(extras){
    const base = {
      click(){ beep(520, 0.03, 'square', 0.06); },
      open(){
        beep(440, 0.08, 'square', 0.09);
        setTimeout(()=>beep(660, 0.08, 'square', 0.09), 90);
        setTimeout(()=>beep(880, 0.10, 'square', 0.09), 180);
      },
      isMuted(){ return muted; },
      toggle(){
        muted = !muted;
        try { localStorage.setItem('arcadya_sound_enabled', muted ? 'false' : 'true'); }
        catch(e){}
        return muted;
      }
    };
    if(extras){
      for(const key of Object.keys(extras)){
        const fn = extras[key];
        base[key] = function(){ return fn.apply(null, [beep].concat([].slice.call(arguments))); };
      }
    }
    return base;
  }

  function exitToHome(){
    window.location.href = '../index.html?home=1';
  }

  window.ARCADYA = { $, beep, makeSFX, exitToHome,
    isMuted: () => muted,
    toggleMute: () => {
      muted = !muted;
      try { localStorage.setItem('arcadya_sound_enabled', muted ? 'false' : 'true'); }
      catch(e){}
      return muted;
    }
  };
})();

/* ARCADYA — registry of all games in the pack.
 * Each entry:
 *   id:        short unique id (also used for localStorage high-score key)
 *   name:      display name (shown on menu card)
 *   icon:      emoji/glyph shown on the card
 *   color:     neon accent color used for card glow
 *   file:      HTML file under /games/
 *   available: true once the game is implemented; false renders a "בקרוב" tile
 */
const ARCADYA_GAMES = [
  { id: 'snake',      name: 'SNAKE',      icon: '🐍', color: '#3dff9a', file: 'snake.html',      available: true  },
  { id: 'pong',       name: 'PONG',       icon: '🏓', color: '#00e6ff', file: 'pong.html',        available: true  },
  { id: 'invaders',   name: 'INVADERS',   icon: '👾', color: '#b14bff', file: 'invaders.html',    available: true  },
  { id: 'pacman',     name: 'PAC-MAN',    icon: '🟡', color: '#ffe94a', file: 'pacman.html',      available: true  },
  { id: 'tetris',     name: 'TETRIS',     icon: '🧱', color: '#ff2d95', file: 'tetris.html',      available: true  },
  { id: 'frogger',    name: 'FROGGER',    icon: '🐸', color: '#3dff9a', file: 'frogger.html',     available: true  },
  { id: 'dkong',      name: 'D.KONG',     icon: '🦍', color: '#ff8a3d', file: 'dkong.html',       available: true  },
  { id: 'pinball',    name: 'PINBALL',    icon: '⚪', color: '#ffe94a', file: 'pinball.html',     available: true  },
  { id: 'mines',      name: 'MINES',      icon: '💣', color: '#ff4a6b', file: 'mines.html',       available: true  },
  { id: 'combat',     name: 'COMBAT',     icon: '🚜', color: '#b14bff', file: 'combat.html',      available: true  },
  { id: 'skydiver',   name: 'SKYDIVER',   icon: '🪂', color: '#00e6ff', file: 'skydiver.html',    available: true  },
  { id: 'rushhour',   name: 'RUSH HOUR',  icon: '🚗', color: '#ff8a3d', file: 'rushhour.html',    available: true  },
];

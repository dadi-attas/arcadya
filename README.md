# ARCADYA

חבילת משחקי ארקייד קלאסיים, מותאמת למובייל ולטאבלט במצב אנכי. שליטה אחידה בכל המשחקים — חצים + כפתור פעולה. ללא הרשמה, ללא פרסומות, עובד גם אופליין כ-PWA.

> **Built with [Claude Code](https://claude.com/claude-code)** · ARCADYA · TTASiA Digital Products

---

## 🎮 12 משחקים בחבילה

| משחק | תיאור |
|---|---|
| **Snake** | נחש קלאסי שגדל באכילת נקודות |
| **Pong** | משחק טניס שולחן מול CPU עם בינה מאוזנת |
| **Invaders** | חייזרים יורדים, יורים בהם מאחורי 3 מגנים מתפוררים |
| **Pac-Man** | מבוך עם 4 רוחות ו-AI שונה לכל אחת + Power Pellets |
| **Tetris** | טטרומינו קלאסי עם 7-bag, ghost piece, lock delay |
| **Frogger** | צפרדע חוצה כביש ונהר אל 5 בתים |
| **Donkey Kong** | טיפוס בקומות תוך התחמקות מחביות |
| **Pinball** | פינבול עם במפרים, סלינגשוטים ומחבטים |
| **Mines** | מיינסוויפר עם סמן וכפתור עגול דו-שימושי (חשיפה/דגל) |
| **Combat** | קרב טנקים נגד CPU עם 5 שלבים שונים |
| **Sky Diver** | קפיצה מצנח, רוח, נחיתה מדויקת על פלטפורמות |
| **Rush Hour** | חידת לוגיקה — להוציא את המכונית האדומה מהפקק |

## 🕹️ שליטה אחידה

- **חצים** — תנועה / סמן / סיבוב (תלוי במשחק)
- **כפתור פעולה עגול** — ירייה / קפיצה / סיבוב / בחירה (תלוי במשחק)
- **פאוז ⏸** — בפינה הימנית-עליונה
- **יציאה ✕** — בפינה השמאלית-עליונה
- **סאונד 🔊** — בפינה הימנית-עליונה

## 🚀 איך להריץ

### בלוקאלי
פשוט פותחים את `index.html` בדפדפן. כל המשחקים עובדים ללא שרת.

### עם שרת מקומי (מומלץ ל-PWA)
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve

# ואז: http://localhost:8000
```

### ב-GitHub Pages
1. Fork את ה-repo
2. הפעלה: Settings → Pages → Source: main branch / root
3. ההפצה תהיה זמינה ב-`https://USERNAME.github.io/arcadya/`

## 📱 התקנה כאפליקציה (PWA)

הפעל את ARCADYA בדפדפן (Chrome, Edge, Safari) ולחץ:
- **Android/Desktop**: סמל "התקן" שמופיע ליד שורת הכתובת
- **iPhone (Safari)**: שתף → "הוספה למסך הבית"

לאחר ההתקנה, האפליקציה תעבוד **גם אופליין** ותיפתח ללא סרגל דפדפן.

## 🏗️ מבנה הפרויקט

```
arcadya/
├── index.html              ← מסך תפריט ראשי + intro + הגדרות
├── games.js                ← רישום כל המשחקים בחבילה
├── manifest.json           ← הגדרות PWA
├── service-worker.js       ← cache לעבודה אופליין
├── README.md
├── ARCADYA_GUIDELINES.md   ← הנחיות בנייה לחבילה
├── assets/
│   ├── arcadya-rotate.js   ← מסך "סובב את המכשיר" משותף
│   ├── icons/
│   │   └── icon.svg        ← לוגו ARCADYA (וקטורי)
│   └── logo/
│       └── brand-intro.js  ← אינטרו של מותג TTASiA
└── games/
    ├── snake.html
    ├── pong.html
    ├── invaders.html
    ├── pacman.html
    ├── tetris.html
    ├── frogger.html
    ├── dkong.html
    ├── pinball.html
    ├── mines.html
    ├── combat.html
    ├── skydiver.html
    └── rushhour.html
```

כל משחק = קובץ HTML יחיד עם CSS+JS משולבים, ללא תלויות חיצוניות.

## 🎨 עקרונות עיצוב

- **Mobile-First / Portrait-First** — מתואם לטלפון אנכי
- **על מחשב** — המשחק יוצג במרכז המסך בלבד, בתוך מסגרת אנכית
- **שליטה אחידה** — אותם 4 חצים + כפתור עגול בכל המשחקים
- **ללא הרשמה / פרופילים / חנות / מטבעות** — חבילה רזה
- **שמירת שיא לוקאלית** — כל משחק שומר שיא אישי ב-`localStorage`
- **אינטרו מותג** — מופיע פעם בסשן בכניסה לחבילה

## 🛠️ טכנולוגיה

- HTML5 + CSS3 + Vanilla JavaScript
- Canvas 2D לציור משחקים
- Web Audio API לצלילים
- localStorage לשמירת שיאים והגדרות
- Service Worker ל-PWA / אופליין

ללא ספריות חיצוניות. ללא build step. ללא תלות באינטרנט אחרי טעינה ראשונה.

## 📄 רישיון

נשמר לכל הזכויות לטובת TTASiA Digital Products.

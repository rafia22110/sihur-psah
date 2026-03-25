import React, { useState, useMemo } from 'react';
import { 
  Sparkles, Waves, Flame, Palette, Music, Gamepad2, Search, Utensils, 
  Clock, Smile, Star, Construction, Crown, Map, BookOpen, X, 
  CheckCircle2, Trophy, Zap, Heart, ChevronLeft, Lightbulb, 
  Timer, Droplets, Wind, Footprints, MessageCircle, Home
} from 'lucide-react';

const App = () => {
  const [view, setView] = useState('home'); // home, story, activities, plate
  const [selectedActivity, setSelectedActivity] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState('הכל');

  const activities = [
    {
      id: 1,
      title: "בלש חמץ: המשימה הסודית",
      category: "משחק",
      icon: <Search className="text-blue-500" />,
      desc: "הופכים לבלשים עם פנסים! מחפשים פירורי לחם שפרעה המבולבל החביא.",
      fact: "בדיקת חמץ נעשית בלילה עם נר, כדי להזכיר לנו לבדוק גם את הלב שלנו.",
      humor: "זהירות! אם תמצאו פירור של וופל, אל תאכלו אותו - הוא פג תוקף עוד מימי הפירמידות!",
      howTo: "החביאו 10 'פתקי חמץ' בפינות. תנו לילדים פנסים ומפת אוצר ומדדו זמן עד למציאת כולם."
    },
    {
      id: 2,
      title: "מירוץ ה-18 דקות",
      category: "תנועה",
      icon: <Timer className="text-red-500" />,
      desc: "תחרות ריצה נגד השעון: האם תספיקו לאפות את המצה לפני שהיא תתפח?",
      fact: "מהרגע שהמים נוגעים בקמח, יש בדיוק 18 דקות עד שהבצק הופך לחמץ.",
      humor: "המצה היא הלחם היחיד בעולם שתמיד נמצא בלחץ של זמן. הוא ממש רץ לתנור!",
      howTo: "צרו מסלול מכשולים. כל ילד מקבל 'בצק' (כדור טניס) וצריך להעביר אותו לסל (התנור) בשיא המהירות."
    },
    {
      id: 3,
      title: "פרעה בפיג'מה: הדרמה",
      category: "דרמה",
      icon: <Smile className="text-yellow-500" />,
      desc: "ממחיזים את הרגע שבו משה מעיר את פרעה באמצע הלילה.",
      fact: "פרעה נכנע רק במכה העשירית, כשהבין שגם המלך הכי חזק הוא רק אדם.",
      humor: "תארו לעצמכם את פרעה יוצא מהמיטה עם נעלי בית של צפרדע ופיג'מה של פסים!",
      howTo: "ילד אחד ישן על מחצלת (פרעה), וכל היתר צועקים בלחש-חזק: 'פרעה! פרעה! שלח את עמי!'."
    },
    {
      id: 4,
      title: "חרוסת: בוץ מתוק",
      category: "בישול",
      icon: <Utensils className="text-orange-500" />,
      desc: "מכינים את ה'טיט' הכי טעים בעולם.",
      fact: "החרוסת מסמלת את הבוץ שבו בנו בני ישראל, אבל היא מתוקה כי יש לנו תקווה.",
      humor: "הבוץ היחיד בעולם שאימא תרשה לכם ללכלך איתו את השולחן!",
      howTo: "מעכו בננה, הוסיפו תמרים טחונים וקצת אגוזים (אם אין אלרגיה) ומרחו על מצה שטוחה."
    },
    {
      id: 5,
      title: "קריעת ים סוף בסלון",
      category: "תנועה",
      icon: <Waves className="text-cyan-500" />,
      desc: "עוברים בתוך הים שנבקע לשניים.",
      fact: "הים נבקע בזכות רוח קדים עזה שנשבה כל הלילה.",
      humor: "שימו לב: מי שנוגע בסדין הכחול נרטב וצריך לעשות קולות של דג!",
      howTo: "החזיקו סדין כחול גדול משני צדדים. הילדים צריכים לזחול מתחתיו כשהוא מתרומם."
    },
    {
      id: 6,
      title: "מפעל הפירמידות",
      category: "יצירה",
      icon: <Construction className="text-stone-500" />,
      desc: "בונים את מחסני התבואה של מצרים.",
      fact: "בני ישראל בנו את פיתום ורעמסס - ערי מחסנים ענקיות.",
      humor: "הפירמידה שלי יצאה קצת עקומה, אולי בגלל שהמצרים לא השתמשו בלגו?",
      howTo: "בנו פירמידה מקופסאות קרטון ריקות וציירו עליהן 'לבנים' בטוש שחור עבה."
    },
    {
      id: 7,
      title: "תיבת משה: מבחן הציפה",
      category: "מדע",
      icon: <Droplets className="text-blue-400" />,
      desc: "בונים תיבה קטנה ובודקים אם היא שטה ביאור.",
      fact: "יוכבד ציפתה את התיבה בזפת וחימר כדי למנוע חדירת מים.",
      humor: "הסירה של משה לא צריכה בנזין, היא עובדת על כוח של נשיקות מהיאור.",
      howTo: "השתמשו בחצאי אגוזים, פקקי שעם או ספוגים וראו בגיגית מה צף ומה שוקע."
    },
    {
      id: 8,
      title: "יוגה של 10 המכות",
      category: "תנועה",
      icon: <CheckCircle2 className="text-green-500" />,
      desc: "תנוחות גוף בהשראת עשר המכות.",
      fact: "כל מכה בסיפור באה ללמד את המצרים שיעור על הטבע.",
      humor: "בתנוחת ה'צפרדע' אסור להפסיק לקרקר, זה החוק!",
      howTo: "דם (עמידה ללא תנועה), צפרדע (קפיצות), חושך (עיניים עצומות), ברד (תיפוף על הרצפה)."
    },
    {
      id: 9,
      title: "אפיקומן-גו",
      category: "משחק",
      icon: <Map className="text-emerald-500" />,
      desc: "חפש את המטמון בחיפוש אחרי המצה החבויה.",
      fact: "אפיקומן פירושו 'קינוח' בארמית, והוא זכר לקורבן הפסח.",
      humor: "האפיקומן מתחבא כל כך טוב שגם אליהו הנביא יצטרך פנס כדי למצוא אותו.",
      howTo: "פזרו רמזים בכתב סתרים (או ציורים) שמובילים כל פעם לתחנה הבאה עד למחבוא."
    },
    {
      id: 10,
      title: "מרים והתוף: ה-DJ הראשונה",
      category: "מוזיקה",
      icon: <Music className="text-pink-500" />,
      desc: "מכינים כלי נגינה ויוצאים במחולות.",
      fact: "מרים לקחה איתה תופים למדבר כי היא ידעה שיהיה נס וסיבה לחגוג.",
      humor: "היא הייתה ה-DJ הכי מצליחה במדבר, בלי רמקולים ובלי בטרייה!",
      howTo: "קשטו קופסאות שימורים ריקות או כוסות חד\"פ עם עדשים בפנים והרעישו בשמחה."
    },
    {
      id: 11,
      title: "הסבה מלכותית",
      category: "דרמה",
      icon: <Crown className="text-yellow-600" />,
      desc: "לומדים לאכול כמו בני מלכים.",
      fact: "ההסבה לצד שמאל מסמלת חירות, כי עבדים תמיד אוכלים בעמידה או בריצה.",
      humor: "אם תישענו יותר מדי לצד שמאל, אתם עלולים ליפול לתוך הקערה של השכן!",
      howTo: "פרסו כריות על השפה, השענו על צד שמאל ובקשו מהחבר 'ישרת אותי בבקשה'."
    },
    {
      id: 12,
      title: "קריוקי 'מה נשתנה'",
      category: "מוזיקה",
      icon: <MessageCircle className="text-blue-300" />,
      desc: "שרים את ארבע הקושיות בביצוע מרגש.",
      fact: "מטרת השאלות היא לעורר את הסקרנות של הילד, כי שאלות הן תחילת החופש.",
      humor: "בונוס למי ששר הכי חזק בלי לבלוע זבוב צפרדע בטעות!",
      howTo: "תנו לכל ילד מיקרופון דמיוני ועשו תחרות 'הכוכב הבא של ליל הסדר'."
    },
    {
      id: 13,
      title: "מכת ברד: ניסוי הקרח",
      category: "מדע",
      icon: <Zap className="text-red-600" />,
      desc: "איך אש וקרח חיים יחד?",
      fact: "מכת ברד הייתה נס של 'אש מתלקחת בתוך הברד' - הפכים שמשלימים זה את זה.",
      humor: "זה כמו לאכול ארטיק חריף מאוד - המון בלאגן בפה!",
      howTo: "קחו קוביות קרח וטפטפו עליהן צבע מאכל אדום (האש). ראו איך הצבע זורם בתוך הסדקים."
    },
    {
      id: 14,
      title: "נסיכי מצרים: תצוגת אופנה",
      category: "דרמה",
      icon: <Palette className="text-fuchsia-500" />,
      desc: "מעצבים בגדים של בני חורין.",
      fact: "בני ישראל יצאו ממצרים עם רכוש גדול ובגדים יפים שקיבלו מהמצרים.",
      humor: "גלימה מסדין לבן היא האופנה הכי חמה במדבר סיני השנה!",
      howTo: "השתמשו בסדינים, נייר כסף לכתרים וחגורות מצעיפים למצעד בני חורין."
    },
    {
      id: 15,
      title: "חידון 'מי יודע אחד?'",
      category: "משחק",
      icon: <Gamepad2 className="text-purple-500" />,
      desc: "משחק זיכרון ומספרים מוזיקלי.",
      fact: "השיר מחבר אותנו למושגי יסוד ביהדות דרך מספרים.",
      humor: "מי יודע 13? 13 מידיא, ומי יודע כמה מצות אני יכול לאכול בדקה?",
      howTo: "שרים את השיר, ובכל פעם שהמספר מגיע - הילד שזה המספר שלו (לפי הגיל או סדר ישיבה) קופץ."
    },
    {
      id: 16,
      title: "מסאז' של חופש",
      category: "תנועה",
      icon: <Heart className="text-red-400" />,
      desc: "משחק מרגיע של מגע וסיפור.",
      fact: "חירות היא גם היכולת לנוח ולהרגיש נעים בגוף.",
      humor: "זה מסאז' מלכותי - אם הילד נרדם, זה סימן שהצלחנו!",
      howTo: "הילדים יושבים בטור. 'מציירים' על הגב של החבר מקדימה: גלים (יאור), קפיצות (צפרדע), שמש (חופש)."
    },
    {
      id: 17,
      title: "הגדה בקומיקס",
      category: "יצירה",
      icon: <Palette className="text-orange-400" />,
      desc: "מציירים את יציאת מצרים עם בועות דיבור.",
      fact: "הגדה פירושה 'לספר'. אנחנו מספרים את הסיפור בכל פעם מחדש.",
      humor: "מה משה אמר לים? 'סליחה, אפשר לעבור? החברים שלי מאחורה לחוצים!'",
      howTo: "חלקו דף ל-4 ריבועים: עבדות, משה, מכות, חירות. הילדים יציירו את הגיבורים שלהם."
    },
    {
      id: 18,
      title: "צפרדע בתוך המרק",
      category: "משחק",
      icon: <Gamepad2 className="text-lime-500" />,
      desc: "קליעה למטרה מצחיקה במיוחד.",
      fact: "המכה השנייה הייתה צפרדעים שעלו בכל ארץ מצרים.",
      humor: "מי שמכניס צפרדע לסיר מקבל נקודה, מי שמכניס אותה לצלחת של פרעה מקבל שתיים!",
      howTo: "הניחו גיגיות (סירים). זרקו 'צפרדעים' (גרביים מגולגלות ירוקות) לתוך הגיגית."
    },
    {
      id: 19,
      title: "סדר לדוגמה",
      category: "לימוד",
      icon: <Utensils className="text-amber-600" />,
      desc: "מתאמנים על הלילה הגדול.",
      fact: "יש 15 סימנים לסדר: מקדש ועד נרצה.",
      humor: "החלק הכי קשה בסדר הוא לחכות לאוכל של אימא בזמן ששרים!",
      howTo: "ערכו שולחן עם כל הסימנים. עברו על הסדר וטעמו 'מיץ ענבים מלכותי'."
    },
    {
      id: 20,
      title: "דיסקו חירות",
      category: "מוזיקה",
      icon: <Trophy className="text-yellow-400" />,
      desc: "מסיבת סיום ליחידת הלימוד.",
      fact: "פסח הוא יום ההולדת של עם ישראל כעם חופשי.",
      humor: "לרקוד כמו בני חורין זה אומר שאפשר לזוז איך שרוצים, אפילו כמו תולעת מצרית!",
      howTo: "שימו מוזיקת פסח מקפיצה, כבו אורות והדליקו פנסים. חג שמח!"
    }
  ];

  const categories = useMemo(() => ['הכל', ...new Set(activities.map(a => a.category))], []);

  const filteredActivities = activeCategory === 'הכל' 
    ? activities 
    : activities.filter(a => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FDFCF0] font-sans text-slate-800 dir-rtl pb-20" dir="rtl">
      
      {/* Header */}
      <header className="bg-white pt-10 pb-12 px-6 text-center border-b-8 border-orange-400 shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-40 -translate-y-1/2"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-black mb-6 animate-bounce shadow-lg">
            <Sparkles size={18} />
            <span>השיעור המושלם של המורה המדהימה!</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-slate-900 leading-none">
            פסח-<span className="text-orange-500 italic">לנד</span> <span className="text-blue-500">🌊</span>
          </h1>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto font-medium">
            20 פעילויות לימודיות מלאות עובדות, הומור ומשימות חווייתיות לילדים.
          </p>
        </div>
      </header>

      {/* Main Navigation */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-around items-center">
          <button onClick={() => setView('home')} className={`flex flex-col items-center gap-1 ${view === 'home' ? 'text-orange-500' : 'text-slate-400'}`}>
            <Home size={24} /><span className="text-xs font-bold">בית</span>
          </button>
          <button onClick={() => setView('story')} className={`flex flex-col items-center gap-1 ${view === 'story' ? 'text-orange-500' : 'text-slate-400'}`}>
            <BookOpen size={24} /><span className="text-xs font-bold">סיפור</span>
          </button>
          <button onClick={() => setView('activities')} className={`flex flex-col items-center gap-1 ${view === 'activities' ? 'text-orange-500' : 'text-slate-400'}`}>
            <Gamepad2 size={24} /><span className="text-xs font-bold">פעילויות</span>
          </button>
          <button onClick={() => setView('plate')} className={`flex flex-col items-center gap-1 ${view === 'plate' ? 'text-orange-500' : 'text-slate-400'}`}>
            <Utensils size={24} /><span className="text-xs font-bold">קערה</span>
          </button>
        </div>
      </div>

      {/* Views */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        
        {view === 'home' && (
          <div className="text-center space-y-12 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div onClick={() => setView('story')} className="bg-white p-10 rounded-[3rem] shadow-xl cursor-pointer hover:scale-105 transition border-b-8 border-blue-400">
                <div className="text-7xl mb-4">📜</div>
                <h3 className="text-3xl font-black mb-2">מסע יציאת מצרים</h3>
                <p className="text-slate-500">בואו נגלה מה קרה פעם מזמן במצרים הרחוקה.</p>
              </div>
              <div onClick={() => setView('activities')} className="bg-white p-10 rounded-[3rem] shadow-xl cursor-pointer hover:scale-105 transition border-b-8 border-orange-400">
                <div className="text-7xl mb-4">🎯</div>
                <h3 className="text-3xl font-black mb-2">20 משימות חירות</h3>
                <p className="text-slate-500">משחקים, יצירה ועובדות מרתקות לכל רגע בשיעור.</p>
              </div>
            </div>
          </div>
        )}

        {view === 'activities' && (
          <div className="animate-in slide-in-from-bottom-8 duration-500">
            {/* Filter Bar */}
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-2xl font-black text-sm transition-all ${
                    activeCategory === cat ? 'bg-orange-500 text-white shadow-lg' : 'bg-white text-slate-500 hover:bg-orange-100 border'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredActivities.map((act) => (
                <div 
                  key={act.id}
                  onClick={() => setSelectedActivity(act)}
                  className="bg-white rounded-[2.5rem] p-8 shadow-sm border-b-8 border-transparent hover:border-orange-400 hover:shadow-2xl transition-all cursor-pointer group flex flex-col h-full relative"
                >
                  <div className="absolute top-4 left-4 text-slate-100 font-black text-5xl group-hover:text-orange-50 transition-colors">{act.id}</div>
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-inner">{act.icon}</div>
                  <h3 className="text-2xl font-black mb-3 leading-tight">{act.title}</h3>
                  <p className="text-slate-500 text-sm line-clamp-2">{act.desc}</p>
                  <div className="mt-auto pt-4 flex items-center justify-between text-orange-500 font-black text-xs uppercase tracking-widest">
                    <span>{act.category}</span>
                    <ChevronLeft size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === 'story' && (
          <div className="bg-white p-12 rounded-[4rem] shadow-2xl animate-in zoom-in-95 duration-500 text-center space-y-8 border-t-[20px] border-blue-500">
             <div className="text-9xl">🌊</div>
             <h2 className="text-5xl font-black">הסיפור המלא: מעבדות לחירות</h2>
             <div className="space-y-6 text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
               <p>בני ישראל היו עבדים במצרים ובנו פירמידות ענקיות. הם עבדו קשה מאוד והיו עצובים.</p>
               <p>אז הגיע משה, המנהיג המגמגם והאמיץ, ואמר לפרעה: "שלח את עמי!"</p>
               <p>אחרי 10 מכות ונס גדול בים סוף, יצאנו לחופשי בחיפזון עם בצק שלא הספיק לתפוח.</p>
               <p className="font-black text-orange-500">היום אנחנו חוגגים את החופש הזה!</p>
             </div>
             <button onClick={() => setView('activities')} className="px-10 py-5 bg-orange-500 text-white rounded-3xl font-black text-xl shadow-xl hover:bg-orange-600 transition">בואו נשחק את הסיפור! 🚀</button>
          </div>
        )}

        {view === 'plate' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in slide-in-from-left-8 duration-500 items-center">
            <div className="bg-white aspect-square rounded-full border-[15px] border-slate-100 shadow-2xl flex items-center justify-center relative p-10">
               <div className="text-slate-200 font-black text-8xl opacity-30 absolute">פסח</div>
               <div className="grid grid-cols-3 gap-8">
                 {['🌿', '🍯', '🥬', '🍗', '🥚', '🍞'].map(emoji => (
                   <div key={emoji} className="text-6xl bg-orange-50 w-24 h-24 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition cursor-help">{emoji}</div>
                 ))}
               </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-5xl font-black">סמלי הקערה</h2>
              <ul className="space-y-4">
                {[
                  { n: 'מרור', d: 'מרירות השעבוד והקושי' },
                  { n: 'חרוסת', d: 'הטיט לבניית הפירמידות' },
                  { n: 'כרפס', d: 'אביב, צמיחה ודמעות' },
                  { n: 'זרוע', d: 'הכוח וההקרבה' },
                  { n: 'ביצה', d: 'מעגל החיים והתקווה' },
                  { n: 'מצה', d: 'לחם העוני והחירות' }
                ].map(item => (
                  <li key={item.n} className="bg-white p-5 rounded-3xl shadow-sm border-r-8 border-orange-400 flex justify-between items-center">
                    <span className="font-black text-xl">{item.n}</span>
                    <span className="text-slate-500 text-lg">{item.d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </main>

      {/* Activity Modal */}
      {selectedActivity && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setSelectedActivity(null)}></div>
          <div className="relative bg-white w-full max-w-4xl rounded-[4rem] shadow-2xl overflow-hidden animate-in zoom-in-95 border-[12px] border-white flex flex-col md:flex-row">
            
            <button onClick={() => setSelectedActivity(null)} className="absolute top-8 left-8 p-3 bg-slate-100 rounded-full hover:bg-red-500 hover:text-white transition shadow-md z-10"><X size={24} /></button>

            <div className="md:w-1/3 bg-orange-50 p-12 flex flex-col items-center justify-center text-center">
               <div className="text-9xl mb-6">{selectedActivity.icon}</div>
               <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-black mb-2 uppercase tracking-tighter">{selectedActivity.category}</span>
               <h2 className="text-4xl font-black">{selectedActivity.title}</h2>
            </div>

            <div className="md:w-2/3 p-12 space-y-8 bg-white overflow-y-auto max-h-[80vh]">
               <section>
                 <h4 className="text-xl font-black text-slate-900 mb-2 flex items-center gap-2"><Star size={20} className="text-yellow-500 fill-yellow-500" /> המשימה:</h4>
                 <p className="text-2xl text-slate-600 font-medium leading-relaxed">{selectedActivity.desc}</p>
               </section>
               <section className="bg-indigo-50 p-8 rounded-[2.5rem] border-2 border-indigo-100">
                 <h4 className="text-lg font-black text-indigo-700 mb-2">עובדה לחיים:</h4>
                 <p className="text-indigo-900 text-xl font-bold">{selectedActivity.fact}</p>
                 <p className="text-indigo-700 italic mt-2">"{selectedActivity.humor}"</p>
               </section>
               <section className="bg-emerald-50 p-8 rounded-[2.5rem] border-2 border-emerald-100">
                 <h4 className="text-lg font-black text-emerald-700 mb-3 flex items-center gap-2"><Lightbulb size={20} /> טיפ להפעלה:</h4>
                 <p className="text-emerald-900 font-black text-xl">{selectedActivity.howTo}</p>
               </section>
               <button onClick={() => setSelectedActivity(null)} className="w-full py-5 bg-slate-900 text-white rounded-3xl font-black text-xl hover:bg-orange-600 transition shadow-xl">הבנתי, יוצאים לדרך! 🚀</button>
            </div>
          </div>
        </div>
      )}

      {/* Footer / Teacher Note */}
      <footer className="text-center p-12 text-slate-300 font-bold">
        פסח-לנד | השיעור המדהים שלך מוכן להפצה 🌊✨
      </footer>
    </div>
  );
};

export default App;

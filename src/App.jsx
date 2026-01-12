import React, { useState } from "react";

const prayers = [
  {
    id: 1,
    category: "ruqyah",
    title: "دعاء إبطال السحر",
    arabicText: "اللَّهُمَّ إِنِّي عَبْدُكَ الضَّعِيفُ، لَا حَوْلَ لِي وَلَا قُوَّةَ إِلَّا بِكَ، أَسْأَلُكَ بِرَحْمَتِكَ أَنْ تُبْطِلَ عَنِّي كُلَّ سِحْرٍ وَأَذًى، كَمَا أَبْطَلْتَ سِحْرَ فِرْعَوْنَ، وَأَنْ تَحْفَظَنِي بِحِفْظِكَ، فَإِنِّي لَا أَلْجَأُ إِلَّا إِلَيْكَ، إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
    transliteration: "Allāhumma innī ʿabduka al-ḍaʿīf, lā ḥawla lī wa lā quwwata illā bika. As'aluka biraḥmatika an tubṭila ʿannī kulla siḥrin wa adhan, kamā abṭalta siḥra Firʿawn, wa an taḥfaẓanī biḥifẓika, fa-innī lā alja'u illā ilayk. Innaka ʿalā kulli shay'in qadīr.",
    translation: "O Allah, I am Your weak servant. I have no power nor strength except through You. I ask You, by Your mercy, to nullify from me every magic and harm, just as You nullified the magic of Pharaoh, and to protect me with Your protection. I seek refuge in none but You. Indeed, You are over all things capable.",
  },
  {
    id: 2,
    category: "ruqyah",
    title: "دعاء تفويض الأمر",
    arabicText: "اللَّهُمَّ أَلْجَأْتُ إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، فَفُكَّ عَنِّي كُلَّ عُقْدَةٍ لَا أَقْدِرُ عَلَيْهَا إِلَّا أَنْتَ.",
    transliteration: "Allāhumma aljaʾtu ilayk, wa fawwaḍtu amrī ilayk, fafukka ʿannī kulla ʿuqdah lā aqdiru ʿalayhā illā anta.",
    translation: "O Allah, I have sought refuge in You and entrusted my affair to You. Untie every knot that none can undo except You.",
  },
  {
    id: 3,
    category: "morning",
    title: "دعاء الصباح",
    arabicText: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
    transliteration: "Aṣbaḥnā wa aṣbaḥa al-mulku lillāh, wal-ḥamdu lillāh, lā ilāha illā Allāh waḥdahu lā sharīka lah, lahu al-mulku wa lahu al-ḥamdu wa huwa ʿalā kulli shay'in qadīr.",
    translation: "We have entered the morning and the dominion belongs to Allah, and praise is to Allah. There is no deity except Allah, alone without partner. To Him belongs the dominion and to Him is praise, and He is over all things competent.",
  },
  {
    id: 4,
    category: "evening",
    title: "دعاء المساء",
    arabicText: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
    transliteration: "Amsaynā wa amsā al-mulku lillāh, wal-ḥamdu lillāh, lā ilāha illā Allāh waḥdahu lā sharīka lah, lahu al-mulku wa lahu al-ḥamdu wa huwa ʿalā kulli shay'in qadīr.",
    translation: "We have entered the evening and the dominion belongs to Allah, and praise is to Allah. There is no deity except Allah, alone without partner. To Him belongs the dominion and to Him is praise, and He is over all things competent.",
  },
  {
    id: 5,
    category: "general",
    title: "دعاء الحفظ",
    arabicText: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.",
    transliteration: "Bismillāhi alladhī lā yaḍurru maʿa ismihi shay'un fī al-arḍi wa lā fī as-samā', wa huwa as-samīʿu al-ʿalīm.",
    translation: "In the name of Allah, with whose name nothing can harm in the earth nor in the heaven, and He is the All-Hearing, the All-Knowing.",
  },
];

const categoryNames = {
  morning: "صباح",
  evening: "مساء",
  general: "عامة",
  ruqyah: "رقية",
};

export default function PrayerReader() {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredPrayers = currentFilter === "all" ? prayers : prayers.filter((p) => p.category === currentFilter);

  const currentPrayer = filteredPrayers[currentIndex];

  const handleFilterChange = (category) => {
    setCurrentFilter(category);
    setCurrentIndex(0);
  };

  const nextPrayer = () => {
    if (currentIndex < filteredPrayers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousPrayer = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 min-h-screen" dir="rtl">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap");
        body { font-family: "Amiri", serif; }
        .prayer-card { transition: all 0.3s ease; }
        .prayer-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-emerald-800 mb-2">قارئ الأدعية</h1>
          <p className="text-xl text-emerald-600">Prayer Reader</p>
        </div>

        {/* Prayer Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button onClick={() => handleFilterChange("all")} className={`px-6 py-2 rounded-full transition ${currentFilter === "all" ? "bg-emerald-600 text-white" : "bg-white text-emerald-600 hover:bg-emerald-100"}`}>
              الكل
            </button>
            <button onClick={() => handleFilterChange("morning")} className={`px-6 py-2 rounded-full transition ${currentFilter === "morning" ? "bg-emerald-600 text-white" : "bg-white text-emerald-600 hover:bg-emerald-100"}`}>
              الصباح
            </button>
            <button onClick={() => handleFilterChange("evening")} className={`px-6 py-2 rounded-full transition ${currentFilter === "evening" ? "bg-emerald-600 text-white" : "bg-white text-emerald-600 hover:bg-emerald-100"}`}>
              المساء
            </button>
            <button onClick={() => handleFilterChange("general")} className={`px-6 py-2 rounded-full transition ${currentFilter === "general" ? "bg-emerald-600 text-white" : "bg-white text-emerald-600 hover:bg-emerald-100"}`}>
              عامة
            </button>
            <button onClick={() => handleFilterChange("ruqyah")} className={`px-6 py-2 rounded-full transition ${currentFilter === "ruqyah" ? "bg-emerald-600 text-white" : "bg-white text-emerald-600 hover:bg-emerald-100"}`}>
              رقية
            </button>
          </div>
        </div>

        {/* Single Prayer Display */}
        <div className="mb-8">
          <div className="prayer-card bg-white rounded-2xl shadow-lg p-8 border-r-4 border-emerald-600">
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">{currentPrayer.title}</h2>
            <div className="bg-emerald-50 rounded-xl p-6 mb-4">
              <p className="text-2xl leading-loose text-gray-800 text-center">{currentPrayer.arabicText}</p>
            </div>
            <div className="space-y-2 text-gray-600">
              <p className="text-sm italic">
                <strong>Transliteration:</strong> {currentPrayer.transliteration}
              </p>
              <p className="text-sm">
                <strong>Translation:</strong> {currentPrayer.translation}
              </p>
            </div>
            <div className="mt-4">
              <span className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">{categoryNames[currentPrayer.category] || currentPrayer.category}</span>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between">
          <button onClick={previousPrayer} disabled={currentIndex === 0} className={`bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition flex items-center gap-2 text-lg font-semibold ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}>
            <span>←</span>
            <span>السابق</span>
          </button>

          <div className="text-center">
            <span className="text-emerald-700 font-semibold text-lg">
              {currentIndex + 1} من {filteredPrayers.length}
            </span>
          </div>

          <button onClick={nextPrayer} disabled={currentIndex === filteredPrayers.length - 1} className={`bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition flex items-center gap-2 text-lg font-semibold ${currentIndex === filteredPrayers.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
            <span>التالي</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

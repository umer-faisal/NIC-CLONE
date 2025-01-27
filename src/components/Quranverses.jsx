import mosque from "./assets/mosque.svg"

const Quranverses = () => {
  return (
    <div className="bg-blue-50 py-10 px-6">
    <div className="max-w-4xl mx-auto text-center">
      {/* Mosque Icon */}
      <div className="flex justify-center mb-6">
        <img src={mosque} alt="" />
       
      </div>

      {/* Title */}
      <h1 className="text-blue-700 text-3xl font-bold">Quranic Verse Of The Day</h1>

      {/* Subtitle */}
      <p className="text-blue-600 text-lg mt-2 mb-4">Surah Al-Isra, Verse 37</p>

      {/* Arabic Verse */}
      <p className="text-blue-900 text-xl font-medium mb-4">
        وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا إِنَّكَ لَنْ تَخْرِقَ الْأَرْضَ وَلَنْ تَبْلُغَ
        الْجِبَالَ طُولًا
      </p>

      {/* Translation */}
      <p className="text-blue-500 text-base">
        And do not walk on the earth arrogantly. Surely you can neither crack
        the earth nor stretch to the height of the mountains.
      </p>
    </div>
  </div>
  )
}

export default Quranverses

import talba from "./assets/talba.svg"

const Mission = () => {
  return (
    <div className="bg-blue-600 py-10 px-4 md:px-20 text-white">
      <div className="grid md:grid-cols-2 items-center gap-10">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed mb-6">
            Based on the statement of God Almighty, "O people! We created you
            all from a male and a female, and we made you into nations and
            tribes so that you may know one another" (Surah Al Hujrat Ayah 13).
            The Islamic Center (NIC) plays a vital and holistic role in bringing
            the views of the different spectrums of Islamic society together by
            creating a common language of dialogue without violating the right
            Islamic rules.
          </p>
          <h3 className="text-xl font-semibold mb-4">
            We need your support to start building the masjid this year
          </h3>
          <p className="text-md mb-6">
            Please help us with your donations on our donation website
          </p>
          <a
            href="#"
            className="bg-yellow-400 text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300"
          >
            DONATE NOW
          </a>
        </div>

        {/* Image Section */}
        <div className="relative">
          <div>
            <img
              src={talba}
              className="w-full h-full rounded-tl-[90px] rounded-br-[90px]"
            />
          </div>
          <p className="text-center mt-4">Salatul Eid on 1st of May 2022</p>
        </div>
      </div>
    </div>
  )
}

export default Mission

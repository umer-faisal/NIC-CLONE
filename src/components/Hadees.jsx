import mosque from "./assets/mosque.svg"

const Hadees = () => {
  return (
    <div className="bg-blue-50 py-10 px-6">
    <div className="max-w-4xl mx-auto text-center">
      {/* Mosque Icon */}
      <div className="flex justify-center mb-6">
       <img src={mosque} alt="" />
      </div>

      {/* Title */}
      <h1 className="text-blue-700 text-3xl font-bold">Hadith Of The Day</h1>

      {/* Content */}
      <p className="text-blue-600 text-base mt-4 mb-6">
        A man came to the Prophet(P.B.U.H) and asked, “O Allah’s Apostle! Which charity is the most
        superior in reward?” He replied, “The charity which you practice while you are healthy,
        niggardly and afraid of poverty and wish to become wealthy. Do not delay it to the time
        of approaching death and then say, ‘Give so much to such and such, and so much to such
        and such.’ And it has already belonged to such and such (as it is too late).”
      </p>

      {/* Source */}
      <p className="text-blue-500 text-sm font-medium">Sahih Bukhari</p>
    </div>
  </div>
  )
}

export default Hadees

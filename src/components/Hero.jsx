import bismillah from './assets/bismillah.svg'

const Hero = () => {
  return (
    <section className="relative bg-blue-600 text-white h-screen flex flex-col items-center justify-center text-center">
    {/* Arabic Calligraphy Background Inside a Div */}
    <div className="absolute inset-0 flex items-center justify-center opacity-10" 
         style={{
        backgroundImage: `url(${bismillah})`, // Use the imported background image
      }}>
    </div>

    {/* Content */}
    <div className="relative z-10">
      <p className="text-lg font-medium mb-4">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
        مركز نوربوتن الإسلامي
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        NORRBOTTENS ISLAMISKA CENTER
      </h2>
      <p className="text-sm md:text-base max-w-xl mx-auto">
        Norrbottens Islamiska Center represents a Muslim community living in the
        northern county of Sweden, Norrbotten.
      </p>
    </div>
  </section>
  )
}

export default Hero

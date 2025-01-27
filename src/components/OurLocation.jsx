import Location from "./assets/location.png"

const location = () => {
  return (
    <div className="bg-blue-500 py-10">
      <div className="max-w-6xl mx-auto text-center text-white">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6">Our Location</h1>

        {/* Location Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={Location}
            alt="Our Location"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default location

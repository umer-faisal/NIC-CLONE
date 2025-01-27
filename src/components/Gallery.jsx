import gallery from "./assets/gallery.svg"

const Gallery = () => {
      return (
        <div className="bg-blue-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-center text-blue-700 text-4xl font-bold mb-8">Gallery</h1>

        {/* Single Image */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            src={gallery} // Replace with your image path
            alt="Gallery"
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  )
}

export default Gallery

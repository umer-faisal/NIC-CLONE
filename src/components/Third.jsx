import feed from "./assets/feed-1.svg";
import fb from "./assets/feed-2.svg"

const Third = () => {
  return (
    <div className="bg-blue-50 py-10 px-4 md:px-20">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Prayer Timings */}
        <div className="flex flex-col items-center border-2 border-yellow-400 rounded-t-full rounded-b-lg px-6 py-8 bg-white">
          <h2 className="text-blue-600 text-lg font-semibold mb-2">Prayer Timings</h2>
          <h3 className="text-blue-800 text-xl font-bold mb-4">Luleå</h3>
          <div className="w-<100%>">
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-700 font-medium">FAJAR</span>
              <span className="text-gray-600">06:02 AM</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-700 font-medium">ZUHAR</span>
              <span className="text-gray-600">12:18 AM</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-700 font-medium">ASAR</span>
              <span className="text-gray-600">13:48 AM</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-700 font-medium">MAGHRIB</span>
              <span className="text-gray-600">16:11 AM</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-700 font-medium">ISHA</span>
              <span className="text-gray-600">18:08 AM</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-700 font-medium">JUMMAH</span>
              <span className="text-gray-600">11:46 AM</span>
            </div>
          </div>
        </div>

        {/* Facebook Feeds */}
        <div>
          <h2 className="text-blue-800 text-xl font-bold mb-4 text-center md:text-left">
            FACEBOOK FEEDS
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-transparent">
              <img
                src={feed}
                alt="Facebook Feed 1"
                className="w-full rounded-md mb-4"
              />
             
            </div>
            <div className="bg-transparent ">
              <img
                src={fb}
                alt="Facebook Feed 2"
                className="w-full rounded-md mb-4"
              />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Third

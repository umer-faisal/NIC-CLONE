import Footer from "./assets/footer.svg"
import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";
import Logo from "./assets/footerlogo.svg"

const End = () => {
  return (
    <footer className="bg-blue-50 py-10" style={{
        backgroundImage: `url(${Footer})`, // Use the imported background image
      }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-blue-700">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={Logo} // Replace with the correct path to your logo
            alt="NIC Logo"
            className="w-24 mb-4"
          />
          <p className="text-sm">&copy; 2023 thenic.se</p>
        </div>

        {/* Center Section */}
        <div className="my-6 md:my-0">
          <ul className="flex flex-col md:flex-row gap-4 text-center md:text-left">
            <li>Home</li>
            <li>About NIC</li>
            <li>The Masjid</li>
            <li>Education</li>
            <li>Team</li>
            <li>Contact Us</li>
            <li>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600">
                SUPPORT
              </button>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right">
          <h4 className="font-bold mb-2">FOLLOW US</h4>
          <div className="flex justify-center md:justify-end gap-4 mb-4">
            <CiFacebook size={24} className="hover:text-blue-500" />
            <CiInstagram size={24} className="hover:text-pink-500" />
            <CiYoutube size={24} className="hover:text-red-500" />
          </div>
          <p className="text-sm">Email: contact@thenic.com</p>
        </div>
      </div>
    </footer>
  )
}

export default End

import logo from "./assets/Logo.svg";
import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 ">
        <div className="text-yellow-400 text-xl font-bold"><img src={logo} alt="logo" className="size-16" /></div>
        
        </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-sm px-4 py-6 ">
        <li className="hover:text-yellow-400 cursor-pointer">Home</li>
        <li className="hover:text-yellow-400 cursor-pointer">About NIC</li>
        <li className="hover:text-yellow-400 cursor-pointer">The Masjid</li>
        <li className="hover:text-yellow-400 cursor-pointer">Education</li>
        <li className="hover:text-yellow-400 cursor-pointer">Team</li>
        <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
      </ul>

      {/* Support Button and Social Icons */}
      <div className="flex items-center space-x-4">
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">
          SUPPORT
        </button>
        <div className="flex space-x-3">
          <a href="#" className="hover:text-gray-300">
            <CiFacebook />
          </a>
          <a href="#" className="hover:text-gray-300">
            <CiInstagram />
          </a>
          <a href="#" className="hover:text-gray-300">
            <CiYoutube />
          </a>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar

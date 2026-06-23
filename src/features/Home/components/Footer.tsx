import { Copyright } from 'lucide-react';
import Logo from "../../../assets/operators-Logo.png"
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <footer className="text-gray-600">
        <div className="flex justify-around items-center">
            <Link to="/" className="flex shrink-0 items-center" aria-label="SMM Operators home">
                <img src={Logo} alt="SMM Operators logo" className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20" />
                <span className="ml-2 text-lg font-semibold text-gray-800">SMM Operators</span>
            </Link>
        </div>



        <div className="flex justify-center items-center bottom-0">
            <p> <Copyright className="inline-block mr-1" /> {new Date().getFullYear()} SMM Operators. All rights reserved.</p>
            <p className="text-gray-600">built by <a href="#" className="text-blue-800 hover:text-blue-500">Tinsae Temesgen</a></p>
        </div>
      </footer>
    </div>
  )
}

export default Footer

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1b1b1b48] text-gray-300 py-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo or Name */}
          <div className="text-xl font-semibold text-white">
            Shoping India
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 text-sm">
            <Link className="hover:text-[#474747] transition" to={'/contact'}>
              Contact us
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.18 9.18 0 01-2.88 1.1A4.48 4.48 0 0016.5 0a4.48 4.48 0 00-4.4 5.52A12.94 12.94 0 013 1.6 4.48 4.48 0 004.1 9a4.52 4.52 0 01-2-.55v.06a4.48 4.48 0 003.6 4.4 4.5 4.5 0 01-2 .08 4.48 4.48 0 004.2 3.12A9 9 0 013 20.4a12.7 12.7 0 006.92 2" />
              </svg>
            </a>
            <a href="#" className="hover:text-white transition" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.6-4-1.6a3.15 3.15 0 00-1.3-1.7c-1-.7.1-.7.1-.7a2.5 2.5 0 011.8 1.2 2.6 2.6 0 003.5 1 2.7 2.7 0 01.8-1.6c-2.7-.3-5.5-1.3-5.5-5.8a4.5 4.5 0 011.2-3.1 4.2 4.2 0 01.1-3.1s1-.3 3.3 1.2a11.4 11.4 0 016 0C16.1 5.3 17 5.6 17 5.6a4.2 4.2 0 01.1 3.1 4.5 4.5 0 011.2 3.1c0 4.5-2.8 5.5-5.5 5.8a3 3 0 01.9 2.4v3.5c0 .3.2.6.8.5A12 12 0 0012 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 text-sm text-center mx-auto w-full text-gray-500 ml-8">
          © {new Date().getFullYear()} Shoping India. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

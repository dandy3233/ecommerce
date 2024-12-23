import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className=" dark:bg-gray-900 text-white py-10">
      {/* Social Media Icons */}
      <h3 className="font-bold text-xl mb-4 px-4 md:px-0 md:ml-0 ml-[15vh] flex justify-center md:justify-center">Follow Us</h3>

      <div className="flex justify-center md:justify-center space-x-4 mb-4 px-4 md:px-0 ml-auto">
        <a href="#facebook" className="hover:text-gray-300"><FaFacebook /></a>
        <a href="#twitter" className="hover:text-gray-300"><FaTwitter /></a>
        <a href="#linkedin" className="hover:text-gray-300"><FaLinkedin /></a>
        <a href="#github" className="hover:text-gray-300"><FaGithub /></a>
        <a href="#linkedin" className="hover:text-gray-300"><FaLinkedin /></a>
        <a href="#github" className="hover:text-gray-300"><FaGithub /></a>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Store Locations */}
        <div>
            <h3 className="font-bold text-xl mb-4">Store Locations</h3>
            <ul className="space-y-2">
              <li>Merkato</li>
              <li>Bole</li>
              <li>Megenagna</li>
              <li>Ayer tena</li>
            </ul>
          </div>

        {/* Useful Links Section */}
        <div>
          <h4 className="font-semibold text-lg mb-4 border-b border-gray-600 pb-2">Useful Links</h4>
          <ul>
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#help" className="hover:text-gray-300">Help</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Related Links Section */}
        <div>
          <h4 className="font-semibold text-lg mb-4 border-b border-gray-600 pb-2">Related Links</h4>
          <ul>
            <li><a href="#job-vacancy" className="hover:text-gray-300">Job Vacancy</a></li>
            <li><a href="#application-form" className="hover:text-gray-300">Vehicle Application Form</a></li>
            <li><a href="#employment" className="hover:text-gray-300">Vehicle Application Recruitment</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="font-semibold text-lg mb-4 border-b border-gray-600 pb-2">Contact</h4>
          <ul>
            <li className="flex items-center mb-2">
              <HiLocationMarker className="mr-2" /> Addis Ababa, Ethiopia
            </li>
            <li className="flex items-center mb-2">
              <HiMail className="mr-2" /> dandy@example.com
            </li>
            <li className="flex items-center">
              <HiPhone className="mr-2" /> +251-1234567
            </li>
            <li>
              <i className="fas fa-phone text-orange-500 mr-2"></i> {/* Phone Icon */}
              Call Us:{" "}
              <a href="tel:+251-1234567" className="text-orange-500 hover:text-orange-400">
                +251-1234567
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">&copy; 2023 Copyright: Mulu Gebeya</p>
      </div>
    </footer>
  );
};

export default Footer;

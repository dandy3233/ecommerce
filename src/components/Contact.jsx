import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white py-8 px-4 md:px-16">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
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
          
          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-xl mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>+251 920 345 678</li>
              <li>+251 911 987 654</li>
              <li>info@company.com</li>
            </ul>
          </div>
          

          {/* Social Media Links */}
          <div>
            <h3 className="font-bold text-xl mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-blue-500"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-blue-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-pink-500"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-700"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <ul className="space-y-1">
              <li>MON - FRI</li>
              <li>2:00 - 6:00 Morning</li>
              <li>8:00 - 5:00 Noon</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

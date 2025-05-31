import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">HealthGuide AI</h3>
            <p className="text-blue-100">
              Your AI health assistant providing guidance and information on health concerns.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Medical Disclaimer</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Disclaimer</h3>
            <p className="text-blue-100 text-sm">
              HealthGuide AI provides general health information and is not a substitute for professional medical advice. 
              Always consult with a healthcare professional for medical concerns.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-blue-500">
          <p className="text-center text-blue-100">&copy; {new Date().getFullYear()} HealthGuide AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Example social media icons
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui button

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-100 py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Essential Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Explore</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-primary-500">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary-500">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-primary-500">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary-500">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-sm">
            123 Main Street<br />
            Anytown, USA 12345
          </p>
          <p className="text-sm">
            Email: info@example.com<br />
            Phone: (123) 456-7890
          </p>
          <Button variant="outline">
            <Link to="/contact" className="hover:text-primary-500">
                Get in Touch
            </Link>
          </Button>
        </div>

        {/* Social Media Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary-500" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-primary-500" aria-label="Twitter">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-primary-500" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-primary-500" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="mt-8 border-t border-neutral-700 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
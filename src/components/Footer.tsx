import React from 'react'

const Footer = () => {
  return (
    <div>

    <footer className="bg-black text-white py-8 mt-5">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h4 className="font-bold mb-4">Find a Store</h4>
            <ul>
              <li className="hover:underline cursor-pointer">Become a Member</li>
              <li className="hover:underline cursor-pointer">Sign Up for Email</li>
              <li className="hover:underline cursor-pointer">Send Us Feedback</li>
              <li className="hover:underline cursor-pointer">Student Discounts</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold mb-4">Get Help</h4>
            <ul>
              <li className="hover:underline cursor-pointer">Order Status</li>
              <li className="hover:underline cursor-pointer">Delivery</li>
              <li className="hover:underline cursor-pointer">Returns</li>
              <li className="hover:underline cursor-pointer">Payment Options</li>
              <li className="hover:underline cursor-pointer">Contact Us on Nike.com Inquiries</li>
              <li className="hover:underline cursor-pointer">Contact Us on All Other Inquiries</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-bold mb-4">About Nike</h4>
            <ul>
              <li className="hover:underline cursor-pointer">News</li>
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">Investors</li>
              <li className="hover:underline cursor-pointer">Sustainability</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">© 2023 Nike, Inc. All Rights Reserved</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Guides</a>
            <a href="#" className="hover:underline">Terms of Sale</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Nike Privacy Policy</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
 

    </div>
  )
}

export default Footer

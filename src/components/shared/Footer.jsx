import Link from "next/link";
import Logo from "../Logo";
import { Label } from "../ui/label";
import {  FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-card py-16 px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Description */}
        <div className="col-span-1 space-y-6">
          <Logo/>
          <p className="text-foreground/50 text-sm leading-relaxed">
            Discover the joy of smart shopping! Handpicked products, top brands, and effortless delivery  Shop Mart, your digital marketplace since 2024.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="font-bold mb-6 text-[#1A427F] uppercase tracking-wider text-sm">Navigation</h4>
          <ul className="space-y-4 text-sm text-foreground/50">
            <li>
              <Link href="/" className="hover:text-secondary">Home</Link>
            </li>
            <li>
              <Link href="/all-products" className="hover:text-secondary">All Products</Link>
            </li>
            <li>
              <Link href="/add-product" className="hover:text-secondary">Add Product</Link>
            </li>
            
          </ul>
        </div>

        {/* Section Links */}
        <div>
          <h4 className="font-bold mb-6 text-[#1A427F] uppercase tracking-wider text-sm">Section</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <Link href="#latest-products" className="hover:text-[#F9A825]">Latest Products</Link>
            </li>
            <li>
              <Link href="#how-it-works" className="hover:text-[#F9A825]">How It Works</Link>
            </li>
            <li>
              <Link href="#customer-reviews" className="hover:text-[#F9A825]">Customer Reviews</Link>
            </li>
            <li>
              <Link href="#delivery-and-payment-info" className="hover:text-[#F9A825]">Delivery And Payment Info</Link>
            </li>
            <li>
              <Link href="#category" className="hover:text-[#F9A825]">Category</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-[#1A427F] uppercase tracking-wider text-sm">Contact</h4>
          <Label className={"mb-5"}><FaLocationDot className="text-secondary" />Rupatoli, Barishal, Bangladesh</Label>
          <Label className={"mb-5"}><FaPhoneAlt className="text-secondary" />01876800***</Label>
          <ul className="flex items-center gap-3 mt-3">
            <li className="bg-secondary text-background h-7 w-7 rounded-full flex items-center justify-center p-3 hover:text-secondary hover:bg-card">
              <Link href="mailto:mahfujulsirat00@gmail.com" className="  "><MdAlternateEmail /></Link>
            </li>
            <li className="bg-secondary text-background h-7 w-7 rounded-full flex items-center justify-center p-3 hover:text-secondary hover:bg-card">
              <Link href="https://www.linkedin.com/in/mahfujul-hasan-dev/" className="  "><FaLinkedinIn /></Link>
            </li>
            <li className="bg-secondary text-background h-7 w-7 rounded-full flex items-center justify-center p-3 hover:text-secondary hover:bg-card">
              <Link href="https://www.github.com/Mahfujul-hasan" className="  "><FiGithub /></Link>
            </li>
        
          </ul>
        </div>

      </div>

      {/* Bottom Row */}
      <div className=" mt-10 pt-8 border-t border-foreground/50 text-xs text-foreground/70 text-center">
        <p>© 2024 Shop Mart Inc. All rights reserved.</p>
        
      </div>
    </footer>
  );
}

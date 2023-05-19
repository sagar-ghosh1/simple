import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaMobileAlt, FaYoutube } from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer text-white p-20 bg-[#143338]">
      <div className='gap-3'>
        <img className="h-20" src="/src/assets/images.png" alt="" />
        <h1 className="text-2xl font-bold">Magical Toy</h1>

        <p className="font-medium">Magical Industries Ltd.<br />Providing reliable tech since 1992</p>
        <div className='flex items-center'>
          <p><FaMapMarkerAlt></FaMapMarkerAlt></p>
          <p>Uttra, Dhaka, Bangladesh</p>
        </div>
        <div className='flex items-center'>
          <p><FaMobileAlt></FaMobileAlt></p>
          <p>+0123456789</p>
        </div>
        <div className='flex items-center'>
          <p><AiOutlineMail></AiOutlineMail></p>
          <p>magical@toy.com</p>
        </div>
      </div>
      <div className='gap-7'>
        <span className="footer-title">Services</span>
        <a className="link link-hover">My account</a>
        <a className="link link-hover">Login</a>
        <a className="link link-hover">Terms & Conditions</a>
        <a className="link link-hover">Promotional Offer</a>
        <a className="link link-hover">Order tracking</a>
      </div>
      <div className='gap-7'>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">All Products</a>
        <a className="link link-hover">Locations Map</a>
      </div>
      <div className='gap-7'>
        <span className="footer-title">Ouick Links</span>
        <a className="link link-hover">Support</a>
        <a className="link link-hover">Helpline</a>
        <a className="link link-hover">Courese</a>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Event</a>
      </div>

      <div className='gap-6'>
        <h1 className="footer-title">Newsletter</h1>
        <div className="form-control w-80">
          <h5>Through this email you can communicate very well without any problem.</h5><br />
          <div className="relative">
            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
          </div>
        </div>

        <div>
          <h5 className='text-xl'>All Social Site</h5>
          <div className='flex gap-3 text-xl mt-3'>
            <a href=""><FaGoogle></FaGoogle></a>
            <a href=""><FaFacebook></FaFacebook></a>
            <a href=""><FaYoutube></FaYoutube></a>
            <a href=""><FaInstagram></FaInstagram></a>
            <a href=""><FaLinkedin></FaLinkedin></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
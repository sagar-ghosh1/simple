import { FaMapMarkerAlt } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer text-white p-20 bg-[#143338]">
      <div>
        <img className="h-20" src="/src/assets/images.png" alt="" />
        <h1 className="text-2xl font-bold">Magical Toy</h1>

        <p className="font-medium">Magical Industries Ltd.<br />Providing reliable tech since 1992</p>
        <div className='flex items-center'>
          <p><FaMapMarkerAlt></FaMapMarkerAlt></p>
          <p>Uttra, Dhaka, Bangladesh</p>
        </div>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">My account</a>
        <a className="link link-hover">Login</a>
        <a className="link link-hover">Terms & Conditions</a>
        <a className="link link-hover">Promotional Offer</a>
        <a className="link link-hover">Order tracking</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">All Products</a>
        <a className="link link-hover">Locations Map</a>
      </div>
      <div>
        <span className="footer-title">Ouick Links</span>
        <a className="link link-hover">Support</a>
        <a className="link link-hover">Helpline</a>
        <a className="link link-hover">Courese</a>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Event</a>
      </div>

      <div>
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative">
            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
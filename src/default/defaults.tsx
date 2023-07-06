import inStyleLogo from "../assets/brands/inStyle.png";
import BustleLogo from "../assets/brands/Bustle.png";
import harperBazaarLogo from "../assets/brands/harperBazaar.png";
import versaceLogo from "../assets/brands/versace.png";
import ProductImg1 from "./../assets/products/1.png";
import ProductImg2 from "./../assets/products/2.png";
import ProductImg3 from "./../assets/products/3.png";
import ProductImg4 from "./../assets/products/4.png";
import ProductImg5 from "./../assets/products/5.png";
import ProductImg6 from "./../assets/products/6.png";
import ProductImg7 from "./../assets/products/7.png";
import ProductImg8 from "./../assets/products/8.png";
import ProductImg9 from "./../assets/products/9.png";
import ProductImg10 from "./../assets/products/10.png";
import ProductImg11 from "./../assets/products/11.png";
import aboutImg from "./../assets/about/1.png";
import FooterLogo from "./../assets/Logo.webp"; 
import { FaTwitter, FaInstagram,FaGithub ,FaFacebookF, FaLinkedinIn} from 'react-icons/fa';
export const BannerBreands: { id: number; alt: string; logo: any }[] = [
  { id: 1, alt: "inStyle logo", logo: inStyleLogo },
  { id: 2, alt: "Bustle logo", logo: BustleLogo },
  { id: 3, alt: "Harper Bazaar logo", logo: harperBazaarLogo },
  { id: 4, alt: "Versace logo", logo: versaceLogo },
]; 
export const Products: {
  id: number;
  name: string;
  images: [{ id: number; image: any }];
  sizes: any;
  category: string;
  gender: string;
  price: number;
  detail : string;
  slug:string;
}[] = [
  {
    id: 1,
    name: "Brushed Raglan Sweatshirt",
    sizes:['XS','S','M','L','XL'],
    images: [{ id: 1, image: ProductImg1 }],
    category: "sweater",
    price: 195,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    gender: "female",
    slug:'brushed-raglan-sweatshirt'
  },
  {
    id: 2,
    name: "Cameryn Sash Tie Dress",
    images: [{ id: 1, image: ProductImg2 }],
    sizes:['XS','S','M','L','XL'],
    category: "dress",
    price: 545,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    gender: "female",
    slug:'cameryn-sash-tie-dress'
  },
  {
    id: 3,
    name: "Flex Sweatshirt",
    images: [{ id: 1, image: ProductImg3 }],
    sizes:['XS','S','M','L','XL'],
    category: "sweater",
    price: 175,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    gender: "female",
    slug:'flex-sweatshirt'
  },
  {
    id: 4,
    name: "Flex Sweatpants",
    images: [{ id: 1, image: ProductImg4 }],
    sizes:['XS','S','M','L','XL'],
    category: "pants",
    price: 175,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    gender: "female",
    slug:'flex-sweatpants'
  },
  {
    id: 5,
    name: "Pink Fleece Sweatpants",
    images: [{ id: 1, image: ProductImg5 }],
    sizes:['XS','S','L','XL'],
    category: "pants",
    price: 195,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    gender: "female",
    slug:'pink-fleece-sweatpants'
  },
  {
    id: 6,
    name: "Lite Sweatpants",
    images: [{ id: 1, image: ProductImg6 }],
    sizes:['XS','M','L','XL'],
    category: "pants",
    price: 150,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    gender: "female",
    slug:'lite-sweatpants'
  },
  {
    id: 7,
    name: "Imperial Alpaca Hoodie",
    images: [{ id: 1, image: ProductImg7 }],
    sizes:['XS','S','M','L','XL'],
    category: "jackets",
    price: 525,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    gender: "female",
    slug:'imperial-alpaca-hoodie'
  },
  {
    id: 8,
    name: "Muscle Tank",
    images: [{ id: 1, image: ProductImg8 }],
    sizes:['S','M','XL'],
    category: "t shirts",
    price: 75,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    gender: "female",
    slug:'muscle-tank'
  },
  {
    id: 9,
    name: "Brushed Bomber",
    images: [{ id: 1, image: ProductImg9 }],
    sizes:['XS','M','L'],
    category: "jackets",
    price: 225,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    gender: "female",
    slug:'brushed-bomber'
  },

  {
    id: 11,
    name: "Flex Push Button Bomber",
    images: [{ id: 1, image: ProductImg10 }],
    sizes:['XS','S','M','L','XL'],
    category: "jackets",
    price: 225,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    gender: "male",
    slug:'flex-push-button-bomber'
  },
  {
    id: 12,
    name: "Raglan Sweatshirt",
    images: [{ id: 1, image: ProductImg11 }],
    sizes:['XS','S','M','L','XL'],
    category: "sweater",
    price: 195,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    gender: "male",
    slug:'raglan-sweatshirt'
  },
];

export const AboutData: {
  heading: string;
  image: any;
  detail: string;
  item: { heading: string; paragraph: string }[];
} = {
  heading: "Unique and Authentic Vintage Designer Jewellery",
  image: aboutImg,
  detail:
    "This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.",
  item: [
    {
      heading: "Using Good Quality Materials",
      paragraph: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
    },
    {
      heading: "100% Handmade Products",
      paragraph: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
    },
    {
      heading: "Modern Fashion Design",
      paragraph: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
    },
    {
      heading: "Discount for Bulk Orders",
      paragraph: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
    },
  ],
};

export const FooterData: {
  logo: any;
  siteName:string
  detail: string;
  social: { id: number; link: string; icon: any; alt: string }[];
  company: { id: number; link: string; label: string }[];
  support: { id: number; link: string; label: string }[];
  contact: { id: number; link: string; label: string }[];
} = {
  logo: FooterLogo,
  siteName:'Dine Market',
  detail:
    "Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made",
  social: [
    {
      id: 1,
      link: "https://www.instagram.com/nexu_solutions/",
      icon: <FaInstagram/>,
      alt: "nexu_solutions",
    },
    {
      id: 2,
      link: "https://github.com/MustafaGhouri",
      icon: <FaGithub/>,
      alt: "MustafaGhouri",
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/mustafa-ghouri-000149243/",
      icon: <FaLinkedinIn/>,
      alt: "mustafa-ghouri-000149243",
    },
  ],
  company: [
    {
      id: 1,
      link: "/about", 
      label: "About",
    },
    {
      id: 2,
      link: "/terms-use", 
      label: "Terms of Use",
    },
    
    {
      id: 3,
      link: "/privacy-policy", 
      label: "Privacy Policy",
    },
    {
      id: 4,
      link: "/how-it-works", 
      label: "How it Works",
    },
    {
      id: 5,
      link: "/contact-us", 
      label: "Contact Us",
    },
    
  ],
  support: [
    {
      id: 1,
      link: "/support-center", 
      label: "Support Center",
    },
    {
      id: 2,
      link: "/services", 
      label: "24h Service",
    },
    
    {
      id: 3,
      link: "/quick-chat", 
      label: "Quick Chat",
    },
    
    
  ],
  contact: [
    {
      id: 1,
      link: "https://wa.me/1XXXXXXXXXX", 
      label: "Whatsapp",
    },
    {
      id: 2,
      link: "/support", 
      label: "Support 24h",
    },
    
    
    
  ],
  
};

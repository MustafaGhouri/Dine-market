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
  category: string;
  gender: string;
  price: number;
}[] = [
  {
    id: 1,
    name: "Brushed Raglan Sweatshirt",
    images: [{ id: 1, image: ProductImg1 }],
    category: "sweater",
    price: 195,
    gender: "female",
  },
  {
    id: 2,
    name: "Cameryn Sash Tie Dress",
    images: [{ id: 1, image: ProductImg2 }],
    category: "dress",
    price: 545,
    gender: "female",
  },
  {
    id: 3,
    name: "Flex Sweatshirt",
    images: [{ id: 1, image: ProductImg3 }],
    category: "sweater",
    price: 175,
    gender: "female",
  },
  {
    id: 4,
    name: "Flex Sweatpants",
    images: [{ id: 1, image: ProductImg4 }],
    category: "pants",
    price: 175,
    gender: "female",
  },
  {
    id: 5,
    name: "Pink Fleece Sweatpants",
    images: [{ id: 1, image: ProductImg5 }],
    category: "pants",
    price: 195,
    gender: "female",
  },
  {
    id: 6,
    name: "Lite Sweatpants",
    images: [{ id: 1, image: ProductImg6 }],
    category: "pants",
    price: 150,
    gender: "female",
  },
  {
    id: 7,
    name: "Imperial Alpaca Hoodie",
    images: [{ id: 1, image: ProductImg7 }],
    category: "jackets",
    price: 525,
    gender: "female",
  },
  {
    id: 8,
    name: "Muscle Tank",
    images: [{ id: 1, image: ProductImg8 }],
    category: "t shirts",
    price: 75,
    gender: "female",
  },
  {
    id: 9,
    name: "Brushed Bomber",
    images: [{ id: 1, image: ProductImg9 }],
    category: "jackets",
    price: 225,
    gender: "female",
  },

  {
    id: 11,
    name: "Flex Push Button Bomber",
    images: [{ id: 1, image: ProductImg10 }],
    category: "jackets",
    price: 225,
    gender: "male",
  },
  {
    id: 12,
    name: "Raglan Sweatshirt",
    images: [{ id: 1, image: ProductImg11 }],
    category: "sweater",
    price: 195,
    gender: "male",
  },
];

export const AboutData: {
  heading: string;
  image: any;
  detail: string;
  item: [{ heading: string; paragraph: string }][];
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

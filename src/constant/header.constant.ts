// src/data/socialMediaLinks.js
import {
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaQuora,
  FaTelegram,
  FaSnapchatGhost,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiFacebookBoxFill } from "react-icons/ri";
interface MenuLabel {
  label: string;
  link: string;
  type?: "img";
  src?: string;
}

interface MenuChild {
  label?: string;
  link?:string;
  labels?: MenuLabel[];
}

interface MenuItem {
  label: string;
  link: string;
  type?: "large" | "small";
  children?: MenuChild[];
}

export const socialMediaLinks = [
  {
    name: "Twitter",
    icon: FaXTwitter,
    url: "https://www.Twitter.com/",
  },
  {
    name: "Facebook",
    icon: RiFacebookBoxFill,
    url: "https://www.facebook.com/",
  },
  {
    name: "Youtube",
    icon: FaYoutube,
    url: "https://www.Youtube.com/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/",
  },
  {
    name: "Pinterest ",
    icon: FaPinterest,
    url: "https://www.Pinterest.com/",
  },
  {
    name: "Whatsapp ",
    icon: FaWhatsapp,
    url: "https://www.Whatsapp.com/",
  },
  {
    name: "Quora",
    icon: FaQuora,
    url: "https://www.Quora.com/",
  },
  {
    name: "Telegram",
    icon: FaTelegram,
    url: "https://www.Telegram.com/",
  },
  {
    name: "Snapchat",
    icon: FaSnapchatGhost,
    url: "https://www.Snapchat.com/",
  },
];

export const notifications = [
  "Download the Littlebox App from Play Store 📲",
  "USE PREPAID10 FOR 10% OFF ON ALL PREPAID ORDERS!",
  "Download the Littlebox App from Play Store 📲",
];

export const menuData: MenuItem[] = [
  {
    label: "Pick A Mood",
    link: "/pick-a-mood",
    type: "large",
    children: [
      {
        label: "Pick A Mood",
        labels: [
          { label: "Feeling Cozy", link: "/pick-a-mood/feeling-cozy" },
          { label: "Feeling Free", link: "/pick-a-mood/feeling-free" },
          { label: "Feeling Cute", link: "/pick-a-mood/feeling-cute" },
          { label: "Feeling Edgy", link: "/pick-a-mood/feeling-edgy" },
          { label: "Feeling Sexy", link: "/pick-a-mood/feeling-sexy" },
          {
            label: "Feeling Minimalist",
            link: "/pick-a-mood/feeling-minimalist",
          },
          { label: "Feeling Elegant", link: "/pick-a-mood/feeling-elegant" },
          { label: "Feeling K-Pop", link: "/pick-a-mood/feeling-kpop" },
        ],
      },
      {
        label: "New Drops",
        labels: [
          {
            label: "New DropsGet the Celeb look",
            link: "/pick-a-mood/feeling-cozy",
          },
          { label: "Green Runway", link: "/pick-a-mood/feeling-free" },
        ],
      },
      {
        labels: [
          {
            label: "Get the slab look",
            link: "/pick-a-mood/feeling-cozy",
            type: "img",
            src: "https://littleboxindia.com/cdn/shop/files/get_look_360x.jpg?v=1726224301",
          },
        ],
      },
      {
        labels: [
          {
            label: "Get the slab look",
            link: "/pick-a-mood/feeling-cozy",
            type: "img",
            src: "https://littleboxindia.com/cdn/shop/files/get_look_360x.jpg?v=1726224301",
          },
        ],
      },
    ],
  },
  {
    label: "Men's New",
    link: "/mens-new",
    children: [
      { label: "Clothing", link: "/mens-new/clothing" },
      { label: "Footwear", link: "/mens-new/footwear" },
    ],
    type: "small",
  },
  {
    label: "Clothing",
    link: "/clothing",
    type: "large",
    children: [
      {
        label: "Pick A Mood",
        labels: [
          { label: "Feeling Cozy", link: "/pick-a-mood/feeling-cozy" },
          { label: "Feeling Free", link: "/pick-a-mood/feeling-free" },
          { label: "Feeling Cute", link: "/pick-a-mood/feeling-cute" },
          { label: "Feeling Edgy", link: "/pick-a-mood/feeling-edgy" },
          { label: "Feeling Sexy", link: "/pick-a-mood/feeling-sexy" },
          {
            label: "Feeling Minimalist",
            link: "/pick-a-mood/feeling-minimalist",
          },
          { label: "Feeling Elegant", link: "/pick-a-mood/feeling-elegant" },
          { label: "Feeling K-Pop", link: "/pick-a-mood/feeling-kpop" },
        ],
      },
      {
        label: "New Drops",
        labels: [
          {
            label: "New DropsGet the Celeb look",
            link: "/pick-a-mood/feeling-cozy",
          },
          { label: "Green Runway", link: "/pick-a-mood/feeling-free" },
        ],
      },
      {
        label: "New Drops",
        labels: [
          {
            label: "New DropsGet the Celeb look",
            link: "/pick-a-mood/feeling-cozy",
          },
          {
            label: "Get the slab look",
            link: "/pick-a-mood/feeling-cozy",
            type: "img",
            src: "https://littleboxindia.com/cdn/shop/files/get_look_360x.jpg?v=1726224301",
          },
        ],
      },
      {
        label: "New Drops",
        labels: [
          {
            label: "New DropsGet the Celeb look",
            link: "/pick-a-mood/feeling-cozy",
          },
          {
            label: "Get the slab look",
            link: "/pick-a-mood/feeling-cozy",
            type: "img",
            src: "https://littleboxindia.com/cdn/shop/files/get_look_360x.jpg?v=1726224301",
          },
        ],
      },
      {
        label: "New Drops",
        labels: [
          {
            label: "New DropsGet the Celeb look",
            link: "/pick-a-mood/feeling-cozy",
          },
          { label: "Green Runway", link: "/pick-a-mood/feeling-free" },
        ],
      },
    ],
  },
  {
    label: "Footwear",
    link: "/footwear",
    type: "large",
    children: [
      {
        labels: [
          {
            label: "New DropsGet the Celeb look",
            link: "/pick-a-mood/feeling-cozy",
          },
          { label: "Green Runway", link: "/pick-a-mood/feeling-free" },
        ],
      },
      {
        labels: [
          {
            label: "Get the slab look",
            link: "/pick-a-mood/feeling-cozy",
            type: "img",
            src: "https://littleboxindia.com/cdn/shop/files/get_look_360x.jpg?v=1726224301",
          },
        ],
      },
      {
        labels: [
          {
            label: "Get the slab look",
            link: "/pick-a-mood/feeling-cozy",
            type: "img",
            src: "https://littleboxindia.com/cdn/shop/files/get_look_360x.jpg?v=1726224301",
          },
        ],
      },
    ],
  },
  { label: "Plus-Curve", link: "/plus-curve" },
  { label: "New Arrivals", link: "/new-arrivals" },
  { label: "Shop by Videos", link: "/shop-by-videos" },
  { label: "Next Day Dispatch", link: "/next-day-dispatch" },
  { label: "Influencer Program", link: "/influencer-program" },
  { label: "Exchanges", link: "/exchanges" },
  { label: "Track Your Order", link: "/track-your-order" },
];

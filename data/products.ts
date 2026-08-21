import type { Product } from "../components/ProductCard";

export const products: Product[] = [
  {
    id: "birthday-pink-surprise-box",
    name: "Birthday Pink Surprise Box",
    price: 899,
    mrp: 1299,
    discount: 31,
    category: "Birthday Gifts",
    occasion: "Birthday",
    recipient: "Her",
    description:
      "A beautifully packed birthday surprise filled with sweet little moments, thoughtful keepsakes and celebration-ready details.",
    images: {
      closedBox:
        "https://images.pexels.com/photos/6045704/pexels-photo-6045704.jpeg?auto=compress&cs=tinysrgb&w=800",
      openingBox:
        "https://images.pexels.com/photos/5486829/pexels-photo-5486829.jpeg?auto=compress&cs=tinysrgb&w=800",
      firstReveal:
        "https://images.pexels.com/photos/4397903/pexels-photo-4397903.jpeg?auto=compress&cs=tinysrgb&w=800",
      fullyOpened:
        "https://images.pexels.com/photos/18579833/pexels-photo-18579833.jpeg?auto=compress&cs=tinysrgb&w=800",
      contentsCloseup:
        "https://images.pexels.com/photos/13831901/pexels-photo-13831901.jpeg?auto=compress&cs=tinysrgb&w=800",
      lifestyleReveal:
        "https://images.pexels.com/photos/7410461/pexels-photo-7410461.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    customizable: true,
    stockStatus: "In Stock",
    featured: true,
    bestseller: true,
    newArrival: false,
    tags: ["birthday", "pink", "personalized", "surprise"],
    rating: 4.8,
  },

  {
    id: "romantic-couple-surprise-box",
    name: "Romantic Couple Surprise Box",
    price: 1199,
    mrp: 1699,
    discount: 29,
    category: "Couple Gifts",
    occasion: "Anniversary",
    recipient: "Partner",
    description:
      "A romantic surprise box designed for meaningful moments, sweet memories and little gestures of love.",
    images: {
      closedBox:
        "https://images.pexels.com/photos/6102143/pexels-photo-6102143.jpeg?auto=compress&cs=tinysrgb&w=800",
      openingBox:
        "https://images.pexels.com/photos/8014845/pexels-photo-8014845.jpeg?auto=compress&cs=tinysrgb&w=800",
      firstReveal:
        "https://images.pexels.com/photos/697224/pexels-photo-697224.jpeg?auto=compress&cs=tinysrgb&w=800",
      fullyOpened:
        "https://images.pexels.com/photos/30592535/pexels-photo-30592535.jpeg?auto=compress&cs=tinysrgb&w=800",
      contentsCloseup:
        "https://images.pexels.com/photos/13831901/pexels-photo-13831901.jpeg?auto=compress&cs=tinysrgb&w=800",
      lifestyleReveal:
        "https://images.pexels.com/photos/18579833/pexels-photo-18579833.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    customizable: true,
    stockStatus: "In Stock",
    featured: true,
    bestseller: false,
    newArrival: true,
    tags: ["couple", "romantic", "anniversary", "love"],
    rating: 4.9,
  },

  {
    id: "self-care-gift-box",
    name: "Self-Care Gift Box",
    price: 999,
    mrp: 1399,
    discount: 29,
    category: "Self-Care Gifts",
    occasion: "Just Because",
    recipient: "Her",
    description:
      "A calming self-care collection filled with thoughtful little luxuries for a warm and relaxing gifting moment.",
    images: {
      closedBox:
        "https://images.pexels.com/photos/4397879/pexels-photo-4397879.jpeg?auto=compress&cs=tinysrgb&w=800",
      openingBox:
        "https://images.pexels.com/photos/3927238/pexels-photo-3927238.jpeg?auto=compress&cs=tinysrgb&w=800",
      firstReveal:
        "https://images.pexels.com/photos/31552021/pexels-photo-31552021.jpeg?auto=compress&cs=tinysrgb&w=800",
      fullyOpened:
        "https://images.pexels.com/photos/34939732/pexels-photo-34939732.jpeg?auto=compress&cs=tinysrgb&w=800",
      contentsCloseup:
        "https://images.pexels.com/photos/3993398/pexels-photo-3993398.jpeg?auto=compress&cs=tinysrgb&w=800",
      lifestyleReveal:
        "https://images.pexels.com/photos/31552021/pexels-photo-31552021.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    customizable: true,
    stockStatus: "In Stock",
    featured: true,
    bestseller: false,
    newArrival: true,
    tags: ["self-care", "wellness", "relaxing", "gift-box"],
    rating: 4.7,
  },

  {
    id: "birthday-teddy-gift-box",
    name: "Birthday Teddy Gift Box",
    price: 749,
    mrp: 1099,
    discount: 32,
    category: "Birthday Gifts",
    occasion: "Birthday",
    recipient: "Friend",
    description:
      "A cheerful birthday box featuring a cute teddy, sweet treats and celebration details made for a memorable surprise.",
    images: {
      closedBox:
        "https://images.pexels.com/photos/697224/pexels-photo-697224.jpeg?auto=compress&cs=tinysrgb&w=800",
      openingBox:
        "https://images.pexels.com/photos/5486829/pexels-photo-5486829.jpeg?auto=compress&cs=tinysrgb&w=800",
      firstReveal:
        "https://images.pexels.com/photos/8014845/pexels-photo-8014845.jpeg?auto=compress&cs=tinysrgb&w=800",
      fullyOpened:
        "https://images.pexels.com/photos/30592535/pexels-photo-30592535.jpeg?auto=compress&cs=tinysrgb&w=800",
      contentsCloseup:
        "https://images.pexels.com/photos/18579833/pexels-photo-18579833.jpeg?auto=compress&cs=tinysrgb&w=800",
      lifestyleReveal:
        "https://images.pexels.com/photos/7410461/pexels-photo-7410461.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    customizable: true,
    stockStatus: "In Stock",
    featured: false,
    bestseller: true,
    newArrival: false,
    tags: ["birthday", "teddy", "chocolates", "friend"],
    rating: 4.8,
  },
];

export const featuredProducts = products.filter(
  (product) => product.featured
);

export const bestsellerProducts = products.filter(
  (product) => product.bestseller
);

export const newArrivalProducts = products.filter(
  (product) => product.newArrival
);

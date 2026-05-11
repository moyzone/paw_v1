/**
 * Product data for Pawthentic shampoos
 * Three variants for different pet care needs
 */

export interface Product {
  id: string;
  name: string;
  category: "dog" | "cat";
  tagline: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  image: string;
  amazonUrl: string;
  flipkartUrl: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "indie-dog-shampoo",
    name: "Indie Dog Shampoo",
    category: "dog",
    tagline: "Indie-Specific Formula with Allantoin",
    description:
      "Specially formulated for Indian dog breeds, this gentle shampoo features allantoin to soothe and heal sensitive skin. Perfect for maintaining coat health and natural shine.",
    benefits: [
      "Soothes sensitive skin with allantoin",
      "Maintains natural coat shine",
      "Gentle on Indian dog breeds",
      "Promotes skin healing",
      "Long-lasting freshness",
    ],
    ingredients: [
      "Allantoin",
      "Natural Oat Extract",
      "Aloe Vera",
      "Coconut Oil",
      "pH-balanced formula",
    ],
    image: "/images/pawthentic_indie_bottle.png",
    amazonUrl: "#",
    flipkartUrl: "#",
    featured: true,
  },
  {
    id: "advanced-dog-shampoo",
    name: "Advanced Dog Coat Shampoo",
    category: "dog",
    tagline: "5-in-1 Formula: Clean, Detangle, Condition, Moisturize, Nourish",
    description:
      "Our premium 5-in-1 formula eliminates the need for multiple products. This advanced shampoo cleans, detangles, conditions, moisturizes, and nourishes your dog's coat in one wash.",
    benefits: [
      "All-in-one 5-in-1 formula",
      "Deep conditioning action",
      "Detangles effortlessly",
      "Moisturizes dry coats",
      "Enhances coat nutrition",
      "Reduces grooming time",
    ],
    ingredients: [
      "Coconut Oil",
      "Aloe Vera",
      "Oatmeal",
      "Natural Conditioners",
      "Vitamin E",
    ],
    image: "/images/pawthentic_breed_bottle.png",
    amazonUrl: "#",
    flipkartUrl: "#",
    featured: true,
  },
  {
    id: "foaming-cat-shampoo",
    category: "cat",
    name: "Foaming Cat Shampoo",
    tagline: "Feline-Specific, Cat Safe pH",
    description:
      "Specially formulated with cat-safe pH levels, this gentle foaming shampoo is perfect for feline friends. The natural foam makes washing easier while being completely safe for cats.",
    benefits: [
      "Cat-safe pH formula",
      "Gentle and safe foaming action",
      "Reduces water stress for cats",
      "Protects sensitive feline skin",
      "Natural and mild ingredients",
      "Easy rinsing formula",
    ],
    ingredients: [
      "Cat-Safe pH Balancers",
      "Aloe Vera",
      "Oatmeal",
      "Coconut Extract",
      "Natural Foam Enhancers",
      "Hypoallergenic blend",
    ],
    image: "/images/pawthentic_cat_bottle.png",
    amazonUrl: "#",
    flipkartUrl: "#",
    featured: true,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.featured);
};

export const getProductsByCategory = (category: "dog" | "cat"): Product[] => {
  return products.filter((p) => p.category === category);
};

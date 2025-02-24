export interface Product {
  id: number
  name: string
  slug: string
  description: string
  longDescription: string
  price: number
  category: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Immune Boost Plus",
    slug: "immune-boost-plus",
    description: "Strengthen your immune system with our powerful blend of vitamins and herbs.",
    longDescription:
      "Our Immune Boost Plus is a comprehensive formula designed to support and strengthen your immune system. It contains a potent blend of Vitamin C, Vitamin D, Zinc, Elderberry, and Echinacea. These ingredients work synergistically to enhance your body's natural defense mechanisms, helping you stay healthy all year round.",
    price: 29.99,
    category: "Immune Support",
  },
  {
    id: 2,
    name: "Heart Health Formula",
    slug: "heart-health-formula",
    description: "Support cardiovascular health with our specially formulated supplement.",
    longDescription:
      "The Heart Health Formula is crafted to promote optimal cardiovascular function. It includes CoQ10, Omega-3 fatty acids, Garlic extract, and Hawthorn berry. These ingredients have been shown to support healthy cholesterol levels, maintain blood pressure within normal ranges, and promote overall heart health.",
    price: 34.99,
    category: "Heart Health",
  },
  {
    id: 3,
    name: "Joint Flex Pro",
    slug: "joint-flex-pro",
    description: "Improve joint mobility and reduce discomfort with our advanced formula.",
    longDescription:
      "Joint Flex Pro is designed to support joint health and improve mobility. It contains Glucosamine, Chondroitin, MSM, and Turmeric. These ingredients work together to support cartilage health, reduce inflammation, and ease joint discomfort, helping you maintain an active lifestyle.",
    price: 39.99,
    category: "Joint Support",
  },
  {
    id: 4,
    name: "Brain Boost Complex",
    slug: "brain-boost-complex",
    description: "Enhance cognitive function and memory with our brain-boosting supplement.",
    longDescription:
      "Our Brain Boost Complex is formulated to support cognitive function, memory, and focus. It contains a blend of Ginkgo Biloba, Bacopa Monnieri, Lion's Mane Mushroom, and Phosphatidylserine. These ingredients have been shown to support brain health, improve memory recall, and enhance mental clarity.",
    price: 44.99,
    category: "Cognitive Health",
  },
  {
    id: 5,
    name: "Digestive Harmony",
    slug: "digestive-harmony",
    description: "Promote digestive health and comfort with our balanced probiotic blend.",
    longDescription:
      "Digestive Harmony is a comprehensive probiotic supplement designed to support gut health. It contains a blend of beneficial bacteria strains, including Lactobacillus and Bifidobacterium, along with prebiotics to support their growth. This formula helps maintain a healthy gut microbiome, aids in digestion, and supports overall digestive comfort.",
    price: 32.99,
    category: "Digestive Health",
  },
  {
    id: 6,
    name: "Sleep Well Formula",
    slug: "sleep-well-formula",
    description: "Improve sleep quality and duration with our natural sleep aid.",
    longDescription:
      "The Sleep Well Formula is designed to promote restful sleep and improve overall sleep quality. It contains a blend of Melatonin, Valerian Root, Chamomile, and L-Theanine. These ingredients work together to help you fall asleep faster, stay asleep longer, and wake up feeling refreshed and rejuvenated.",
    price: 27.99,
    category: "Sleep Support",
  },
  {
    id: 7,
    name: "Bone Strength Plus",
    slug: "bone-strength-plus",
    description: "Support bone health and density with our calcium-rich formula.",
    longDescription:
      "Bone Strength Plus is formulated to support optimal bone health and density. It contains a blend of Calcium, Vitamin D3, Vitamin K2, and Magnesium. These nutrients work synergistically to promote calcium absorption, support bone mineralization, and maintain overall bone strength, especially important as we age.",
    price: 36.99,
    category: "Bone Health",
  },
  {
    id: 8,
    name: "Stress Relief Blend",
    slug: "stress-relief-blend",
    description: "Manage stress and promote relaxation with our calming herbal blend.",
    longDescription:
      "Our Stress Relief Blend is designed to help you manage stress and promote a sense of calm and relaxation. It contains a mix of adaptogenic herbs including Ashwagandha, Rhodiola Rosea, and Holy Basil, along with L-Theanine and Magnesium. This formula helps balance cortisol levels, reduce anxiety, and improve overall stress resilience.",
    price: 31.99,
    category: "Stress Management",
  },
  {
    id: 9,
    name: "Vision Guard",
    slug: "vision-guard",
    description: "Protect and support eye health with our comprehensive vision formula.",
    longDescription:
      "Vision Guard is formulated to support and maintain healthy vision. It contains a blend of Lutein, Zeaxanthin, Bilberry extract, and Vitamin A. These ingredients have been shown to support macular health, protect against blue light damage, and maintain overall eye health, especially important in our digital age.",
    price: 38.99,
    category: "Eye Health",
  },
  {
    id: 10,
    name: "Liver Detox Support",
    slug: "liver-detox-support",
    description: "Support liver function and natural detoxification processes.",
    longDescription:
      "Our Liver Detox Support is designed to promote healthy liver function and support your body's natural detoxification processes. It contains Milk Thistle, N-Acetyl Cysteine (NAC), Dandelion Root, and Artichoke extract. These ingredients have been shown to support liver health, promote glutathione production, and aid in the elimination of toxins.",
    price: 33.99,
    category: "Liver Health",
  },
  {
    id: 11,
    name: "Women's Vitality Complex",
    slug: "womens-vitality-complex",
    description: "Comprehensive nutritional support tailored for women's health needs.",
    longDescription:
      "The Women's Vitality Complex is a comprehensive multivitamin formula designed specifically for women's health needs. It contains essential vitamins and minerals, along with herbs like Black Cohosh and Dong Quai. This blend supports hormonal balance, bone health, and overall vitality, helping women feel their best at every stage of life.",
    price: 41.99,
    category: "Women's Health",
  },
  {
    id: 12,
    name: "Men's Power Formula",
    slug: "mens-power-formula",
    description: "Targeted nutritional support for men's health and vitality.",
    longDescription:
      "Our Men's Power Formula is a comprehensive supplement designed to support men's overall health and vitality. It contains a blend of essential vitamins and minerals, along with Saw Palmetto, Lycopene, and Zinc. This formula supports prostate health, maintains testosterone levels within normal ranges, and promotes overall well-being in men.",
    price: 43.99,
    category: "Men's Health",
  },
  {
    id: 13,
    name: "Flex-Joint Cream",
    slug: "flex-joint-cream",
    description: "Topical cream for quick relief of joint and muscle discomfort.",
    longDescription:
      "Flex-Joint Cream is a fast-acting topical solution for joint and muscle discomfort. It contains a blend of natural ingredients including Glucosamine, MSM, and Arnica. This non-greasy formula absorbs quickly, providing targeted relief to areas of discomfort and supporting overall joint flexibility and mobility.",
    price: 24.99,
    category: "Topical Solutions",
  },
  {
    id: 14,
    name: "Keto Support Complex",
    slug: "keto-support-complex",
    description: "Support your ketogenic lifestyle with our specialized supplement blend.",
    longDescription:
      "The Keto Support Complex is designed to support those following a ketogenic diet. It contains MCT Oil, BHB Salts, and essential electrolytes. This formula helps support ketosis, provides clean energy, and helps manage the 'keto flu' symptoms that can occur when transitioning into a ketogenic state.",
    price: 37.99,
    category: "Specialized Diets",
  },
  {
    id: 15,
    name: "Hair, Skin & Nails Formula",
    slug: "hair-skin-nails-formula",
    description: "Nourish your body from within for radiant skin, strong nails, and healthy hair.",
    longDescription:
      "Our Hair, Skin & Nails Formula is designed to support your natural beauty from the inside out. It contains a blend of Biotin, Collagen, Vitamin E, and Silica. These nutrients work together to promote strong, healthy hair growth, support skin elasticity and hydration, and encourage strong nail growth.",
    price: 29.99,
    category: "Beauty Support",
  },
  {
    id: 16,
    name: "Thyroid Balance",
    slug: "thyroid-balance",
    description: "Support healthy thyroid function with our specialized herbal blend.",
    longDescription:
      "Thyroid Balance is formulated to support optimal thyroid function. It contains a blend of Iodine, Selenium, Zinc, and Ashwagandha. These nutrients and herbs work together to support the production of thyroid hormones, promote metabolic health, and help maintain energy levels and overall well-being.",
    price: 35.99,
    category: "Endocrine Support",
  },
  {
    id: 17,
    name: "Vegan Protein Plus",
    slug: "vegan-protein-plus",
    description: "Complete plant-based protein with added vitamins and minerals.",
    longDescription:
      "Vegan Protein Plus is a comprehensive plant-based protein supplement. It contains a blend of pea protein, brown rice protein, and hemp protein, providing a complete amino acid profile. Enhanced with a vitamin and mineral blend, this formula supports muscle health, energy levels, and overall nutrition for those following a vegan or vegetarian lifestyle.",
    price: 39.99,
    category: "Sports Nutrition",
  },
  {
    id: 18,
    name: "Allergy Relief Complex",
    slug: "allergy-relief-complex",
    description: "Natural support for seasonal allergy symptoms.",
    longDescription:
      "Our Allergy Relief Complex is designed to provide natural support for seasonal allergy symptoms. It contains a blend of Quercetin, Bromelain, Stinging Nettle, and Butterbur. These ingredients work together to support a healthy immune response, reduce inflammation, and provide relief from common allergy symptoms like sneezing, itching, and congestion.",
    price: 32.99,
    category: "Allergy Support",
  },
  {
    id: 19,
    name: "Mood Lift Formula",
    slug: "mood-lift-formula",
    description: "Support emotional well-being and a positive mood.",
    longDescription:
      "The Mood Lift Formula is designed to support emotional well-being and promote a positive mood. It contains a blend of 5-HTP, St. John's Wort, and SAM-e, along with B-complex vitamins. These ingredients work together to support healthy serotonin levels, reduce stress, and promote overall emotional balance.",
    price: 36.99,
    category: "Mood Support",
  },
  {
    id: 20,
    name: "Blood Sugar Balance",
    slug: "blood-sugar-balance",
    description: "Support healthy blood sugar levels and metabolic function.",
    longDescription:
      "Blood Sugar Balance is formulated to support healthy blood sugar levels and overall metabolic function. It contains a blend of Chromium, Alpha-Lipoic Acid, Cinnamon extract, and Berberine. These ingredients work synergistically to support insulin sensitivity, promote healthy glucose metabolism, and maintain blood sugar levels within normal ranges.",
    price: 38.99,
    category: "Metabolic Health",
  },
]


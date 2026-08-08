// Central product catalog for the Qlassique Wellness shop.
// shop.html and product.html both read from this file — add a new product
// by appending an object here; no other file needs to change.
//
// Fields left as null are not yet supplied. The shop/product pages render
// honest fallback states ("Price available soon", "Coming soon", etc.)
// instead of inventing values — fill them in as real content arrives.
//
// stripePaymentLink: paste the product's Stripe Payment Link (e.g.
// "https://buy.stripe.com/xxxxxxxx"). Until a real link is set, "Buy Now"
// is disabled automatically.
var QLASSIQUE_PRODUCTS = [
  {
    id: "reiki-drop",
    slug: "reiki-drop",
    name: "REIKI+ DROP",
    category: "Wellness",
    size: "15ml",
    price: null,
    currency: "SGD",
    shortDescription: null,
    description: null,
    direction: null,
    additionalInfo: null,
    image: "product-reiki-drop.jpg",
    stripePaymentLink: "PASTE_STRIPE_PAYMENT_LINK_HERE"
  },
  {
    id: "lueur-brightening-serum",
    slug: "lueur-brightening-serum",
    name: "LUEUR Lightening & Brightening Serum",
    category: "Skincare",
    size: "30g",
    price: null,
    currency: "SGD",
    shortDescription: null,
    description: null,
    direction: null,
    additionalInfo: null,
    image: "product-lueur-brightening-serum.jpg",
    stripePaymentLink: "PASTE_STRIPE_PAYMENT_LINK_HERE"
  },
  {
    id: "lueur-purifying-cleanser",
    slug: "lueur-purifying-cleanser",
    name: "LUEUR Purifying Cleanser",
    category: "Skincare",
    size: "120g",
    price: 79.00,
    currency: "SGD",
    shortDescription: "Cleanses, purifies, balances and brightens skin, removing dead skin cell build-up and nourishing skin with amino acids.",
    description: "Cleanse, purify, balance and brighten skin. Remove the dead and unhealthy skin cell build on outer skin and nourish skin with amino acids.",
    direction: "Squeeze a small amount of purifying cleanser in your palm, add a few drops of water and use circular motion till foam formed. Apply foam over damp face and massage gently and thoroughly. Rinse your face with clear water.",
    additionalInfo: "LUEUR skincare series do not contain substances and synthetic pigment that are harmful to humans. They are tested and qualified by SGS and in line with the highest standards of the European Union manufacturing plant locating at Tainai Science Technological Park.",
    image: "product-lueur-purifying-cleanser.jpg",
    stripePaymentLink: "PASTE_STRIPE_PAYMENT_LINK_HERE"
  },
  {
    id: "lueur-aqua-moisturiser",
    slug: "lueur-aqua-moisturiser",
    name: "LUEUR Aqua Hydrating Moisturiser",
    category: "Skincare",
    size: "30ml", // per the jar label in the supplied product photo (the pasted spec text said 50g — going with the packaging)
    price: 158.00,
    currency: "SGD",
    shortDescription: "Moisturises skin from within with intensive hydration and visible radiance that lasts 24 hours.",
    description: "The LUEUR natural extracts and essences moisturise skin from within, provide intensive hydrating and visible radiance that last 24-hours. It restores complexion with evenness, radiance and smoothes fine wrinkle line. For all skin types.",
    direction: "Apply an appropriate amount to the face and neck. Use finger to gently spread all over the face, smoothly and evenly with a gently pressing motion to confirm full adsorption. For best result, highly recommended using day and night.",
    additionalInfo: "LUEUR skincare series do not contain substances and synthetic pigment that are harmful to humans. They are tested and qualified by SGS and in line with the highest standards of the European Union manufacturing plant locating at Tainai Science Technological Park.",
    image: "product-lueur-aqua-moisturiser.jpg",
    stripePaymentLink: "PASTE_STRIPE_PAYMENT_LINK_HERE"
  },
  {
    id: "lueur-hydro-balancing-essence",
    slug: "lueur-hydro-balancing-essence",
    name: "LUEUR Hydro Balancing Essence",
    category: "Skincare",
    size: "120ml",
    price: 168.00,
    currency: "SGD",
    shortDescription: "Hydrates, balances and soothes skin, conditioning it to absorb the full benefit of the products that follow.",
    description: "To hydrate, balance and soothe skin, conditioning skin to best absorb the full benefits of the skincare products in the series that follow.",
    direction: "After proper cleansing skin with Lueur No. 1, apply an appropriate amount of Lueur No. 2 onto face and neck evenly, pressing gently until fully absorbed.",
    additionalInfo: "LUEUR skincare series do not contain substances and synthetic pigment that are harmful to humans. They are tested and qualified by SGS and in line with the highest standards of the European Union manufacturing plant locating at Tainai Science Technological Park.",
    image: "product-lueur-hydro-balancing-essence.jpg",
    stripePaymentLink: "PASTE_STRIPE_PAYMENT_LINK_HERE"
  }
];

var STRIPE_LINK_PLACEHOLDER = "PASTE_STRIPE_PAYMENT_LINK_HERE";

function qlHasStripeLink(product) {
  return !!product.stripePaymentLink &&
    product.stripePaymentLink !== STRIPE_LINK_PLACEHOLDER &&
    /^https:\/\//.test(product.stripePaymentLink);
}

function qlFormatPrice(product) {
  if (typeof product.price !== "number") return "Price available soon";
  return "$" + product.price.toFixed(2);
}

function qlGetProduct(slug) {
  for (var i = 0; i < QLASSIQUE_PRODUCTS.length; i++) {
    if (QLASSIQUE_PRODUCTS[i].slug === slug) return QLASSIQUE_PRODUCTS[i];
  }
  return null;
}

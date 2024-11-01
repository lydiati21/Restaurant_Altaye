import images from './images';

const wines = [
  {
    title: "VEGETARIAN COMBO(ልዩ የጾም በያይነቱ)",
    price: "$38",
    tags: "Split Peas, Red Lentils,Shero, Cabbage, Kale and Beets",
  },
  {
    title: "CHICKEN STEW (የዶሮ ወጥ)",
    price: "$59",
    tags: "Spice,Chicken, Onions,Eggs",
  },
  {
    title: "LAMB TIBS (ልዩ የበግ ጥብስ)",
    price: "$23",
    tags: "Stir-fry Lamb,Onions,tometosand jalapenio peppers ",
  },
  // {
  //   title: "DULET (ዱለት)",
  //   price: "$31",
  //   tags: "Liver,Tripe,Kidney, beef, and a blend of spices alogn with chilli peppers,garlic, and onion",
  // },
  // {
  //   title: "KITFO(ክትፎ)",
  //   price: "$40",
  //   tags: "Raw mincedbeef seasoned with clarified butter and spicy chili poweder along with other spices",
  // },
];

const cocktails = [
  {
    title: "ETHIOPIAN HONEY WINE(ጠጅ)",
    price: "$20",
    tags: "Honey | Served with brile/bottle or glass| 30 ml",
  },
  {
    title: "CHIANTI RED WINE (ቀይ ወይን)",
    price: "$16",
    tags: "Red win|Served with glas | 30ml",
  },
  {
    title: "BEER (ቢራ)",
    price: "$10",
    tags: "Heinken | Stella| Mill Organic",
  },
  // {
  //   title: "SOFT DRINKS (ለስላሳ)",
  //   price: "$5",
  //   tags: "Coca-Cola | Sprite | Mirinda | Fanta | Pepsi | 7up | 30ml",
  // },
  // {
  //   title: "JUICE (ጭማቂ)",
  //   price: "$8",
  //   tags: "Apple Juice| Mango | Guava | Orange",
  // },
];

const awards = [
  {
    imgUrl: images.yelp,
    URL: "https://www.yelp.com/biz/altaye-ethiopian-catering-seattle-2?osq=Altaye+Restaurant",
    title: "Yelp",
    // subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },

  {
    imgUrl: images.tripadvisor,
    title: "Tripadvisor",
    URL: "https://www.tripadvisor.com/Restaurant_Review-g60878-d1787287-Reviews-Altaye_Ethiopian_Restaurant-Seattle_Washington.html",

    // subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.grabhub,
    title: "Grabhub",
    URL: "https://www.grubhub.com/restaurant/altaye-ethiopian-restaurant-8135-rainier-ave-s-seattle",
    // subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.amazon,
    title: "Amazon",
    URL: "https://www.amazon.com/gp/customer-reviews/R14OIFUXC6F97L/ref=cm_cr_arp_d_rvw_ttl?ie=UTF8&ASIN=B00SLZC8OW",
    // subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default { wines, cocktails, awards };

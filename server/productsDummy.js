const productsDummy = [
  {
    title: "Dummy Data 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatum tempore minus blanditiis, exercitationem ipsa voluptate, quisquam quidem veritatis, veniam deleniti asperiores tempora nulla amet saepe praesentium incidunt a.",
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    categories: ["women"],
    size: ["L", "XS"],
    color: ["Black", "Red"],
    price: 99,
  },
  {
    title: "Dummy Data 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatum tempore minus blanditiis, exercitationem ipsa voluptate, quisquam quidem veritatis, veniam deleniti asperiores tempora nulla amet saepe praesentium incidunt a.",
    img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    categories: ["women"],
    size: ["L", "M"],
    color: ["Blue", "Black"],
    price: 199,
  },
  {
    title: "Dummy Data 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatum tempore minus blanditiis, exercitationem ipsa voluptate, quisquam quidem veritatis, veniam deleniti asperiores tempora nulla amet saepe praesentium incidunt a.",
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    categories: ["women"],
    size: ["XS", "M"],
    color: ["Blue", "Red"],
    price: 59,
  },
  {
    title: "Dummy Data 4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatum tempore minus blanditiis, exercitationem ipsa voluptate, quisquam quidem veritatis, veniam deleniti asperiores tempora nulla amet saepe praesentium incidunt a.",
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    categories: ["women"],
    size: ["L", "XS"],
    color: ["Blue", "Black"],
    price: 89,
  },
  {
    title: "Dummy Data 5",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatum tempore minus blanditiis, exercitationem ipsa voluptate, quisquam quidem veritatis, veniam deleniti asperiores tempora nulla amet saepe praesentium incidunt a.",
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    categories: ["women"],
    size: ["L", "M"],
    color: ["Blue", "Red"],
    price: 259,
  },
  {
    title: "Dummy Data 6",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatum tempore minus blanditiis, exercitationem ipsa voluptate, quisquam quidem veritatis, veniam deleniti asperiores tempora nulla amet saepe praesentium incidunt a.",
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    categories: ["women"],
    size: ["S", "M"],
    color: ["Blue", "Red"],
    price: 159,
  },
  {
    title: "Dummy Data 7",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatum tempore minus blanditiis, exercitationem ipsa voluptate, quisquam quidem veritatis, veniam deleniti asperiores tempora nulla amet saepe praesentium incidunt a.",
    img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    categories: ["coat"],
    size: ["L", "S"],
    color: ["Blue", "Red"],
    price: 169,
  },
  {
    title: "Dummy Data 8",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatum tempore minus blanditiis, exercitationem ipsa voluptate, quisquam quidem veritatis, veniam deleniti asperiores tempora nulla amet saepe praesentium incidunt a.",
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    categories: ["coat"],
    size: ["L", "M"],
    color: ["Blue", "Yellow"],
    price: 559,
  },
  {
    title: "Dummy Data 9",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatum tempore minus blanditiis, exercitationem ipsa voluptate, quisquam quidem veritatis, veniam deleniti asperiores tempora nulla amet saepe praesentium incidunt a.",
    img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    categories: ["coat"],
    size: ["S", "M"],
    color: ["Blue", "Red"],
    price: 1119,
  },
  {
    title: "Dummy Data 10",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatum tempore minus blanditiis, exercitationem ipsa voluptate, quisquam quidem veritatis, veniam deleniti asperiores tempora nulla amet saepe praesentium incidunt a.",
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    categories: ["coat"],
    size: ["L", "M"],
    color: ["Yellow", "Red"],
    price: 199,
  },
  {
    title: "Dummy Data 11",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatum tempore minus blanditiis, exercitationem ipsa voluptate, quisquam quidem veritatis, veniam deleniti asperiores tempora nulla amet saepe praesentium incidunt a.",
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    categories: ["coat"],
    size: ["L", "M"],
    color: ["Blue", "Red"],
    price: 759,
  },
  {
    title: "Dummy Data 12",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatum tempore minus blanditiis, exercitationem ipsa voluptate, quisquam quidem veritatis, veniam deleniti asperiores tempora nulla amet saepe praesentium incidunt a.",
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    categories: ["coat"],
    size: ["L", "M"],
    color: ["Blue", "Red"],
    price: 859,
  },
  {
    title: "Dummy Data 13",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatum tempore minus blanditiis, exercitationem ipsa voluptate, quisquam quidem veritatis, veniam deleniti asperiores tempora nulla amet saepe praesentium incidunt a.",
    img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    categories: ["women", "coat"],
    size: ["L", "M"],
    color: ["White", "Yellow"],
    price: 489,
  },
  {
    title: "Dummy Data 14",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatum tempore minus blanditiis, exercitationem ipsa voluptate, quisquam quidem veritatis, veniam deleniti asperiores tempora nulla amet saepe praesentium incidunt a.",
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    categories: ["women", "jeans"],
    size: ["L", "XL"],
    color: ["Blue", "Red"],
    price: 389,
  },
  {
    title: "Dummy Data 15",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatum tempore minus blanditiis, exercitationem ipsa voluptate, quisquam quidem veritatis, veniam deleniti asperiores tempora nulla amet saepe praesentium incidunt a.",
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    categories: ["jeans"],
    size: ["L", "XL"],
    color: ["White", "Red"],
    price: 339,
  },
  {
    title: "Dummy Data 16",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatum tempore minus blanditiis, exercitationem ipsa voluptate, quisquam quidem veritatis, veniam deleniti asperiores tempora nulla amet saepe praesentium incidunt a.",
    img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    categories: ["jeans"],
    size: ["XL", "M"],
    color: ["Blue", "Green"],
    price: 679,
  },
  {
    title: "Dummy Data 17",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatum tempore minus blanditiis, exercitationem ipsa voluptate, quisquam quidem veritatis, veniam deleniti asperiores tempora nulla amet saepe praesentium incidunt a.",
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    categories: ["jeans"],
    size: ["L", "M"],
    color: ["Blue", "Green"],
    price: 569,
  },
  {
    title: "Dummy Data 18",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatum tempore minus blanditiis, exercitationem ipsa voluptate, quisquam quidem veritatis, veniam deleniti asperiores tempora nulla amet saepe praesentium incidunt a.",
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    categories: ["jeans"],
    size: ["XL", "M"],
    color: ["Green", "Red"],
    price: 1259,
  },
  {
    title: "Dummy Data 19",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatum tempore minus blanditiis, exercitationem ipsa voluptate, quisquam quidem veritatis, veniam deleniti asperiores tempora nulla amet saepe praesentium incidunt a.",
    img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    categories: ["jeans"],
    size: ["L", "M"],
    color: ["Blue", "Red"],
    price: 2489,
  },
  {
    title: "Dummy Data 20",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatum tempore minus blanditiis, exercitationem ipsa voluptate, quisquam quidem veritatis, veniam deleniti asperiores tempora nulla amet saepe praesentium incidunt a.",
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    categories: ["jeans", "coat"],
    size: ["L", "XL"],
    color: ["Green", "Red"],
    price: 2659,
  },
  {
    title: "Dummy Data 21",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatum tempore minus blanditiis, exercitationem ipsa voluptate, quisquam quidem veritatis, veniam deleniti asperiores tempora nulla amet saepe praesentium incidunt a.",
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    categories: ["jeans", "coat"],
    size: ["L", "M"],
    color: ["Blue", "White"],
    price: 229,
  },
  {
    title: "Dummy Data 22",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatum tempore minus blanditiis, exercitationem ipsa voluptate, quisquam quidem veritatis, veniam deleniti asperiores tempora nulla amet saepe praesentium incidunt a.",
    img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    categories: ["jeans", "coat"],
    size: ["L", "M"],
    color: ["Blue", "Red"],
    price: 119,
  },
  {
    title: "Dummy Data 23",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatum tempore minus blanditiis, exercitationem ipsa voluptate, quisquam quidem veritatis, veniam deleniti asperiores tempora nulla amet saepe praesentium incidunt a.",
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    categories: ["women"],
    size: ["XL", "M"],
    color: ["Green", "White"],
    price: 459,
  },
  {
    title: "Dummy Data 24",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint voluptatum tempore minus blanditiis, exercitationem ipsa voluptate, quisquam quidem veritatis, veniam deleniti asperiores tempora nulla amet saepe praesentium incidunt a.",
    img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    categories: ["women", "jeans", "coat"],
    size: ["L", "M"],
    color: ["Blue", "Red"],
    price: 689,
  },
];

module.exports = {
  productsDummy,
};
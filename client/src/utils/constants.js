export const toggler =
  "group peer ring-0 [box-shadow:1px_3px_0px_0px_#000]  bg-gradient-to-r from-rose-400 to-red-900  rounded-full outline-none duration-1000 after:duration-300 w-24 h-12  shadow-md  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:[background:#0D2B39]   peer-checked:after:rotate-180 after:[background:conic-gradient(from_135deg,_#b2a9a9,_#b2a8a8,_#ffffff,_#d7dbd9_,_#ffffff,_#b2a8a8)]  after:outline-none  after:h-10 after:w-10 after:top-1 after:left-1 peer-checked:after:translate-x-12 peer-hover:after:scale-95 peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-emerald-900";

export const inputs = [
  {
    label: "Başlık",
    name: "title",
    isReq: true,
  },
  {
    label: "Açıklama",
    name: "desc",
    isReq: true,
  },
  {
    label: "Kategori",
    name: "category",
    isReq: true,
  },
  {
    label: "Kapak Fotoğrafı",
    name: "cover",
    type: "file",
    isReq: true,
  },
  {
    label: "Fotoğraflar",
    name: "images",
    type: "file",
    isMulti: true,
  },
  {
    label: "Kısa Başlık",
    name: "shortTitle",
    isReq: true,
  },
  {
    label: "Kısa Açıklama",
    name: "shortDesc",
    isReq: true,
  },
  {
    label: "Revizyon hakkı",
    name: "revisionNumber",
    type: "number",
    isReq: true,
  },
  {
    label: "Teslimat Süresi",
    name: "deliveryTime",
    type: "number",
    isReq: true,
  },
  {
    label: "Fiyat",
    name: "price",
    type: "number",
    isReq: true,
  },
];

export const cards = [
  {
    title: "Stick to your budget",
    text: "Find the right service for every price point. No hourly rates, just project-based pricing",
  },
  {
    title: "Get quality work done quickly",
    text: "Hand your project over to a talented freelancer in minutes, get long-lasting results",
  },
  {
    title: "Pay when you're happy",
    text: "Upfront quotes mean no surprises. Payments only get released when you approve.",
  },
  {
    title: "Count on 24/7 support    ",
    text: "Our round-the-clock support team is available to help anytime, anywhere. ",
  },
];

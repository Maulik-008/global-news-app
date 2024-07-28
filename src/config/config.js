import moment from "moment";

export const navbarBrand = "Shiva News";
export const header = (category) => `Trending ${category} Headlines`;
export const noFound = "No Results Found";
export const searching = "Searching...";
export const arrow = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
  </svg>
);

export const navs = [
  { nav: "Home", page: "/" },
  { nav: "Trending News", page: "/type/general" },
  { nav: "Business News", page: "/type/business" },
  { nav: "Sports News", page: "/type/sports" },
  { nav: "Science News", page: "/type/science" },
  { nav: "Health News", page: "/type/health" },
  { nav: "Entertainment News", page: "/type/entertainment" },
  { nav: "Technology News ", page: "/type/technology" },
];

export const router = [
  { path: "/", key: "general", category: "general", country: "us" },
  {
    path: "/type/general",
    key: "general",
    category: "general",
    country: "us",
  },
  {
    path: "/type/business",
    key: "business",
    category: "business",
    country: "us",
  },
  {
    path: "/type/sports",
    key: "sports",
    category: "sports",
    country: "us",
  },
  {
    path: "/type/science",
    key: "science",
    category: "science",
    country: "us",
  },
  {
    path: "/type/health",
    key: "health",
    category: "health",
    country: "us",
  },
  {
    path: "/type/entertainment",
    key: "entertainment",
    category: "entertainment",
    country: "us",
  },
  {
    path: "/type/technology",
    key: "technology",
    category: "technology",
    country: "us",
  },
];

export const summary = "Channel and PublishedAt";
export const newsChannel = (channel) => `${channel}`;
export const lastUpdate = (published) =>
  `${moment(published).format("ddd, DD MMM YYYY HH:mm:ss")}`;

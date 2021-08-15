import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://swap.fenixfinance.net",
      },
      {
        label: "Liquidity",
        href: "https://swap.fenixfinance.net/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    items: [
      {
        label: "Leaderboard",
        href: "/",
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://pancakeswap.info",
      },
      {
        label: "Tokens",
        href: "https://pancakeswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://pancakeswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://pancakeswap.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      // {
      //   label: "Voting",
      //   href: "https://voting.fenixfinance.net",
      // },
      {
        label: "Github",
        href: "https://github.com/fenixfinance/",
      },
      {
        label: "Blog",
        href: "https://medium.com/@fenixfinanceofficial/",
      },
    ],
  },
];

export const socials = [
  {
    label: "Medium",
    icon: "MediumIcon",
    href: "https://medium.com/@fenixfinanceofficial",
  },
  {
    label: "Github",
    icon: "GithubIcon",
    href: "https://github.com/fenixfinance",
  },
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/fenixfinancechat",
      },
      {
        label: "中文",
        href: "https://t.me/fenixswapchinese",
      },
      {
        label: "русский",
        href: "https://t.me/fenixswaprussian",
      },
      {
        label: "Türkiye",
        href: "https://t.me/fenixswapTurkey",
      },
      {
        label: "India",
        href: "https://t.me/fenixswapindia",
      },
      {
        label: "Vietnam",
        href: "https://t.me/fenixswapvietnam",
      },
      {
        label: "Español",
        href: "https://t.me/fenixswapspanish",
      },
      {
        label: "日本語",
        href: "https://t.me/fenixswapjapanese",
      },
      {
        label: "Italiano",
        href: "https://t.me/fenixswapitalian",
      },
      {
        label: "Français",
        href: "https://t.me/fenixswapfrench",
      },
      {
        label: "Announcements",
        href: "https://t.me/fenixfinance",
      },
      // {
      //   label: "Price Bot",
      //   href: "https://t.me/BinanceRocketFXF",
      // },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/fenixfinance",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
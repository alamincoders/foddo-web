/**
 * All copy for the landing page, in English and Bangla. Everything here describes what the app
 * really does today: no download counts, ratings, awards or features that do not exist.
 */
import { PLAY_STORE_URL } from "./constants";

export type Lang = "en" | "bn";
export type Theme = "light" | "dark";

export const BASE_URL = "https://foddo.itechills.com";
export { PLAY_STORE_URL };

/** Screens we have real screenshots of: public/images/app/<lang>/<theme>-<scene>.png */
export type Scene = "empty" | "list" | "edit" | "basket" | "receipt" | "restock" | "history" | "settings";
export const shotPath = (lang: Lang, theme: Theme, scene: Scene) => `/images/app/${lang}/${theme}-${scene}.png`;

type Feature = { icon: string; scene: Scene; title: string; body: string };

type Copy = {
  htmlLang: string;
  path: string;
  switchTo: { label: string; href: string };
  nav: { features: string; engine: string; screens: string; faq: string; menu: string; get: string };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    sub: string;
    cta: string;
    secondary: string;
  };
  facts: { title: string; body: string }[];
  chit: { say: string; name: string; meta: string };
  items: { eyebrow: string; title: string; lead: string };
  features: { eyebrow: string; title: string; lead: string; items: Feature[] };
  langLabel: string;
  engine: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: { title: string; body: string }[];
    examples: { say: string; items: { name: string; meta: string }[] }[];
    note: string;
  };
  screens: { eyebrow: string; title: string; lead: string; light: string; dark: string; prev: string; next: string; captions: Record<Scene, string> };
  privacy: { eyebrow: string; title: string; lead: string; cards: { title: string; body: string }[] };
  help: { title: string; body: string; button: string };
  faq: { eyebrow: string; title: string; lead: string; items: { question: string; answer: string }[] };
  download: { title: string; body: string; cta: string; note: string; scan: string; scanHint: string };
  footer: { tagline: string; about: string; product: string; legal: string; contactTitle: string; languages: string; contact: string; terms: string; privacy: string; made: string };
  seo: { title: string; description: string; keywords: string[]; ogTitle: string; ogDescription: string };
};

const en: Copy = {
  htmlLang: "en",
  path: "/",
  switchTo: { label: "বাংলা", href: "/bn" },
  langLabel: "Language",
  nav: { features: "Features", engine: "How it works", screens: "Screenshots", faq: "FAQ", menu: "Menu", get: "Get it on Google Play" },
  hero: {
    eyebrow: "Free · Works offline · English and Bangla",
    title: "Say it. Tick it. Done.",
    lead: "The offline shopping list for English and Bangla",
    sub: "Foddo is a shopping list you can talk or type to. Say what you need in English, Bangla or a mix, and it becomes a tidy list, sorted the way you walk through the market.",
    cta: "Get it on Google Play",
    secondary: "See how it works",
  },
  facts: [
    { title: "Works offline", body: "Lists live on your phone" },
    { title: "No sign-in", body: "Open it and start" },
    { title: "No ads", body: "Free to use" },
    { title: "English + বাংলা", body: "App and input" },
  ],
  chit: { say: "2 kg potatoes", name: "Potatoes", meta: "2 kg" },
  items: { eyebrow: "Every item gets a picture", title: "Potatoes look like potatoes", lead: "Common things you buy get their own picture, so a long list is easy to scan." },
  features: {
    eyebrow: "Features",
    title: "What you can do with Foddo",
    lead: "One screen, and the eight things that matter on a shopping trip.",
    items: [
      { icon: "mic", scene: "empty", title: "Say it or type it", body: "Talk or type the way you speak, one item or ten. Foddo picks up names, quantities, units and prices for you." },
      { icon: "layers", scene: "list", title: "Sorted like the market", body: "Fresh produce, meat and fish, dairy, pantry, household. Your list follows the walk through the market." },
      { icon: "ruler", scene: "edit", title: "The right unit for each item", body: "Potatoes by the kilo, milk by the litre, eggs by the dozen. Foddo offers sensible units for what you are buying." },
      { icon: "basket", scene: "basket", title: "Tick it into the basket", body: "Tap an item and it flies into your basket. The bar shows how far along you are." },
      { icon: "receipt", scene: "receipt", title: "Your receipt, before you leave", body: "See everything in the basket and the total, then finish. The trip is saved." },
      { icon: "refresh", scene: "restock", title: "Time to restock", body: "Things you buy again and again come back as suggestions, with how long ago you last bought them." },
      { icon: "chart", scene: "history", title: "See where the money goes", body: "Totals month by month, a comparison with the month before, and a breakdown by market section." },
      { icon: "shield", scene: "settings", title: "Private by design", body: "Your lists stay on your phone. Back them up to a file whenever you like." },
    ],
  },
  engine: {
    eyebrow: "How it works",
    title: "From a sentence to a sorted list",
    lead: "No forms, no dropdowns. Foddo understands the way people talk about shopping, right on your phone.",
    steps: [
      { title: "Say or type", body: "Speak or write naturally, in Bangla, English or a mix. Many items at once is fine." },
      { title: "Foddo sorts it", body: "Names, quantities, units and prices are picked out, then grouped by market section." },
      { title: "Tick it in", body: "Tap an item to drop it in the basket. Finish and the trip is saved." },
    ],
    examples: [
      { say: "ভাই আজকে আলু দুই কেজি আর ডিম এক ডজন লাগবে", items: [{ name: "আলু", meta: "২ কেজি" }, { name: "ডিম", meta: "১ ডজন" }] },
      { say: "please get me 3 apples, a loaf of bread & some butter", items: [{ name: "Apples", meta: "3" }, { name: "Bread", meta: "1" }, { name: "Butter", meta: "" }] },
      { say: "chal 5kg 400tk, dal 2kg and oil 1 liter", items: [{ name: "Chal", meta: "5 kg · ৳400" }, { name: "Dal", meta: "2 kg" }, { name: "Oil", meta: "1 litre" }] },
      { say: "aloo 2 kg pyaj 1 kg", items: [{ name: "Aloo", meta: "2 kg" }, { name: "Pyaj", meta: "1 kg" }] },
    ],
    note: "These are real results from the input engine inside the app. It works on your phone, without an online AI service.",
  },
  screens: {
    eyebrow: "Screenshots",
    title: "See the app",
    lead: "Screenshots from the app, in light and dark.",
    light: "Light",
    dark: "Dark",
    prev: "Previous screenshot",
    next: "Next screenshot",
    captions: {
      empty: "Start with a sentence",
      list: "Sorted into market sections",
      edit: "Quantity, unit and price",
      basket: "Items fly into the basket",
      receipt: "The receipt before you leave",
      restock: "Suggestions to restock",
      history: "Past shopping and monthly totals",
      settings: "Language, theme, currency, backup",
    },
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Your list stays on your phone",
    lead: "No account, no cloud copy, nothing to sign up for.",
    cards: [
      { title: "Stored on your phone", body: "Lists and history are saved on your device. There is no account and no cloud copy." },
      { title: "No sign-in, no ads", body: "Open the app and start. There are no ads and no subscriptions." },
      { title: "Voice is optional", body: "The microphone uses your phone's own speech recognition, and only when you tap it. Typing always works." },
      { title: "Back up or delete any time", body: "Export a backup file, import it on another phone, or delete everything in one tap." },
    ],
  },
  help: {
    title: "Questions or ideas?",
    body: "Found a bug, or want something added? Write to us.",
    button: "Write to us",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions",
    lead: "Voice input, languages and your data.",
    items: [
      { question: "What is Foddo?", answer: "Foddo is a shopping list you can talk or type to. Say or write what you need in Bangla, English or a mix, and Foddo picks out the items, quantities, units and prices, groups them by market section, and lets you tick them into a basket as you shop." },
      { question: "Is Foddo free? Are there ads?", answer: "Foddo is free to download and use. There are no ads, no subscriptions and no sign-in." },
      { question: "Does it work offline?", answer: "Yes. Your lists and history are stored on your phone, so everything works without internet. Voice input also works offline if your phone has the offline speech language pack installed; otherwise it needs a connection." },
      { question: "How does voice input work, and is it private?", answer: "When you tap the microphone, Foddo asks for microphone permission and uses your phone's own speech recognition to turn what you say into text. Foddo then turns that text into list items. Foddo never receives or stores the recording. Depending on your phone and whether the offline pack is installed, the speech service (provided by Google) may process the audio online under its own privacy policy. Voice is optional; typing always works." },
      { question: "Which languages does it understand?", answer: "Bangla, English and romanized Bangla (Banglish). For example, 'ভাই আজকে আলু দুই কেজি আর ডিম এক ডজন লাগবে', 'please get me 3 apples and some butter' and 'aloo 2 kg pyaj 1 kg' all work. The app interface is available in English and Bangla, and more languages are planned." },
      { question: "Can I share my list with family?", answer: "You can send your list as a clean text message to anyone, for example on WhatsApp. Live syncing between phones is not available yet." },
      { question: "Where is my data stored? Can I back it up or delete it?", answer: "Your data stays on your phone. In Settings you can export a backup file, import one, or delete all your data in one tap. Uninstalling the app also removes it." },
    ],
  },
  download: {
    title: "Get Foddo on your phone",
    body: "Free on Google Play. No sign-in, no ads.",
    cta: "Get it on Google Play",
    note: "Android",
    scan: "Scan to install",
    scanHint: "Point your phone camera here",
  },
  footer: {
    tagline: "Say it. Tick it. Done.",
    about: "A free shopping list app for English and Bangla. Say it or type it, tick it off, and keep your list on your phone.",
    product: "Foddo",
    legal: "Legal",
    contactTitle: "Contact",
    languages: "Language",
    contact: "Write to us",
    terms: "Terms of use",
    privacy: "Privacy policy",
    made: "Made by",
  },
  seo: {
    title: "Foddo: Shopping List App for Bangla & English | Voice, Offline, No Ads",
    description:
      "Foddo is a free shopping list and bazar list app you can talk or type to, in Bangla and English. It sorts items, quantities and prices for you, works offline, needs no sign-in and shows no ads.",
    keywords: [
      "shopping list app", "grocery list app", "bazar list app", "voice shopping list", "offline grocery list", "Bangla shopping list", "Bangla grocery app",
      "shopping list app for Android", "grocery list with units", "market list app", "restock reminders", "monthly grocery spending", "Foddo", "iTechills",
    ],
    ogTitle: "Foddo: Say it. Tick it. Done.",
    ogDescription: "A free shopping list you can talk or type to, in English and Bangla. Works offline, no sign-in, no ads.",
  },
};

const bn: Copy = {
  htmlLang: "bn",
  path: "/bn",
  switchTo: { label: "English", href: "/" },
  langLabel: "ভাষা",
  nav: { features: "ফিচার", engine: "যেভাবে কাজ করে", screens: "স্ক্রিনশট", faq: "প্রশ্নোত্তর", menu: "মেনু", get: "Google Play-তে নিন" },
  hero: {
    eyebrow: "বিনামূল্যে · অফলাইনে চলে · বাংলা ও ইংরেজি",
    title: "বলুন। টিক দিন। শেষ।",
    lead: "বাংলা ও ইংরেজির অফলাইন বাজারের লিস্ট",
    sub: "Foddo এমন একটি বাজারের লিস্ট, যাতে বলে বা লিখে আইটেম দেওয়া যায়। বাংলা, ইংরেজি বা মিশিয়ে বলুন, আর বাজারে যেভাবে ঘোরেন সেভাবেই সাজানো লিস্ট পেয়ে যান।",
    cta: "Google Play-তে নিন",
    secondary: "কীভাবে কাজ করে দেখুন",
  },
  facts: [
    { title: "অফলাইনে চলে", body: "লিস্ট থাকে আপনার ফোনে" },
    { title: "সাইন-ইন নেই", body: "খুলুন আর শুরু করুন" },
    { title: "বিজ্ঞাপন নেই", body: "বিনামূল্যে" },
    { title: "বাংলা + English", body: "অ্যাপ ও ইনপুট" },
  ],
  chit: { say: "২ কেজি আলু", name: "আলু", meta: "২ কেজি" },
  items: { eyebrow: "প্রতিটি আইটেমের নিজস্ব ছবি", title: "আলুর ছবি আলুরই", lead: "যা যা সবচেয়ে বেশি কেনেন, সেগুলোর আলাদা ছবি আছে, তাই লম্বা লিস্টেও সহজে চোখে পড়ে।" },
  features: {
    eyebrow: "ফিচার",
    title: "Foddo দিয়ে যা করা যায়",
    lead: "একটি স্ক্রিন, আর বাজারে সত্যিই কাজে লাগে এমন আটটি জিনিস।",
    items: [
      { icon: "mic", scene: "empty", title: "বলুন বা লিখুন", body: "যেভাবে কথা বলেন সেভাবেই বলুন বা লিখুন, একটি আইটেম বা দশটি। নাম, পরিমাণ, একক ও দাম Foddo নিজে বুঝে নেয়।" },
      { icon: "layers", scene: "list", title: "বাজারের মতো সাজানো", body: "শাকসবজি ও ফল, মাছ ও মাংস, দুধ ও ডিম, মুদি, ঘরের জিনিস। লিস্ট চলে বাজারে হাঁটার ক্রমে।" },
      { icon: "ruler", scene: "edit", title: "প্রতিটি জিনিসের জন্য ঠিক একক", body: "আলু কেজিতে, দুধ লিটারে, ডিম ডজনে। যা কিনছেন তার সাথে মানানসই একক দেখায়।" },
      { icon: "basket", scene: "basket", title: "টিক দিয়ে ঝুড়িতে তুলুন", body: "আইটেমে ট্যাপ করলেই ঝুড়িতে উড়ে যায়। বারে দেখা যায় কতটা হলো।" },
      { icon: "receipt", scene: "receipt", title: "বের হওয়ার আগেই রসিদ", body: "ঝুড়িতে কী কী আছে আর মোট কত, দেখে নিয়ে শেষ করুন। বাজারটি জমা হয়ে যায়।" },
      { icon: "refresh", scene: "restock", title: "ফুরিয়ে এসেছে কি?", body: "যা বারবার কেনেন সেগুলো সাজেশন হিসেবে ফিরে আসে, কতদিন আগে কিনেছিলেন সেটাসহ।" },
      { icon: "chart", scene: "history", title: "টাকা কোথায় যায়, দেখুন", body: "মাসে মাসে মোট খরচ, আগের মাসের সাথে তুলনা, আর বাজারের সেকশন অনুযায়ী ভাগ।" },
      { icon: "shield", scene: "settings", title: "ডিজাইনেই গোপনীয়তা", body: "আপনার লিস্ট থাকে আপনার ফোনেই। যখন খুশি ফাইলে ব্যাকআপ নিন।" },
    ],
  },
  engine: {
    eyebrow: "যেভাবে কাজ করে",
    title: "এক বাক্য থেকে সাজানো লিস্ট",
    lead: "ফর্ম নেই, ড্রপডাউন নেই। মানুষ যেভাবে বাজারের কথা বলে, Foddo সেভাবেই বোঝে, সরাসরি আপনার ফোনে।",
    steps: [
      { title: "বলুন বা লিখুন", body: "বাংলা, ইংরেজি বা মিশিয়ে স্বাভাবিকভাবে বলুন বা লিখুন। একসাথে অনেক আইটেমও চলে।" },
      { title: "Foddo গুছিয়ে দেয়", body: "নাম, পরিমাণ, একক ও দাম আলাদা হয়, তারপর বাজারের সেকশন অনুযায়ী সাজে।" },
      { title: "টিক দিন", body: "আইটেমে ট্যাপ করলে ঝুড়িতে পড়ে। শেষ করলে বাজারটি জমা হয়।" },
    ],
    examples: en.engine.examples,
    note: "এগুলো অ্যাপের ভেতরের ইনপুট ইঞ্জিনের আসল ফলাফল। এটি আপনার ফোনেই চলে, কোনো অনলাইন এআই সার্ভিস ছাড়াই।",
  },
  screens: {
    eyebrow: "স্ক্রিনশট",
    title: "অ্যাপটি দেখুন",
    lead: "অ্যাপের স্ক্রিনশট, লাইট ও ডার্ক দুই থিমে।",
    light: "লাইট",
    dark: "ডার্ক",
    prev: "আগের স্ক্রিনশট",
    next: "পরের স্ক্রিনশট",
    captions: {
      empty: "একটি বাক্য দিয়ে শুরু",
      list: "বাজারের সেকশনে সাজানো",
      edit: "পরিমাণ, একক ও দাম",
      basket: "আইটেম উড়ে ঝুড়িতে যায়",
      receipt: "বের হওয়ার আগে রসিদ",
      restock: "ফুরিয়ে আসা জিনিসের সাজেশন",
      history: "আগের বাজার ও মাসের মোট",
      settings: "ভাষা, থিম, মুদ্রা, ব্যাকআপ",
    },
  },
  privacy: {
    eyebrow: "গোপনীয়তা",
    title: "আপনার লিস্ট থাকে আপনার ফোনেই",
    lead: "অ্যাকাউন্ট নেই, ক্লাউডে কপি নেই, সাইন আপ করার কিছু নেই।",
    cards: [
      { title: "ফোনেই জমা থাকে", body: "লিস্ট ও হিস্ট্রি আপনার ডিভাইসেই সেভ হয়। কোনো অ্যাকাউন্ট নেই, ক্লাউডে কোনো কপিও নেই।" },
      { title: "সাইন-ইন নেই, বিজ্ঞাপন নেই", body: "অ্যাপ খুলুন আর শুরু করুন। কোনো বিজ্ঞাপন বা সাবস্ক্রিপশন নেই।" },
      { title: "ভয়েস ঐচ্ছিক", body: "মাইক্রোফোন আপনার ফোনের নিজস্ব স্পিচ রিকগনিশন ব্যবহার করে, আর শুধু আপনি ট্যাপ করলেই। লিখে দেওয়া সবসময় চলে।" },
      { title: "যেকোনো সময় ব্যাকআপ বা মুছে ফেলুন", body: "ব্যাকআপ ফাইল এক্সপোর্ট করুন, অন্য ফোনে ইমপোর্ট করুন, অথবা এক ট্যাপে সব মুছে দিন।" },
    ],
  },
  help: {
    title: "প্রশ্ন বা আইডিয়া আছে?",
    body: "কোনো সমস্যা পেয়েছেন, বা কিছু যোগ করতে চান? আমাদের লিখুন।",
    button: "আমাদের লিখুন",
  },
  faq: {
    eyebrow: "প্রশ্নোত্তর",
    title: "প্রশ্নোত্তর",
    lead: "ভয়েস ইনপুট, ভাষা ও আপনার ডাটা নিয়ে।",
    items: [
      { question: "Foddo কী?", answer: "Foddo এমন একটি বাজারের লিস্ট, যাতে বলে বা লিখে আইটেম দেওয়া যায়। বাংলা, ইংরেজি বা মিশিয়ে বলুন বা লিখুন, Foddo আইটেম, পরিমাণ, একক ও দাম আলাদা করে, বাজারের সেকশন অনুযায়ী সাজায়, আর বাজার করার সময় টিক দিয়ে ঝুড়িতে তোলা যায়।" },
      { question: "Foddo কি বিনামূল্যে? বিজ্ঞাপন আছে?", answer: "Foddo ডাউনলোড ও ব্যবহার বিনামূল্যে। কোনো বিজ্ঞাপন, সাবস্ক্রিপশন বা সাইন-ইন নেই।" },
      { question: "ইন্টারনেট ছাড়া চলে?", answer: "হ্যাঁ। আপনার লিস্ট ও হিস্ট্রি ফোনেই জমা থাকে, তাই ইন্টারনেট ছাড়াই সব চলে। ফোনে অফলাইন স্পিচ ভাষা প্যাক থাকলে ভয়েস ইনপুটও অফলাইনে চলে; না থাকলে ইন্টারনেট লাগে।" },
      { question: "ভয়েস ইনপুট কীভাবে কাজ করে, আর এটা কি নিরাপদ?", answer: "মাইক্রোফোনে ট্যাপ করলে Foddo মাইক্রোফোনের অনুমতি চায় এবং আপনার ফোনের নিজস্ব স্পিচ রিকগনিশন দিয়ে কথাকে লেখায় বদলায়। এরপর Foddo সেই লেখা থেকে লিস্টের আইটেম বানায়। Foddo কখনো রেকর্ডিং পায় বা জমা রাখে না। ফোন ও অফলাইন প্যাকের ওপর নির্ভর করে, স্পিচ সার্ভিস (Google-এর) নিজের প্রাইভেসি পলিসি অনুযায়ী অডিও অনলাইনে প্রসেস করতে পারে। ভয়েস ঐচ্ছিক; লিখে দেওয়া সবসময় চলে।" },
      { question: "কোন ভাষা বোঝে?", answer: "বাংলা, ইংরেজি এবং রোমান বাংলা (বাংলিশ)। যেমন, 'ভাই আজকে আলু দুই কেজি আর ডিম এক ডজন লাগবে', 'please get me 3 apples and some butter' আর 'aloo 2 kg pyaj 1 kg' সবই চলে। অ্যাপের ইন্টারফেস বাংলা ও ইংরেজিতে আছে, আরও ভাষা যোগ করার পরিকল্পনা আছে।" },
      { question: "পরিবারের সাথে লিস্ট শেয়ার করা যায়?", answer: "লিস্ট পরিচ্ছন্ন টেক্সট মেসেজ হিসেবে যে কাউকে পাঠানো যায়, যেমন WhatsApp-এ। ফোনের মধ্যে লাইভ সিঙ্ক এখনো নেই।" },
      { question: "আমার ডাটা কোথায় থাকে? ব্যাকআপ বা মুছে ফেলা যায়?", answer: "আপনার ডাটা আপনার ফোনেই থাকে। সেটিংসে গিয়ে ব্যাকআপ ফাইল এক্সপোর্ট, ইমপোর্ট, অথবা এক ট্যাপে সব ডাটা মুছে ফেলা যায়। অ্যাপ আনইনস্টল করলেও ডাটা চলে যায়।" },
    ],
  },
  download: {
    title: "Foddo নিন আপনার ফোনে",
    body: "Google Play-তে বিনামূল্যে। সাইন-ইন নেই, বিজ্ঞাপন নেই।",
    cta: "Google Play-তে নিন",
    note: "অ্যান্ড্রয়েড",
    scan: "স্ক্যান করে ইনস্টল করুন",
    scanHint: "ফোনের ক্যামেরা এখানে ধরুন",
  },
  footer: {
    tagline: "বলুন। টিক দিন। শেষ।",
    about: "বাংলা ও ইংরেজির একটি বিনামূল্যের বাজারের লিস্ট অ্যাপ। বলুন বা লিখুন, টিক দিন, আর লিস্ট রাখুন আপনার ফোনেই।",
    product: "Foddo",
    legal: "আইনি",
    contactTitle: "যোগাযোগ",
    languages: "ভাষা",
    contact: "আমাদের লিখুন",
    terms: "ব্যবহারের শর্ত",
    privacy: "প্রাইভেসি পলিসি",
    made: "তৈরি করেছে",
  },
  seo: {
    title: "Foddo: বাংলা ও ইংরেজির বাজারের লিস্ট অ্যাপ | ভয়েস, অফলাইন, বিজ্ঞাপন নেই",
    description:
      "Foddo একটি বিনামূল্যের বাজারের লিস্ট অ্যাপ। বাংলা বা ইংরেজিতে বলুন বা লিখুন, আইটেম-পরিমাণ-দাম নিজে সাজিয়ে দেয়। অফলাইনে চলে, সাইন-ইন লাগে না, বিজ্ঞাপন নেই।",
    keywords: [
      "বাজারের লিস্ট", "বাজার তালিকা অ্যাপ", "বাংলা বাজারের লিস্ট", "গ্রোসারি লিস্ট অ্যাপ", "অফলাইন বাজারের লিস্ট", "ভয়েসে বাজারের লিস্ট",
      "shopping list app", "grocery list app Bangladesh", "bazar list app", "Foddo", "ফদ্দো",
    ],
    ogTitle: "Foddo: বলুন। টিক দিন। শেষ।",
    ogDescription: "বাংলা ও ইংরেজিতে বলে বা লিখে বাজারের লিস্ট। অফলাইনে চলে, সাইন-ইন নেই, বিজ্ঞাপন নেই।",
  },
};

export const COPY: Record<Lang, Copy> = { en, bn };
/** The pictures in the strip under the hero: file in /images/items and its name in each language. */
export const ITEM_STRIP: { id: string; en: string; bn: string }[] = [
  { id: "potato", en: "Potatoes", bn: "আলু" },
  { id: "onion", en: "Onions", bn: "পেঁয়াজ" },
  { id: "tomato", en: "Tomatoes", bn: "টমেটো" },
  { id: "lemon", en: "Lemons", bn: "লেবু" },
  { id: "carrot", en: "Carrots", bn: "গাজর" },
  { id: "banana", en: "Bananas", bn: "কলা" },
  { id: "egg", en: "Eggs", bn: "ডিম" },
  { id: "milk", en: "Milk", bn: "দুধ" },
  { id: "bread", en: "Bread", bn: "পাউরুটি" },
  { id: "rice", en: "Rice", bn: "চাল" },
  { id: "dal", en: "Lentils", bn: "ডাল" },
  { id: "oil", en: "Oil", bn: "তেল" },
  { id: "fish", en: "Fish", bn: "মাছ" },
  { id: "chicken", en: "Chicken", bn: "মুরগি" },
  { id: "tea", en: "Tea", bn: "চা" },
  { id: "soap", en: "Soap", bn: "সাবান" },
  { id: "cheese", en: "Cheese", bn: "পনির" },
  { id: "watermelon", en: "Watermelon", bn: "তরমুজ" },
  { id: "pineapple", en: "Pineapple", bn: "আনারস" },
  { id: "noodles", en: "Noodles", bn: "নুডলস" },
  { id: "honey", en: "Honey", bn: "মধু" },
  { id: "biscuit", en: "Biscuits", bn: "বিস্কুট" },
  { id: "pumpkin", en: "Pumpkin", bn: "কুমড়া" },
  { id: "cucumber", en: "Cucumber", bn: "শসা" },
  { id: "chili", en: "Chilies", bn: "মরিচ" },
  { id: "grapes", en: "Grapes", bn: "আঙুর" },
  { id: "orange", en: "Oranges", bn: "কমলা" },
  { id: "pea", en: "Peas", bn: "মটরশুঁটি" },
  { id: "mango", en: "Mango", bn: "আম" },
  { id: "coconut", en: "Coconut", bn: "ডাব" },
];

export type { Copy, Feature };

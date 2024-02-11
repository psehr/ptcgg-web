export type Card = {
  meta_card: {
    id: string;
    number: string;
    cover_hires: string;
    cover_lowres: string;
    name: string;
    rarity: string;
    supertype: string;
    subtypes: string[];
    types: string[];
  };
  meta_set: {
    id: string;
    name: string;
    series: string;
    printed_total: number;
    total: number;
    symbol: string;
    logo: string;
  };
  stats: {
    hash: string;
    timestamp: number;
    timestamp_formatted: string;
    market_value: number;
    parallel_market_value: number;
    og_condition: number;
    max_condition: number;
    curr_condition: number;
    parallel: boolean;
  };
};

type slot = {
  slot_number: number;
  rates: rate[];
  parallel: boolean;
};

type rate = {
  name: raritiesRaw;
  dropRate: number;
};

export type CardSet = {
  id: string;
  slots: slot[];
};

export type item_category = "booster";

export type raritiesRaw =
  | "Amazing Rare"
  | "Classic Collection"
  | "Common"
  | "Double Rare"
  | "Hyper Rare"
  | "Illustration Rare"
  | "LEGEND"
  | "Promo"
  | "Radiant Rare"
  | "Rare"
  | "Rare ACE"
  | "Rare BREAK"
  | "Rare Holo"
  | "Rare Holo EX"
  | "Rare Holo GX"
  | "Rare Holo LV.X"
  | "Rare Holo Star"
  | "Rare Holo V"
  | "Rare Holo VMAX"
  | "Rare Holo VSTAR"
  | "Rare Prime"
  | "Rare Prism Star"
  | "Rare Rainbow"
  | "Rare Secret"
  | "Rare Shining"
  | "Rare Shiny"
  | "Rare Shiny GX"
  | "Rare Ultra"
  | "Shiny Rare"
  | "Shiny Ultra Rare"
  | "Special Illustration Rare"
  | "Trainer Gallery Rare Holo"
  | "Ultra Rare"
  | "Uncommon";

export type UserNew = {
  creation_date: string;
  email: string;
  image: string;
  last_logged: string;
  name: string;
};

export type User = {
  fields: UserNew;
  inventory: Inventory;
};

export type Item = {
  id: string;
  category: item_category;
  name: string;
  desc: string;
};

export type InventoryAttributes = {
  size: number;
};

export type InventoryContent = {
  items: Item[];
};

export type Inventory = {
  attributes: InventoryAttributes;
  content: InventoryContent;
};

export type LogEntry = {
  status: "info" | "success" | "failed" | "warning";
  description: string;
  timestamp?: string;
};

// export type CardBinder = {
//   stats: {
//     totalAmount: number;
//     currAmount: number;
//   };
//   cards: Card[];
//   currCards: Card[];
// };

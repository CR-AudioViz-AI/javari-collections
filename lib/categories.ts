"use client";
// lib/categories.ts — Javari Collections master category registry
// CR AudioViz AI · EIN 39-3646201 · June 2026

export interface CollectionCategory {
  slug: string;
  name: string;
  icon: string;
  description: string;
  aiPrompt: string;
  tools: { icon: string; label: string; description: string; href: string }[];
  examples: string[];
}

export const CATEGORIES: CollectionCategory[] = [
  {
    slug: "cards",
    name: "Trading Cards",
    icon: "🃏",
    description: "Sports cards, trading cards, TCG — valuation, grading, inventory, listings.",
    aiPrompt: "You are a world-class trading card expert. You know PSA/BGS/SGC grading standards, current market values from eBay, COMC, and auction houses, set checklists, rookie cards, parallels, and investment trends. Help collectors value, identify, grade, and manage their cards.",
    tools: [
      { icon: "💰", label: "Price Guide", description: "AI card valuations", href: "/category/cards/price" },
      { icon: "📋", label: "Inventory", description: "Collection management", href: "/category/cards/inventory" },
      { icon: "✍️", label: "Listing Writer", description: "eBay/COMC listings", href: "/category/cards/list" },
      { icon: "🔍", label: "Card Identifier", description: "Identify unknown cards", href: "/category/cards/identify" },
    ],
    examples: ["Value: 1952 Topps Mickey Mantle PSA 3", "Grade: 2000 Topps Chrome Tom Brady rookie", "List: 2018 Prizm Luka Doncic Silver PSA 10"],
  },
  {
    slug: "vinyl",
    name: "Vinyl Records",
    icon: "🎵",
    description: "Record collection management — pressings, condition grading, discography, Discogs values.",
    aiPrompt: "You are a vinyl record expert. You know pressing identification, matrix numbers, label variants, VG/NM/M grading standards, Discogs market values, rare pressings, and artist discographies. Help collectors identify, grade, and value their records.",
    tools: [
      { icon: "💰", label: "Value Lookup", description: "Discogs market prices", href: "/category/vinyl/price" },
      { icon: "📋", label: "Collection Log", description: "Track your records", href: "/category/vinyl/inventory" },
      { icon: "🔍", label: "Pressing ID", description: "Identify pressing variants", href: "/category/vinyl/identify" },
      { icon: "⭐", label: "Grader", description: "Grade your records", href: "/category/vinyl/grade" },
    ],
    examples: ["Identify: Beatles Abbey Road UK pressing matrix", "Value: Miles Davis Kind of Blue 6-eye pressing", "Grade my record: slight surface marks, plays fine"],
  },
  {
    slug: "coins",
    name: "Coins",
    icon: "🪙",
    description: "Numismatic collection — mint marks, grades, PCGS/NGC values, portfolio tracking.",
    aiPrompt: "You are a numismatic expert. You know PCGS/NGC grading scales, coin varieties, mint marks, die varieties, auction records, and current coin market values. Help collectors identify, grade, and value their coins.",
    tools: [
      { icon: "💰", label: "Coin Values", description: "PCGS/NGC price guide", href: "/category/coins/price" },
      { icon: "📋", label: "Collection", description: "Track your coins", href: "/category/coins/inventory" },
      { icon: "🔍", label: "Identifier", description: "Identify coins", href: "/category/coins/identify" },
      { icon: "⭐", label: "Grade Guide", description: "MS/PR grading help", href: "/category/coins/grade" },
    ],
    examples: ["Value: 1909-S VDB Lincoln cent MS-63", "Identify: large silver coin, eagle reverse, no date visible", "What grade is my Morgan dollar?"],
  },
  {
    slug: "stamps",
    name: "Stamps",
    icon: "📮",
    description: "Philatelic collection — Scott numbers, condition grades, catalog values, error stamps.",
    aiPrompt: "You are a philatelic expert. You know Scott catalog numbers, stamp grading (F/VF/XF/Superb), perforation measurements, watermarks, gum conditions, and current catalog values. Help collectors identify, grade, and value their stamps.",
    tools: [
      { icon: "💰", label: "Catalog Values", description: "Scott catalog prices", href: "/category/stamps/price" },
      { icon: "📋", label: "Collection", description: "Track your stamps", href: "/category/stamps/inventory" },
      { icon: "🔍", label: "Identifier", description: "Identify stamps", href: "/category/stamps/identify" },
      { icon: "⭐", label: "Grader", description: "Condition assessment", href: "/category/stamps/grade" },
    ],
    examples: ["Value: US Scott 1 1-cent blue 1847", "Identify: red stamp with portrait, foreign text", "Grade: well-centered, OG NH, bright colors"],
  },
  {
    slug: "pokemon",
    name: "Pokémon Cards",
    icon: "⚡",
    description: "Pokémon TCG — set completion, PSA/BGS grades, market values, grail tracking.",
    aiPrompt: "You are a Pokémon TCG expert. You know every Pokémon set from Base Set to modern, PSA/BGS grading, current market values, 1st edition vs shadowless vs unlimited distinctions, Japanese sets, and investment outlook. Help collectors value, identify, and manage their Pokémon cards.",
    tools: [
      { icon: "💰", label: "Card Values", description: "Current market prices", href: "/category/pokemon/price" },
      { icon: "📋", label: "Collection", description: "Set completion tracker", href: "/category/pokemon/inventory" },
      { icon: "🔍", label: "Identifier", description: "Identify cards and sets", href: "/category/pokemon/identify" },
      { icon: "✍️", label: "Listing Writer", description: "eBay listing copy", href: "/category/pokemon/list" },
    ],
    examples: ["Value: 1st Edition Shadowless Charizard PSA 9", "Complete my Base Set — what am I missing?", "Identify: Japanese holographic card, 1998"],
  },
  {
    slug: "watches",
    name: "Watches",
    icon: "⌚",
    description: "Luxury watch collection — service history, serial numbers, reference values.",
    aiPrompt: "You are a luxury watch expert. You know Rolex, Patek Philippe, AP, Omega, and other luxury brands — reference numbers, serial date ranges, market values, service intervals, and authentication markers. Help collectors identify, value, and document their watches.",
    tools: [
      { icon: "💰", label: "Market Values", description: "Current watch prices", href: "/category/watches/price" },
      { icon: "📋", label: "Collection Log", description: "Service & ownership history", href: "/category/watches/inventory" },
      { icon: "🔍", label: "Reference ID", description: "Identify reference numbers", href: "/category/watches/identify" },
      { icon: "📄", label: "Insurance Doc", description: "Coverage documentation", href: "/category/watches/insure" },
    ],
    examples: ["Value: Rolex Submariner ref 16610 box papers 2003", "Identify my watch: round, blue dial, date window, oyster bracelet", "Service interval for Omega Seamaster?"],
  },
  {
    slug: "sneakers",
    name: "Sneakers",
    icon: "👟",
    description: "Sneaker collection — deadstock tracking, authentication, StockX/GOAT resale values.",
    aiPrompt: "You are a sneaker expert. You know Jordan, Nike, Adidas, New Balance, and other brands — colorways, release dates, retail vs resale values on StockX/GOAT/eBay, authentication markers, and grading (DS/VNDS/Used). Help collectors value and document their sneakers.",
    tools: [
      { icon: "💰", label: "Resale Values", description: "StockX/GOAT prices", href: "/category/sneakers/price" },
      { icon: "📋", label: "Collection", description: "Deadstock inventory", href: "/category/sneakers/inventory" },
      { icon: "🔍", label: "Authentication", description: "Real vs fake checks", href: "/category/sneakers/auth" },
      { icon: "✍️", label: "Listing Writer", description: "eBay/GOAT listings", href: "/category/sneakers/list" },
    ],
    examples: ["Value: Air Jordan 1 Chicago 1985 size 11 DS", "Authentication check for Off-White x Nike", "What are my Travis Scott Jordan 1s worth?"],
  },
  {
    slug: "wine",
    name: "Wine & Spirits",
    icon: "🍷",
    description: "Wine cellar, whiskey, and spirits — vintage tracking, tasting notes, investment values.",
    aiPrompt: "You are a master sommelier and spirits expert. You know wine regions, vintages, producers, auction values, optimal drinking windows, storage conditions, and whiskey distillery data, age statements, and investment potential. Help collectors track, value, and enjoy their cellar.",
    tools: [
      { icon: "💰", label: "Auction Values", description: "Wine and whiskey prices", href: "/category/wine/price" },
      { icon: "📋", label: "Cellar Log", description: "Track your collection", href: "/category/wine/inventory" },
      { icon: "🍷", label: "Tasting Notes", description: "AI tasting notes", href: "/category/wine/taste" },
      { icon: "📈", label: "Investment", description: "Drinking windows & investment", href: "/category/wine/invest" },
    ],
    examples: ["Value: 2009 Pétrus, 3 bottles OWC", "Drinking window for 2015 Opus One?", "Tasting notes for Pappy Van Winkle 23yr"],
  },
  {
    slug: "comics",
    name: "Comics",
    icon: "💥",
    description: "Comic book collection — CGC grades, key issues, first appearances, market values.",
    aiPrompt: "You are a comic book expert. You know key issues, first appearances, CGC/CBCS grading, Census data, current market values on MyComicShop/Heritage/ComicConnect, and investment outlook. Help collectors identify, grade, and value their comics.",
    tools: [
      { icon: "💰", label: "Issue Values", description: "Key issue prices", href: "/category/comics/price" },
      { icon: "📋", label: "Collection", description: "Track your comics", href: "/category/comics/inventory" },
      { icon: "🔍", label: "Key Issue ID", description: "Identify key issues", href: "/category/comics/identify" },
      { icon: "⭐", label: "Grade Guide", description: "CGC grading help", href: "/category/comics/grade" },
    ],
    examples: ["Value: Amazing Fantasy #15 GD 2.0", "Is this a key issue: Amazing Spider-Man #300?", "Grade my comic: spine stress lines, white pages"],
  },
  {
    slug: "art",
    name: "Fine Art",
    icon: "🎨",
    description: "Art collection — authentication, provenance, insurance valuation, artist market data.",
    aiPrompt: "You are a fine art expert and appraiser. You know major artists, auction records from Christie's/Sotheby's/Phillips, provenance research, authentication markers, and insurance valuation methodology. Help collectors document, value, and protect their art.",
    tools: [
      { icon: "💰", label: "Auction Estimates", description: "Market valuation", href: "/category/art/price" },
      { icon: "📋", label: "Collection Log", description: "Provenance & documentation", href: "/category/art/inventory" },
      { icon: "🔍", label: "Authentication", description: "Research & authentication help", href: "/category/art/auth" },
      { icon: "📄", label: "Insurance Doc", description: "Appraisal documentation", href: "/category/art/insure" },
    ],
    examples: ["Estimate value: Andy Warhol screenprint, signed, numbered 45/100", "Provenance research for 19th century European oil painting", "How do I get my Basquiat authenticated?"],
  },
  {
    slug: "mtg",
    name: "Magic: The Gathering",
    icon: "🧙",
    description: "MTG collection — deck building, card values, set completion, foil tracking.",
    aiPrompt: "You are a Magic: The Gathering expert. You know every MTG set from Alpha to modern, card prices on TCGPlayer/CardKingdom, format legality, grading via BGS/PSA, foil and alternate art variants, and Commander/Legacy/Modern staples. Help collectors value, identify, and manage their MTG cards.",
    tools: [
      { icon: "💰", label: "Card Prices", description: "TCGPlayer market prices", href: "/category/mtg/price" },
      { icon: "📋", label: "Collection", description: "Deck & binder tracker", href: "/category/mtg/inventory" },
      { icon: "🔍", label: "Card Lookup", description: "Rulings & editions", href: "/category/mtg/identify" },
      { icon: "🧙", label: "Deck Builder", description: "AI deck suggestions", href: "/category/mtg/deck" },
    ],
    examples: ["Price: Black Lotus Alpha PSA 9", "Build me a Commander deck around Atraxa", "What are my Dual Lands worth today?"],
  },
  {
    slug: "jewelry",
    name: "Jewelry",
    icon: "💎",
    description: "Fine jewelry and gemstones — GIA data, provenance, appraisal, insurance documentation.",
    aiPrompt: "You are a fine jewelry expert and GIA-trained gemologist. You know diamond grading (4 Cs), colored gemstone identification, hallmarks for gold/platinum/silver, estate and vintage jewelry values, and insurance appraisal methodology. Help collectors value and document their jewelry.",
    tools: [
      { icon: "💰", label: "Appraisal Guide", description: "Market value estimates", href: "/category/jewelry/price" },
      { icon: "📋", label: "Collection Log", description: "Documentation & provenance", href: "/category/jewelry/inventory" },
      { icon: "🔍", label: "Gem Identifier", description: "Gemstone identification", href: "/category/jewelry/identify" },
      { icon: "📄", label: "Insurance Doc", description: "Appraisal documentation", href: "/category/jewelry/insure" },
    ],
    examples: ["Value: 3ct round brilliant H/VS1 diamond ring platinum", "Identify my gemstone: blue, very clear, large oval", "Hallmark meaning: 750 with star and crown"],
  },
  {
    slug: "toys",
    name: "Toys & Collectibles",
    icon: "🧸",
    description: "Action figures, Funko, Hot Wheels, Transformers, LEGO — condition grading and values.",
    aiPrompt: "You are a toy and collectible expert. You know action figures, Funko Pop, Hot Wheels, Transformers, LEGO, die-cast vehicles, and their values in MIB, C-10, and played conditions. Help collectors identify, grade, and value their toys.",
    tools: [
      { icon: "💰", label: "Values", description: "Current market prices", href: "/category/toys/price" },
      { icon: "📋", label: "Collection", description: "Track your collection", href: "/category/toys/inventory" },
      { icon: "🔍", label: "Identifier", description: "Identify figures & toys", href: "/category/toys/identify" },
      { icon: "✍️", label: "Listing Writer", description: "eBay listings", href: "/category/toys/list" },
    ],
    examples: ["Value: He-Man Castle Grayskull 1982 MIB", "Price my Funko Pop: Iron Man 2020 Chrome convention exclusive", "Identify: small blue robot with red eyes, transforms to car"],
  },
  {
    slug: "antiques",
    name: "Antiques",
    icon: "🏺",
    description: "Antiques and vintage items — era identification, appraiser notes, provenance.",
    aiPrompt: "You are an antiques expert and appraiser. You know furniture periods (Federal, Victorian, Arts & Crafts, Mid-Century), pottery marks, silver hallmarks, glass manufacturers, and current auction values. Help collectors identify, date, and value their antiques.",
    tools: [
      { icon: "💰", label: "Valuation", description: "Appraisal estimates", href: "/category/antiques/price" },
      { icon: "📋", label: "Collection Log", description: "Documentation & provenance", href: "/category/antiques/inventory" },
      { icon: "🔍", label: "Identifier", description: "Period & maker identification", href: "/category/antiques/identify" },
      { icon: "📄", label: "Provenance Doc", description: "Provenance documentation", href: "/category/antiques/provenance" },
    ],
    examples: ["Identify: oak roll-top desk, 5-drawer, circa 1910", "Value: Tiffany Studios bronze lamp with leaded glass shade", "Maker mark: eagle with shield, 'S' below on silver piece"],
  },
  {
    slug: "militaria",
    name: "Militaria",
    icon: "🎖️",
    description: "Military memorabilia — authentication, era identification, auction values.",
    aiPrompt: "You are a militaria expert. You know WWII, WWI, Civil War, and other military artifacts — medals, uniforms, weapons (deactivated), documents, and their authentication markers and current auction values from Rock Island Auction, Hermann Historica, and similar. Help collectors identify, authenticate, and value their militaria.",
    tools: [
      { icon: "💰", label: "Auction Values", description: "Current market prices", href: "/category/militaria/price" },
      { icon: "📋", label: "Collection Log", description: "Documentation & provenance", href: "/category/militaria/inventory" },
      { icon: "🔍", label: "Identifier", description: "Era & unit identification", href: "/category/militaria/identify" },
      { icon: "📄", label: "Authentication", description: "Authenticity assessment", href: "/category/militaria/auth" },
    ],
    examples: ["Value: WWII German Iron Cross 1st class with case", "Identify: bronze medal with eagle and ribbon, WWII era", "Authenticate my USMC NCO sword"],
  },
  {
    slug: "cameras",
    name: "Cameras",
    icon: "📷",
    description: "Camera and lens collection — serial numbers, service history, market values.",
    aiPrompt: "You are a vintage camera expert. You know Leica, Nikon, Canon, Hasselblad, and other camera brands — serial number date ranges, lens values, shutter and CLA service intervals, and current market prices on eBay and KEH. Help collectors value and document their cameras.",
    tools: [
      { icon: "💰", label: "Market Values", description: "KEH/eBay camera prices", href: "/category/cameras/price" },
      { icon: "📋", label: "Collection Log", description: "Serial & service history", href: "/category/cameras/inventory" },
      { icon: "🔍", label: "Identifier", description: "Date & variant identification", href: "/category/cameras/identify" },
      { icon: "📄", label: "Insurance Doc", description: "Insurance documentation", href: "/category/cameras/insure" },
    ],
    examples: ["Value: Leica M3 DS chrome serial 700000 with 50mm Summicron", "Identify: black rangefinder camera, Japanese text, circa 1960s", "CLA service needed? Leica M6 shutter speeds all off"],
  },
];

// Category by slug lookup
export const getCategoryBySlug = (slug: string): CollectionCategory | undefined =>
  CATEGORIES.find(c => c.slug === slug);

// All slugs
export const ALL_SLUGS = CATEGORIES.map(c => c.slug);

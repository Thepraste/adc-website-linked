// African Diaspora Channels (ADC) - Master Shows, Podcasts, Live Channels & Episodes Data
// Centralized Data File: All shows, events, channels, and their episodes are managed and edited here

// 1. Hero Showcase Banners
export const heroShows = [
  {
    id: 'adc-hero-morning-brew',
    youtubeId: 'BAhn-P035_M',
    youtubeUrl: 'https://www.youtube.com/watch?v=BAhn-P035_M',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    title: 'The Morning Brew with Coco and Mimi',
    category: 'The Morning Brew with Coco and Mimi',
    contentType: 'tv',
    image: '/images/hero/morning-brew-1920x864.png',
    backdrop: '/images/hero/morning-brew-1920x864.png',
    poster: '/images/hero/morning-brew-1920x864.png',
    year: 2026,
    duration: '1h 05m',
    rating: '13+',
    matchScore: 98,
    genres: ['Morning Talk Show', 'Current Affairs', 'Entertainment'],
    description: 'Start your morning with Coco and Mimi on African Diaspora Channels! Breaking down trending headlines, viral diaspora moments, entertainment news, and empowering conversations connecting Africa to the global diaspora.',
    audioLangs: ['English [Original]'],
    subtitles: ['English [CC]'],
    director: 'ADC Broadcast Studio',
    starring: ['Coco', 'Mimi'],
    isOriginal: true,
  },
  {
    id: 'adc-hero-lifestyle-coco',
    youtubeId: '-iySEJPQLrs',
    youtubeUrl: 'https://www.youtube.com/watch?v=-iySEJPQLrs',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    title: 'Lifestyle with Coco',
    category: 'Lifestyle with Coco',
    contentType: 'tv',
    image: '/images/hero/lifestyle-hero.png',
    backdrop: '/images/hero/lifestyle-hero.png',
    poster: '/images/hero/lifestyle-hero.png',
    year: 2026,
    duration: '42m',
    rating: '13+',
    matchScore: 97,
    genres: ['Lifestyle', 'Fashion', 'Arts', 'Pan-African Culture'],
    description: 'Join Coco on a celebration of African diaspora elegance, contemporary fashion design, culinary traditions, and inspiring creative entrepreneurs reshaping international culture.',
    audioLangs: ['English [Original]'],
    subtitles: ['English [CC]'],
    director: 'ADC Productions',
    starring: ['Esther CocoBassey'],
    isOriginal: true,
  },
  {
    id: 'adc-hero-gov-and-you',
    youtubeId: '5EQSyTn7c54',
    youtubeUrl: 'https://www.youtube.com/watch?v=5EQSyTn7c54',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    title: 'The Government and You',
    category: 'The Government and You',
    contentType: 'tv',
    image: '/images/hero/gov-hero.png',
    backdrop: '/images/hero/gov-hero.png',
    poster: '/images/hero/gov-hero.png',
    year: 2026,
    duration: '48m',
    rating: '13+',
    matchScore: 97,
    genres: ['Public Affairs', 'Civic Dialogue', 'Leadership', 'Policy'],
    description: 'A transparent civic forum bridging public governance with African diaspora citizens worldwide. Exploring public policy, civic engagement, diaspora rights, and leadership.',
    audioLangs: ['English [Original]'],
    subtitles: ['English [CC]'],
    director: 'ADC Policy Network',
    starring: ['ADC Policy Panel'],
    isOriginal: true,
  },
  {
    id: 'the-real',
    youtubeId: 'cAl4OqTAa8k',
    youtubeUrl: 'https://www.youtube.com/watch?v=cAl4OqTAa8k',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    title: 'The Real',
    category: 'Podcast',
    contentType: 'tv',
    image: '/images/hero/the-real-hero.png',
    backdrop: '/images/hero/the-real-hero.png',
    poster: '/images/hero/the-real-hero.png',
    year: 2026,
    duration: '1h 12m',
    rating: '13+',
    matchScore: 99,
    genres: ['Talk Show', 'Diaspora Affairs', 'Culture'],
    description: 'Join the Ladies as the X-ray the real destination Cross.',
    audioLangs: ['English [Original]', 'Pidgin'],
    subtitles: ['English [CC]'],
    director: 'ADC Media',
    starring: ['The Real Team'],
    isOriginal: true,
  },
];

// 2. Live Television Channels streaming on the "On Now" slider
export const onNowShows = [
  /*{
    id: 'on-now-crbc',
    streamUrl: 'https://media.dnwayne.org:9443/afdc/_definst_/crbc.stream/playlist.m3u8',
    channelId: 'crbc',
    youtubeId: 'BAhn-P035_M',
    youtubeUrl: 'https://www.youtube.com/watch?v=BAhn-P035_M',
    title: 'CRBC TV Calabar',
    channelName: 'Cross River Broadcasting Corporation',
    category: 'Live TV',
    contentType: 'tv',
    isChannel: true,
    isLive: true,
    duration: 'LIVE NOW',
    image: '/images/channels/crbc-logo.png',
    backdrop: '/images/channels/crbc-logo.png',
    logoImg: '/images/channels/crbc-logo.png',
    year: 2026,
    rating: 'PG',
    matchScore: 99,
    genres: ['Live TV', 'News', 'Tourism', 'Calabar Carnival'],
    description: 'Live broadcast from Cross River Broadcasting Corporation (CRBC) in Calabar: state affairs, tourism showcases, cultural celebrations, and Calabar Carnival highlights.',
    officialUrl: 'https://crossriverstate.gov.ng/',
  },*/
  {
    id: 'on-now-channels-tv',
    youtubeId: 'W8nThq62Vb4',
    youtubeUrl: 'https://www.youtube.com/watch?v=W8nThq62Vb4',
    liveUrl: 'https://www.youtube.com/live/W8nThq62Vb4',
    title: 'Channels Television',
    channelName: 'Channels TV',
    category: 'Live TV',
    contentType: 'tv',
    isChannel: true,
    isLive: true,
    duration: 'LIVE NOW',
    image: '/images/channels/channelstv.png',
    backdrop: '/images/channels/channelstv.png',
    logoImg: '/images/channels/channelstv.png',
    year: 2026,
    rating: '13+',
    matchScore: 99,
    genres: ['Live TV', '24/7 News', 'Politics', 'Business'],
    description: 'Nigeria’s multi-award winning 24-hour news station broadcasting live national politics, security updates, business analysis, and global affairs.',
    officialUrl: 'https://www.channelstv.com/',
  },
  {
    id: 'on-now-arise-news',
    youtubeId: 'Fy_03Aorpq8',
    youtubeUrl: 'https://www.youtube.com/watch?v=Fy_03Aorpq8',
    liveUrl: 'https://www.youtube.com/live/Fy_03Aorpq8',
    title: 'ARISE News TV',
    channelName: 'ARISE News',
    category: 'Live TV',
    contentType: 'tv',
    isChannel: true,
    isLive: true,
    duration: 'LIVE NOW',
    image: '/images/channels/arisenews.png',
    backdrop: '/images/channels/arisenews.png',
    logoImg: '/images/channels/arisenews.png',
    year: 2026,
    rating: '13+',
    matchScore: 98,
    genres: ['Live TV', 'Global News', 'The Morning Show', 'Economy'],
    description: 'Global news channel broadcasting live from London, Lagos, Abuja, and Washington DC bureaus with hard-hitting debate and analysis.',
    officialUrl: 'https://www.arise.tv/',
  },
  {
    id: 'on-now-tvc-news',
    youtubeId: '5qZKM7m1Moc',
    youtubeUrl: 'https://www.youtube.com/watch?v=5qZKM7m1Moc',
    liveUrl: 'https://www.youtube.com/live/5qZKM7m1Moc',
    title: 'TVC News Nigeria',
    channelName: 'TVC News',
    category: 'Live TV',
    contentType: 'tv',
    isChannel: true,
    isLive: true,
    duration: 'LIVE NOW',
    image: '/images/channels/tvcnews.png',
    backdrop: '/images/channels/tvcnews.png',
    logoImg: '/images/channels/tvcnews.png',
    year: 2026,
    rating: '13+',
    matchScore: 97,
    genres: ['Live TV', 'Journalists Hangout', 'Breaking News', 'Society'],
    description: 'Live broadcast from TVC News in Lagos, featuring Journalists\' Hangout, investigative reporting, and nationwide coverage.',
    officialUrl: 'https://tvcnews.tv/',
  },
  {
    id: 'on-now-silverbird',
    youtubeId: '-0-bhs92_ZU',
    youtubeUrl: 'https://www.youtube.com/watch?v=-0-bhs92_ZU',
    liveUrl: 'https://www.youtube.com/live/-0-bhs92_ZU',
    title: 'Silverbird Television (STV)',
    channelName: 'Silverbird TV',
    category: 'Live TV',
    contentType: 'tv',
    isChannel: true,
    isLive: true,
    duration: 'LIVE NOW',
    image: '/images/channels/silverbird.png',
    backdrop: '/images/channels/silverbird.png',
    logoImg: '/images/channels/silverbird.png',
    year: 2026,
    rating: '13+',
    matchScore: 96,
    genres: ['Live TV', 'Entertainment', 'Showbiz', 'Urban Culture'],
    description: 'Premier entertainment and lifestyle station broadcasting Today on STV, Nollywood reviews, concert archives, and metropolitan news.',
    officialUrl: 'https://silverbirdtv.com/',
  }, 
  {
    id: 'on-now-wazobia',
    youtubeId: 'zLrMQyxUO4U',
    youtubeUrl: 'https://www.youtube.com/watch?v=zLrMQyxUO4U',
    title: 'Wazobia Max TV',
    channelName: 'Wazobia Max TV',
    category: 'Live TV',
    contentType: 'tv',
    isChannel: true,
    isLive: true,
    duration: 'LIVE NOW',
    image: '/images/channels/wazobia.svg',
    backdrop: '/images/channels/wazobia.svg',
    logoImg: '/images/channels/wazobia.svg',
    year: 2026,
    rating: '13+',
    matchScore: 96,
    genres: ['Live TV', 'Pidgin News', 'Comedy', 'Fan Banter'],
    description: 'Nigeria’s favourite Pidgin English channel delivering As E Dey Hot, stand-up comedy specials, and passionate football debates.',
    officialUrl: 'https://wazobiamax.ng/',
  },
  {
    id: 'on-now-news-central',
    youtubeId: 'uNUPuUTvyH8',
    youtubeUrl: 'https://www.youtube.com/watch?v=uNUPuUTvyH8',
    liveUrl: 'https://www.youtube.com/live/uNUPuUTvyH8',
    title: 'News Central TV',
    channelName: 'News Central',
    category: 'Live TV',
    contentType: 'tv',
    isChannel: true,
    isLive: true,
    duration: 'LIVE NOW',
    image: '/images/channels/news-central.png',
    backdrop: '/images/channels/news-central.png',
    logoImg: '/images/channels/news-central.png',
    year: 2026,
    rating: '13+',
    matchScore: 98,
    genres: ['Live TV', 'Pan-African News', 'Politics 360', 'Business'],
    description: `Africa’s first truly Pan-African 24-hour news and current affairs channel, telling the African story from an African perspective with live breaking coverage, investigative reports, and in-depth business analyses.`,
    officialUrl: 'https://newscentral.ng/',
  },
  {
    id: 'on-now-trust-tv',
    youtubeId: 'ilwAJyuS1vE',
    youtubeUrl: 'https://www.youtube.com/watch?v=ilwAJyuS1vE',
    liveUrl: 'https://www.youtube.com/live/ilwAJyuS1vE',
    title: 'Trust Television (Trust TV)',
    channelName: 'Trust TV',
    category: 'Live TV',
    contentType: 'tv',
    isChannel: true,
    isLive: true,
    duration: 'LIVE NOW',
    image: '/images/channels/trust-tv.png',
    backdrop: '/images/channels/trust-tv.png',
    logoImg: '/images/channels/trust-tv.png',
    year: 2026,
    rating: '13+',
    matchScore: 97,
    genres: ['Live TV', 'Daily Politics', 'Investigative News', 'Documentaries'],
    description: 'Authoritative 24-hour television channel from Media Trust Group, broadcasting live national politics, security analyses, investigative documentaries, and regional affairs from Abuja and across Nigeria.',
    officialUrl: 'https://trusttv.com/',
  },
];

// 3. TV Shows Row
export const tvShows = [
  {
    id: 'tv-show-1',
    youtubeId: 'BAhn-P035_M',
    youtubeUrl: 'https://www.youtube.com/watch?v=BAhn-P035_M',
    title: 'The Morning Brew with Coco and Mimi',
    category: 'TV Shows',
    contentType: 'tv',
    image: '/images/hero/morning-brew-thumb.png',
    backdrop: '/images/hero/morning-brew-thumb.png',
    year: 2026,
    duration: '45m',
    rating: '13+',
    matchScore: 98,
    genres: ['Daily Talk', 'Culture', 'News Scoop'],
    description: "ADC's flagship morning talk show delivering daily buzz, community headlines, and diaspora cultural highlights.",
    audioLangs: ['English [Original]'],
    subtitles: ['English [CC]'],
    starring: ['Coco', 'Mimi'],
    isOriginal: true,
  },
  {
    id: 'tv-show-2',
    youtubeId: '-iySEJPQLrs',
    youtubeUrl: 'https://www.youtube.com/watch?v=-iySEJPQLrs',
    title: 'Lifestyle with Coco',
    category: 'TV Shows',
    contentType: 'tv',
    image: '/images/hero/lifestyle-thumb.png',
    backdrop: '/images/hero/lifestyle-thumb.png',
    year: 2026,
    duration: '42m',
    rating: '13+',
    matchScore: 96,
    genres: ['Lifestyle', 'Fashion', 'Food & Travel'],
    description: 'Host Esther CocoBassey takes viewers across the diaspora for style, culinary wonders, and contemporary interior design.',
    audioLangs: ['English [Original]'],
    subtitles: ['English [CC]'],
    starring: ['Esther CocoBassey'],
    isOriginal: true,
  },
];

// 4. Podcasts and Talk Shows Row
export const podcasts = [
  {
    id: 'podcast-1',
    youtubeId: '5EQSyTn7c54',
    youtubeUrl: 'https://www.youtube.com/watch?v=5EQSyTn7c54',
    title: 'The Government and You',
    category: 'Podcasts & Talk Shows',
    contentType: 'tv',
    image: '/images/hero/the-government-and-you.png',
    backdrop: '/images/hero/the-government-and-you.png',
    year: 2026,
    duration: '50m',
    rating: '13+',
    matchScore: 97,
    genres: ['Public Affairs', 'Civic Dialogue', 'Leadership'],
    description: 'A transparent civic forum bridging public governance with African diaspora citizens worldwide.',
    audioLangs: ['English [Original]'],
    subtitles: ['English [CC]'],
    starring: ['ADC Policy Panel'],
    isOriginal: true,
  },
  {
    id: 'podcast-2',
    youtubeId: 'pT6Pnwo-PyM',
    youtubeUrl: 'https://www.youtube.com/watch?v=pT6Pnwo-PyM',
    title: 'The Real',
    category: 'Podcasts & Talk Shows',
    contentType: 'tv',
    image: '/images/hero/the-real-thumb.png',
    backdrop: '/images/hero/the-real-thumb.png',
    year: 2026,
    duration: '38m',
    rating: '13+',
    matchScore: 97,
    genres: ['Talk Show', 'Culture & Society'],
    description: 'Real talk, grassroots perspectives, and authentic pan-African storytelling.',
    audioLangs: ['English [Original]', 'Pidgin'],
    subtitles: ['English [CC]'],
    starring: ['The Real Team'],
    isOriginal: true,
  },
  {
    id: 'podcast-3',
    youtubeId: 'zrXWcfgq4t4',
    youtubeUrl: 'https://www.youtube.com/watch?v=zrXWcfgq4t4',
    title: 'Destination Cross River: Policy and Investment Opportunities',
    category: 'Podcasts & Talk Shows',
    contentType: 'tv',
    image: '/images/pio.jpg',
    backdrop: '/images/pio.jpg',
    year: 2026,
    duration: '48m',
    rating: '13+',
    matchScore: 97,
    genres: ['Documentary', 'Investment & Policy'],
    description: "Join in as we streamline the possibilities of investing in the people's paradise.",
    audioLangs: ['English [Original]', 'Pidgin'],
    subtitles: ['English [CC]'],
    starring: ['Fidelis Ubana'],
    isOriginal: true,
  },
];

// 5. Upcoming Events Row
export const upcomingEventsShows = [
  {
    id: 'calabar-carnival-parade',
    youtubeId: 'BAhn-P035_M',
    youtubeUrl: 'https://www.youtube.com/watch?v=BAhn-P035_M',
    title: 'Calabar Carnival 1st Dry Run',
    category: 'Upcoming Events',
    contentType: 'tv',
    image: '/images/1st-dryrun.png',
    backdrop: '/images/1st-dryrun.png',
    year: 2026,
    duration: 'OCT 18, 2026',
    rating: 'PG',
    matchScore: 99,
    genres: ['Calabar Carnival', 'Live Festival', 'Street Pageantry', 'Culture'],
    description: "Africa's biggest street party! 50,000 costumed masqueraders, international bands, stilt walkers, and vibrant music floats parade through Calabar with live global broadcast on ADC.",
    audioLangs: ['English [Original]'],
    subtitles: ['English [CC]'],
    starring: ['Seagull Band', 'Bayside Band', 'Masta Blasta', 'Passion 4 Band'],
    isOriginal: true,
  },
];

export const upcomingCrackUpComedyShows = upcomingEventsShows;

// Master aggregated list for search and detail lookups
export const allShows = [
  ...heroShows,
  ...onNowShows,
  ...tvShows,
  ...podcasts,
  ...upcomingEventsShows,
];

// Aliases matching uppercase conventions
export const HERO_MOVIES = heroShows;
export const ON_NOW_MOVIES = onNowShows;
export const TV_SHOWS_MOVIES = tvShows;
export const PODCASTS_MOVIES = podcasts;
export const CRACK_UP_COMEDY_MOVIES = upcomingEventsShows;
export const UPCOMING_EVENTS_MOVIES = upcomingEventsShows;


// 6. Curated Episodes for Shows (Organized with Latest Episodes First / Descending Order)
export const CURATED_SHOW_EPISODES = {
  // 1. The Morning Brew with Coco and Mimi (Latest first: Ep 6 to Ep 1)
  'morning-brew': [
   
    {
      id: 'mb-ep-3',
      episodeNumber: 3,
      title: 'THE MORNING BREW WITH COCO AND MIMI 7-10-26',
      duration: '1h 12m',
      description: '',
      image: '/images/hero/morning-brew-thumb.png',
      youtubeId: 'j0OGhoFSjZ8',
      youtubeUrl: 'https://www.youtube.com/watch?v=j0OGhoFSjZ8',
      airDate: 'Oct 7, 2026',
    },
    {
      id: 'mb-ep-2',
      episodeNumber: 2,
      title: 'THE MORNING BREW WITH COCO AND MIMI 6-10-26',
      duration: '17m',
      description: '',
      image: '/images/hero/morning-brew-thumb.png',
      youtubeId: 'zEZTtXStbac',
      youtubeUrl: 'https://www.youtube.com/watch?v=zEZTtXStbac',
      airDate: 'Oct 6, 2026',
    },
    {
      id: 'mb-ep-1',
      episodeNumber: 1,
      title: 'THE MORNING BREW WITH COCO AND MIMI 5-10-26',
      duration: '27m',
      description: '',
      image: '/images/hero/morning-brew-thumb.png',
      youtubeId: 'EFeBwhD_byAM',
      youtubeUrl: 'https://www.youtube.com/watch?v=EFeBwhD_byAM',
      airDate: 'Oct 05, 2026',
    },
  ],

  // 2. Lifestyle with Coco (Latest first: Ep 6 to Ep 1)
  'lifestyle-coco': [
    {
      id: 'lc-ep-7',
      episodeNumber: 7,
      title: 'Raising the "man of our dreams" pt2',
      duration: '1hr 5m',
      description: 'This episode features a follow up conversation about the challenges of raising the "man of our dreams".',
      image: './images/hero/lifestyle-thumb.png',
      youtubeId: 'FeTuPxa5-SE',
      youtubeUrl: 'https://www.youtube.com/watch?v=FeTuPxa5-SE',
      airDate: 'Oct 7, 2026',
    },
    {
      id: 'lc-ep-6',
      episodeNumber: 6,
      title: 'Raising the "man of our dreams"',
      duration: '42m',
      description: 'This episode features a candid conversation about the challenges of raising the "man of our dreams".',
      image: './images/hero/lifestyle-thumb.png',
      youtubeId: 'FeTuPxa5-SE',
      youtubeUrl: 'https://www.youtube.com/watch?v=FeTuPxa5-SE',
      airDate: 'Sep 16, 2026',
    },
    {
      id: 'lc-ep-5',
      episodeNumber: 5,
      title: 'gods and AFrica (Western religion vs Africanism) Pt2',
      duration: '1hr 4m',
      description: 'This episode features a panel discussion exploring the intersection of African identity, traditional indigenous religion, and Western-influenced religion (specifically Christianity). The conversation centers on how these two spiritual and cultural systems have interacted, often resulting in the denigration or marginalization of African traditional beliefs and practices.',
      image: './images/hero/lifestyle-thumb.png',
      youtubeId: '-iySEJPQLrs',
      youtubeUrl: 'https://www.youtube.com/watch?v=-iySEJPQLrs',
      airDate: 'Sep 9, 2026',
    },
    {
      id: 'lc-ep-4',
      episodeNumber: 4,
      title: 'gods and AFrica (Western religion vs Africanism)',
      duration: '47m',
      description: 'Touring stunning coastal villas in Cape Town, Accra, and Lagos designed with sustainable rammed earth, local timber, and indigenous artwork.',
      image: './images/hero/lifestyle-thumb.png',
      youtubeId: 'mgNFaFFos74',
      youtubeUrl: 'https://www.youtube.com/watch?v=mgNFaFFos74',
      airDate: 'Sep 7, 2026',
    },
    {
      id: 'lc-ep-3',
      episodeNumber: 3,
      title: 'Breakups in marriage (Divorce)',
      duration: '1hr 15m',
      description: 'Coco is joined by guests Amaku and Vicki to create a safe space for unpacking the challenges that often lead to marriage breakdowns. This episode features a candid discussion about the complexities of marriage, divorce, and personal well-being, particularly within an African cultural context.',
      image: './images/hero/lifestyle-thumb.png',
      youtubeId: 'c96NW5eknQ8',
      youtubeUrl: 'https://www.youtube.com/watch?v=c96NW5eknQ8',
      airDate: 'Aug 19, 2026',
    },
    {
      id: 'lc-ep-2',
      episodeNumber: 2,
      title: 'Addiction',
      duration: '1hr 15m',
      description: 'A culinary exploration of five-star diaspora dining, reimagined Jollof interpretations, artisanal African coffees, and organic West African botanicals.',
      image: './images/hero/lifestyle-thumb.png',
      youtubeId: 'Ksdc_Tdb6D4',
      youtubeUrl: 'https://www.youtube.com/watch?v=Ksdc_Tdb6D4',
      airDate: 'Aug 05, 2026',
    },
    {
      id: 'lc-ep-1',
      episodeNumber: 1,
      title: 'Soft life and Hustle Culture',
      duration: '48m',
      description: 'Getting to go deep into the mentality of soft life and hustle culture.',
      image: './images/hero/lifestyle-thumb.png',
      youtubeId: 'gtszckSKnys',
      youtubeUrl: 'https://www.youtube.com/watch?v=gtszckSKnys',
      airDate: 'Jul 29, 2026',
    },
  ],

  // 3. The Government and You (Latest first: Ep 3 to Ep 1)
  'government-and-you': [
    {
      id: 'gy-ep-3',
      episodeNumber: 3,
      title: 'Agricultural reforms and strategic policies aimed at transforming the sector from basic interventions to sustainable, system-driven productivity.',
      duration: '60m',
      description: `This video features an interview with the Commissioner for Agriculture and Irrigation Development in Cross River State on the state government's ongoing agricultural reforms and strategic policies aimed at transforming the sector from basic interventions to sustainable, system-driven productivity.`,
      image: 'https://img.youtube.com/vi/5EQSyTn7c54/hqdefault.jpg',
      youtubeId: '5EQSyTn7c54',
      youtubeUrl: 'https://www.youtube.com/watch?v=5EQSyTn7c54',
      airDate: 'Aug 12, 2026',
    },
    {
      id: 'gy-ep-2',
      episodeNumber: 2,
      title: 'THE MORNING BREW WITH COCO AND MIMI 10-10-26',
      duration: '48m',
      description: 'This episode features a discussion with Dr. Mrs. Edu, the Director General of the Cross River State Council on Climate Change. The discussion focuses on the impacts of climate change in Cross River State and government efforts to address these challenges.',
      image: '',
      youtubeId: 'zEZTtXStbac',
      youtubeUrl: 'https://www.youtube.com/watch?v=zEZTtXStbac',
      airDate: 'Aug 12, 2026',
    },
    {
      id: 'gy-ep-1',
      episodeNumber: 1,
      title: 'Infrastructure, flooding, landslide challenges, and rural water supply in Cross River State.',
      duration: '52m',
      description: 'The episode focuses on addressing growing public concerns regarding infrastructure, flooding, landslide issues, and rural water supply.',
      image: '',
      youtubeId: 'EFeBwhD_byA',
      youtubeUrl: 'https://www.youtube.com/watch?v=EFeBwhD_byA',
      airDate: 'Aug 5, 2026',
    },
  ],

  // 4. Make We Yan — The Diaspora Townhall (Latest first)
  'make-we-yan': [
    {
      id: 'mwy-ep-2',
      episodeNumber: 2,
      title: 'Premiere Episode',
      duration: '1h 08m',
      description: 'An open debate between professionals who emigrated abroad and those who stayed behind to invest, contrasting realities, opportunities, and emotional ties.',
      image: 'https://img.youtube.com/vi/23rXdwP02xc/hqdefault.jpg',
      youtubeId: '23rXdwP02xc',
      youtubeUrl: 'https://www.youtube.com/watch?v=23rXdwP02xc',
      airDate: 'Sep 21, 2026',
    },
    {
      id: 'mwy-ep-1',
      episodeNumber: 1,
      title: 'Diaspora Townhall: Grassroots Voices & The Real State of Affairs',
      duration: '1h 12m',
      description: 'Host Fidelis Ubana welcomes everyday citizens, trade unionists, and diaspora delegates to talk freely on social cohesion, inflation, and youth employment.',
      image: 'https://img.youtube.com/vi/zLrMQyxUO4U/hqdefault.jpg',
      youtubeId: 'zLrMQyxUO4U',
      youtubeUrl: 'https://www.youtube.com/watch?v=zLrMQyxUO4U',
      airDate: 'Sep 14, 2026',
    },
  ],

  // 5. The Real
  'the-real': [
    {
      id: 'tr-ep-2',
      episodeNumber: 2,
      title: 'The role of tourism in driving investment and economic growth in Cross River State, Nigeria',
      duration: '51m',
      description: 'Faith, and her co-hosts discuss the challenges and untapped potential of the tourism sector.',
      image: '/images/hero/the-real-hero.png',
      youtubeId: 'cAl4OqTAa8k',
      youtubeUrl: 'https://www.youtube.com/watch?v=cAl4OqTAa8k',
      airDate: ' Aug 18, 2026',
    },
    {
      id: 'tr-ep-1',
      episodeNumber: 1,
      title: 'The Real Premiere Episode',
      duration: '40m',
      description: 'Join the Ladies as they X-ray the real destination Cross River',
      image: '/images/hero/the-real-hero.png',
      youtubeId: 'xsRWnPQViH8',
      youtubeUrl: 'https://www.youtube.com/watch?v=xsRWnPQViH8',
      airDate: 'Aug 17, 2026',
    },
  ],

  // 6. Destination Cross River: Policy and Investment Opportunities (Latest first: Ep 5 to Ep 1)
  'destination-cross-river': [
    {
      id: 'dcr-ep-5',
      episodeNumber: 5,
      title: 'Destination Cross River: Diaspora Perspective',
      duration: '48m',
      description: 'Diaspora delegates, policy analysts, and international investors discuss cross-border capital flow, remittances, infrastructure development, and returning diaspora talent to Cross River State.',
      image: 'https://img.youtube.com/vi/zrXWcfgq4t4/hqdefault.jpg',
      youtubeId: 'zrXWcfgq4t4',
      youtubeUrl: 'https://www.youtube.com/watch?v=zrXWcfgq4t4',
      airDate: 'Sep 25, 2026',
    },
    {
      id: 'dcr-ep-4',
      episodeNumber: 4,
      title: 'Destination Cross River: Business models & Associated Outcomes',
      duration: '1h 04m',
      description: 'Podcast interview with Akabom Enebong, Chairman of One Gas Ltd, exploring strategic business models, industrialization, private capital investment, and emerging opportunities in Cross River State.',
      image: 'https://img.youtube.com/vi/y8YctJ4-YKU/hqdefault.jpg',
      youtubeId: 'y8YctJ4-YKU',
      youtubeUrl: 'https://www.youtube.com/watch?v=y8YctJ4-YKU',
      airDate: 'Mar 20, 2026',
    },
    {
      id: 'dcr-ep-3',
      episodeNumber: 3,
      title: 'Destination Cross River: Investment Opportunities in the Cocoa Sector',
      duration: '45m',
      description: 'In-depth exploration of high-yield investment avenues across the Cross River cocoa value chain, agro-processing facilities, farming cooperatives, and international export opportunities.',
      image: 'https://img.youtube.com/vi/OvDH4y8aR7Y/hqdefault.jpg',
      youtubeId: 'OvDH4y8aR7Y',
      youtubeUrl: 'https://www.youtube.com/watch?v=OvDH4y8aR7Y',
      airDate: 'Feb 12, 2026',
    },
    {
      id: 'dcr-ep-2',
      episodeNumber: 2,
      title: 'Cross River Agricultural Value Chain Stakeholders’ Engagement 2026',
      duration: '55m',
      description: 'High-level stakeholder engagement highlighting Cross River State’s agro-industrial policies, public-private partnerships, food security, and sustainable agricultural productivity.',
      image: 'https://img.youtube.com/vi/Qyfj4QERCtw/hqdefault.jpg',
      youtubeId: 'Qyfj4QERCtw',
      youtubeUrl: 'https://www.youtube.com/watch?v=Qyfj4QERCtw',
      airDate: 'Jan 28, 2026',
    },
    {
      id: 'dcr-ep-1',
      episodeNumber: 1,
      title: 'Cross River Music Industry: Promoting Talent Development',
      duration: '38m',
      description: 'Empowering the creative economy: discussions on music production infrastructure, entertainment tourism, creative industries, and nurturing grassroots artistic talent in Calabar.',
      image: 'https://img.youtube.com/vi/vMHXYO6uNLM/hqdefault.jpg',
      youtubeId: 'vMHXYO6uNLM',
      youtubeUrl: 'https://www.youtube.com/watch?v=vMHXYO6uNLM',
      airDate: 'Jan 14, 2026',
    },
  ],

  // 7. Crack Up Comedy (Latest first)
  'crack-up-comedy': [
    {
      id: 'cuc-ep-4',
      episodeNumber: 4,
      title: 'Crack Up Comedy: Toronto Diaspora All-Stars',
      duration: '1h 50m',
      description: 'African and Caribbean comedy clash in a packed Toronto theater with nonstop audience banter, viral impressions, and comedic storytelling.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop',
      youtubeId: 'Q1KFsR5r3Ac',
      youtubeUrl: 'https://www.youtube.com/watch?v=Q1KFsR5r3Ac',
      airDate: 'Sep 20, 2026',
    },
    {
      id: 'cuc-ep-3',
      episodeNumber: 3,
      title: 'Diaspora Laughs: Atlanta Comedy Extravaganza',
      duration: '1h 35m',
      description: 'Relatable jokes about visiting African relatives, sending remittances via mobile apps, and surviving cross-cultural family gatherings in America.',
      image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1000&auto=format&fit=crop',
      youtubeId: '5EQSyTn7c54',
      youtubeUrl: 'https://www.youtube.com/watch?v=5EQSyTn7c54',
      airDate: 'Sep 13, 2026',
    },
    {
      id: 'cuc-ep-2',
      episodeNumber: 2,
      title: 'Crack Up Comedy Lagos: Mega Arena Stand-Up Jam',
      duration: '2h 10m',
      description: 'Unfiltered laughter live from Lagos with Nigeria’s most celebrated humorists delivering raw crowd work, hilarious parodies, and musical comedy cameos.',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop',
      youtubeId: 'zLrMQyxUO4U',
      youtubeUrl: 'https://www.youtube.com/watch?v=zLrMQyxUO4U',
      airDate: 'Sep 06, 2026',
    },
    {
      id: 'cuc-ep-1',
      episodeNumber: 1,
      title: 'Crack Up Comedy London: Opening Night Stand-Up Showcase',
      duration: '1h 45m',
      description: 'Basketmouth, Bovi, and Eddie Kadi headline the opening night of the London arena tour with fresh sets on diaspora visas, airport customs, and British weather.',
      image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=1000&auto=format&fit=crop',
      youtubeId: 'BAhn-P035_M',
      youtubeUrl: 'https://www.youtube.com/watch?v=BAhn-P035_M',
      airDate: 'Aug 30, 2026',
    },
  ],
};

// Helper: Retrieves episodes for any show, sorted strictly in DESCENDING order (latest episode first)
export function getShowEpisodes(movie) {
  if (!movie) return [];

  const titleLower = (movie.title || '').toLowerCase();
  const categoryLower = (movie.category || '').toLowerCase();
  const idLower = (movie.id || '').toLowerCase();

  let list = [];

  if (titleLower.includes('morning brew') || categoryLower.includes('morning brew') || idLower.includes('morning-brew')) {
    list = CURATED_SHOW_EPISODES['morning-brew'];
  } else if (titleLower.includes('lifestyle') || categoryLower.includes('lifestyle') || idLower.includes('lifestyle')) {
    list = CURATED_SHOW_EPISODES['lifestyle-coco'];
  } else if (titleLower.includes('government and you') || categoryLower.includes('government and you') || idLower.includes('gov-and-you') || idLower.includes('podcast-1')) {
    list = CURATED_SHOW_EPISODES['government-and-you'];
  } else if (titleLower.includes('make we yan') || categoryLower.includes('make we yan') || titleLower.includes('townhall')) {
    list = CURATED_SHOW_EPISODES['make-we-yan'];
  } else if (titleLower.includes('the real') || idLower.includes('the-real') || idLower.includes('podcast-2')) {
    list = CURATED_SHOW_EPISODES['the-real'];
  } else if (titleLower.includes('destination cross river') || idLower.includes('podcast-3')) {
    list = CURATED_SHOW_EPISODES['destination-cross-river'];
  } else if (titleLower.includes('crack up') || categoryLower.includes('comedy') || titleLower.includes('comedy')) {
    list = CURATED_SHOW_EPISODES['crack-up-comedy'];
  } else {
    // Dynamic fallback episodes for other items
    const baseImg = movie.backdrop || movie.image || (movie.youtubeId ? `https://img.youtube.com/vi/${movie.youtubeId}/hqdefault.jpg` : '/images/hero/morning-brew-thumb.png');
    const baseYoutubeId = movie.youtubeId || 'BAhn-P035_M';
    const baseYoutubeUrl = movie.youtubeUrl || `https://www.youtube.com/watch?v=${baseYoutubeId}`;

    list = [
      {
        id: `${movie.id}-ep3`,
        episodeNumber: 3,
        title: `${movie.title} — Part 3: Community Spotlight`,
        duration: '45m',
        description: `Community stories, viewer questions, and special interviews from African Diaspora Channels.`,
        image: baseImg,
        youtubeId: baseYoutubeId,
        youtubeUrl: baseYoutubeUrl,
        airDate: 'Sep 22, 2026',
      },
      {
        id: `${movie.id}-ep2`,
        episodeNumber: 2,
        title: `${movie.title} — Part 2: Continuing The Dialogue`,
        duration: '52m',
        description: `In-depth continuation exploring key highlights and community conversations on ${movie.title}.`,
        image: baseImg,
        youtubeId: baseYoutubeId,
        youtubeUrl: baseYoutubeUrl,
        airDate: 'Sep 15, 2026',
      },
      {
        id: `${movie.id}-ep1`,
        episodeNumber: 1,
        title: `${movie.title} — Premiere Broadcast`,
        duration: movie.duration || '48m',
        description: movie.description || `Episode 1 of ${movie.title} on African Diaspora Channels.`,
        image: baseImg,
        youtubeId: baseYoutubeId,
        youtubeUrl: baseYoutubeUrl,
        airDate: 'Sep 08, 2026',
      },
    ];
  }

  // Ensure episodes are ALWAYS sorted descending (latest episode first)
  return [...list].sort((a, b) => (b.episodeNumber || 0) - (a.episodeNumber || 0));
}

// Helper: Retrieves other recommended episodes from across the platform
export function getOtherEpisodes(currentMovie) {
  const currentTitle = (currentMovie?.title || '').toLowerCase();
  const otherPool = [];

  // Morning Brew
  if (!currentTitle.includes('morning brew')) {
    (CURATED_SHOW_EPISODES['morning-brew'] || []).slice(0, 2).forEach((ep) => {
      otherPool.push({
        ...ep,
        showTitle: 'The Morning Brew with Coco and Mimi',
        movieData: heroShows.find((s) => s.id === 'adc-hero-morning-brew') || tvShows[0],
      });
    });
  }

  // Lifestyle with Coco
  if (!currentTitle.includes('lifestyle')) {
    (CURATED_SHOW_EPISODES['lifestyle-coco'] || []).slice(0, 2).forEach((ep) => {
      otherPool.push({
        ...ep,
        showTitle: 'Lifestyle with Coco',
        movieData: heroShows.find((s) => s.id === 'adc-hero-lifestyle-coco') || tvShows[1],
      });
    });
  }

  // The Government and You
  if (!currentTitle.includes('government and you')) {
    (CURATED_SHOW_EPISODES['government-and-you'] || []).slice(0, 2).forEach((ep) => {
      otherPool.push({
        ...ep,
        showTitle: 'The Government and You',
        movieData: heroShows.find((s) => s.id === 'adc-hero-gov-and-you') || podcasts[0],
      });
    });
  }

  // Make We Yan
  if (!currentTitle.includes('make we yan')) {
    (CURATED_SHOW_EPISODES['make-we-yan'] || []).slice(0, 2).forEach((ep) => {
      otherPool.push({
        ...ep,
        showTitle: 'Make We Yan — The Diaspora Townhall',
        movieData: {
          id: 'adc-hero-make-we-yan',
          title: 'Make We Yan — The Diaspora Townhall',
          category: 'The Diaspora Townhall',
          image: 'https://img.youtube.com/vi/zLrMQyxUO4U/hqdefault.jpg',
          backdrop: 'https://img.youtube.com/vi/zLrMQyxUO4U/hqdefault.jpg',
          youtubeId: ep.youtubeId,
          youtubeUrl: ep.youtubeUrl,
          description: ep.description,
          rating: '13+',
          duration: ep.duration,
          year: 2026,
        },
      });
    });
  }

  return otherPool;
}

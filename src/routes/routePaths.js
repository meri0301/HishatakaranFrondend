export const ROUTE_PATHS = {
  home: '/',
  culturalHeritages: '/cultural-heritages',
  locations: '/locations',
  programs: '/programs',
  library: '/library',
  gallery: '/gallery',
  contact: '/contact',
  donate: '/donate',
  monumentDetail: '/monuments/:slug',
};

export const buildMonumentDetailPath = (slug) => `/monuments/${slug}`;



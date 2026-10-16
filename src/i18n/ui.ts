export const languages = {
  en: 'English',
  fr: 'Français',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.products': 'Tools & Products',
    'nav.zipcaptions': 'Zip Captions',
    'nav.zipcaptions.desc': 'Universal, real-time live captioning for classrooms and events',
    'nav.zipmath': 'Zip Math Remediator',
    'nav.zipmath.desc': 'Targeted math interventions and automated mastery pathways',
    'nav.easyspeak': 'EasySpeak AAC',
    'nav.easyspeak.desc': 'Dignified, customizable augmentative communication',
    'nav.equibrowse': 'EquiBrowse',
    'nav.equibrowse.desc': 'Cognitive-accessible web browser with readability modes',
    'nav.allProducts': 'Explore All Tools',
    'nav.testimonials': 'Testimonials',
    'nav.press': 'Press & Awards',
    'nav.events': 'Events',
    'nav.pricing': 'Pricing',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.cta': 'Try Zip Captions',
    'nav.switchLang': 'Français',
    'nav.switchLangShort': 'FR',

    'footer.mission': 'The Home of Accessibility. Creating private, intuitive, and dignified tools that empower individuals and organizations to communicate and learn freely.',
    'footer.madeIn': 'Built with',
    'footer.nearMontreal': 'near Montreal, Canada',
    'footer.productsHeading': 'Tools & Software',
    'footer.companyHeading': 'Organization',
    'footer.servicesHeading': 'Events & Services',
    'footer.legalHeading': 'Governance & Privacy',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Notice',
    'footer.advisory': 'Advisory Board',
    'footer.story': 'Our Story',
    'footer.quote': 'Live Event Quotes',

    'skipToContent': 'Skip to main content',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.products': 'Outils et produits',
    'nav.zipcaptions': 'Zip Captions',
    'nav.zipcaptions.desc': 'Sous-titrage universel en temps réel pour classes et événements',
    'nav.zipmath': 'Zip Math Remediator',
    'nav.zipmath.desc': 'Interventions ciblées en mathématiques et parcours de maîtrise',
    'nav.easyspeak': 'EasySpeak CAA',
    'nav.easyspeak.desc': 'Communication améliorée et alternative digne et personnalisable',
    'nav.equibrowse': 'EquiBrowse',
    'nav.equibrowse.desc': 'Navigateur web accessible avec modes de lisibilité cognitive',
    'nav.allProducts': 'Découvrir tous les outils',
    'nav.testimonials': 'Témoignages',
    'nav.press': 'Presse et prix',
    'nav.events': 'Événements',
    'nav.pricing': 'Tarifs',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.cta': 'Essayer Zip Captions',
    'nav.switchLang': 'English',
    'nav.switchLangShort': 'EN',

    'footer.mission': "La maison de l'accessibilité. Développer des outils privés, intuitifs et dignes qui permettent à chacun de communiquer et d'apprendre en toute liberté.",
    'footer.madeIn': 'Conçu avec',
    'footer.nearMontreal': 'près de Montréal, Canada',
    'footer.productsHeading': 'Outils et logiciels',
    'footer.companyHeading': 'Organisation',
    'footer.servicesHeading': 'Événements et services',
    'footer.legalHeading': 'Gouvernance et confidentialité',
    'footer.rights': 'Tous droits réservés.',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': "Conditions d'utilisation",
    'footer.cookies': 'Gestion des témoins (cookies)',
    'footer.advisory': 'Comité consultatif',
    'footer.story': 'Notre histoire',
    'footer.quote': "Devis pour événements en direct",

    'skipToContent': 'Passer au contenu principal',
  },
} as const;

export function useTranslations(lang: 'en' | 'fr') {
  return function t(key: keyof typeof ui['en']): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getEquivalentUrl(currentPath: string, targetLang: 'en' | 'fr'): string {
  const cleanPath = currentPath.replace(/\/$/, '') || '/';
  
  if (targetLang === 'fr') {
    if (cleanPath === '/' || cleanPath === '') return '/fr';
    if (cleanPath.startsWith('/fr')) return cleanPath;
    return `/fr${cleanPath}`;
  } else {
    // targetLang === 'en'
    if (cleanPath === '/fr') return '/';
    if (cleanPath.startsWith('/fr/')) {
      const stripped = cleanPath.slice(3);
      return stripped || '/';
    }
    return cleanPath;
  }
}

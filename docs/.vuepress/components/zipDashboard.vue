<template>
 <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        
        <div 
          v-for="product in filteredProducts"
          :key="product.id"
          class="group flex flex-col bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
        >
          <div :class="`absolute -right-8 -top-8 sm:-right-12 sm:-top-12 w-24 h-24 sm:w-32 sm:h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 ${product.color}`"></div>
          
          <div class="flex items-start justify-between mb-5 sm:mb-6 relative z-10">
            <div :class="`p-3 sm:p-4 rounded-2xl text-white shadow-lg ${product.color} ${product.shadow}`">
              <component :is="product.icon" class="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            
            <div class="flex flex-wrap gap-2 mt-1 sm:mt-0 justify-end max-w-[60%]">
              <span 
                v-for="cat in getCategories(product)" 
                :key="cat"
                class="inline-flex items-center px-3 py-1.5 sm:py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200"
              >
                {{ cat }}
              </span>
            </div>
          </div> 
          <h3 class="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
            {{ product.name }}
          </h3>
          
          <p class="text-slate-600 text-sm leading-relaxed mb-6 sm:mb-8 flex-grow">
            {{ product.description }}
          </p>
          
          <div class="mt-auto flex flex-col sm:flex-row items-center gap-3 pt-2">
            
            <a 
              v-if="product.learnUrl"
              :href="product.learnUrl"
              class="w-full sm:w-auto flex-1 flex justify-center items-center px-4 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 text-sm font-bold rounded-xl border border-slate-200 transition-colors"
            >
              Learn More
            </a>

            <a 
              v-if="product.appUrl"
              :href="product.appUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full sm:w-auto flex-1 flex justify-center items-center px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-sm shadow-blue-500/20 transition-colors"
            >
              Try Now
              <ExternalLink class="ml-2 h-4 w-4" />
            </a>

          </div>
        </div>
      </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { 
  MessageSquare, Mic, Brain, GraduationCap, Link2, 
  LayoutDashboard, Video, Chrome, ExternalLink, Search, Filter, ShieldCheck, Speech, LayoutGrid, Info 
} from 'lucide-vue-next';

const products = [
  {
    id: 1,
    name: "Zip Captions",
    appUrl: "https://zipcaptions.app",
    learnUrl: "/zipcaptions.html",
    description: "Zip Captions is a free, easy-to-use live captioning tool that works directly in your web browser. It provides real-time text transcription of audio content, making it accessible to people who are deaf or hard of hearing.",
    icon: MessageSquare,
    category: "Web App",
    color: "bg-blue-500",
    shadow: "shadow-blue-500/20"
  },
  {
    id: 2,
    name: "Zip EasySpeak",
    appUrl: "https://easyspeak.zipsolutions.org",
    learnUrl: "/easyspeak.html",
    description: "Intuitive AAC (Augmentative and Alternative Communication) web application. Runs right in the browser, available for iOS, Android and more!",
    icon: LayoutDashboard,
    category: "Web App",
    color: "bg-blue-500",
    shadow: "shadow-blue-500/20"
  },
  {
    id: 3,
    name: "Zip EasySpeak AI",
    appUrl: "https://easyspeakai.zipsolutions.org",
    learnUrl: "/easyspeak.html",
    description: "Next-generation AI Powered AAC communication powered by advanced Artificial Intelligence. Runs right from your browser, available for iOS, Android and more!",
    icon: Brain,
    categories: ["AI Tool", "WebApp"],
    color: "bg-blue-500",
    shadow: "shadow-blue-500/20"
  },
  {
    id: 4,
    name: "Zip EasySpeak for Education",
    appUrl: "https://easyspeakforedu.zipsolutions.org/",
    learnUrl: "/easyspeak.html",
    description: "Manage EasySpeak AI from a centralized dashboard designed for educational settings, allowing educators to easily oversee and support their students' communication needs.",
    icon: GraduationCap,
    categories: ["Education", "Admin Dashboard"],
    color: "bg-emerald-500",
    shadow: "shadow-emerald-500/20"
  },
  {
    id: 5,
    name: "Zip Connect",
    appUrl: "https://www.zipsolutions.org/zipconnect.html",
    learnUrl: "/zipconnect.html",
    description: "Seamlessly connect and integrate your communication tools into one unified space.",
    icon: Link2,
    category: "Integration",
    color: "bg-purple-500",
    shadow: "shadow-purple-500/20"
  },
  {
    id: 6,
    name: "ZipPanel",
    appUrl: "https://www.zipsolutions.org/zippanel.html",
    learnUrl: "/zippanel.html",
    description: "Show your Zip Captions in a persistent overlay in Google Chrome",
    icon: LayoutDashboard,
    categories: ["Extension", "Integration"],
    color: "bg-amber-500",
    shadow: "shadow-amber-500/20"
  },
  {
    id: 7,
    name: "Zip Captions for VMix",
    appUrl: "https://www.zipsolutions.org/zipvmix.html",
    learnUrl: "/zipvmix.html",
    description: "Professional Zip Captions live captioning integration directly into your VMix broadcasting workflow.",
    icon: Video,
    category: "Integration",
    color: "bg-purple-500",
    shadow: "shadow-purple-500/20"
  },
  {
    id: 8,
    name: "Zip Speech",
    appUrl: "https://chromewebstore.google.com/detail/zip-speech/abmneamgapjekkemjihkhokdgpdeejff",
    learnUrl: "/zipspeech.html",
    description: "A browser extension which brings AAC accessibility to Google Meet.",
    icon: Speech,
    category: "Extension",
    color: "bg-amber-500",
    shadow: "shadow-amber-500/20"
  },
  {
    id: 9,
    name: "Zip Captions Companion",
    appUrl: "https://chromewebstore.google.com/detail/zip-captions-companion-ad/chcflkiceakimokommplmfpcpodabdcg",
    learnUrl: "/zipcaptionscompanion.html",
    description: "Companion Chrome extension designed to enhance and expand your Zip Captions experience.",
    icon: LayoutGrid,
    category: "Extension",
    color: "bg-amber-500",
    shadow: "shadow-amber-500/20"
  },
  {
    id: 10,
    name: "EquiAssess",
    appUrl: "https://equiassess.zipsolutions.org",
    description: "A secure platform for educational establishments to administer accessible summative assessments. Designed to be easy to set up and use, EquiAssess provides a range of accessibility features to ensure that all students can demonstrate their knowledge and skills on an equal footing.",
    icon: ShieldCheck,
    category: "Education",
    color: "bg-emerald-500",
    shadow: "shadow-emerald-500/20"
  },
  {
    id: 11,
    name: "EquiBrowse",
    appUrl: "https://chromewebstore.google.com/detail/equibrowse-by-zip-solutio/alahhcjbblegneebpjehobaiemckblhl?authuser=0&hl=en-GB",
    learnUrl: "/equibrowse.html",
    description: "Accessibility built right into your browser. Read text aloud, highlight as you read, get definitions and access the picture dictionary!",
    icon: ShieldCheck,
    category: "Education",
    color: "bg-emerald-500",
    shadow: "shadow-emerald-500/20"
  },
  {
    id: 12,
    name: "Assistive Listening System Consultancy",
    learnUrl: "/contact-us.html",
    description: "Assistive Listening provides those with hearing loss the ability to have better access to sound. Get in touch to learn about our innovative install your own system model, where we send you detailed instructions and a shopping list",
    icon: Info,
    category: "Consulting",
    color: "bg-teal-500",
    shadow: "shadow-teal-500/20"
  },
  {
    id: 13,
    name: "Digital Sound & Lighting Systems",
    learnUrl: "/contact-us.html",
    description: "Get in touch to learn about how we can help to integrate systems in professional theatre spaces, as well as AV systems in conference and educational settings. We also have experience with architectural lighting systems such as ETC Mosaic as well as the integration and automation of these systems with others.",
    icon: Info,
    category: "Consulting",
    color: "bg-teal-500",
    shadow: "shadow-teal-500/20"
  },
  {
    id: 14,
    name: "Free Resources for Listening Accessibility",
    learnUrl: "https://resources.zipsolutions.org",
    description: "We have a whole set of resources dedicated to getting started with listening accessibility, including: Setting up SMART Technologies products with Assistive Listening products such as Phonak Roger, Setting up Interactive Flat Panel & TVs with Assistive Listening products, Understanding the Roger Inspiro, Using the Roger Touchscreen & Roger Media Hub in the classroom, WiFi based assistive listening systems, Getting started with Surtitles for Theatre captioning, and many more",
    icon: Info,
    category: "Consulting",
    color: "bg-teal-500",
    shadow: "shadow-teal-500/20"
  },
  {
    id: 15,
    name: "Captioning Consultancy",
    learnUrl: "/contact-us.html",
    description: "As the creators of ZipCaptions we have considerable experience with Live Captions. We can help you to integrate live captions at your next event. We also have experience with the implementation of Surtitles, the captioning used in live theatre based on a script. We can help you to set up surtitles for your event, as well as with how to best display the surtitles on your stage.",
    icon: Info,
    category: "Consulting",
    color: "bg-teal-500",
    shadow: "shadow-teal-500/20"
  }
];

const getCategories = (product) => {
  if (product.categories && Array.isArray(product.categories)) {
    return product.categories; // Return the new array if it exists
  }
  if (product.category) {
    return [product.category]; // Wrap the old string in an array
  }
  return []; // Fallback just in case!
};

const searchTerm = ref('');
const selectedCategory = ref('All');

const categories = computed(() => {
  // Uses the helper to safely grab all tags
  const allCategories = products.flatMap(p => getCategories(p));
  return ['All', ...new Set(allCategories.filter(Boolean))];
});

const filteredProducts = computed(() => {
  return products.filter(product => {
    const nameMatch = product.name?.toLowerCase().includes(searchTerm.value.toLowerCase());
    const descMatch = product.description?.toLowerCase().includes(searchTerm.value.toLowerCase());
    const matchesSearch = nameMatch || descMatch;
    
    // Uses the helper to safely check the tags
    const productCats = getCategories(product);
    const matchesCategory = selectedCategory.value === 'All' || productCats.includes(selectedCategory.value);
    
    return matchesSearch && matchesCategory;
  });
});

const resetFilters = () => {
  searchTerm.value = '';
  selectedCategory.value = 'All';
};
</script>
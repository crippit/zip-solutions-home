export interface PrintableItem {
  id: string;
  title: string;
  typeLabel: string;
  description: string;
  fileUrl: string;
  hasQrAndRoomBox?: boolean;
  defaultPosterHeadline?: string;
  defaultPosterSubtitle?: string;
  defaultSteps?: string[];
}

export interface VideoEmbed {
  youtubeId: string;
  title: string;
  description: string;
  uploadDate: string;
}

export interface SectorReason {
  title: string;
  description: string;
}

export interface SetupStep {
  step: string;
  title: string;
  description: string;
}

export interface CommunityStory {
  quote: string;
  author: string;
  role: string;
  linkUrl?: string;
  linkText?: string;
}

export interface SectorFaq {
  question: string;
  answer: string;
}

export interface RelatedLink {
  title: string;
  description: string;
  url: string;
  external?: boolean;
}

export interface SectorData {
  slug: string;
  navLabel: string;
  categoryLabel: string;
  title: string;
  seoTitle: string;
  description: string;
  keywords: string;
  summaryCardDescription: string;
  reasonsTitle: string;
  reasonsSubtitle: string;
  reasons: SectorReason[];
  setupTitle: string;
  setupSubtitle: string;
  setupSteps: SetupStep[];
  disclaimerNote?: string;
  printables: PrintableItem[];
  defaultOrgPlaceholder: string;
  defaultRoomCodePlaceholder: string;
  videos: VideoEmbed[];
  storiesTitle: string;
  stories: CommunityStory[];
  relatedLinks: RelatedLink[];
  faqs: SectorFaq[];
}

export const generalPrintable: Record<'en' | 'fr', PrintableItem> = {
  en: {
    id: 'general-available-sign',
    title: 'Zip Captions Available Here Sign',
    typeLabel: 'Universal Door & Wall Sign (PDF)',
    description: 'A clean 1-page sign for any door, reception counter, or bulletin board showing that live captions are available on screen and on personal mobile devices.',
    fileUrl: '/files/printables/zipcaptions-available-here-sign.pdf',
    hasQrAndRoomBox: true,
    defaultPosterHeadline: 'Live Captions Are Available Here',
    defaultPosterSubtitle: 'Follow spoken words in real time on our display screen or on your own phone, tablet, or laptop.',
    defaultSteps: [
      'Scan the QR code or open https://zipcaptions.app in your web browser.',
      'Enter the Broadcast Room Code shown on this sign.',
      'Adjust your text size, font, and screen contrast to suit your eyes.'
    ]
  },
  fr: {
    id: 'general-available-sign',
    title: 'Affiche : Zip Captions est disponible ici',
    typeLabel: 'Affiche universelle pour porte et mur (PDF)',
    description: "Une affiche claire d'une page pour toute porte, comptoir d'accueil ou babillard indiquant que le sous-titrage en direct est disponible sur écran et sur appareil mobile.",
    fileUrl: '/files/printables/fr/zipcaptions-affiche-disponible-ici.pdf',
    hasQrAndRoomBox: true,
    defaultPosterHeadline: 'Le sous-titrage en direct est disponible ici',
    defaultPosterSubtitle: 'Suivez les paroles en temps réel sur notre écran ou sur votre propre téléphone, tablette ou ordinateur.',
    defaultSteps: [
      'Balayez le code QR ou ouvrez https://zipcaptions.app dans votre navigateur web.',
      'Entrez le code de diffusion indiqué sur cette affiche.',
      'Ajustez la taille du texte, la police et le contraste selon vos besoins.'
    ]
  }
};

export const sectorsData: Record<'en' | 'fr', SectorData[]> = {
  en: [
    // 1. EDUCATION
    {
      slug: 'education',
      navLabel: 'Education & Schools',
      categoryLabel: 'K-12 Schools, Colleges & Universities',
      title: 'Zip Captions for Education and Classrooms',
      seoTitle: 'Free Classroom Live Captioning & Translation for Schools | Zip Solutions',
      description: 'Free browser-based live captioning and on-device translation for K-12 classrooms, universities, Chromebooks, emerging readers, and deaf or hard-of-hearing students.',
      keywords: 'free live captioning for classrooms, speech to text for students on chromebook, live captions for deaf and hard of hearing students, real time translation for multilingual classrooms, classroom live captions lexend font',
      summaryCardDescription: 'Support deaf and hard-of-hearing students, emerging readers, and multilingual learners on school Chromebooks, tablets, and smartboards with zero software to install.',
      reasonsTitle: 'Why Schools and Universities Use Zip Captions',
      reasonsSubtitle: 'Practical classroom tools built by working educators to support Universal Design for Learning (UDL).',
      reasons: [
        {
          title: 'Works on Chromebooks with Zero IT Install',
          description: 'Free captioning runs inside Chrome, Safari, and Edge, while paid AI captioning and Broadcast viewing work in any browser—with no software installers, admin permissions, or student email accounts.'
        },
        {
          title: 'Supports Diverse Learners in One Room',
          description: 'Helps students who are deaf or hard of hearing, students with auditory processing challenges or ADHD, emerging readers, and newcomers learning a second language.'
        },
        {
          title: 'Personal Desk View via Broadcast Mode',
          description: 'Teachers can share a room code so students read captions quietly in any browser on their own Chromebook or tablet at their desk, rather than relying only on a front projector.'
        },
        {
          title: 'Lexend Font and High-Contrast Themes',
          description: 'Each student can switch to the Lexend font to reduce visual crowding, increase text size, or use dark mode to reduce glare from classroom lights.'
        },
        {
          title: 'Floating Captions Over Google Slides and Docs',
          description: 'Using Picture-in-Picture mode or the free Zip Panel extension, teachers can keep a resizable caption bar floating on top of slides, videos, or coding windows.'
        },
        {
          title: 'Free On-Device Translation and Study Notes',
          description: 'Students using Google Chrome can translate live captions locally on their device at zero cost, and save plain text (.txt) transcripts at the end of class for study guides.'
        }
      ],
      setupTitle: 'How Classroom Setup Works',
      setupSubtitle: 'Get running before the bell rings in three simple steps.',
      setupSteps: [
        {
          step: '01',
          title: 'Connect a Teacher Microphone',
          description: 'Use a wireless clip-on lapel mic or USB headset connected to your laptop so your voice stays clear as you move around the classroom.'
        },
        {
          step: '02',
          title: 'Open Zip Captions and Float Over Slides',
          description: 'Go to zipcaptions.app, start captioning, and pop the window into Picture-in-Picture mode over your lesson slides or smartboard.'
        },
        {
          step: '03',
          title: 'Share Your Broadcast Code with Students',
          description: 'Write your room code on our printable classroom poster so students can follow along on their own Chromebooks and save class notes.'
        }
      ],
      printables: [
        {
          id: 'edu-poster',
          title: 'Classroom Broadcast Poster',
          typeLabel: 'Wall & Whiteboard Poster (PDF)',
          description: 'Post near your whiteboard or smartboard with your classroom broadcast room code and QR code so students can connect from their desks.',
          fileUrl: '/files/printables/education-classroom-broadcast-poster.pdf',
          hasQrAndRoomBox: true,
          defaultPosterHeadline: 'Join Our Classroom Live Captions',
          defaultPosterSubtitle: 'Follow today’s lesson in real time right on your Chromebook, laptop, or tablet.',
          defaultSteps: [
            'Open Google Chrome or your browser and go to https://zipcaptions.app.',
            'Enter our Classroom Broadcast Room Code shown above.',
            'Adjust your text size, switch to the Lexend font, or turn on live translation.'
          ]
        },
        {
          id: 'edu-desk-cards',
          title: 'Student Desk Reference Card',
          typeLabel: 'Student Handout & Desk Card (PDF)',
          description: 'A desk reference sheet showing students how to join the caption feed, turn on the Lexend reading font, float captions over Docs, and save study notes.',
          fileUrl: '/files/printables/education-student-desk-cards.pdf',
          hasQrAndRoomBox: true,
          defaultPosterHeadline: 'Student Desk Guide: Live Captions',
          defaultPosterSubtitle: 'Connect to our classroom captions and customize your reading view at your desk.',
          defaultSteps: [
            'Go to https://zipcaptions.app and enter the Classroom Broadcast Code.',
            'Choose the Lexend font and high-contrast colors in Settings.',
            'Use Picture-in-Picture to keep captions visible while taking notes.'
          ]
        },
        {
          id: 'edu-parent-sign',
          title: 'Parent-Teacher Conference Table Sign',
          typeLabel: 'Tabletop Sign for Family Meetings (PDF)',
          description: 'Put on your desk during parent-teacher nights to let families know that live captions and on-device translation in Chrome are ready to use.',
          fileUrl: '/files/printables/education-parent-teacher-sign.pdf',
          hasQrAndRoomBox: true,
          defaultPosterHeadline: 'Parent-Teacher Meetings: Live Captions & Translation',
          defaultPosterSubtitle: 'Let the teacher know if you would like to read live captions or translated captions during our meeting.',
          defaultSteps: [
            'Read live speech-to-text captions directly on our table screen or on your phone.',
            'Use Google Chrome On-Device AI to translate captions into your preferred language.',
            'All text stays in local browser memory and is cleared as soon as our meeting finishes.'
          ]
        },
        {
          id: 'edu-teacher-guide',
          title: '1-Page Teacher Setup Checklist',
          typeLabel: 'Educator Quick-Start Guide (PDF)',
          description: 'A practical 1-page checklist covering microphone tips, floating captions over Google Slides, student broadcast rooms, and exporting lesson transcripts.',
          fileUrl: '/files/printables/education-teacher-setup-guide.pdf',
          hasQrAndRoomBox: false
        }
      ],
      defaultOrgPlaceholder: 'Room 204 Science Class',
      defaultRoomCodePlaceholder: '76-aqz5-pf77',
      videos: [
        {
          youtubeId: 'OXpaiEtECmI',
          title: 'Broadcast Live Captions to Student Devices',
          description: 'See how teachers share a broadcast code so students can read live captions on their own Chromebooks, tablets, or phones.',
          uploadDate: '2024-06-01'
        },
        {
          youtubeId: 'WVt2UjV5LFk',
          title: 'Free Real-Time Translation in Google Chrome',
          description: 'Learn how students and families can translate live captions locally inside Google Chrome using On-Device AI at zero cost.',
          uploadDate: '2026-10-21'
        },
        {
          youtubeId: 'sF7n1X1oIFY',
          title: 'Save Class Transcripts for Study Notes',
          description: 'How to export plain text (.txt), SRT, or VTT transcripts at the end of a lesson for study guides and summaries.',
          uploadDate: '2024-06-01'
        }
      ],
      storiesTitle: 'What Educators and Specialists Say',
      stories: [
        {
          quote: 'For those with hearing loss, it empowers them. This fosters autonomy and independence, so you do not have to ask for help all the time.',
          author: 'Tracey Green',
          role: 'Teacher of the Deaf, Montreal Oral School for the Deaf',
          linkUrl: '/press',
          linkText: 'Read Feature in Inspirations Newspaper'
        },
        {
          quote: 'A really powerful way to live caption your class that supports all learners in your classroom: from ELL students, our emerging readers, and our hearing-impaired students.',
          author: 'Katie Fielding',
          role: 'VSTE Coach of the Year & Accessibility Demo Slam Winner',
          linkUrl: 'https://www.youtube.com/watch?v=u2wNoSQz0Zk',
          linkText: 'Watch VSTE Demo on YouTube'
        },
        {
          quote: 'ZipCaptions is a free captioning tool that could be really helpful for students with language-based learning disabilities, auditory processing disabilities, or students who are hard of hearing.',
          author: 'Dr. Brian Friedlander',
          role: 'Assistive Technology Specialist & Associate Professor of Education',
          linkUrl: '/testimonial',
          linkText: 'Read More Educator Stories'
        }
      ],
      relatedLinks: [
        {
          title: 'Zip Panel Chrome Extension',
          description: 'Keep a persistent caption bar at the bottom of Google Slides and Chrome tabs.',
          url: '/zippanel'
        },
        {
          title: 'EquiBrowse Reading Extension',
          description: 'Adapt web pages with dyslexia-friendly fonts, spacing, and reading tools.',
          url: '/equibrowse'
        },
        {
          title: 'Google for Education Training & School PD',
          description: 'Book practical hands-on workshops for your school or district staff.',
          url: '/events#training'
        }
      ],
      faqs: [
        {
          question: 'Do students need to create accounts or enter email addresses to use Zip Captions?',
          answer: 'No. Standard browser live captioning and Broadcast viewing require zero student accounts, zero passwords, and zero personal data collection.'
        },
        {
          question: 'Are classroom discussions saved on external servers?',
          answer: 'No. Speech is processed transiently and the running transcript is held locally inside the browser memory. Closing or refreshing the browser tab clears the transcript immediately.'
        },
        {
          question: 'Can a teacher show captions over Google Slides or PowerPoint?',
          answer: 'Yes. You can click the Picture-in-Picture button inside Zip Captions to pop out an always-on-top floating caption bar, or use our free Zip Panel Chrome extension.'
        },
        {
          question: 'How does live translation work for multilingual students?',
          answer: 'In Google Chrome on desktop, laptops, or Chromebooks, users can enable free real-time translation powered by Chrome On-Device AI so captions are translated locally on their own screen.'
        }
      ]
    },

    // 2. PLACES OF WORSHIP
    {
      slug: 'places-of-worship',
      navLabel: 'Places of Worship',
      categoryLabel: 'Churches, Synagogues, Mosques & Faith Communities',
      title: 'Zip Captions for Places of Worship',
      seoTitle: 'Free Live Captions for Church Services, Sanctuaries & Livestreams | Zip Solutions',
      description: 'Provide free real-time live captions for sermons and worship services on sanctuary screens, congregation smartphones in the pews, and OBS or vMix livestreams.',
      keywords: 'free live captions for church services, live sermon captioning on phones, church livestream closed captions obs vmix, hearing accessibility for places of worship, webcaptioner alternative for churches',
      summaryCardDescription: 'Help congregation members follow sermons and announcements on sanctuary projection screens, on personal phones in the pews, and on online livestreams.',
      reasonsTitle: 'Why Faith Communities Use Zip Captions',
      reasonsSubtitle: 'Simple, dignified communication access that works with your existing sanctuary soundboard and volunteer team.',
      reasons: [
        {
          title: 'Follow from Any Seat on a Personal Phone',
          description: 'Using Broadcast mode, members can scan a QR code on a pew card or welcome poster to read live captions right on their own phone or tablet without sitting in a special section.'
        },
        {
          title: 'Works with Sanctuary Screens and Projectors',
          description: 'Display high-contrast open captions on side monitors, stage screens, or main sanctuary projectors alongside your service slides.'
        },
        {
          title: 'Connects to Online Livestreams and Cable TV',
          description: 'Send live captions straight into OBS Studio via WebSockets or into vMix title graphics using our free vMix Extension for homebound viewers.'
        },
        {
          title: 'Zero Software Budget Required',
          description: 'Core browser-based live captioning is 100% free with no monthly minute limits, making it practical for congregations of every size.'
        },
        {
          title: 'Simple for Weekly Volunteer AV Teams',
          description: 'Plug an aux send from your soundboard into a laptop (using a standard USB sound card), open zipcaptions.app, and start captioning in seconds.'
        },
        {
          title: 'Multilingual Support for Diverse Congregations',
          description: 'Supports dozens of spoken dialects and free on-device translation in Google Chrome for multilingual fellowship communities.'
        }
      ],
      setupTitle: 'How Sanctuary Setup Works',
      setupSubtitle: 'Connect your soundboard once and let volunteers run it every week.',
      setupSteps: [
        {
          step: '01',
          title: 'Connect Your Soundboard Aux Feed',
          description: 'Route your speaking microphones (pulpit, lectern, wireless pastor mic) from an aux output on your mixer into your laptop via a USB sound card.'
        },
        {
          step: '02',
          title: 'Start Your Static Broadcast Room',
          description: 'Open zipcaptions.app in Chrome and turn on Broadcast mode so your printed pew cards and lobby posters connect automatically.'
        },
        {
          step: '03',
          title: 'Feed Sanctuary Screens and Livestreams',
          description: 'Display the caption window on your sanctuary screen or connect directly to OBS Studio or vMix for your online broadcast.'
        }
      ],
      printables: [
        {
          id: 'worship-poster',
          title: 'Sanctuary Entrance & Welcome Poster',
          typeLabel: 'Lobby & Welcome Table Poster (PDF)',
          description: 'A welcoming large-print poster for sanctuary doors and foyers explaining how congregation members can scan a QR code or enter your room code to read on their phones.',
          fileUrl: '/files/printables/worship-sanctuary-welcome-poster.pdf',
          hasQrAndRoomBox: true,
          defaultPosterHeadline: 'Follow Today’s Service with Live Captions',
          defaultPosterSubtitle: 'Read the sermon, readings, and announcements in real time right on your own smartphone or tablet.',
          defaultSteps: [
            'Put your phone ringer on silent before the service begins.',
            'Scan the QR code above or open https://zipcaptions.app in your phone browser.',
            'Enter our Sanctuary Broadcast Code shown above and adjust the text size for your eyes.'
          ]
        },
        {
          id: 'worship-pew-card',
          title: 'Pew Card & Weekly Bulletin Insert',
          typeLabel: 'Seat-Back Card Template (PDF)',
          description: 'A compact guide for pew racks or weekly bulletins with your static broadcast code, QR code, and a gentle reminder to silence phone ringers.',
          fileUrl: '/files/printables/worship-pew-cards.pdf',
          hasQrAndRoomBox: true,
          defaultPosterHeadline: 'Pew Card: Read Live Captions on Your Phone',
          defaultPosterSubtitle: 'Follow every word of the service comfortably from your seat.',
          defaultSteps: [
            'Switch your phone ringer to silent.',
            'Scan the QR code or visit https://zipcaptions.app.',
            'Enter the Sanctuary Broadcast Code above and choose Dark Mode for comfortable reading.'
          ]
        },
        {
          id: 'worship-av-checklist',
          title: 'Volunteer Sound Booth Checklist',
          typeLabel: '1-Page AV Operator Guide (PDF)',
          description: 'A step-by-step pre-service checklist for volunteer sound operators covering mixer routing, muting music channels in the caption feed, and testing the broadcast room.',
          fileUrl: '/files/printables/worship-sound-booth-checklist.pdf',
          hasQrAndRoomBox: false
        }
      ],
      defaultOrgPlaceholder: 'Grace Community Sanctuary',
      defaultRoomCodePlaceholder: '76-aqz5-pf77',
      videos: [
        {
          youtubeId: 'OXpaiEtECmI',
          title: 'Broadcast Live Captions to Phones in the Pews',
          description: 'Learn how to set up a broadcast room so congregation members can read live captions on their own smartphones or tablets.',
          uploadDate: '2024-06-01'
        },
        {
          youtubeId: 'QYz4Brh66YA',
          title: 'Add Open Captions to Your Service Livestream in OBS',
          description: 'Step-by-step guide to connecting Zip Captions directly into OBS Studio using WebSockets.',
          uploadDate: '2024-06-01'
        },
        {
          youtubeId: 'WVt2UjV5LFk',
          title: 'Real-Time Translation for Multilingual Services',
          description: 'How members can translate live captions in Google Chrome using local On-Device AI.',
          uploadDate: '2026-10-21'
        }
      ],
      storiesTitle: 'Real Impact in Faith Communities',
      stories: [
        {
          quote: 'When sound is available but not understood, it is as if you are listening to a foreign language. With this closed caption I can follow the service and hear The Message. What a wonderful experience!',
          author: 'Doris',
          role: 'Congregation Member, Rock Valley First Reformed Church',
          linkUrl: '/testimonial',
          linkText: 'Read Full Congregation Spotlight'
        },
        {
          quote: 'Zip Captions makes it very easy to add live open captions to our service broadcasts for our livestream and our leased cable tv channel. We also incorporate live open captions on our in-person presentation screen.',
          author: 'Kevin Bouwman',
          role: 'AV Coordinator, Rock Valley First Reformed Church & Advisory Board Member',
          linkUrl: '/testimonial',
          linkText: 'See How Rock Valley Set Up Zip Captions'
        }
      ],
      relatedLinks: [
        {
          title: 'USB Sound Card Setup Guide',
          description: 'How to connect an audio cable from your sanctuary mixer into a laptop.',
          url: '/soundcard'
        },
        {
          title: 'Zip Captions vMix Bridge',
          description: 'Send live caption text straight into vMix lower-thirds and titles.',
          url: '/zipvmix'
        },
        {
          title: 'Zip Captions Companion (Stream Deck)',
          description: 'Give sound booth volunteers a single physical button to start and pause captions.',
          url: '/zipcaptionscompanion'
        }
      ],
      faqs: [
        {
          question: 'How do we stop choir music or instruments from confusing the captions?',
          answer: 'Route only your speaking microphones (such as the pulpit and pastor lapel mic) to a dedicated aux send on your soundboard, and pause captioning during musical worship sets.'
        },
        {
          question: 'Can congregation members use both sanctuary screens and personal phones at the same time?',
          answer: 'Yes. A single Zip Captions session can display open captions on your main sanctuary projector, feed your livestream, and broadcast to personal smartphones simultaneously.'
        },
        {
          question: 'Do congregation members need to download an app in church?',
          answer: 'No. They simply scan the QR code or open zipcaptions.app in Safari or Chrome on their phone and enter your room code.'
        },
        {
          question: 'Is Zip Captions a good replacement for WebCaptioner in churches?',
          answer: 'Yes. Many churches switched to Zip Captions after WebCaptioner retired because Zip Captions works directly in the browser for free and adds mobile broadcasting, OBS WebSockets, and vMix support.'
        }
      ]
    },

    // 3. HEALTHCARE
    {
      slug: 'healthcare',
      navLabel: 'Healthcare & Clinics',
      categoryLabel: 'Clinics, Reception Desks, Pharmacies & Counseling',
      title: 'Zip Captions for Healthcare and Clinics',
      seoTitle: 'Private Browser Live Captioning for Healthcare Clinics & Reception Desks | Zip Solutions',
      description: 'Support deaf, hard-of-hearing, and older patients during clinic check-in, pharmacy pickup, audiology visits, and routine consultations with private local-browser speech-to-text.',
      keywords: 'private speech to text for healthcare clinics, live captioning for hard of hearing patients, reception desk live captions for hearing loss, browser live captioning local privacy',
      summaryCardDescription: 'Help patients with hearing loss read spoken words clearly at reception desks, pharmacy counters, audiology offices, and consultation rooms while keeping transcripts in local browser memory.',
      reasonsTitle: 'Why Clinics and Care Teams Use Zip Captions',
      reasonsSubtitle: 'Clear visual communication for everyday patient interactions with local browser privacy.',
      reasons: [
        {
          title: 'Transcripts Stay in Local Browser Memory',
          description: 'Spoken words are processed transiently and held only inside your local web browser tab. Zip Solutions never saves, archives, or stores patient conversations on external servers.'
        },
        {
          title: 'Instant Clean Slate Between Patients',
          description: 'As soon as a reception check-in or routine appointment finishes, staff simply click Clear or refresh the browser tab and all text is immediately erased.'
        },
        {
          title: 'Helps at Busy Check-In Counters and Pharmacies',
          description: 'Waiting room noise and protective barriers can make spoken questions hard to hear. A tablet or secondary monitor at the counter lets patients read scheduling and pickup details clearly.'
        },
        {
          title: 'Easy to Read for Older Adults',
          description: 'Clinicians and receptionists can increase the font size to extra-large letters and turn on high-contrast dark or light themes in two clicks.'
        },
        {
          title: 'Runs on Existing Clinic Computers and Tablets',
          description: 'No software installation or account login is required. Open zipcaptions.app in Chrome, Edge, or Safari whenever a patient asks for text support.'
        },
        {
          title: 'On-Device Translation for Front-Desk Check-In',
          description: 'In Google Chrome, staff can turn on local On-Device AI translation to help with basic reception and intake questions across languages.'
        }
      ],
      setupTitle: 'How Clinic & Reception Setup Works',
      setupSubtitle: 'Simple four-step routine for front-desk staff and clinicians.',
      setupSteps: [
        {
          step: '01',
          title: 'Place a Counter Sign at Reception',
          description: 'Display our printable counter card at check-in so patients with hearing loss know they can ask for live captions without hesitation.'
        },
        {
          step: '02',
          title: 'Use a Directional Desk Microphone',
          description: 'Connect a simple USB desk microphone or headset pointed toward the staff member speaking to reduce background waiting-room noise.'
        },
        {
          step: '03',
          title: 'Show Captions on a Tablet & Clear After Use',
          description: 'Let the patient read the large text on a counter tablet or consultation screen, then refresh the browser tab when finished.'
        }
      ],
      disclaimerNote: 'Important Clinical Note: Zip Captions provides automated speech-to-text and on-device translation as a helpful visual communication aid for everyday reception, check-in, and routine interactions. Automated tools do not replace certified medical or sign language interpreters where required by clinical standards or law.',
      printables: [
        {
          id: 'health-tent-card',
          title: 'Reception & Check-In Counter Tent Card',
          typeLabel: 'Foldable Counter Sign (PDF)',
          description: 'Place at clinic reception desks, pharmacy windows, and audiology check-in counters so patients know live screen captions are available on request.',
          fileUrl: '/files/printables/healthcare-reception-tent-card.pdf',
          hasQrAndRoomBox: true,
          defaultPosterHeadline: 'Need Live Captions? Just Ask Our Reception Team',
          defaultPosterSubtitle: 'We can display real-time captions of our conversation on a screen or tablet right here at the desk.',
          defaultSteps: [
            'Let our receptionist or clinician know you would like to read live captions.',
            'Read large, high-contrast text on our counter screen or scan the QR code to read on your own phone.',
            'For your privacy, all text stays in local browser memory and is cleared right after our conversation.'
          ]
        },
        {
          id: 'health-room-sign',
          title: 'Consultation & Exam Room Notice Sign',
          typeLabel: 'Exam Room Wall Sign (PDF)',
          description: 'A clear wall sign for consultation and therapy rooms explaining how live captions work and reassuring patients that conversations are cleared immediately after their visit.',
          fileUrl: '/files/printables/healthcare-consultation-room-sign.pdf',
          hasQrAndRoomBox: false
        },
        {
          id: 'health-staff-guide',
          title: '1-Page Clinic Staff Quick Guide',
          typeLabel: 'Staff Reference Sheet (PDF)',
          description: 'A 1-page reference sheet for receptionists, nurses, pharmacists, and clinicians covering directional mic placement, large text settings, and clearing the tab between patients.',
          fileUrl: '/files/printables/healthcare-staff-quick-guide.pdf',
          hasQrAndRoomBox: false
        }
      ],
      defaultOrgPlaceholder: 'Main Street Clinic Reception',
      defaultRoomCodePlaceholder: '76-aqz5-pf77',
      videos: [
        {
          youtubeId: 'sF7n1X1oIFY',
          title: 'Real-Time Speech-to-Text in Your Browser',
          description: 'See how spoken words are transcribed clearly in the browser with customizable font sizes and high-contrast themes.',
          uploadDate: '2024-06-01'
        },
        {
          youtubeId: 'WVt2UjV5LFk',
          title: 'Private On-Device Translation in Google Chrome',
          description: 'How Chrome runs translation models locally on your device without sending transcripts to third-party translation clouds.',
          uploadDate: '2026-10-21'
        }
      ],
      storiesTitle: 'Recognized by Hearing Health Organizations',
      stories: [
        {
          quote: 'Two-page profile exploring the practical impact of browser-based real-time speech-to-text accessibility for seniors and deaf or hard-of-hearing adults across Quebec.',
          author: 'Hear Entendre Québec',
          role: 'Hear Hear! Magazine Feature',
          linkUrl: '/press',
          linkText: 'View Magazine Coverage'
        },
        {
          quote: 'Audition Québec featured and analyzed Zip Captions as a free, open solution for improving live communication access for hard-of-hearing individuals.',
          author: 'Audition Québec',
          role: 'Sourdine Express Technology Review',
          linkUrl: '/press',
          linkText: 'Read Press Coverage'
        }
      ],
      relatedLinks: [
        {
          title: 'EasySpeak Offline AAC App',
          description: 'Offline augmentative communication board for patients who cannot speak vocally.',
          url: '/easyspeak'
        },
        {
          title: 'Zip Speech for Telehealth (Google Meet)',
          description: 'Type-to-speak microphone extension for patients joining virtual appointments on Google Meet.',
          url: '/zipspeech'
        },
        {
          title: 'Zip Solutions Privacy Policy',
          description: 'Read our plain-language commitment to local browser privacy.',
          url: '/privacy'
        }
      ],
      faqs: [
        {
          question: 'Does Zip Solutions store or record patient transcripts on its servers?',
          answer: 'No. Zip Captions processes speech transiently and holds the active transcript only in local web browser memory. We do not store, log, or archive transcripts on external servers.'
        },
        {
          question: 'How do clinic staff make sure the next patient cannot see previous text?',
          answer: 'Staff simply click the Clear button inside Zip Captions or close/refresh the browser tab at the end of the interaction, which immediately wipes the local browser memory.'
        },
        {
          question: 'Does Zip Captions replace a certified medical interpreter?',
          answer: 'No. Zip Captions is an automated visual communication aid that is very helpful for check-in desks, pharmacies, and routine communication, especially for adults with age-related hearing loss who read English or French. When a certified sign language or medical interpreter is required by law or clinical care standards, clinics should always provide one.'
        },
        {
          question: 'What kind of microphone works best at a clinic reception counter?',
          answer: 'A directional (cardioid) USB desk microphone or a lightweight USB headset pointed toward the receptionist works best so the microphone picks up the staff member clearly rather than waiting-room noise.'
        }
      ]
    },

    // 4. LIVE EVENTS
    {
      slug: 'live-events',
      navLabel: 'Live Events & Conferences',
      categoryLabel: 'Conferences, Keynotes, Symposia & Theatre',
      title: 'Zip Captions for Live Events and Conferences',
      seoTitle: 'Live Event Captioning, QR Phone Relay & Conference Captions | Zip Solutions',
      description: 'Provide browser-based live captions for conferences, auditorium keynotes, breakout rooms, and theatre shows via stage screens and attendee QR smartphone relays.',
      keywords: 'live event captioning qr code phone, free conference live captions browser, stage monitor live captioning software, accessible event captioning setup, theatre surtitles and live event captions',
      summaryCardDescription: 'Let conference attendees read live captions on stage projectors or on their own smartphones via QR codes, or book our team for full hybrid production and theatre surtitles.',
      reasonsTitle: 'Why Event Organizers and Venues Use Zip Captions',
      reasonsSubtitle: 'Flexible captioning for single breakout rooms, large keynote halls, and live stage productions.',
      reasons: [
        {
          title: 'Attendee Smartphone Relay via QR Code',
          description: 'Put a QR code on your door posters or opening slide. Attendees scan it to read live captions on their own phone from any seat, even in wide halls or dim lighting.'
        },
        {
          title: 'Clean Stage Monitor and Projector Display',
          description: 'Run Zip Captions full-screen on a side monitor, confidence screen, or main auditorium projector with customizable fonts and high-contrast colors.'
        },
        {
          title: 'Multi-Language Reading on Personal Devices',
          description: 'International attendees using Google Chrome can turn on free On-Device AI translation to follow keynotes in their preferred language.'
        },
        {
          title: 'Hardware Control with Elgato Stream Deck',
          description: 'AV technicians can use our official Bitfocus Companion module (Zip Captions Companion) to start, pause, and clear captions from a physical Stream Deck.'
        },
        {
          title: 'Instant Session Transcripts for Organizers',
          description: 'Export time-coded SRT/VTT files or plain text (.txt) transcripts right after a panel finishes for post-event recaps and video archives.'
        },
        {
          title: 'Optional Managed Event Production & Surtitles',
          description: 'Need hands-on technical support, multi-room hybrid streaming, or manually cued scripted theatre surtitles? Our team provides custom event services.'
        }
      ],
      setupTitle: 'How Live Event Setup Works',
      setupSubtitle: 'Combine venue screens and mobile QR relays in three steps.',
      setupSteps: [
        {
          step: '01',
          title: 'Take a Speech Feed from the Venue Mixer',
          description: 'Connect an aux send containing only podium and stage microphones from the house soundboard into your captioning laptop via a USB sound card or audio interface.'
        },
        {
          step: '02',
          title: 'Post Your QR Code at Doors & on Stage',
          description: 'Print our door posters and display the pre-show slide graphic so attendees can connect their phones before the speaker walks on stage.'
        },
        {
          step: '03',
          title: 'Run Stage Screens and Stream Overlays Together',
          description: 'Display open captions on your stage monitor while feeding OBS Studio or vMix for remote livestream viewers.'
        }
      ],
      printables: [
        {
          id: 'events-door-poster',
          title: 'Venue Door & Registration Desk Poster',
          typeLabel: 'Room Entrance Poster (PDF)',
          description: 'Hang outside conference rooms and at registration tables with your session room code and QR code so attendees can connect as they walk in.',
          fileUrl: '/files/printables/events-venue-entrance-poster.pdf',
          hasQrAndRoomBox: true,
          defaultPosterHeadline: 'Scan for Live Event Captions on Your Phone',
          defaultPosterSubtitle: 'Follow today’s keynote, panel discussions, and Q&A sessions in real time from any seat.',
          defaultSteps: [
            'Scan the QR code above or open https://zipcaptions.app in your phone browser.',
            'Enter the Conference Room Broadcast Code shown above.',
            'Adjust text size and contrast, or turn on live translation in Google Chrome.'
          ]
        },
        {
          id: 'events-table-card',
          title: 'Roundtable Tent Card & Badge Insert',
          typeLabel: 'Tabletop & Lanyard Guide (PDF)',
          description: 'Place on conference roundtables or print at smaller scale for attendee badge holders so participants can connect from their seats at any point.',
          fileUrl: '/files/printables/events-table-tent-and-badge-card.pdf',
          hasQrAndRoomBox: true,
          defaultPosterHeadline: 'Table Card: Follow Live Captions at Your Seat',
          defaultPosterSubtitle: 'Read live captions clearly right on your own smartphone, tablet, or laptop.',
          defaultSteps: [
            'Open https://zipcaptions.app or scan the QR code.',
            'Enter the Session Broadcast Code shown above.',
            'Switch to Dark Mode in Settings to keep your screen comfortable for neighbors.'
          ]
        },
        {
          id: 'events-preshow-slide',
          title: 'Pre-Show Housekeeping Slide / Sheet',
          typeLabel: 'Projector Walk-In Graphic (PDF)',
          description: 'Display on the main room projector during walk-in seating to show attendees how to connect their phones and remind speakers to use microphones during Q&A.',
          fileUrl: '/files/printables/events-preshow-projector-slide.pdf',
          hasQrAndRoomBox: true,
          defaultPosterHeadline: 'Welcome! Live Captions Are Active for This Session',
          defaultPosterSubtitle: 'Connect your phone or laptop now before the session begins.',
          defaultSteps: [
            'Scan the QR code or visit https://zipcaptions.app and enter the Room Code.',
            'Customize your font size, high-contrast theme, or Chrome translation.',
            'Speakers: Please use the microphone for all Q&A so every word is captioned.'
          ]
        },
        {
          id: 'events-av-checklist',
          title: 'Stage Manager & AV Crew Checklist',
          typeLabel: '1-Page Production Checklist (PDF)',
          description: 'A technical pre-show checklist covering post-fader speech aux routing, confidence monitors, QR testing, vMix/OBS links, and Stream Deck buttons.',
          fileUrl: '/files/printables/events-av-crew-checklist.pdf',
          hasQrAndRoomBox: false
        }
      ],
      defaultOrgPlaceholder: 'Main Keynote Auditorium',
      defaultRoomCodePlaceholder: '76-aqz5-pf77',
      videos: [
        {
          youtubeId: 'OXpaiEtECmI',
          title: 'Broadcast Captions to Attendee Smartphones',
          description: 'See how a single broadcast code lets conference attendees follow along on their own phones, tablets, and laptops.',
          uploadDate: '2024-06-01'
        },
        {
          youtubeId: 'xMFm8ToDeU4',
          title: 'Hardware Control with Stream Deck & Companion',
          description: 'How production crews control Zip Captions directly from an Elgato Stream Deck using Bitfocus Companion.',
          uploadDate: '2025-01-15'
        },
        {
          youtubeId: 'WVt2UjV5LFk',
          title: 'Real-Time Translation for International Conferences',
          description: 'Demonstration of free on-device live caption translation inside Google Chrome.',
          uploadDate: '2026-10-21'
        }
      ],
      storiesTitle: 'Trusted by Event Producers and AV Engineers',
      stories: [
        {
          quote: 'Recommended by live production and video switcher engineers looking for low-latency browser feeds to display on live event stage monitors and video switchers.',
          author: 'Live Production Engineers',
          role: 'r/VIDEOENGINEERING Community',
          linkUrl: '/testimonial',
          linkText: 'Read Engineer Feedback'
        },
        {
          quote: 'It distinguishes itself by its ability to broadcast captions to personal devices, enhancing the accuracy and discretion of live captioning in various settings, including classrooms, places of worship, and conference venues.',
          author: 'Dan Mullins',
          role: 'The Pearson News Spotlight',
          linkUrl: '/press',
          linkText: 'Read Article'
        }
      ],
      relatedLinks: [
        {
          title: 'Custom Live Event Captioning & Surtitle Quotes',
          description: 'Request a tailored quote for managed event captioning or scripted theatre surtitles.',
          url: '/live-event-quotes'
        },
        {
          title: 'In-Person & Hybrid Event Organisation',
          description: 'Full multi-room streaming and technical production by the Zip Solutions team.',
          url: '/events'
        },
        {
          title: 'Zip Captions Companion (Stream Deck)',
          description: 'Automate live captioning controls from your production switcher desk.',
          url: '/zipcaptionscompanion'
        }
      ],
      faqs: [
        {
          question: 'Can attendees view captions on their phones while we also show captions on a stage screen?',
          answer: 'Yes. You can display the main Zip Captions window on a stage projector or side monitor while Broadcast mode simultaneously relays the live text to attendee smartphones.'
        },
        {
          question: 'What is the difference between automated live captions and scripted theatre surtitles?',
          answer: 'Automated live captions use speech-to-text for unscripted talks, panels, and Q&A. For scripted plays, musicals, and operas, our Live Event Services team pre-loads your script and manually cues each line to match actors’ exact pacing.'
        },
        {
          question: 'How do we make sure audience questions are captioned during Q&A?',
          answer: 'Always pass a handheld microphone to audience members asking questions (or ask the moderator to repeat the question into their podium mic) so the audio reaches the captioning computer.'
        },
        {
          question: 'Can we hire Zip Solutions to manage our conference streaming and live captions?',
          answer: 'Yes. Visit our Live Event Quotes page or Events page to request a custom proposal for in-person, virtual, or multi-room hybrid events.'
        }
      ]
    },

    // 5. PUBLIC SECTOR & SENIORS
    {
      slug: 'public-sector',
      navLabel: 'Public Sector & Seniors',
      categoryLabel: 'Municipalities, Town Halls, Libraries & Senior Centers',
      title: 'Zip Captions for Public Sector and Senior Centers',
      seoTitle: 'Free Live Captioning for Town Halls, Public Meetings & Senior Centers | Zip Solutions',
      description: 'Make municipal council meetings, public forums, libraries, and senior center events accessible with free browser-based live captions and instant SRT/TXT transcript exports.',
      keywords: 'live captioning for town hall meetings, accessible public meetings speech to text, live captions for senior centers and libraries, municipal broadcast closed captioning free',
      summaryCardDescription: 'Help residents and older adults follow town hall meetings, library talks, and community forums on room screens or personal tablets with easy transcript exports for clerks.',
      reasonsTitle: 'Why Towns, Libraries, and Senior Centers Use Zip Captions',
      reasonsSubtitle: 'Equitable civic participation with zero procurement barriers.',
      reasons: [
        {
          title: 'Makes Public Forums and Town Halls Easier to Follow',
          description: 'Acoustics in town halls, gymnasiums, and community rooms can be challenging for residents with hearing loss. Open captions on a front TV or projector let everyone follow public business.'
        },
        {
          title: 'Designed for Older Adults with Zero App Downloads',
          description: 'Seniors can read large, high-contrast captions on a front television screen or on an iPad or phone without needing to install apps or remember passwords.'
        },
        {
          title: 'Instant Transcripts for Municipal Clerks (.TXT & .SRT)',
          description: 'At the end of a council meeting or public hearing, staff can download a plain text (.txt) file to assist with drafting minutes, plus time-coded .srt or .vtt files for video archives.'
        },
        {
          title: 'Works with Public-Access TV and Municipal Streams',
          description: 'Community media teams can feed live captions directly into OBS Studio or vMix for local cable channels and municipal YouTube broadcasts.'
        },
        {
          title: 'No Software Procurement Hurdles',
          description: 'Standard browser captioning is 100% free and runs on existing town laptops and library computers.'
        },
        {
          title: 'Local Browser Privacy for Civic Sessions',
          description: 'Transcripts are held locally in browser memory during the meeting and are not stored on external third-party servers.'
        }
      ],
      setupTitle: 'How Municipal & Senior Center Setup Works',
      setupSubtitle: 'Simple setup for town clerks, librarians, and community media teams.',
      setupSteps: [
        {
          step: '01',
          title: 'Connect a Laptop to the Room TV or Projector',
          description: 'Plug a standard laptop into your meeting room television or projector and connect the room PA mixer output (or a wireless microphone).'
        },
        {
          step: '02',
          title: 'Display High-Contrast Large Text & Share the Room Code',
          description: 'Open zipcaptions.app in full-screen high-contrast mode, and hand out our extra-large-print guide for residents who prefer reading on a tablet.'
        },
        {
          step: '03',
          title: 'Export TXT and SRT Files Before Closing',
          description: 'When the public meeting adjourns, click Export to save your plain text notes and SRT video subtitles.'
        }
      ],
      disclaimerNote: 'Civic Accessibility Note: Zip Captions provides automated live speech-to-text to expand everyday access at community programs and public meetings. When a formal accommodation request requires a certified CART stenographer or sign language interpreter under municipal or national accessibility laws, agencies should provide those certified services.',
      printables: [
        {
          id: 'public-notice-poster',
          title: 'Public Meeting Accessibility Notice Poster',
          typeLabel: 'Council Chamber & Library Wall Sign (PDF)',
          description: 'Post at the entrance to town halls, council chambers, and library meeting rooms to let residents know live captions are active on screen and on mobile devices.',
          fileUrl: '/files/printables/public-sector-meeting-notice-poster.pdf',
          hasQrAndRoomBox: true,
          defaultPosterHeadline: 'Public Meeting Accessibility: Live Captions Provided',
          defaultPosterSubtitle: 'Follow today’s civic meeting on our front screen or on your own phone or tablet.',
          defaultSteps: [
            'Read open live captions on the main display monitor at the front of the room.',
            'Or scan the QR code above / visit https://zipcaptions.app to read on your phone.',
            'Enter the Public Meeting Broadcast Code above and adjust the letter size for your comfort.'
          ]
        },
        {
          id: 'public-senior-handout',
          title: 'Extra-Large-Print Senior Center Handout',
          typeLabel: 'Easy-Read Senior Guide (PDF)',
          description: 'A clear, uncluttered handout written specifically for older adults with 3 simple steps for reading captions on an iPad, tablet, or phone.',
          fileUrl: '/files/printables/public-sector-senior-large-print-handout.pdf',
          hasQrAndRoomBox: true,
          defaultPosterHeadline: 'Easy Guide: Read Live Captions on Your Phone or Tablet',
          defaultPosterSubtitle: 'No app download or password needed. Follow these 3 easy steps.',
          defaultSteps: [
            'STEP 1: Open Safari or Chrome on your phone or iPad and go to zipcaptions.app.',
            'STEP 2: Type Today’s Room Code shown in the box above.',
            'STEP 3: Tap Settings to make the words extra large and easy to read.'
          ]
        },
        {
          id: 'public-clerk-guide',
          title: 'Town Clerk & Community Media Export Guide',
          typeLabel: '1-Page Staff Setup & Archiving Sheet (PDF)',
          description: 'Instructions for municipal clerks and public-access media staff on connecting PA mixers and exporting .txt, .srt, and .vtt files at the end of a public session.',
          fileUrl: '/files/printables/public-sector-clerk-export-guide.pdf',
          hasQrAndRoomBox: false
        }
      ],
      defaultOrgPlaceholder: 'Town Hall Council Chambers',
      defaultRoomCodePlaceholder: '76-aqz5-pf77',
      videos: [
        {
          youtubeId: 'OXpaiEtECmI',
          title: 'Broadcast Captions to Residents in the Room',
          description: 'See how residents can follow public meetings on their own tablets or phones alongside the main room display.',
          uploadDate: '2024-06-01'
        },
        {
          youtubeId: 'sF7n1X1oIFY',
          title: 'Export SRT, VTT, and TXT Meeting Transcripts',
          description: 'How to save plain text transcripts and time-coded video subtitles at the end of a town hall or library event.',
          uploadDate: '2024-06-01'
        }
      ],
      storiesTitle: 'Civic Inclusion in Action',
      stories: [
        {
          quote: 'Hadley Media was at the Senior Center today for Coffee with a Cop with Lt. Mitch Kuc to provide captioning for residents who are hearing impaired. Using a free app called Zip Captions, we are able to provide another way for residents to participate in events going on in town. Everyone deserves equitable access no matter who you are.',
          author: 'Hadley Media & Hadley Senior Center',
          role: 'Municipal Public Forum, Hadley, Massachusetts',
          linkUrl: '/testimonial',
          linkText: 'See Hadley Senior Center Showcase'
        }
      ],
      relatedLinks: [
        {
          title: 'USB Sound Card Setup Guide',
          description: 'Connect your council chamber or senior center PA mixer directly into a laptop.',
          url: '/soundcard'
        },
        {
          title: 'Custom Live Event Captioning Quotes',
          description: 'Need dedicated technical support for an annual town meeting or public summit?',
          url: '/live-event-quotes'
        }
      ],
      faqs: [
        {
          question: 'Can we export subtitles for our recorded town hall YouTube videos?',
          answer: 'Yes. Before closing Zip Captions at the end of the meeting, click Export and choose .SRT or .VTT to download time-coded subtitle files that upload directly to YouTube, Vimeo, or cable broadcast servers.'
        },
        {
          question: 'Is it easy for older adults at a senior center to read?',
          answer: 'Yes. You can display Zip Captions on a large television at the front of the room with extra-large high-contrast text, and seniors who prefer reading up close on an iPad can use our 3-step large-print handout.'
        },
        {
          question: 'Does the town need a paid subscription to use Zip Captions at public meetings?',
          answer: 'No. Standard browser live captioning and transcript exporting (.txt, .srt, .vtt) are 100% free with no account registration required.'
        },
        {
          question: 'How do we capture multiple council members speaking at different microphones?',
          answer: 'Take an auxiliary line-out from your council room audio mixer (which combines all active council microphones) and plug it into your captioning laptop using a plug-and-play USB sound card.'
        }
      ]
    },

    // 6. BROADCAST & STREAMING
    {
      slug: 'broadcast-and-streaming',
      navLabel: 'Broadcast & Streaming',
      categoryLabel: 'OBS Studio, vMix, Twitch, Sports & Video Production',
      title: 'Zip Captions for Broadcast and Live Streaming',
      seoTitle: 'Free OBS Studio & vMix Live Captions, Twitch Chat & SRT Subtitles | Zip Solutions',
      description: 'Add real-time closed and open captions to OBS Studio via WebSockets, vMix Titles via HTTP API, Twitch chat, and Elgato Stream Deck with zero GPU overhead.',
      keywords: 'free obs live captions websocket, vmix live closed captioning title integration, twitch chat live captions extension, stream deck live caption control bitfocus companion, export srt vtt subtitles in browser',
      summaryCardDescription: 'Feed live captions directly into OBS Studio via WebSockets, vMix GT Titles over LAN, Twitch chat, and Bitfocus Companion with instant SRT/VTT exports.',
      reasonsTitle: 'Why Broadcasters, Streamers, and Video Engineers Use Zip Captions',
      reasonsSubtitle: 'Clean digital text pipelines for live production without messy window cropping or chroma-keying.',
      reasons: [
        {
          title: 'Native OBS Studio WebSocket Integration',
          description: 'Connect directly to OBS Studio (version 28+) using built-in WebSockets to send real-time captions straight into your stream output for Twitch and YouTube Live.'
        },
        {
          title: 'Direct vMix Title Graphic Bridge',
          description: 'Our free Zip Captions vMix Chrome Extension sends live text data directly to the vMix Web Controller API over localhost or LAN, updating GT Title overlays cleanly.'
        },
        {
          title: 'Elgato Stream Deck & Bitfocus Companion Control',
          description: 'Use the official Zip Captions module in Bitfocus Companion to trigger Start, Stop, Clear, and Broadcast mode right from your hardware switcher surface.'
        },
        {
          title: 'Twitch Chat Relay with Zip Connect',
          description: 'Creators and moderators can relay live captions directly into Twitch chat using the lightweight Zip Connect Chrome extension with no bot tokens needed.'
        },
        {
          title: 'Zero GPU or Encoder Overhead',
          description: 'Because Zip Captions runs in a browser tab and sends pure text strings over localhost or your studio LAN, your GPU stays 100% dedicated to video encoding.'
        },
        {
          title: 'Instant Time-Coded SRT & VTT Exports for VODs',
          description: 'When your broadcast wraps, download time-coded .srt or .vtt subtitle files with a single click for Premiere Pro, DaVinci Resolve, or YouTube uploads.'
        }
      ],
      setupTitle: 'How Studio & Stream Setup Works',
      setupSubtitle: 'Connect your audio bus to OBS, vMix, or Twitch in under two minutes.',
      setupSteps: [
        {
          step: '01',
          title: 'Route Your Clean Commentary or Mic Bus',
          description: 'Select your broadcast microphone or a dedicated voice-only audio interface channel inside Zip Captions so game audio and music tracks are excluded.'
        },
        {
          step: '02',
          title: 'Link OBS WebSockets, vMix, or Zip Connect',
          description: 'Enter your OBS WebSocket port/password, configure the vMix Chrome Extension (`127.0.0.1` or LAN IP), or toggle Start in Zip Connect for Twitch.'
        },
        {
          step: '03',
          title: 'Go Live and Export Your VOD Subtitles',
          description: 'Monitor live captions from your Stream Deck or confidence monitor, and export your .SRT or .VTT subtitle file when the broadcast finishes.'
        }
      ],
      printables: [
        {
          id: 'broadcast-studio-sign',
          title: 'Studio & Commentary Booth "On Air" Sign',
          typeLabel: 'Studio Wall & Desk Sign (PDF)',
          description: 'Post in commentary booths, podcast studios, and green rooms to remind hosts and guests that live captions are active and share microphone best practices.',
          fileUrl: '/files/printables/broadcast-studio-on-air-sign.pdf',
          hasQrAndRoomBox: true,
          defaultPosterHeadline: 'ON AIR: Live Automated Captions Active',
          defaultPosterSubtitle: 'This broadcast uses Zip Captions to deliver real-time captions to our viewers.',
          defaultSteps: [
            'Keep a consistent distance from your broadcast microphone.',
            'Avoid speaking over other panelists during fast segments so every voice is transcribed cleanly.',
            'Use your mute or cough switch when clearing your throat or speaking off-air.'
          ]
        },
        {
          id: 'broadcast-network-cheatsheet',
          title: 'OBS, vMix, Twitch & Companion Network Cheat Sheet',
          typeLabel: '1-Page Control Room Reference (PDF)',
          description: 'A technical quick-reference sheet for your production rack covering OBS WebSocket ports, vMix Web Controller IP settings, Twitch chat relay, and multi-PC LAN setups.',
          fileUrl: '/files/printables/broadcast-obs-vmix-network-cheatsheet.pdf',
          hasQrAndRoomBox: false
        },
        {
          id: 'broadcast-prestream-checklist',
          title: '5-Minute Pre-Stream Verification Checklist',
          typeLabel: 'Producer Pre-Flight Checklist (PDF)',
          description: 'A pre-broadcast checklist covering voice bus isolation, regional dialect selection, lower-third safe areas, and VOD subtitle exporting.',
          fileUrl: '/files/printables/broadcast-prestream-checklist.pdf',
          hasQrAndRoomBox: false
        }
      ],
      defaultOrgPlaceholder: 'Studio A Control Room',
      defaultRoomCodePlaceholder: '76-aqz5-pf77',
      videos: [
        {
          youtubeId: 'QYz4Brh66YA',
          title: 'Live Streaming with OBS Studio and Zip Captions',
          description: 'Full walkthrough showing how to connect Zip Captions to OBS Studio via WebSockets for real-time stream captions.',
          uploadDate: '2024-06-01'
        },
        {
          youtubeId: 'xMFm8ToDeU4',
          title: 'Automate Captions with Elgato Stream Deck & Companion',
          description: 'How to configure the official Zip Captions module inside Bitfocus Companion for tactile broadcast control.',
          uploadDate: '2025-01-15'
        },
        {
          youtubeId: 'sF7n1X1oIFY',
          title: 'Export Time-Coded SRT and VTT Subtitles',
          description: 'Download ready-to-use SRT and WebVTT files at the end of your stream for fast VOD post-production.',
          uploadDate: '2024-06-01'
        }
      ],
      storiesTitle: 'Adopted by Streamers, Sports Casters, and Broadcast Engineers',
      stories: [
        {
          quote: 'Recently discovered the wonderful Zip Captions app and how brilliantly easy it was to incorporate it into our @chicagoknockouts live stream.',
          author: 'Chicago Knockouts Roller Derby Broadcast',
          role: 'Live Sports Stream Production (@necrohell.bsky.social)',
          linkUrl: '/testimonial',
          linkText: 'Read Broadcast Testimonials'
        },
        {
          quote: 'Official OBS Project community resource with over 2,780 downloads and 840+ active Chrome Web Store extension users across vMix and persistent overlays.',
          author: 'OBS & Broadcast Community',
          role: 'Verified Ecosystem Adoption',
          linkUrl: '/testimonial',
          linkText: 'View Ecosystem Stats'
        }
      ],
      relatedLinks: [
        {
          title: 'Zip Captions vMix Bridge Extension',
          description: 'Send live caption text straight into vMix GT Titles over localhost or LAN.',
          url: '/zipvmix'
        },
        {
          title: 'Zip Connect Extension for Twitch',
          description: 'Relay live captions directly into your Twitch channel chat.',
          url: '/zipconnect'
        },
        {
          title: 'Zip Captions Companion (Stream Deck)',
          description: 'Control live captions from your Elgato Stream Deck with Bitfocus Companion.',
          url: '/zipcaptionscompanion'
        }
      ],
      faqs: [
        {
          question: 'Can I run Zip Captions on a separate laptop from my main OBS or vMix streaming PC?',
          answer: 'Yes. Because both OBS WebSockets and the Zip Captions vMix Extension communicate over HTTP/WebSockets on your local network, you can run Zip Captions on a secondary laptop and point it to your main production PC’s LAN IP address.'
        },
        {
          question: 'Does Zip Captions use up GPU resources while gaming or encoding video?',
          answer: 'No. Standard browser captioning uses negligible CPU and memory and sends lightweight text strings into OBS or vMix, leaving your GPU completely free for rendering and encoding.'
        },
        {
          question: 'How do I keep game sound effects or background music out of the live captions?',
          answer: 'Set Zip Captions to listen only to your dedicated microphone input or commentary audio bus rather than your desktop mix.'
        },
        {
          question: 'Can I download SRT subtitles after my stream for YouTube or Premiere Pro?',
          answer: 'Yes. Keep your Zip Captions tab open during the broadcast and click Export when you finish to download time-coded .srt or .vtt files.'
        }
      ]
    }
  ],

  // ============================================================================
  // FRENCH (FR) TRANSLATIONS
  // ============================================================================
  fr: [
    // 1. EDUCATION (FR)
    {
      slug: 'education',
      navLabel: 'Éducation et écoles',
      categoryLabel: 'Écoles primaires et secondaires, cégeps et universités',
      title: 'Zip Captions pour l’éducation et les salles de classe',
      seoTitle: 'Sous-titrage en direct gratuit et traduction pour les classes et écoles | Solutions Zip',
      description: 'Sous-titrage en direct gratuit sur navigateur et traduction locale pour les classes, universités, Chromebooks, lecteurs débutants et élèves sourds ou malentendants.',
      keywords: 'sous-titrage en direct gratuit classe, synthèse vocale parole en texte élève chromebook, sous-titres élèves sourds malentendants, traduction en temps réel classe multilingue, police lexend sous-titres école',
      summaryCardDescription: 'Soutenez les élèves sourds ou malentendants, les lecteurs débutants et les élèves allophones sur Chromebooks, tablettes et tableaux interactifs sans aucune installation.',
      reasonsTitle: 'Pourquoi les écoles et universités utilisent Zip Captions',
      reasonsSubtitle: 'Des outils pratiques conçus par des enseignants pour soutenir la conception universelle de l’apprentissage (CUA).',
      reasons: [
        {
          title: 'Fonctionne sur Chromebook sans installation TI',
          description: 'Le sous-titrage gratuit fonctionne dans Chrome, Safari et Edge, tandis que le sous-titrage IA payant et la lecture Broadcast fonctionnent dans tout navigateur — sans installateur ni création de compte élève.'
        },
        {
          title: 'Soutient tous les profils d’apprenants',
          description: 'Aide les élèves sourds ou malentendants, les jeunes ayant un trouble de traitement auditif ou un TDAH, les lecteurs débutants et les élèves en francisation ou apprentissage d’une langue.'
        },
        {
          title: 'Affichage individuel au pupitre (Mode diffusion)',
          description: 'L’enseignant partage un code de salle pour que chaque élève suive les sous-titres discrètement dans n’importe quel navigateur sur son propre Chromebook ou sa tablette à son pupitre.'
        },
        {
          title: 'Police Lexend et thèmes à contraste élevé',
          description: 'Chaque élève peut activer la police Lexend pour faciliter le décodage des mots, grossir la taille du texte ou choisir le mode sombre.'
        },
        {
          title: 'Fenêtre flottante par-dessus Google Slides et Docs',
          description: 'Grâce au mode image dans l’image (Picture-in-Picture) ou à l’extension gratuite Zip Panel, les sous-titres restent visibles par-dessus les présentations.'
        },
        {
          title: 'Traduction locale gratuite et notes de cours',
          description: 'Dans Google Chrome, les élèves peuvent traduire les sous-titres en direct sur leur appareil sans frais et télécharger la transcription (.txt) pour leurs révisions.'
        }
      ],
      setupTitle: 'Comment fonctionne la configuration en classe',
      setupSubtitle: 'Prêt avant la cloche en trois étapes simples.',
      setupSteps: [
        {
          step: '01',
          title: 'Branchez le microphone de l’enseignant',
          description: 'Utilisez un micro-cravate sans fil ou un casque USB relié à votre ordinateur pour capter clairement votre voix lors de vos déplacements.'
        },
        {
          step: '02',
          title: 'Ouvrez Zip Captions par-dessus vos diapositives',
          description: 'Allez sur zipcaptions.app, lancez le sous-titrage et activez le mode fenêtre flottante par-dessus Google Slides ou votre tableau interactif.'
        },
        {
          step: '03',
          title: 'Partagez le code de diffusion aux élèves',
          description: 'Inscrivez votre code sur notre affiche de classe imprimable afin que les élèves se connectent depuis leur Chromebook.'
        }
      ],
      printables: [
        {
          id: 'edu-poster',
          title: 'Affiche de diffusion pour la classe',
          typeLabel: 'Affiche murale et tableau (PDF)',
          description: 'Affichez près du tableau avec votre code de diffusion et le code QR pour que les élèves rejoignent les sous-titres depuis leur pupitre.',
          fileUrl: '/files/printables/fr/education-affiche-diffusion-classe.pdf',
          hasQrAndRoomBox: true,
          defaultPosterHeadline: 'Rejoindre les sous-titres de la classe',
          defaultPosterSubtitle: 'Suivez le cours en temps réel directement sur votre Chromebook, portable ou tablette.',
          defaultSteps: [
            'Ouvrez Google Chrome ou votre navigateur et allez sur https://zipcaptions.app.',
            'Entrez le code de diffusion de la classe indiqué ci-dessus.',
            'Ajustez la taille du texte, activez la police Lexend ou la traduction en direct.'
          ]
        },
        {
          id: 'edu-desk-cards',
          title: 'Fiche aide-mémoire pour le pupitre de l’élève',
          typeLabel: 'Fiche individuelle élève (PDF)',
          description: 'Une fiche pratique montrant aux élèves comment se connecter, activer la police Lexend, superposer les sous-titres sur Docs et sauvegarder leurs notes.',
          fileUrl: '/files/printables/fr/education-cartes-pupitre-eleves.pdf',
          hasQrAndRoomBox: true,
          defaultPosterHeadline: 'Aide-mémoire élève : Sous-titres en direct',
          defaultPosterSubtitle: 'Connectez-vous aux sous-titres du cours et personnalisez votre confort de lecture.',
          defaultSteps: [
            'Allez sur https://zipcaptions.app et entrez le code de diffusion de la classe.',
            'Choisissez la police Lexend et un contraste élevé dans les paramètres.',
            'Utilisez le mode fenêtre flottante pour prendre vos notes simultanément.'
          ]
        },
        {
          id: 'edu-parent-sign',
          title: 'Affiche de table pour rencontres parents-enseignants',
          typeLabel: 'Chevalet pour rencontres de parents (PDF)',
          description: 'Posez cette affiche sur votre bureau lors des rencontres de parents pour indiquer que le sous-titrage et la traduction locale dans Chrome sont disponibles.',
          fileUrl: '/files/printables/fr/education-affiche-rencontre-parents.pdf',
          hasQrAndRoomBox: true,
          defaultPosterHeadline: 'Rencontres de parents : Sous-titrage et traduction',
          defaultPosterSubtitle: 'Indiquez à l’enseignant si vous souhaitez lire les sous-titres ou une traduction en direct durant notre rencontre.',
          defaultSteps: [
            'Lisez les paroles en temps réel directement sur l’écran ou sur votre téléphone.',
            'Utilisez l’IA locale de Google Chrome pour traduire les sous-titres dans votre langue.',
            'Tout le texte reste dans la mémoire locale du navigateur et est effacé dès la fin de la rencontre.'
          ]
        },
        {
          id: 'edu-teacher-guide',
          title: 'Liste de contrôle en 1 page pour l’enseignant',
          typeLabel: 'Guide de démarrage rapide (PDF)',
          description: 'Une liste pratique en 1 page couvrant le choix du micro, l’affichage sur Google Slides, la diffusion aux élèves et l’exportation des notes de cours.',
          fileUrl: '/files/printables/fr/education-guide-configuration-enseignant.pdf',
          hasQrAndRoomBox: false
        }
      ],
      defaultOrgPlaceholder: 'Classe de sciences - Local 204',
      defaultRoomCodePlaceholder: '76-aqz5-pf77',
      videos: [
        {
          youtubeId: 'OXpaiEtECmI',
          title: 'Diffuser les sous-titres sur les appareils des élèves',
          description: 'Voyez comment partager un code de diffusion pour que les élèves lisent les sous-titres sur leur Chromebook ou tablette.',
          uploadDate: '2024-06-01'
        },
        {
          youtubeId: 'WVt2UjV5LFk',
          title: 'Traduction en temps réel gratuite dans Google Chrome',
          description: 'Découvrez comment traduire les sous-titres localement dans Google Chrome grâce à l’IA intégrée sur l’appareil.',
          uploadDate: '2026-10-21'
        },
        {
          youtubeId: 'sF7n1X1oIFY',
          title: 'Sauvegarder la transcription pour les notes d’étude',
          description: 'Comment exporter un fichier texte (.txt), SRT ou VTT à la fin d’une leçon.',
          uploadDate: '2024-06-01'
        }
      ],
      storiesTitle: 'Témoignages d’enseignants et de spécialistes',
      stories: [
        {
          quote: 'Pour les personnes malentendantes, cela leur donne du pouvoir. Cela favorise l’autonomie et l’indépendance, de sorte que vous n’avez pas à demander de l’aide tout le temps.',
          author: 'Tracey Green',
          role: 'Enseignante auprès des sourds, École orale de Montréal pour les sourds',
          linkUrl: '/fr/press',
          linkText: 'Lire l’article dans le journal Inspirations'
        },
        {
          quote: 'Un moyen vraiment puissant de sous-titrer votre cours en direct qui soutient tous les apprenants de votre classe : des élèves allophones aux lecteurs débutants et aux élèves malentendants.',
          author: 'Katie Fielding',
          role: 'Lauréate VSTE Accessibility Demo Slam',
          linkUrl: 'https://www.youtube.com/watch?v=u2wNoSQz0Zk',
          linkText: 'Voir la démonstration sur YouTube'
        },
        {
          quote: 'ZipCaptions est un outil de sous-titrage gratuit très utile pour les élèves ayant des troubles d’apprentissage liés au langage, des troubles de traitement auditif ou une perte auditive.',
          author: 'Dr Brian Friedlander',
          role: 'Spécialiste en technologies d’assistance et professeur d’éducation',
          linkUrl: '/fr/testimonial',
          linkText: 'Lire plus de témoignages'
        }
      ],
      relatedLinks: [
        {
          title: 'Extension Chrome Zip Panel',
          description: 'Gardez une barre de sous-titres persistante au bas de Google Slides et de vos onglets Chrome.',
          url: '/fr/zippanel'
        },
        {
          title: 'Extension de lecture EquiBrowse',
          description: 'Adaptez les pages web avec des polices adaptées à la dyslexie et des outils de lecture.',
          url: '/fr/equibrowse'
        },
        {
          title: 'Formations Google for Education et journées pédagogiques',
          description: 'Réservez des ateliers pratiques sur mesure pour le personnel de votre école ou centre de services.',
          url: '/fr/events#training'
        }
      ],
      faqs: [
        {
          question: 'Les élèves doivent-ils créer un compte ou entrer une adresse courriel ?',
          answer: 'Non. Le sous-titrage standard dans le navigateur et le mode diffusion ne nécessitent aucun compte élève, aucun mot de passe et aucune collecte de données personnelles.'
        },
        {
          question: 'Les discussions en classe sont-elles enregistrées sur des serveurs externes ?',
          answer: 'Non. La parole est traitée de façon temporaire et la transcription reste uniquement dans la mémoire locale du navigateur. Fermer ou actualiser l’onglet efface immédiatement le texte.'
        },
        {
          question: 'Peut-on afficher les sous-titres par-dessus Google Slides ou PowerPoint ?',
          answer: 'Oui. Vous pouvez cliquer sur le bouton image dans l’image (Picture-in-Picture) dans Zip Captions pour détacher une fenêtre flottante toujours visible, ou installer l’extension gratuite Zip Panel.'
        },
        {
          question: 'Comment fonctionne la traduction en direct pour les élèves en francisation ou allophones ?',
          answer: 'Dans Google Chrome sur ordinateur ou Chromebook, l’utilisateur peut activer la traduction gratuite en temps réel propulsée par l’IA locale de Chrome.'
        }
      ]
    },

    // 2. PLACES OF WORSHIP (FR)
    {
      slug: 'places-of-worship',
      navLabel: 'Lieux de culte',
      categoryLabel: 'Églises, synagogues, mosquées et communautés de foi',
      title: 'Zip Captions pour les lieux de culte',
      seoTitle: 'Sous-titrage en direct gratuit pour églises, lieux de culte et diffusions | Solutions Zip',
      description: 'Offrez un sous-titrage en direct gratuit lors des célébrations et sermons sur les écrans du sanctuaire, sur les téléphones des fidèles et sur vos diffusions OBS ou vMix.',
      keywords: 'sous-titrage en direct gratuit église, sous-titres sermon sur téléphone, sous-titres direct église obs vmix, accessibilité auditive lieux de culte, alternative webcaptioner église',
      summaryCardDescription: 'Aidez les membres de votre assemblée à suivre les lectures et les sermons sur les écrans du sanctuaire, sur leur téléphone depuis leur banc et en diffusion en direct.',
      reasonsTitle: 'Pourquoi les communautés de foi utilisent Zip Captions',
      reasonsSubtitle: 'Un accès simple et digne qui fonctionne avec votre console de son actuelle et vos bénévoles.',
      reasons: [
        {
          title: 'Lecture sur téléphone depuis n’importe quel banc',
          description: 'Grâce au mode diffusion (Broadcast), les fidèles balayent un code QR sur une carte de banc ou une affiche pour lire les sous-titres sur leur propre téléphone.'
        },
        {
          title: 'Compatible avec les écrans et projecteurs du sanctuaire',
          description: 'Affichez des sous-titres ouverts à fort contraste sur les écrans latéraux ou le projecteur principal en complément de vos paroles de chants.'
        },
        {
          title: 'Intégration aux diffusions en direct et à la télévision locale',
          description: 'Transmettez les sous-titres en direct dans OBS Studio par WebSockets ou dans vos titres vMix grâce à notre extension gratuite.'
        },
        {
          title: 'Aucun budget logiciel requis',
          description: 'Le sous-titrage de base dans le navigateur est 100 % gratuit et sans limite de minutes mensuelles, idéal pour les paroisses et communautés de toute taille.'
        },
        {
          title: 'Simple pour les équipes techniques bénévoles',
          description: 'Reliez une sortie auxiliaire de votre table de mixage à un ordinateur (via une carte son USB), ouvrez zipcaptions.app et lancez le sous-titrage en quelques secondes.'
        },
        {
          title: 'Soutien multilingue pour les assemblées',
          description: 'Prend en charge des dizaines de dialectes ainsi que la traduction locale gratuite dans Google Chrome.'
        }
      ],
      setupTitle: 'Comment fonctionne l’installation au sanctuaire',
      setupSubtitle: 'Branchez votre console une fois et laissez vos bénévoles l’opérer chaque semaine.',
      setupSteps: [
        {
          step: '01',
          title: 'Reliez une sortie auxiliaire de la console',
          description: 'Envoyez uniquement les microphones parlés (lutrin, micro-cravate) depuis une sortie auxiliaire de votre console vers l’ordinateur via une carte son USB.'
        },
        {
          step: '02',
          title: 'Activez votre code de diffusion fixe',
          description: 'Ouvrez zipcaptions.app dans Chrome et démarrez le mode Broadcast afin que vos cartes de bancs et affiches d’accueil se connectent automatiquement.'
        },
        {
          step: '03',
          title: 'Alimentez vos écrans et votre diffusion web',
          description: 'Affichez les sous-titres sur l’écran de projection ou reliez directement OBS Studio ou vMix pour les personnes à domicile.'
        }
      ],
      printables: [
        {
          id: 'worship-poster',
          title: 'Affiche d’accueil à l’entrée du sanctuaire',
          typeLabel: 'Affiche pour le hall d’entrée (PDF)',
          description: 'Une affiche en gros caractères pour les portes d’entrée expliquant comment balayer le code QR ou entrer le code de salle sur un téléphone.',
          fileUrl: '/files/printables/fr/culte-affiche-accueil-sanctuaire.pdf',
          hasQrAndRoomBox: true,
          defaultPosterHeadline: 'Suivez la célébration avec le sous-titrage en direct',
          defaultPosterSubtitle: 'Lisez les lectures, le sermon et les annonces en temps réel sur votre téléphone ou tablette.',
          defaultSteps: [
            'Mettez la sonnerie de votre téléphone en mode silencieux avant le début du service.',
            'Balayez le code QR ci-dessus ou ouvrez https://zipcaptions.app dans votre navigateur.',
            'Entrez le code de diffusion du sanctuaire indiqué ci-dessus et ajustez la taille du texte.'
          ]
        },
        {
          id: 'worship-pew-card',
          title: 'Carte de banc et encart de feuillet paroissial',
          typeLabel: 'Carte pour les bancs (PDF)',
          description: 'Une fiche compacte à glisser sur les bancs ou dans le bulletin hebdomadaire avec votre code de diffusion, le code QR et un rappel de couper la sonnerie.',
          fileUrl: '/files/printables/fr/culte-cartes-bancs.pdf',
          hasQrAndRoomBox: true,
          defaultPosterHeadline: 'Carte de banc : Sous-titres sur votre téléphone',
          defaultPosterSubtitle: 'Suivez chaque parole de la célébration confortablement depuis votre place.',
          defaultSteps: [
            'Mettez votre téléphone en mode silencieux.',
            'Balayez le code QR ou visitez https://zipcaptions.app.',
            'Entrez le code de diffusion ci-dessus et activez le thème sombre pour le confort de vos voisins.'
          ]
        },
        {
          id: 'worship-av-checklist',
          title: 'Liste de contrôle pour les bénévoles à la régie son',
          typeLabel: 'Guide technique en 1 page (PDF)',
          description: 'Une liste de vérification étape par étape pour les bénévoles couvrant l’entrée audio, la coupure des micros de musique dans le flux de sous-titres et le test mobile.',
          fileUrl: '/files/printables/fr/culte-liste-controle-sonorisation.pdf',
          hasQrAndRoomBox: false
        }
      ],
      defaultOrgPlaceholder: 'Sanctuaire communautaire',
      defaultRoomCodePlaceholder: '76-aqz5-pf77',
      videos: [
        {
          youtubeId: 'OXpaiEtECmI',
          title: 'Diffuser les sous-titres sur les téléphones des fidèles',
          description: 'Voyez comment créer une salle de diffusion pour permettre aux membres de lire les sous-titres sur leur téléphone.',
          uploadDate: '2024-06-01'
        },
        {
          youtubeId: 'QYz4Brh66YA',
          title: 'Ajouter des sous-titres en direct dans OBS Studio',
          description: 'Guide étape par étape pour relier Zip Captions directement à OBS Studio par WebSockets.',
          uploadDate: '2024-06-01'
        },
        {
          youtubeId: 'WVt2UjV5LFk',
          title: 'Traduction en temps réel pour les communautés multilingues',
          description: 'Comment traduire les sous-titres en direct dans Google Chrome grâce à l’IA locale.',
          uploadDate: '2026-10-21'
        }
      ],
      storiesTitle: 'Impact réel dans les communautés de foi',
      stories: [
        {
          quote: 'Lorsque le son est disponible mais incompris, c’est comme si vous écoutiez une langue étrangère. Grâce à ce sous-titrage, je peux suivre la célébration et entendre le message. Quelle merveilleuse expérience !',
          author: 'Doris',
          role: 'Membre de l’assemblée, Rock Valley First Reformed Church',
          linkUrl: '/fr/testimonial',
          linkText: 'Lire l’histoire complète'
        },
        {
          quote: 'Zip Captions facilite grandement l’ajout de sous-titres ouverts en direct à nos diffusions sur internet et sur notre chaîne de télévision par câble, ainsi que sur notre écran en personne.',
          author: 'Kevin Bouwman',
          role: 'Coordonnateur audiovisuel et membre du comité consultatif',
          linkUrl: '/fr/testimonial',
          linkText: 'Découvrir leur installation'
        }
      ],
      relatedLinks: [
        {
          title: 'Guide de la carte son USB',
          description: 'Comment relier un câble audio de votre console de mixage à un ordinateur portable.',
          url: '/soundcard'
        },
        {
          title: 'Passerelle vMix Zip Captions',
          description: 'Envoyez le texte des sous-titres directement dans vos titres vMix.',
          url: '/fr/zipvmix'
        },
        {
          title: 'Zip Captions Companion (Stream Deck)',
          description: 'Offrez aux bénévoles un bouton physique simple pour démarrer et mettre en pause les sous-titres.',
          url: '/fr/zipcaptionscompanion'
        }
      ],
      faqs: [
        {
          question: 'Comment éviter que la chorale ou les instruments ne brouillent les sous-titres ?',
          answer: 'Dirigez uniquement vos microphones de parole (lutrin et micro du célébrant) vers une sortie auxiliaire dédiée sur votre console, et mettez les sous-titres en pause durant les chants.'
        },
        {
          question: 'Peut-on utiliser à la fois les écrans du sanctuaire et les téléphones personnels ?',
          answer: 'Oui. Une seule session Zip Captions peut alimenter simultanément le projecteur principal, votre diffusion en direct et les téléphones intelligents des fidèles.'
        },
        {
          question: 'Les membres de l’assemblée doivent-ils télécharger une application ?',
          answer: 'Non. Ils balayent simplement le code QR ou ouvrent zipcaptions.app dans Safari ou Chrome sur leur téléphone et entrent le code de diffusion.'
        },
        {
          question: 'Zip Captions peut-il remplacer WebCaptioner dans notre lieu de culte ?',
          answer: 'Oui. De nombreuses communautés ont adopté Zip Captions après la fermeture de WebCaptioner, car il fonctionne gratuitement dans le navigateur tout en ajoutant la diffusion mobile, OBS WebSockets et vMix.'
        }
      ]
    },

    // 3. HEALTHCARE (FR)
    {
      slug: 'healthcare',
      navLabel: 'Santé et cliniques',
      categoryLabel: 'Cliniques, comptoirs d’accueil, pharmacies et consultations',
      title: 'Zip Captions pour les soins de santé et les cliniques',
      seoTitle: 'Sous-titrage en direct privé sur navigateur pour cliniques et accueil | Solutions Zip',
      description: 'Accompagnez les patients sourds, malentendants et aînés lors de l’accueil en clinique, au comptoir de pharmacie, en audiologie et en consultation avec une confidentialité locale.',
      keywords: 'parole en texte privé clinique santé, sous-titrage en direct patients malentendants, sous-titres comptoir accueil perte auditive, sous-titrage navigateur confidentialité locale',
      summaryCardDescription: 'Aidez les patients ayant une perte auditive à lire clairement les paroles aux comptoirs d’accueil, en pharmacie et en salle de consultation tout en gardant le texte en mémoire locale.',
      reasonsTitle: 'Pourquoi les cliniques et équipes de soins utilisent Zip Captions',
      reasonsSubtitle: 'Une communication visuelle claire pour le quotidien des patients, respectueuse de la confidentialité locale.',
      reasons: [
        {
          title: 'Les transcriptions restent dans la mémoire locale du navigateur',
          description: 'Les paroles sont traitées temporairement et conservées uniquement dans l’onglet ouvert du navigateur. Solutions Zip n’enregistre ni ne stocke aucune conversation sur des serveurs externes.'
        },
        {
          title: 'Effacement immédiat entre deux patients',
          description: 'Dès que l’inscription à l’accueil ou la consultation se termine, le personnel clique sur Effacer ou actualise l’onglet pour vider instantanément l’écran.'
        },
        {
          title: 'Utile aux comptoirs d’accueil et en pharmacie',
          description: 'Le bruit des salles d’attente rend parfois l’écoute difficile. Une tablette ou un second écran au comptoir permet au patient de lire clairement les consignes et rendez-vous.'
        },
        {
          title: 'Lecture très lisible pour les aînés',
          description: 'Le personnel peut grossir la taille des caractères et activer le mode contraste élevé en deux clics.'
        },
        {
          title: 'Fonctionne sur les ordinateurs et tablettes déjà en place',
          description: 'Aucune installation logicielle ni ouverture de compte n’est requise. Ouvrez zipcaptions.app dans Chrome, Edge ou Safari dès qu’un patient en a besoin.'
        },
        {
          title: 'Traduction locale pour les questions d’accueil',
          description: 'Dans Google Chrome, le personnel peut activer la traduction locale sur l’appareil pour faciliter l’accueil initial dans plusieurs langues.'
        }
      ],
      setupTitle: 'Comment fonctionne l’utilisation en clinique',
      setupSubtitle: 'Une routine simple pour le personnel d’accueil et les professionnels.',
      setupSteps: [
        {
          step: '01',
          title: 'Posez une affiche au comptoir d’accueil',
          description: 'Disposez notre chevalet imprimable à la réception pour que les patients malentendants sachent qu’ils peuvent demander les sous-titres en direct.'
        },
        {
          step: '02',
          title: 'Utilisez un microphone de table directionnel',
          description: 'Branchez un microphone USB directionnel orienté vers le membre du personnel afin de réduire le bruit ambiant de la salle d’attente.'
        },
        {
          step: '03',
          title: 'Affichez sur un écran et effacez après la visite',
          description: 'Laissez le patient lire le texte en gros caractères sur la tablette ou l’écran, puis actualisez l’onglet dès la fin de l’échange.'
        }
      ],
      disclaimerNote: 'Note clinique importante : Zip Captions offre une transcription et une traduction automatisées à titre d’aide visuelle pratique pour l’accueil et les communications courantes. Les outils automatisés ne remplacent pas les interprètes médicaux ou en langue des signes certifiés lorsque requis par les normes cliniques ou la loi.',
      printables: [
        {
          id: 'health-tent-card',
          title: 'Chevalet de comptoir pour l’accueil et la réception',
          typeLabel: 'Chevalet de comptoir pliable (PDF)',
          description: 'Placez sur les comptoirs de réception, guichets de pharmacie et cliniques d’audiologie pour informer les patients que le sous-titrage est disponible sur demande.',
          fileUrl: '/files/printables/fr/sante-chevalet-accueil.pdf',
          hasQrAndRoomBox: true,
          defaultPosterHeadline: 'Besoin de sous-titres en direct ? Demandez à l’accueil',
          defaultPosterSubtitle: 'Nous pouvons afficher les sous-titres de notre conversation en temps réel sur un écran ou une tablette.',
          defaultSteps: [
            'Indiquez à notre personnel d’accueil que vous souhaitez lire les sous-titres en direct.',
            'Lisez le texte en gros caractères sur notre écran ou balayez le code QR avec votre téléphone.',
            'Pour votre confidentialité, tout le texte demeure en mémoire locale et est effacé après notre échange.'
          ]
        },
        {
          id: 'health-room-sign',
          title: 'Affiche pour salle de consultation et d’examen',
          typeLabel: 'Affiche murale de salle (PDF)',
          description: 'Une affiche claire pour les salles de consultation expliquant le fonctionnement des sous-titres et rassurant les patients sur l’effacement immédiat après la visite.',
          fileUrl: '/files/printables/fr/sante-affiche-salle-consultation.pdf',
          hasQrAndRoomBox: false
        },
        {
          id: 'health-staff-guide',
          title: 'Guide rapide en 1 page pour le personnel clinique',
          typeLabel: 'Fiche de référence du personnel (PDF)',
          description: 'Une fiche pratique pour les réceptionnistes, pharmaciens et cliniciens sur le positionnement du micro, l’affichage en gros caractères et la remise à zéro entre deux patients.',
          fileUrl: '/files/printables/fr/sante-guide-rapide-personnel.pdf',
          hasQrAndRoomBox: false
        }
      ],
      defaultOrgPlaceholder: 'Accueil de la clinique',
      defaultRoomCodePlaceholder: '76-aqz5-pf77',
      videos: [
        {
          youtubeId: 'sF7n1X1oIFY',
          title: 'Transcription parole en texte dans le navigateur',
          description: 'Voyez comment la parole s’affiche clairement en temps réel avec une taille de police ajustable et un contraste élevé.',
          uploadDate: '2024-06-01'
        },
        {
          youtubeId: 'WVt2UjV5LFk',
          title: 'Traduction locale privée dans Google Chrome',
          description: 'Comment Google Chrome exécute la traduction directement sur l’appareil sans envoyer le texte vers des serveurs infonuagiques tiers.',
          uploadDate: '2026-10-21'
        }
      ],
      storiesTitle: 'Salué par les organismes en santé auditive',
      stories: [
        {
          quote: 'Dossier de deux pages explorant l’impact pratique du sous-titrage en direct sur navigateur pour les aînés et les adultes sourds ou malentendants à travers le Québec.',
          author: 'Hear Entendre Québec',
          role: 'Article dans le magazine Hear Hear!',
          linkUrl: '/fr/press',
          linkText: 'Voir la couverture de presse'
        },
        {
          quote: 'Audition Québec présente et analyse Zip Captions en tant que solution libre et gratuite pour améliorer l’accès aux communications en direct pour les personnes malentendantes.',
          author: 'Audition Québec',
          role: 'Revue technologique Sourdine Express',
          linkUrl: '/fr/press',
          linkText: 'Lire l’article'
        }
      ],
      relatedLinks: [
        {
          title: 'Application de CAA hors ligne EasySpeak',
          description: 'Tableau de communication améliorée et alternative hors ligne pour les patients qui ne peuvent pas parler.',
          url: '/fr/easyspeak'
        },
        {
          title: 'Zip Speech pour la téléconsultation (Google Meet)',
          description: 'Extension de synthèse vocale directe dans le microphone pour les rendez-vous virtuels sur Google Meet.',
          url: '/fr/zipspeech'
        },
        {
          title: 'Politique de confidentialité de Solutions Zip',
          description: 'Consultez notre engagement envers la confidentialité locale dans le navigateur.',
          url: '/fr/privacy'
        }
      ],
      faqs: [
        {
          question: 'Solutions Zip conserve-t-elle les transcriptions des patients sur ses serveurs ?',
          answer: 'Non. Zip Captions traite la parole de façon temporaire et conserve le texte uniquement dans la mémoire locale de votre navigateur. Nous ne stockons ni n’archivons aucune transcription sur des serveurs externes.'
        },
        {
          question: 'Comment le personnel s’assure-t-il que le patient suivant ne voit pas le texte précédent ?',
          answer: 'Il suffit de cliquer sur le bouton Effacer (Clear) dans Zip Captions ou de fermer/actualiser l’onglet du navigateur à la fin de l’échange pour vider immédiatement la mémoire locale.'
        },
        {
          question: 'Zip Captions remplace-t-il un interprète médical certifié ?',
          answer: 'Non. Zip Captions est une aide visuelle automatisée très pratique pour les comptoirs d’accueil, les pharmacies et les échanges courants, notamment pour les personnes ayant une perte auditive liée à l’âge. Lorsqu’un interprète certifié est requis par la loi ou le contexte clinique, la clinique doit toujours y faire appel.'
        },
        {
          question: 'Quel type de microphone fonctionne le mieux à un comptoir de réception ?',
          answer: 'Un microphone USB de table directionnel (cardioïde) ou un casque-micro léger orienté vers la réceptionniste permet de capter clairement sa voix tout en réduisant le bruit de la salle d’attente.'
        }
      ]
    },

    // 4. LIVE EVENTS (FR)
    {
      slug: 'live-events',
      navLabel: 'Événements et conférences',
      categoryLabel: 'Conférences, congrès, symposiums et théâtre',
      title: 'Zip Captions pour les événements en direct et conférences',
      seoTitle: 'Sous-titrage d’événements en direct, relais QR mobile et conférences | Solutions Zip',
      description: 'Offrez un sous-titrage en direct pour vos conférences, auditoriums, salles d’atelier et pièces de théâtre sur écrans de scène et sur les téléphones des participants par code QR.',
      keywords: 'sous-titrage événement en direct code qr téléphone, sous-titres gratuits conférence navigateur, logiciel sous-titrage écran de scène, événement accessible sous-titres, surtitrage théâtre et sous-titrage direct',
      summaryCardDescription: 'Permettez aux participants de lire les sous-titres sur les écrans de scène ou sur leur téléphone par code QR, ou confiez-nous la production hybride et le surtitrage théâtral.',
      reasonsTitle: 'Pourquoi les organisateurs d’événements utilisent Zip Captions',
      reasonsSubtitle: 'Une solution souple pour les salles d’atelier, les grands auditoriums et les arts de la scène.',
      reasons: [
        {
          title: 'Relais sur le téléphone des participants par code QR',
          description: 'Affichez un code QR aux portes de la salle ou sur votre diapositive d’accueil. Les participants le balayent pour lire les sous-titres sur leur téléphone depuis n’importe quel siège.'
        },
        {
          title: 'Affichage net sur écrans de scène et projecteurs',
          description: 'Affichez Zip Captions en plein écran sur un moniteur latéral, un écran de retour ou le projecteur principal avec des couleurs à fort contraste.'
        },
        {
          title: 'Lecture multilingue sur les appareils personnels',
          description: 'Les participants internationaux utilisant Google Chrome peuvent activer la traduction locale gratuite pour suivre les conférences dans leur langue.'
        },
        {
          title: 'Contrôle matériel avec Elgato Stream Deck',
          description: 'Les techniciens audiovisuels utilisent notre module officiel Bitfocus Companion pour démarrer, mettre en pause et effacer les sous-titres depuis un Stream Deck.'
        },
        {
          title: 'Exportation immédiate des transcriptions de séances',
          description: 'Téléchargez les fichiers SRT/VTT horodatés ou le texte brut (.txt) dès la fin d’une table ronde pour vos comptes rendus et archives vidéo.'
        },
        {
          title: 'Service clé en main de production et surtitrage théâtral',
          description: 'Besoin d’une équipe sur place, d’une diffusion hybride multi-salles ou de surtitres de théâtre synchronisés au texte ? Notre équipe offre un accompagnement sur mesure.'
        }
      ],
      setupTitle: 'Comment fonctionne la configuration en événement',
      setupSubtitle: 'Combinez écrans de salle et relais mobile par code QR en trois étapes.',
      setupSteps: [
        {
          step: '01',
          title: 'Récupérez le flux voix de la console de salle',
          description: 'Branchez une sortie auxiliaire regroupant les microphones de scène et de salle dans votre ordinateur de sous-titrage via une carte son USB.'
        },
        {
          step: '02',
          title: 'Affichez votre code QR aux portes et à l’écran',
          description: 'Posez nos affiches aux portes et projetez la diapositive d’accueil pour que les participants connectent leur téléphone avant le début.'
        },
        {
          step: '03',
          title: 'Alimentez les écrans de scène et le direct vidéo',
          description: 'Affichez les sous-titres sur les moniteurs de salle tout en les envoyant dans OBS Studio ou vMix pour le public à distance.'
        }
      ],
      printables: [
        {
          id: 'events-door-poster',
          title: 'Affiche pour portes de salle et table d’inscription',
          typeLabel: 'Affiche d’entrée de salle (PDF)',
          description: 'Installez à l’entrée des salles de conférence et à l’accueil avec votre code de salle et le code QR pour les participants.',
          fileUrl: '/files/printables/fr/evenements-affiche-entree-salle.pdf',
          hasQrAndRoomBox: true,
          defaultPosterHeadline: 'Balayez pour suivre les sous-titres sur votre téléphone',
          defaultPosterSubtitle: 'Suivez les conférences, tables rondes et périodes de questions en temps réel depuis votre siège.',
          defaultSteps: [
            'Balayez le code QR ci-dessus ou ouvrez https://zipcaptions.app dans votre navigateur mobile.',
            'Entrez le code de diffusion de la salle indiqué ci-dessus.',
            'Ajustez la taille du texte et le contraste, ou activez la traduction dans Google Chrome.'
          ]
        },
        {
          id: 'events-table-card',
          title: 'Chevalet de table ronde et carte de porte-badge',
          typeLabel: 'Carte de table et cocarde (PDF)',
          description: 'Disposez sur les tables de conférence ou imprimez en petit format pour les porte-badges afin que chacun puisse se connecter depuis sa place.',
          fileUrl: '/files/printables/fr/evenements-chevalet-table-et-badge.pdf',
          hasQrAndRoomBox: true,
          defaultPosterHeadline: 'Carte de table : Sous-titres en direct à votre place',
          defaultPosterSubtitle: 'Lisez les sous-titres clairement sur votre propre téléphone intelligent, tablette ou portable.',
          defaultSteps: [
            'Ouvrez https://zipcaptions.app ou balayez le code QR.',
            'Entrez le code de diffusion de la séance indiqué ci-dessus.',
            'Choisissez le mode sombre dans les paramètres pour le confort visuel de votre table.'
          ]
        },
        {
          id: 'events-preshow-slide',
          title: 'Diapositive d’accueil avant la séance',
          typeLabel: 'Visuel de projection avant séance (PDF)',
          description: 'Affichez sur le projecteur principal pendant l’entrée du public pour indiquer comment se connecter et rappeler d’utiliser les microphones lors des questions.',
          fileUrl: '/files/printables/fr/evenements-diapositive-projecteur.pdf',
          hasQrAndRoomBox: true,
          defaultPosterHeadline: 'Bienvenue ! Le sous-titrage en direct est activé',
          defaultPosterSubtitle: 'Connectez votre téléphone ou votre ordinateur portable avant le début de la présentation.',
          defaultSteps: [
            'Balayez le code QR ou visitez https://zipcaptions.app et entrez le code de la salle.',
            'Personnalisez la taille de police, le contraste ou la traduction dans Chrome.',
            'Intervenants : Merci de toujours parler dans le microphone lors des questions du public.'
          ]
        },
        {
          id: 'events-av-checklist',
          title: 'Liste de contrôle pour régisseurs et équipe AV',
          typeLabel: 'Liste de vérification production (PDF)',
          description: 'Une liste technique couvrant le bus audio voix, les écrans de scène, le test QR, la liaison vMix/OBS et la configuration Stream Deck.',
          fileUrl: '/files/printables/fr/evenements-liste-controle-equipe-av.pdf',
          hasQrAndRoomBox: false
        }
      ],
      defaultOrgPlaceholder: 'Auditorium principal',
      defaultRoomCodePlaceholder: '76-aqz5-pf77',
      videos: [
        {
          youtubeId: 'OXpaiEtECmI',
          title: 'Diffuser les sous-titres sur les téléphones des participants',
          description: 'Voyez comment un code de salle permet aux participants de suivre la conférence sur leur téléphone, tablette ou portable.',
          uploadDate: '2024-06-01'
        },
        {
          youtubeId: 'xMFm8ToDeU4',
          title: 'Contrôle matériel avec Stream Deck et Companion',
          description: 'Comment les équipes techniques pilotent Zip Captions depuis un Elgato Stream Deck avec Bitfocus Companion.',
          uploadDate: '2025-01-15'
        },
        {
          youtubeId: 'WVt2UjV5LFk',
          title: 'Traduction en temps réel pour les congrès multilingues',
          description: 'Démonstration de la traduction gratuite des sous-titres en direct dans Google Chrome.',
          uploadDate: '2026-10-21'
        }
      ],
      storiesTitle: 'Adopté par les producteurs d’événements et ingénieurs vidéo',
      stories: [
        {
          quote: 'Recommandé par les ingénieurs de production en direct recherchant un flux navigateur à faible latence pour les écrans de scène et mélangeurs vidéo.',
          author: 'Ingénieurs de production en direct',
          role: 'Communauté r/VIDEOENGINEERING',
          linkUrl: '/fr/testimonial',
          linkText: 'Lire les retours de la communauté'
        },
        {
          quote: 'Il se distingue par sa capacité à diffuser des sous-titres sur des appareils personnels, améliorant la précision et la discrétion dans les classes, les lieux de culte et les salles de conférence.',
          author: 'Dan Mullins',
          role: 'Article dans The Pearson News',
          linkUrl: '/fr/press',
          linkText: 'Lire l’article'
        }
      ],
      relatedLinks: [
        {
          title: 'Devis sur mesure pour événements et surtitrage théâtral',
          description: 'Demandez une soumission pour le sous-titrage clé en main ou le surtitrage de théâtre.',
          url: '/fr/live-event-quotes'
        },
        {
          title: 'Organisation d’événements en personne et hybrides',
          description: 'Diffusion multi-salles et production technique par l’équipe de Solutions Zip.',
          url: '/fr/events'
        },
        {
          title: 'Zip Captions Companion (Stream Deck)',
          description: 'Automatisez le contrôle des sous-titres depuis votre régie de scène.',
          url: '/fr/zipcaptionscompanion'
        }
      ],
      faqs: [
        {
          question: 'Les participants peuvent-ils lire sur leur téléphone pendant que nous projetons aussi sur scène ?',
          answer: 'Oui. Vous pouvez afficher la fenêtre principale de Zip Captions sur un projecteur ou moniteur de scène pendant que le mode Broadcast transmet simultanément le texte aux téléphones des participants.'
        },
        {
          question: 'Quelle est la différence entre le sous-titrage automatisé et le surtitrage théâtral ?',
          answer: 'Le sous-titrage automatisé utilise la reconnaissance vocale pour les conférences et échanges spontanés. Pour le théâtre et les spectacles écrits, notre équipe précharge votre texte et déclenche manuellement chaque réplique au rythme exact des comédiens.'
        },
        {
          question: 'Comment s’assurer que les questions du public sont bien sous-titrées ?',
          answer: 'Faites toujours circuler un microphone sans fil dans la salle pour les questions du public (ou demandez à l’animateur de répéter la question dans son micro) afin que le son parvienne à l’ordinateur de sous-titrage.'
        },
        {
          question: 'Pouvons-nous engager Solutions Zip pour gérer la diffusion et le sous-titrage de notre congrès ?',
          answer: 'Oui. Consultez notre page Devis pour événements en direct ou notre page Événements pour recevoir une proposition adaptée.'
        }
      ]
    },

    // 5. PUBLIC SECTOR & SENIORS (FR)
    {
      slug: 'public-sector',
      navLabel: 'Secteur public et aînés',
      categoryLabel: 'Municipalités, conseils municipaux, bibliothèques et centres des aînés',
      title: 'Zip Captions pour le secteur public et les centres des aînés',
      seoTitle: 'Sous-titrage en direct gratuit pour séances municipales, assemblées et aînés | Solutions Zip',
      description: 'Rendez les séances du conseil municipal, assemblées publiques, bibliothèques et activités pour aînés accessibles grâce au sous-titrage gratuit et à l’exportation SRT/TXT.',
      keywords: 'sous-titrage en direct conseil municipal, réunion publique accessible parole en texte, sous-titres centres des aînés et bibliothèques, sous-titrage diffusion municipale gratuit',
      summaryCardDescription: 'Aidez les citoyens et les aînés à suivre les séances du conseil, conférences en bibliothèque et forums publics sur grand écran ou sur tablette avec exportation SRT et TXT.',
      reasonsTitle: 'Pourquoi les municipalités, bibliothèques et centres des aînés utilisent Zip Captions',
      reasonsSubtitle: 'Une participation citoyenne accessible sans lourdeur administrative.',
      reasons: [
        {
          title: 'Rend les séances publiques et conseils municipaux faciles à suivre',
          description: 'L’acoustique des salles municipales et communautaires est souvent difficile pour les personnes malentendantes. Les sous-titres sur grand écran permettent à chacun de suivre les délibérations.'
        },
        {
          title: 'Pensé pour les aînés sans téléchargement d’application',
          description: 'Les aînés lisent des sous-titres en très gros caractères sur le téléviseur de la salle ou sur une tablette iPad sans avoir à installer d’application ni retenir de mot de passe.'
        },
        {
          title: 'Exportation immédiate pour les greffiers (.TXT et .SRT)',
          description: 'En fin de séance, téléchargez un fichier texte (.txt) pour appuyer la rédaction du procès-verbal, ainsi que des fichiers .srt ou .vtt horodatés pour l’archive vidéo.'
        },
        {
          title: 'Compatible avec la télévision communautaire et YouTube',
          description: 'Les équipes de médias communautaires relient directement Zip Captions à OBS Studio ou vMix pour la diffusion sur le câble local et sur le web.'
        },
        {
          title: 'Aucune démarche d’approvisionnement complexe',
          description: 'Le sous-titrage de base dans le navigateur est 100 % gratuit et fonctionne sur les ordinateurs portables municipaux existants.'
        },
        {
          title: 'Confidentialité locale dans le navigateur',
          description: 'La transcription demeure dans la mémoire locale du navigateur durant la séance et n’est pas conservée sur des serveurs infonuagiques externes.'
        }
      ],
      setupTitle: 'Comment fonctionne l’installation municipale ou communautaire',
      setupSubtitle: 'Une mise en place simple pour les greffiers, bibliothécaires et animateurs.',
      setupSteps: [
        {
          step: '01',
          title: 'Reliez un portable au téléviseur ou projecteur de la salle',
          description: 'Branchez un ordinateur portable à l’écran de la salle du conseil et reliez la sortie de la console de sonorisation (ou un microphone sans fil).'
        },
        {
          step: '02',
          title: 'Affichez en gros caractères et partagez le code de salle',
          description: 'Ouvrez zipcaptions.app en plein écran à fort contraste et distribuez notre fiche en gros caractères aux citoyens qui préfèrent lire sur une tablette.'
        },
        {
          step: '03',
          title: 'Exportez les fichiers TXT et SRT avant de fermer',
          description: 'À la levée de l’assemblée, cliquez sur Exporter pour sauvegarder vos notes texte et les sous-titres vidéo SRT.'
        }
      ],
      disclaimerNote: 'Note sur l’accessibilité civique : Zip Captions fournit un sous-titrage automatisé en direct pour élargir l’accès quotidien lors des activités communautaires et réunions publiques. Lorsqu’une demande officielle d’accommodement exige un sténographe CART ou un interprète en langue des signes certifié en vertu des lois sur l’accessibilité, l’organisme public doit fournir ces services certifiés.',
      printables: [
        {
          id: 'public-notice-poster',
          title: 'Affiche d’accessibilité pour réunion publique',
          typeLabel: 'Affiche pour salle du conseil et bibliothèque (PDF)',
          description: 'Affichez à l’entrée des salles municipales et bibliothèques pour informer les citoyens que les sous-titres sont affichés sur écran et disponibles sur mobile.',
          fileUrl: '/files/printables/fr/secteur-public-affiche-reunion.pdf',
          hasQrAndRoomBox: true,
          defaultPosterHeadline: 'Réunion publique accessible : Sous-titrage en direct',
          defaultPosterSubtitle: 'Suivez la séance d’aujourd’hui sur notre écran principal ou sur votre propre téléphone ou tablette.',
          defaultSteps: [
            'Lisez les sous-titres en direct sur l’écran principal à l’avant de la salle.',
            'Ou balayez le code QR ci-dessus / visitez https://zipcaptions.app sur votre téléphone.',
            'Entrez le code de diffusion de la séance ci-dessus et grossissez la taille des lettres.'
          ]
        },
        {
          id: 'public-senior-handout',
          title: 'Fiche en très gros caractères pour centres des aînés',
          typeLabel: 'Guide simplifié pour aînés (PDF)',
          description: 'Un feuillet épuré conçu spécialement pour les aînés expliquant en 3 étapes simples comment lire les sous-titres sur un iPad, une tablette ou un téléphone.',
          fileUrl: '/files/printables/fr/secteur-public-fiche-gros-caracteres-aines.pdf',
          hasQrAndRoomBox: true,
          defaultPosterHeadline: 'Guide simple : Lire les sous-titres sur votre téléphone ou iPad',
          defaultPosterSubtitle: 'Aucune application à installer ni mot de passe requis. Suivez ces 3 étapes faciles.',
          defaultSteps: [
            'ÉTAPE 1 : Ouvrez Safari ou Chrome sur votre téléphone ou iPad et écrivez zipcaptions.app.',
            'ÉTAPE 2 : Entrez le code de la salle d’aujourd’hui indiqué dans l’encadré ci-dessus.',
            'ÉTAPE 3 : Touchez les paramètres pour afficher de très gros caractères faciles à lire.'
          ]
        },
        {
          id: 'public-clerk-guide',
          title: 'Guide d’installation et d’exportation pour greffiers et médias',
          typeLabel: 'Guide en 1 page (.SRT / .VTT / .TXT) (PDF)',
          description: 'Instructions pour les greffiers municipaux et télévisions communautaires sur le branchement audio et l’exportation des fichiers .txt, .srt et .vtt en fin de séance.',
          fileUrl: '/files/printables/fr/secteur-public-guide-exportation-greffier.pdf',
          hasQrAndRoomBox: false
        }
      ],
      defaultOrgPlaceholder: 'Salle du conseil municipal',
      defaultRoomCodePlaceholder: '76-aqz5-pf77',
      videos: [
        {
          youtubeId: 'OXpaiEtECmI',
          title: 'Diffuser les sous-titres aux citoyens présents dans la salle',
          description: 'Voyez comment les citoyens peuvent suivre une assemblée publique sur leur propre tablette ou téléphone en plus de l’écran principal.',
          uploadDate: '2024-06-01'
        },
        {
          youtubeId: 'sF7n1X1oIFY',
          title: 'Exporter les transcriptions de séances en SRT, VTT et TXT',
          description: 'Comment sauvegarder le texte brut et les sous-titres vidéo horodatés à la fin d’une séance municipale.',
          uploadDate: '2024-06-01'
        }
      ],
      storiesTitle: 'L’inclusion municipale en action',
      stories: [
        {
          quote: 'Hadley Media était au centre des aînés aujourd’hui pour l’événement Coffee with a Cop afin d’offrir le sous-titrage aux résidents malentendants. Grâce à une application gratuite appelée Zip Captions, nous offrons aux citoyens une façon supplémentaire de participer à la vie municipale.',
          author: 'Hadley Media et Hadley Senior Center',
          role: 'Forum public municipal, Hadley (Massachusetts)',
          linkUrl: '/fr/testimonial',
          linkText: 'Voir l’étude de cas de Hadley'
        }
      ],
      relatedLinks: [
        {
          title: 'Guide de la carte son USB',
          description: 'Reliez la console de sonorisation de votre salle du conseil directement à un ordinateur portable.',
          url: '/soundcard'
        },
        {
          title: 'Devis pour événements publics et congrès',
          description: 'Besoin d’un soutien technique dédié pour une assemblée annuelle ou un sommet public ?',
          url: '/fr/live-event-quotes'
        }
      ],
      faqs: [
        {
          question: 'Pouvons-nous exporter des sous-titres pour les vidéos YouTube de nos séances du conseil ?',
          answer: 'Oui. Avant de fermer Zip Captions à la fin de la séance, cliquez sur Exporter et choisissez .SRT ou .VTT pour obtenir un fichier de sous-titres horodaté prêt pour YouTube ou la diffusion télévisée.'
        },
        {
          question: 'Est-ce facile à lire pour les personnes âgées dans un centre des aînés ?',
          answer: 'Oui. Vous pouvez afficher Zip Captions sur un grand téléviseur à l’avant de la salle avec de très gros caractères à fort contraste, et distribuer notre guide en 3 étapes à ceux qui préfèrent lire de près sur un iPad.'
        },
        {
          question: 'La municipalité doit-elle payer un abonnement pour utiliser Zip Captions ?',
          answer: 'Non. Le sous-titrage standard dans le navigateur et l’exportation des transcriptions (.txt, .srt, .vtt) sont 100 % gratuits et ne nécessitent aucune inscription.'
        },
        {
          question: 'Comment capter plusieurs élus qui parlent chacun dans leur microphone ?',
          answer: 'Reliez une sortie auxiliaire de la console de mixage de la salle du conseil (qui regroupe tous les micros actifs) à l’ordinateur portable au moyen d’une carte son USB prête à l’emploi.'
        }
      ]
    },

    // 6. BROADCAST & STREAMING (FR)
    {
      slug: 'broadcast-and-streaming',
      navLabel: 'Diffusion et streaming',
      categoryLabel: 'OBS Studio, vMix, Twitch, sports en direct et production vidéo',
      title: 'Zip Captions pour la diffusion et le streaming en direct',
      seoTitle: 'Sous-titres en direct gratuits pour OBS Studio, vMix, Twitch et SRT | Solutions Zip',
      description: 'Ajoutez des sous-titres en temps réel dans OBS Studio par WebSockets, dans vos titres vMix par API HTTP, sur le clavardage Twitch et sur Stream Deck sans surcharge GPU.',
      keywords: 'sous-titres en direct obs websocket gratuit, sous-titrage direct vmix titre, extension sous-titres clavardage twitch, contrôle sous-titres stream deck bitfocus companion, exporter sous-titres srt vtt navigateur',
      summaryCardDescription: 'Envoyez des sous-titres en direct dans OBS Studio par WebSockets, dans les titres vMix sur le réseau local, sur Twitch et sur Bitfocus Companion avec exportation SRT/VTT.',
      reasonsTitle: 'Pourquoi les diffuseurs, créateurs et ingénieurs vidéo utilisent Zip Captions',
      reasonsSubtitle: 'Une chaîne de texte numérique propre pour le direct, sans rognage de fenêtre ni incrustation sur fond vert.',
      reasons: [
        {
          title: 'Intégration native par WebSockets dans OBS Studio',
          description: 'Connectez-vous directement à OBS Studio (version 28+) grâce au serveur WebSocket intégré pour envoyer les sous-titres en direct vers Twitch et YouTube Live.'
        },
        {
          title: 'Passerelle directe vers les titres graphiques vMix',
          description: 'Notre extension Chrome gratuite Zip Captions vMix transmet les données texte directement à l’API Web Controller de vMix en local (localhost) ou sur votre réseau LAN.'
        },
        {
          title: 'Contrôle matériel Elgato Stream Deck et Companion',
          description: 'Utilisez le module officiel Zip Captions dans Bitfocus Companion pour piloter le démarrage, l’arrêt, l’effacement et le mode diffusion sur vos boutons physiques.'
        },
        {
          title: 'Relais dans le clavardage Twitch avec Zip Connect',
          description: 'Les créateurs et modérateurs publient les sous-titres en direct directement dans le clavardage Twitch avec l’extension légère Zip Connect, sans jeton de robot.'
        },
        {
          title: 'Aucune surcharge sur votre carte graphique (GPU)',
          description: 'Comme Zip Captions fonctionne dans un onglet et transmet uniquement des chaînes de texte par WebSockets ou HTTP, votre GPU reste entièrement dédié à l’encodage vidéo.'
        },
        {
          title: 'Exportation immédiate en SRT et VTT pour vos rediffusions',
          description: 'Dès la fin du direct, téléchargez les fichiers de sous-titres horodatés .srt ou .vtt en un clic pour Premiere Pro, DaVinci Resolve ou YouTube.'
        }
      ],
      setupTitle: 'Comment fonctionne la configuration en studio ou en régie',
      setupSubtitle: 'Reliez votre bus vocal à OBS, vMix ou Twitch en moins de deux minutes.',
      setupSteps: [
        {
          step: '01',
          title: 'Isolez votre microphone ou bus de commentaires',
          description: 'Sélectionnez uniquement votre microphone de diffusion ou le canal vocal de votre interface audio dans Zip Captions afin d’exclure le son du jeu ou la musique.'
        },
        {
          step: '02',
          title: 'Connectez OBS WebSockets, vMix ou Zip Connect',
          description: 'Entrez le port et mot de passe WebSocket d’OBS, configurez l’extension vMix (`127.0.0.1` ou IP LAN) ou activez Zip Connect pour Twitch.'
        },
        {
          step: '03',
          title: 'Passez en direct et exportez vos sous-titres VOD',
          description: 'Pilotez les sous-titres depuis votre Stream Deck et téléchargez votre fichier .SRT ou .VTT dès la fin de l’émission.'
        }
      ],
      printables: [
        {
          id: 'broadcast-studio-sign',
          title: 'Affiche de studio et cabine « EN DIRECT : Sous-titrage activé »',
          typeLabel: 'Affiche pour studio et régie (PDF)',
          description: 'Affichez dans les cabines de commentateurs et studios de baladodiffusion pour rappeler aux invités que les sous-titres sont actifs et partager les bonnes pratiques au micro.',
          fileUrl: '/files/printables/fr/diffusion-affiche-studio-en-direct.pdf',
          hasQrAndRoomBox: true,
          defaultPosterHeadline: 'EN DIRECT : Sous-titrage automatisé activé',
          defaultPosterSubtitle: 'Cette diffusion utilise Zip Captions pour transmettre des sous-titres en temps réel aux spectateurs.',
          defaultSteps: [
            'Gardez une distance constante et restez bien dans l’axe de votre microphone.',
            'Évitez de parler en même temps lors des échanges rapides pour une transcription nette.',
            'Utilisez votre bouton sourdine (Mute) lorsque vous toussez ou parlez hors d’onde.'
          ]
        },
        {
          id: 'broadcast-network-cheatsheet',
          title: 'Aide-mémoire réseau OBS, vMix, Twitch et Companion',
          typeLabel: 'Fiche technique de régie en 1 page (PDF)',
          description: 'Une fiche de référence technique couvrant les ports WebSocket d’OBS, les paramètres IP de vMix, le relais Twitch et les configurations à deux ordinateurs sur réseau LAN.',
          fileUrl: '/files/printables/fr/diffusion-aide-memoire-reseau-obs-vmix.pdf',
          hasQrAndRoomBox: false
        },
        {
          id: 'broadcast-prestream-checklist',
          title: 'Liste de contrôle en 5 minutes avant la mise en onde',
          typeLabel: 'Liste de vérification avant direct (PDF)',
          description: 'Une liste de vérification rapide avant d’entrer en onde : isolation de la piste vocale, choix du dialecte régional, zone de sécurité visuelle et exportation SRT.',
          fileUrl: '/files/printables/fr/diffusion-liste-controle-avant-direct.pdf',
          hasQrAndRoomBox: false
        }
      ],
      defaultOrgPlaceholder: 'Régie Studio A',
      defaultRoomCodePlaceholder: '76-aqz5-pf77',
      videos: [
        {
          youtubeId: 'QYz4Brh66YA',
          title: 'Diffusion en direct avec OBS Studio et Zip Captions',
          description: 'Guide complet montrant comment connecter Zip Captions à OBS Studio par WebSockets pour des sous-titres en temps réel.',
          uploadDate: '2024-06-01'
        },
        {
          youtubeId: 'xMFm8ToDeU4',
          title: 'Automatiser les sous-titres avec Stream Deck et Companion',
          description: 'Comment configurer le module officiel Zip Captions dans Bitfocus Companion pour un contrôle matériel en régie.',
          uploadDate: '2025-01-15'
        },
        {
          youtubeId: 'sF7n1X1oIFY',
          title: 'Exporter des sous-titres SRT et VTT horodatés',
          description: 'Téléchargez des fichiers SRT et WebVTT prêts à l’emploi à la fin de votre direct pour le montage VOD.',
          uploadDate: '2024-06-01'
        }
      ],
      storiesTitle: 'Adopté par les créateurs, commentateurs sportifs et ingénieurs',
      stories: [
        {
          quote: 'J’ai récemment découvert la merveilleuse application Zip Captions et à quel point il a été facile de l’intégrer à la diffusion en direct de notre équipe @chicagoknockouts.',
          author: 'Diffusion sportive Chicago Knockouts Roller Derby',
          role: 'Production en direct (@necrohell.bsky.social)',
          linkUrl: '/fr/testimonial',
          linkText: 'Lire les témoignages de diffuseurs'
        },
        {
          quote: 'Ressource officielle sur le forum OBS Project avec plus de 2 780 téléchargements et plus de 840 utilisateurs actifs des extensions Chrome pour vMix et fenêtres superposées.',
          author: 'Communauté OBS et diffusion vidéo',
          role: 'Adoption vérifiée',
          linkUrl: '/fr/testimonial',
          linkText: 'Voir les statistiques de la communauté'
        }
      ],
      relatedLinks: [
        {
          title: 'Extension Passerelle vMix Zip Captions',
          description: 'Envoyez le texte des sous-titres directement dans vos titres vMix en local ou sur le réseau LAN.',
          url: '/fr/zipvmix'
        },
        {
          title: 'Extension Zip Connect pour Twitch',
          description: 'Publiez les sous-titres en direct directement dans le clavardage de votre chaîne Twitch.',
          url: '/fr/zipconnect'
        },
        {
          title: 'Zip Captions Companion (Stream Deck)',
          description: 'Pilotez vos sous-titres depuis votre Elgato Stream Deck avec Bitfocus Companion.',
          url: '/fr/zipcaptionscompanion'
        }
      ],
      faqs: [
        {
          question: 'Puis-je exécuter Zip Captions sur un portable séparé de mon PC principal OBS ou vMix ?',
          answer: 'Oui. Comme OBS WebSockets et l’extension Zip Captions vMix communiquent sur le réseau local, vous pouvez faire tourner Zip Captions sur un portable secondaire et entrer l’adresse IP LAN de votre machine de diffusion principale.'
        },
        {
          question: 'Zip Captions consomme-t-il des ressources GPU pendant un jeu ou un encodage vidéo ?',
          answer: 'Non. Le sous-titrage dans le navigateur utilise très peu de processeur et transmet uniquement de légères chaînes de texte vers OBS ou vMix, laissant votre carte graphique entièrement libre.'
        },
        {
          question: 'Comment éviter que les effets sonores d’un jeu ou la musique ne soient transcrits ?',
          answer: 'Configurez Zip Captions pour écouter uniquement l’entrée de votre microphone ou votre bus de commentaires plutôt que le mixage audio global du bureau.'
        },
        {
          question: 'Puis-je télécharger des sous-titres SRT après mon direct pour YouTube ou Premiere Pro ?',
          answer: 'Oui. Gardez votre onglet Zip Captions ouvert pendant la diffusion et cliquez sur Exporter à la fin pour télécharger les fichiers .srt ou .vtt horodatés.'
        }
      ]
    }
  ]
};

export function getSectorData(locale: 'en' | 'fr', slug: string): SectorData | undefined {
  return sectorsData[locale].find((s) => s.slug === slug);
}

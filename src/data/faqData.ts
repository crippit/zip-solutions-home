// Shared FAQ content for the /faq (EN) and /fr/faq (FR) pages.
export interface FaqEntry { question: string; answer: string; }

// English
export const faqsEn: FaqEntry[] = [
  {
    question: "Our school board IT department blocks software downloads and refuses to sign vendor student-data agreements. Can teachers still use Zip Captions or EasySpeak?",
    answer: "Yes. Both Zip Captions and Zip EasySpeak run 100% inside standard web browsers (Chrome, Safari, and Edge for free captioning; any browser for viewing or EasySpeak) with zero software or MSI packages to install, require zero student accounts or logins, and never store audio or transcripts on external servers. Live transcripts stay in local browser RAM and vanish when the tab closes—meeting strict Quebec Law 25, FIPPA, FERPA, and GDPR privacy rules out of the box."
  },
  {
    question: "Why do live captions miss words when I use my laptop's built-in microphone from across a noisy classroom or church sanctuary?",
    answer: "A laptop's built-in microphone is engineered for someone sitting 18 inches away, so room echo and background chatter will degrade any speech-to-text engine. In a classroom, clipping on an inexpensive wireless lapel (lavalier) mic or routing your Phonak Roger receiver into the laptop transforms accuracy immediately. In a church sanctuary or auditorium, send an Aux or Line-Out feed of the speaker's vocal mic from your soundboard into your laptop via a simple USB audio interface."
  },
  {
    question: "When I present Google Slides or PowerPoint in full-screen on a projector or SMART Board, it covers up my browser tab. How do I keep captions visible on top?",
    answer: "Click the Picture-in-Picture (PiP) button inside the Zip Captions toolbar before launching your slideshow. That detaches your live captions into a resizable, always-on-top floating window that hovers cleanly over full-screen PowerPoint, Google Slides, PDFs, or videos. You can also use our free ZipPanel Chrome extension."
  },
  {
    question: "Hard-of-hearing or ESL students often refuse to sit in the front row or wear bulky gear because they don't want to feel singled out. How do you solve that?",
    answer: "With Zip Captions Broadcast mode, you share a permanent Room Code or QR code with the whole room. Any student can discreetly follow the live transcript on their own Chromebook, tablet, or phone from any desk, adjust font size, switch on the Lexend dyslexia-friendly font, or enable free Chrome On-Device AI translation into their home language on their own screen."
  },
  {
    question: "We used WebCaptioner before it shut down, and our AV booth is run by rotating volunteers. Will they have to set up new links or reconfigure OBS/vMix every week?",
    answer: "No. Zip Captions gives you a permanent, static Broadcast Room Code. You print your QR code pew cards or lobby posters once, configure your OBS WebSocket or free Zip vMix Title bridge once, and every week your volunteer simply opens zipcaptions.app and clicks Start."
  },
  {
    question: "Where do you provide on-site event production, custom live captioning, and Google for Education PD training versus remote services?",
    answer: "We are based near Montreal, Quebec, Canada. We provide on-site hybrid event production, live event & theatre surtitling, assistive listening AV consultancy, and in-person Google for Education workshops across Greater Montreal, Quebec, and Canada—while our browser apps, virtual event captioning, and remote PD sessions are available worldwide."
  }
];

// French
export const faqsFr: FaqEntry[] = [
  {
    question: "Le service informatique (TI) de notre centre de services scolaire bloque l'installation de logiciels et refuse les ententes de partage de données élèves. Peut-on quand même utiliser Zip Captions ou EasySpeak ?",
    answer: "Oui. Zip Captions et Zip EasySpeak fonctionnent à 100 % dans le navigateur web (Chrome, Safari et Edge pour le sous-titrage gratuit ; n'importe quel navigateur pour la lecture ou EasySpeak) sans aucun logiciel à installer, sans création de compte élève et sans aucun stockage audio ou texte sur des serveurs externes. La transcription reste uniquement dans la mémoire vive (RAM) locale du navigateur et disparaît dès la fermeture de l'onglet, respectant ainsi la Loi 25 au Québec, la LPRPDE, la FERPA et le RGPD."
  },
  {
    question: "Pourquoi les sous-titres manquent-ils des mots lorsque j'utilise le micro intégré de mon ordinateur portable au fond d'une classe bruyante ou d'une église ?",
    answer: "Le micro interne d'un ordinateur portable est conçu pour une personne située à moins de 50 cm ; l'écho et le brouhaha nuisent donc à n'importe quel moteur vocal. En classe, l'utilisation d'un simple micro-cravate sans fil ou le branchement de votre récepteur Phonak Roger à l'ordinateur transforme immédiatement la précision. Dans un lieu de culte ou un auditorium, reliez une sortie auxiliaire (Aux/Line-Out) de votre console de son à l'ordinateur via une carte son USB."
  },
  {
    question: "Lorsque je présente un diaporama Google Slides ou PowerPoint en plein écran sur mon TNI ou projecteur, il cache l'onglet des sous-titres. Comment garder les sous-titres visibles par-dessus ?",
    answer: "Cliquez sur le bouton Image dans l'image (Picture-in-Picture) dans la barre d'outils de Zip Captions avant de lancer votre présentation. Vos sous-titres se détachent alors dans une fenêtre flottante toujours au premier plan qui reste visible par-dessus PowerPoint, Google Slides, vos PDF ou vos vidéos en plein écran. Vous pouvez aussi utiliser notre extension gratuite ZipPanel."
  },
  {
    question: "Les élèves malentendants ou allophones refusent souvent de s'asseoir au premier rang pour ne pas être stigmatisés. Comment résolvez-vous ce problème ?",
    answer: "Grâce au mode Diffusion (Broadcast) de Zip Captions, vous partagez un code de salle fixe ou un code QR avec toute la classe. N'importe quel élève peut suivre discrètement les sous-titres en direct sur son propre Chromebook, sa tablette ou son téléphone depuis sa place, ajuster la taille du texte, activer la police Lexend adaptée à la dyslexie ou activer la traduction locale gratuite par l'IA de Chrome dans sa langue maternelle."
  },
  {
    question: "Nous utilisions WebCaptioner avant sa fermeture et notre régie est gérée par des bénévoles chaque semaine. Faut-il créer un nouveau lien ou reconfigurer OBS/vMix à chaque séance ?",
    answer: "Non. Zip Captions vous attribue un code de salle permanent et fixe. Vous imprimez vos cartes de bancs ou affiches avec code QR une seule fois, vous configurez votre liaison OBS WebSocket ou l'extension gratuite Zip vMix une seule fois, et chaque semaine votre bénévole n'a qu'à ouvrir zipcaptions.app et cliquer sur Démarrer."
  },
  {
    question: "Dans quelles régions intervenez-vous sur place pour la production d'événements, le sous-titrage en direct et les formations Google pour l'éducation ?",
    answer: "Nous sommes basés dans le Grand Montréal (Québec, Canada). Nous assurons sur place la production d'événements hybrides, le sous-titrage et surtitrage en direct, le conseil audiovisuel et les formations Google pour l'éducation à Montréal, partout au Québec et à travers le Canada — tandis que nos applications web, diffusions virtuelles et formations à distance sont offertes dans le monde entier."
  }
];

const STORAGE_KEYS = {
  language: 'swasthyaSakhi.language',
  onboarding: 'swasthyaSakhi.onboarding',
  households: 'swasthyaSakhi.demoHouseholds'
};

const ROLE_PAGES = {
  worker: ['dashboard-page', 'visits-page', 'assistant-page', 'protocols-page', 'offline-page', 'onboarding-page'],
  supervisor: ['dashboard-page', 'visits-page', 'protocols-page', 'offline-page'],
  admin: ['dashboard-page', 'visits-page', 'assistant-page', 'protocols-page', 'offline-page', 'onboarding-page']
};

const HOUSEHOLD_CATEGORIES = [
  'Maternal health',
  'Newborn care',
  'General hygiene',
  'Follow-up',
  'Nutrition',
  'Community support',
  'Vaccination'
];

const DEMO_ACCOUNTS = [
  {
    email: 'worker.demo@example.com',
    password: 'WorkerDemo!2026',
    uid: 'demo-worker',
    role: 'worker',
    areaCodes: ['V-01', 'V-02', 'V-03']
  },
  {
    email: 'supervisor.demo@example.com',
    password: 'SupervisorDemo!2026',
    uid: 'demo-supervisor',
    role: 'supervisor',
    teamId: 'demo-team',
    areaCodes: ['V-01', 'V-02', 'V-03', 'V-04', 'V-05', 'V-06']
  },
  {
    email: 'admin.demo@example.com',
    password: 'AdminDemo!2026',
    uid: 'demo-admin',
    role: 'admin'
  }
];

const FALLBACK_PROTOCOLS = [
  {
    id: 'maternal-01',
    title: 'Maternal health check-in',
    category: 'Maternal health',
    description: 'Review pregnancy symptoms, attendance, and clear next steps for follow-up care.',
    safetyNote: 'Urgent symptoms should be escalated to a qualified clinician using local referral pathways.',
    sourceStatus: 'Illustrative demo',
    reviewStatus: 'Not yet reviewed'
  },
  {
    id: 'newborn-01',
    title: 'Newborn danger signs',
    category: 'Newborn health',
    description: 'Look for fever, poor feeding, breathing difficulty, jaundice, or unusual sleepiness.',
    safetyNote: 'Any serious newborn warning sign should trigger urgent referral and clinician review.',
    sourceStatus: 'Illustrative demo',
    reviewStatus: 'Not yet reviewed'
  },
  {
    id: 'emergency-01',
    title: 'Emergency referral pathway',
    category: 'Emergency referral',
    description: 'Escalate severe bleeding, sudden dizziness, breathing difficulty, or unconsciousness quickly.',
    safetyNote: 'This is a training example only; follow approved local emergency protocols.',
    sourceStatus: 'Illustrative demo',
    reviewStatus: 'Not yet reviewed'
  },
  {
    id: 'followup-01',
    title: 'Household follow-up routine',
    category: 'Household follow-up',
    description: 'Repeat reminders, confirm recent symptoms, and record the planned next step.',
    safetyNote: 'Do not record personal identifiers or real medical histories in this demo environment.',
    sourceStatus: 'Illustrative demo',
    reviewStatus: 'Not yet reviewed'
  },
  {
    id: 'hygiene-01',
    title: 'Hygiene and general health education',
    category: 'Hygiene and general health',
    description: 'Promote clean water, handwashing, waste management, and safe food handling.',
    safetyNote: 'This content is general education only and should not replace local public health guidance.',
    sourceStatus: 'Illustrative demo',
    reviewStatus: 'Not yet reviewed'
  },
  {
    id: 'data-01',
    title: 'Safe data recording',
    category: 'Safe data recording',
    description: 'Use synthetic IDs, brief notes, and approved workflows to protect privacy and clarity.',
    safetyNote: 'Do not store or upload real medical histories in local browser demos.',
    sourceStatus: 'Illustrative demo',
    reviewStatus: 'Not yet reviewed'
  },
  {
    id: 'offline-01',
    title: 'Offline workflows',
    category: 'Offline workflows',
    description: 'Support care when connectivity is limited by saving completed visits locally and checking the queue before sync.',
    safetyNote: 'Browser localStorage is not secure patient storage or a production backend.',
    sourceStatus: 'Illustrative demo',
    reviewStatus: 'Not yet reviewed'
  }
];

const EXAMPLE_PROMPTS = [
  {
    en: 'Pregnancy warning signs',
    te: 'సంతానోత్పత్తి సమస్యల కోసం జాగ్రత్తలు'
  },
  {
    en: 'Newborn warning signs',
    te: 'శిశువు హెచ్చరిక సంకేతాలు'
  },
  {
    en: 'Urgent referral',
    te: 'వివరమైన సూచనలు'
  },
  {
    en: 'Routine follow-ups',
    te: 'సాధారణ పర్యవేక్షణ'
  },
  {
    en: 'General hygiene and community care',
    te: 'సాధారణ పరిశుభ్రత మరియు సంఘ సంక్షేమం'
  },
  {
    en: 'Low-connectivity workflows',
    te: 'తక్కువ కనెక్టివిటీ కార్యచరణ'
  }
];

const translations = {
  en: {
    app: {
      subtitle: 'Frontline Health-Worker Companion',
      tagline: 'Reliable guidance. Safer communities. Even offline.'
    },
    nav: {
      dashboard: 'Dashboard',
      visits: 'Household Visits',
      assistant: 'Health Assistant',
      protocols: 'Health Protocols',
      sync: 'Offline & Sync',
      onboarding: 'Worker Orientation',
      logout: 'Log out'
    },
    language: { label: 'Language' },
    dashboard: {
      greetingLabel: 'Your workspace',
      greetingMorning: 'Good morning',
      greetingAfternoon: 'Good afternoon',
      greetingEvening: 'Good evening',
      prototypeNote: 'Local demo workspace',
      totalPlanned: 'Total planned households',
      completed: 'Completed households',
      remaining: 'Remaining households',
      followUp: 'Follow-up households',
      savedRecords: 'Demo household records',
      pendingSync: 'Records pending demo sync',
      upcomingVisits: 'Upcoming household visits',
      quickActions: 'Quick actions',
      actionOnboarding: 'Worker Orientation',
      actionAssistant: 'Health Assistant',
      actionVisits: 'Household Visits',
      actionProtocols: 'Health Protocols',
      actionSync: 'Offline & Sync',
      upcomingListTitle: 'Upcoming household visits',
      safetyHeading: 'Safety reminders',
      reminder1: 'Seek emergency help immediately for severe bleeding, breathing difficulty, unconsciousness, or sudden newborn distress.',
      reminder2: 'Use synthetic demo records only. Do not enter identifiable patient information.',
      reminder3: 'Use the approved local referral pathway for urgent cases and ask a clinician when unsure.',
      prototypeHeading: 'Prototype disclaimer',
      prototypeBody: 'This local demo uses synthetic household records and browser storage. It is not a secure or approved clinical system.'
    },
    safety: {
      kicker: 'Safety reminder',
      sidebarText: 'Follow approved local referral steps in emergencies. This demo is not a clinical decision tool.'
    },
    onboarding: {
      welcomeEyebrow: 'Welcome',
      title: 'Worker Orientation',
      welcomeIntro: 'SwasthyaSakhi helps frontline workers support families with simple health guidance, safer visit records, and clear next steps even when connection is weak.',
      checklistTitle: 'Quick-start checklist',
      checklist1: 'Choose preferred language.',
      checklist2: 'Complete the application tour.',
      checklist3: 'Open a sample household record.',
      checklist4: 'Try one example question.',
      checklist5: 'Read the safety disclaimer.',
      startTour: 'Start Tour',
      skipTour: 'Skip Tour',
      restartTour: 'Restart Tour',
      previous: 'Previous',
      next: 'Next',
      finish: 'Finish',
      stepLabel: 'Step',
      ofLabel: 'of',
      step1Title: 'Welcome to SwasthyaSakhi',
      step1Body: 'This app helps you organize household visits, support families safely, and follow simple health guidance even when connectivity is limited.',
      step2Title: 'Check the dashboard',
      step2Body: 'The dashboard shows total household visits, completed work, and follow-up needs. Use it as your daily starting point.',
      step3Title: 'Find household visits',
      step3Body: 'Open Household Visits to search by demo ID, filter by status, and open a family record before starting the visit.',
      step4Title: 'Record notes safely',
      step4Body: 'Write short, non-identifying notes. Do not add personal patient identifiers or medical histories in this demo.',
      step5Title: 'Ask the Health Assistant',
      step5Body: 'Use the Health Assistant for general routine questions. It provides sample guidance but is not a clinical decision tool.',
      step6Title: 'Use voice input and spoken responses',
      step6Body: 'If your browser supports it, use the microphone for speech input and the read-aloud button for spoken responses. It is optional and will not replace safe workflow steps.',
      step7Title: 'Check protocols and offline sync',
      step7Body: 'Review health reference cards, save work locally, and use the offline demo chapter to understand how local sync queues behave in low-connectivity settings.'
    },
    visits: {
      title: 'Household Visits',
      searchPlaceholder: 'Search by demo ID',
      filterAll: 'All statuses',
      filterPending: 'Pending',
      filterInProgress: 'In Progress',
      filterCompleted: 'Completed',
      filterFollowUp: 'Follow-up Required',
      filterCategoryAll: 'All categories',
      resetDemo: 'Reset to demo data',
      emptyDetail: 'Select a household to view details.',
      saveNote: 'Save note',
      startVisit: 'Start Visit',
      markComplete: 'Mark Completed',
      reopen: 'Reopen',
      followUpAction: 'Follow-up Required'
    },
    assistant: {
      title: 'Health Assistant',
      safetyBanner: 'Demo answers are illustrative and not clinically validated. Do not share identifiable patient information.',
      placeholder: 'Ask a question about routine care or warning signs',
      submit: 'Send',
      stopSpeech: 'Stop Speaking',
      readAloud: 'Read aloud',
      unknown: 'I cannot provide a clinical diagnosis or dose. Please consult approved local protocols or a qualified clinician.',
      urgentTitle: 'Urgent warning',
      dosageRefusal: 'I cannot provide medication doses or instructions. Please speak with an authorised clinician and follow approved local guidance.',
      supportNote: 'This demo is for training, not patient care decisions.'
    },
    protocols: {
      title: 'Health Protocols',
      searchPlaceholder: 'Search protocols',
      demoNote: 'Illustrative demo — official protocol not supplied'
    },
    offline: {
      title: 'Offline & Sync',
      savedRecords: 'Records in your workspace',
      pendingSync: 'Pending sync queue',
      info: 'This demo stores synthetic household records in this browser and shows a local sync queue. No server upload occurs.',
      warning: 'Browser storage is not secure for patient information. Demo accounts and role filtering are for local demonstration only.',
      simulateSync: 'Mark records synced',
      queueTitle: 'Pending sync records'
    },
    voice: {
      unsupported: 'Voice recognition is not available in this browser. You can continue with typed input.',
      listening: 'Listening...',
      processing: 'Processing speech...',
      noSpeech: 'No speech was detected. Please try again.',
      denied: 'Microphone access was denied. Please allow access or continue with text entry.',
      error: 'Voice input is unavailable right now. Please try again or continue with text.',
      unavailable: 'Speech synthesis is not supported in this browser.',
      stop: 'Stopped listening.'
    }
  },
  te: {
    app: {
      subtitle: 'ముందు పని చేస్తున్న ఆరోగ్య సహాయకుడు',
      tagline: 'నమ్మకమైన మార్గదర్శకత్వం. సురక్షిత సమాజం. ఆఫ్‌లైన్‌లో కూడా.'
    },
    nav: {
      dashboard: 'డ్యాష్‌బోర్డ్',
      visits: 'కుటుంబ సందర్శనలు',
      assistant: 'ఆరోగ్య సహాయకుడు',
      protocols: 'ఆరోగ్య మార్గదర్శకాలు',
      sync: 'ఆఫ్‌లైన్ మరియు సమకాలీకరణ',
      onboarding: 'కార్మిక సిద్ధాంతం',
      logout: 'లాగ్ అవుట్'
    },
    language: { label: 'భాష' },
    dashboard: {
      greetingLabel: 'మీ కార్యస్థలం',
      greetingMorning: 'శుభోదయం',
      greetingAfternoon: 'శుభ మధ్యాహ్నం',
      greetingEvening: 'శుభ సాయంత్రం',
      prototypeNote: 'స్థానిక డెమో కార్యస్థలం',
      totalPlanned: 'మొత్తం కేటాయించిన కుటుంబాలు',
      completed: 'పూర్తయిన కుటుంబాలు',
      remaining: 'మిగిలిన కుటుంబాలు',
      followUp: 'పర్యవేక్షణ అవసరమైన కుటుంబాలు',
      savedRecords: 'డెమో కుటుంబ రికార్డులు',
      pendingSync: 'డెమో సింక్ కోసం పెండింగ్ రికార్డులు',
      upcomingVisits: 'రాబోయే కుటుంబ సందర్శలు',
      quickActions: 'త్వరిత చర్యలు',
      actionOnboarding: 'కార్మిక సిద్ధాంతం',
      actionAssistant: 'ఆరోగ్య సహాయకుడు',
      actionVisits: 'కుటుంబ సందర్శనలు',
      actionProtocols: 'ఆరోగ్య మార్గదర్శకాలు',
      actionSync: 'ఆఫ్‌లైన్ మరియు సమకాలీకరణ',
      upcomingListTitle: 'రాబోయే కుటుంబ సందర్శలు',
      safetyHeading: 'సురక్షిత జాగ్రత్తలు',
      reminder1: 'తీవ్రమైన రక్తస్రావం, శ్వాస ఇబ్బంది, స్పృహ కోల్పోవడం లేదా శిశువు ప sudden distress ఉన్నప్పుడు వెంటనే అత్యవసర సహాయం పొందండి.',
      reminder2: 'ఈ డెమో లేదా బాహ్య వర్క్‌స్పేస్‌లో వ్యక్తిగత రోగి గుర్తింపు సమాచారం నమోదు చేయవద్దు.',
      reminder3: 'అత్యవసర పరిస్థితులలో అంగీకరించిన స్థానిక సూచనలు మరియు క్లినికల్ మార్గదర్శకాలను పాటించండి.',
      prototypeHeading: 'ప్రోటోటైప్ గమనిక',
      prototypeBody: 'ఈ స్థానిక డెమో సింథటిక్ కుటుంబ రికార్డులు మరియు బ్రౌజర్ నిల్వను ఉపయోగిస్తుంది. ఇది సురక్షితమైన లేదా ఆమోదించిన క్లినికల్ వ్యవస్థ కాదు.'
    },
    safety: {
      kicker: 'సురక్షిత గమనిక',
      sidebarText: 'అత్యవసర పరిస్థితుల్లో స్థానిక ఆమోదం పొందిన సూచనలను పాటించండి. ఈ డెమో క్లినికల్ నిర్ణయ సాధనం కాదు.'
    },
    onboarding: {
      welcomeEyebrow: 'స్వాగతం',
      title: 'కార్మిక సిద్దాంతం',
      welcomeIntro: 'స్వస్థ్యసఖి frontline workersకు సరళమైన ఆరోగ్య మార్గదర్శకాలు, సురక్షిత సందర్శన రికార్డులు మరియు తక్కువ కనెక్టివిటీ ఉన్నప్పటికీ స్పష్టమైన తదుపరి చర్యలను అందిస్తుంది.',
      checklistTitle: 'త్వరిత ప్రారంభ జాబితా',
      checklist1: 'ఇష్టమైన భాషను ఎంచుకోండి.',
      checklist2: 'యాప్ టూర్‌ను పూర్తి చేయండి.',
      checklist3: 'నమూనా కుటుంబ రికార్డ్‌ను తెరవండి.',
      checklist4: 'ఒక ఉదాహరణ ప్రశ్న అడగండి.',
      checklist5: 'సురక్షిత గమనికను చదవండి.',
      startTour: 'పరిచయ పర్యటన ప్రారంభించండి',
      skipTour: 'పర్యటనను దాటవేయండి',
      restartTour: 'పర్యటనను మళ్లీ ప్రారంభించండి',
      previous: 'మునుపటి',
      next: 'తదుపరి',
      finish: 'ముగింపు',
      stepLabel: 'దశ',
      ofLabel: 'లో',
      step1Title: 'SwasthyaSakhiకు స్వాగతం',
      step1Body: 'ఈ యాప్ కుటుంబ సందర్శనలను నిర్వహించడం, కుటుంబాలకు సురక్షితమైన సహాయాన్ని అందించడం మరియు కనెక్టివిటీ తక్కువగా ఉన్నప్పటికీ సరళమైన ఆరోగ్య మార్గదర్శకాలను అనుసరించడంలో సహాయపడుతుంది.',
      step2Title: 'డాష్‌బోర్డ్‌ను చూడండి',
      step2Body: 'డాష్‌బోర్డ్ మొత్తం సందర్శనలు, పూర్తయిన పనులు మరియు పర్యవేక్షణ అవసరమయ్యే వివరాలను చూపిస్తుంది. ఇది మీ రోజు ప్రారంభ బిందువు.',
      step3Title: 'కుటుంబ సందర్శనలను కనుగొనండి',
      step3Body: 'కుటుంబ సందర్శనలను తెరవండి, DEMO IDతో శోధించండి, స్థితిని ఫిల్టర్ చేసి, సందర్శన ప్రారంభించే ముందు కుటుంబ రికార్డును తెరవండి.',
      step4Title: 'నోట్స్‌ను సురక్షితంగా రికార్డ్ చేయండి',
      step4Body: 'చిన్న, గుర్తింపు లేని నోట్స్‌ మాత్రమే వ్రాయండి. ఈ డెమోలో వ్యక్తిగత రోగి గుర్తింపులు లేదా వైద్య చరిత్రను జోడించవద్దు.',
      step5Title: 'ఆరోగ్య సహాయకుడిని అడగండి',
      step5Body: 'రoutines ప్రశ్నలకు ఆరోగ్య సహాయకుడిని ఉపయోగించండి. ఇది నమూనా మార్గదర్శకాలను అందిస్తుంది, కానీ క్లినికల్ నిర్ణయ సాధనం కాదు.',
      step6Title: 'వాయిస్ ఇన్‌పుట్ మరియు చదివిన పదజాలాన్ని ఉపయోగించండి',
      step6Body: 'మీ బ్రౌజర్ మద్దతు చేస్తే మైక్రోఫోన్‌తో వాక్యాన్ని నమోదు చేయండి మరియు చదివిన ప్రతిస్పందన కోసం రీడ్-అవుట్ బటన్‌ను ఉపయోగించండి. ఇది ఐచ్చికం మరియు సురక్షిత వర్క్‌ఫ్లోను భర్తీ చేయదు.',
      step7Title: 'మార్గదర్శకాలు మరియు ఆఫ్‌లైన్ సింక్ చూడండి',
      step7Body: 'ఆరోగ్య సూచన కార్డులను చూడండి, పని స్థానికంగా సేవ్ చేయండి మరియు తక్కువ కనెక్టివిటీ వాతావరణంలో స్థానిక సింక్ క్యూలు ఎలా పనిచేస్తుందో అర్థం చేసుకోండి.'
    },
    visits: {
      title: 'కుటుంబ సందర్శనలు',
      searchPlaceholder: 'DEMO IDతో శోధించండి',
      filterAll: 'అన్ని స్థితులు',
      filterPending: 'పెండింగ్',
      filterInProgress: 'ప్రారంభమైంది',
      filterCompleted: 'పూర్తయింది',
      filterFollowUp: 'పర్యవేక్షణ అవసరం',
      filterCategoryAll: 'అన్ని వర్గాలు',
      resetDemo: 'డెమో డేటాకు పునరుద్ధరించండి',
      emptyDetail: 'వివరాలు చూడటానికి కుటుంబాన్ని ఎంచుకోండి.',
      saveNote: 'నోటు సేవ్ చేయండి',
      startVisit: 'సందర్శ ప్రారంభం',
      markComplete: 'పూర్తి చేసినట్లు గుర్తించండి',
      reopen: 'మళ్లీ ప్రారంభించండి',
      followUpAction: 'పర్యవేక్షణ అవసరం'
    },
    assistant: {
      title: 'ఆరోగ్య సహాయకుడు',
      safetyBanner: 'డెమో Answers are illustrative and not clinically validated. Do not share identifiable patient information.',
      placeholder: 'సాధారణ సంరక్షణ లేదా హెచ్చరిక సంకేతాల గురించి ప్రశ్న అడగండి',
      submit: 'పంపండి',
      stopSpeech: 'మాటను ఆపండి',
      readAloud: 'చదవండి',
      unknown: 'నేను క్లినికల్ నిర్ధారణ లేదా మందు మోతాదును అందించలేను. దయచేసి ఆమోదించబడిన స్థానిక మార్గదర్శకాలు లేదా అర్హతగల క్లినికర్‌ను సంప్రదించండి.',
      urgentTitle: 'వేగవంతమైన హెచ్చరిక',
      dosageRefusal: 'నేను మందు మోతాదు లేదా సూచనలను ఇవ్వలేను. అర్హత గల క్లినికర్‌తో మాట్లాడి ఆమోదించబడిన స్థానిక మార్గదర్శకాలను పాటించండి.',
      supportNote: 'ఈ డెమో శిక్షణ కోసం మాత్రమే है; రోగి సంరక్షణ నిర్ణయాలకు ఉపయోగించకూడదు.'
    },
    protocols: {
      title: 'ఆరోగ్య మార్గదర్శకాలు',
      searchPlaceholder: 'మార్గదర్శకాలను శోధించండి',
      demoNote: 'చిత్రాత్మక డెమో — అధికారిక ప్రోటోకాల్ అందుబాటులో లేదు'
    },
    offline: {
      title: 'ఆఫ్‌లైన్ మరియు సమకాలీకరణ',
      savedRecords: 'మీ కార్యస్థలంలోని రికార్డులు',
      pendingSync: 'బాకీ ఉన్న సింక్ క్యూట్',
      info: 'ఈ డెమో సింథటిక్ కుటుంబ రికార్డులను ఈ బ్రౌజర్‌లో నిల్వ చేసి స్థానిక సింక్ క్యూను చూపిస్తుంది. సర్వర్‌కు అప్‌లోడ్ జరగదు.',
      warning: 'రోగి సమాచారానికి బ్రౌజర్ నిల్వ సురక్షితం కాదు. డెమో ఖాతాలు మరియు పాత్ర ఫిల్టరింగ్ స్థానిక ప్రదర్శన కోసం మాత్రమే.',
      simulateSync: 'రికార్డులను సింక్ చేసినట్లు గుర్తించండి',
      queueTitle: 'సింక్ కోసం వేచి ఉన్న రికార్డులు'
    },
    voice: {
      unsupported: 'ఈ బ్రౌజర్‌లో వాయిస్ రికగ్నిషన్ అందుబాటులో లేదు. మీరు టైప్ చేసిన ఇన్‌పుట్‌ను ఉపయోగించవచ్చు.',
      listening: 'వినసాగుతోంది...',
      processing: 'వాక్యాన్ని ప్రాసెస్ చేస్తున్నాం...',
      noSpeech: 'వాక్యం గుర్తించబడలేదు. మళ్లీ ప్రయత్నించండి.',
      denied: 'మైక్రోఫోన్ ప్రాప్తి నిరాకరించబడింది. అనుమతిని ఇవ్వండి లేదా టెక్స్ట్‌తో కొనసాగండి.',
      error: 'వాయిస్ ఇన్‌పుట్ ప్రస్తుతం అందుబాటులో లేదు. మళ్లీ ప్రయత్నించండి లేదా టెక్స్ట్‌ను ఉపయోగించండి.',
      unavailable: 'ఈ బ్రౌజర్‌లో స్పీచ్ సింథసిస్ మద్దతు లేదు.',
      stop: 'వినివేత ఆపివేయబడింది.'
    }
  }
};

const onboardingSteps = [
  {
    titleKey: 'onboarding.step1Title',
    bodyKey: 'onboarding.step1Body'
  },
  {
    titleKey: 'onboarding.step2Title',
    bodyKey: 'onboarding.step2Body'
  },
  {
    titleKey: 'onboarding.step3Title',
    bodyKey: 'onboarding.step3Body'
  },
  {
    titleKey: 'onboarding.step4Title',
    bodyKey: 'onboarding.step4Body'
  },
  {
    titleKey: 'onboarding.step5Title',
    bodyKey: 'onboarding.step5Body'
  },
  {
    titleKey: 'onboarding.step6Title',
    bodyKey: 'onboarding.step6Body'
  },
  {
    titleKey: 'onboarding.step7Title',
    bodyKey: 'onboarding.step7Body'
  }
];

const state = {
  language: localStorage.getItem(STORAGE_KEYS.language) || 'en',
  user: null,
  profile: null,
  role: null,
  households: [],
  selectedHouseholdId: null,
  chatMessages: [],
  pendingSyncQueue: [],
  onboarding: {
    complete: false,
    stepIndex: 0,
    active: false
  },
  protocols: [],
  recognition: null,
  speaking: false
};

const dom = {
  authPage: null,
  appShell: null,
  signInForm: null,
  signInEmail: null,
  signInPassword: null,
  signInBtn: null,
  authStatus: null,
  currentUserLabel: null,
  languageSelect: null,
  onboardingLanguageSelect: null,
  navButtons: [],
  pages: [],
  greetingText: null,
  currentDate: null,
  totalHouseholdsValue: null,
  completedHouseholdsValue: null,
  remainingHouseholdsValue: null,
  followUpHouseholdsValue: null,
  savedRecordsValue: null,
  pendingSyncValue: null,
  upcomingVisitsValue: null,
  upcomingVisitsList: null,
  visitList: null,
  householdDetail: null,
  householdSearch: null,
  statusFilter: null,
  categoryFilter: null,
  chatLog: null,
  assistantInput: null,
  examplePrompts: null,
  voiceStatus: null,
  protocolGrid: null,
  protocolSearch: null,
  syncQueueList: null,
  offlineSavedRecords: null,
  offlinePendingSync: null,
  onboardingTitle: null,
  onboardingContent: null,
  tourStepBadge: null,
  startTourBtn: null,
  skipTourBtn: null,
  restartTourBtn: null,
  prevTourBtn: null,
  nextTourBtn: null,
  finishTourBtn: null,
  toast: null,
  micBtn: null,
  stopSpeechBtn: null
};

document.addEventListener('DOMContentLoaded', () => {
  cacheDom();
  bindEvents();
  initializeDemoAuth();
});

function cacheDom() {
  dom.authPage = document.getElementById('authPage');
  dom.appShell = document.getElementById('appShell');
  dom.signInForm = document.getElementById('signInForm');
  dom.signInEmail = document.getElementById('signInEmail');
  dom.signInPassword = document.getElementById('signInPassword');
  dom.signInBtn = document.getElementById('signInBtn');
  dom.authStatus = document.getElementById('authStatus');
  dom.currentUserLabel = document.getElementById('currentUserLabel');
  dom.languageSelect = document.getElementById('languageSelect');
  dom.onboardingLanguageSelect = document.getElementById('onboardingLanguageSelect');
  dom.navButtons = [...document.querySelectorAll('.nav-item')];
  dom.pages = [...document.querySelectorAll('.page')];
  dom.greetingText = document.getElementById('greetingText');
  dom.currentDate = document.getElementById('currentDate');
  dom.totalHouseholdsValue = document.getElementById('totalHouseholdsValue');
  dom.completedHouseholdsValue = document.getElementById('completedHouseholdsValue');
  dom.remainingHouseholdsValue = document.getElementById('remainingHouseholdsValue');
  dom.followUpHouseholdsValue = document.getElementById('followUpHouseholdsValue');
  dom.savedRecordsValue = document.getElementById('savedRecordsValue');
  dom.pendingSyncValue = document.getElementById('pendingSyncValue');
  dom.upcomingVisitsValue = document.getElementById('upcomingVisitsValue');
  dom.upcomingVisitsList = document.getElementById('upcomingVisitsList');
  dom.visitList = document.getElementById('visitList');
  dom.householdDetail = document.getElementById('householdDetail');
  dom.householdSearch = document.getElementById('householdSearch');
  dom.statusFilter = document.getElementById('statusFilter');
  dom.categoryFilter = document.getElementById('categoryFilter');
  dom.chatLog = document.getElementById('chatLog');
  dom.assistantInput = document.getElementById('assistantInput');
  dom.examplePrompts = document.getElementById('examplePrompts');
  dom.voiceStatus = document.getElementById('voiceStatus');
  dom.protocolGrid = document.getElementById('protocolGrid');
  dom.protocolSearch = document.getElementById('protocolSearch');
  dom.syncQueueList = document.getElementById('syncQueueList');
  dom.offlineSavedRecords = document.getElementById('offlineSavedRecords');
  dom.offlinePendingSync = document.getElementById('offlinePendingSync');
  dom.onboardingTitle = document.getElementById('onboardingTitle');
  dom.onboardingContent = document.getElementById('onboardingContent');
  dom.tourStepBadge = document.getElementById('tourStepBadge');
  dom.startTourBtn = document.getElementById('startTourBtn');
  dom.skipTourBtn = document.getElementById('skipTourBtn');
  dom.restartTourBtn = document.getElementById('restartTourBtn');
  dom.prevTourBtn = document.getElementById('prevTourBtn');
  dom.nextTourBtn = document.getElementById('nextTourBtn');
  dom.finishTourBtn = document.getElementById('finishTourBtn');
  dom.toast = document.getElementById('toast');
  dom.micBtn = document.getElementById('micBtn');
  dom.stopSpeechBtn = document.getElementById('stopSpeechBtn');
}

function bindEvents() {
  dom.signInForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = dom.signInEmail.value.trim().toLowerCase();
    const password = dom.signInPassword.value;
    setSignInFormEnabled(false);
    const account = DEMO_ACCOUNTS.find((demoAccount) => (
      demoAccount.email === email && demoAccount.password === password
    ));

    if (!account) {
      setAuthStatus('Sign-in failed. Check your account details and try again.');
      dom.signInPassword.value = '';
      setSignInFormEnabled(true);
      return;
    }

    state.user = { uid: account.uid, email: account.email, role: account.role };
    state.profile = {
      role: account.role,
      teamId: account.teamId,
      areaCodes: account.areaCodes
    };
    state.role = account.role;
    dom.signInPassword.value = '';
    dom.currentUserLabel.textContent = `${account.email} · ${account.role} (demo)`;
    dom.authPage.hidden = true;
    dom.appShell.hidden = false;
    configureRoleAccess();
    setAuthStatus('');
    try {
      await initializeApp();
      showPage('dashboard-page');
    } catch (error) {
      setAuthStatus('Could not load demo records. Start the app with node server.js and try again.');
      handleLogout();
    }
  });

  dom.languageSelect.addEventListener('change', (event) => {
    setLanguage(event.target.value);
  });

  dom.onboardingLanguageSelect.addEventListener('change', (event) => {
    setLanguage(event.target.value);
  });

  dom.navButtons.forEach((button) => {
    button.addEventListener('click', () => showPage(button.dataset.page));
  });

  const mobileToggle = document.querySelector('.mobile-toggle');
  const sidebar = document.getElementById('sidebar');
  const mobileScrim = document.querySelector('.mobile-scrim');
  mobileToggle.addEventListener('click', () => {
    setMobileNavOpen(!sidebar.classList.contains('is-open'));
  });
  mobileScrim.addEventListener('click', () => setMobileNavOpen(false));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && sidebar.classList.contains('is-open')) {
      setMobileNavOpen(false);
      mobileToggle.focus();
    }
  });
  document.getElementById('logoutBtn').addEventListener('click', handleLogout);

  document.querySelectorAll('[data-action]').forEach((button) => {
    button.addEventListener('click', (event) => {
      handleAction(event.currentTarget.dataset.action);
    });
  });

  dom.householdSearch.addEventListener('input', renderVisitList);
  dom.statusFilter.addEventListener('change', renderVisitList);
  dom.categoryFilter.addEventListener('change', renderVisitList);

  dom.assistantInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      submitAssistantQuestion();
    }
  });

  document.getElementById('assistantSubmitBtn').addEventListener('click', submitAssistantQuestion);
  dom.micBtn.addEventListener('click', toggleVoiceInput);
  dom.stopSpeechBtn.addEventListener('click', stopSpeech);

  dom.startTourBtn.addEventListener('click', () => startTour());
  dom.skipTourBtn.addEventListener('click', () => {
    state.onboarding.active = false;
    state.onboarding.stepIndex = 0;
    saveOnboardingState();
    showPage('dashboard-page');
    showToast(getTranslation('onboarding.skipTour'));
  });
  dom.restartTourBtn.addEventListener('click', () => startTour());
  dom.prevTourBtn.addEventListener('click', () => navigateTour(-1));
  dom.nextTourBtn.addEventListener('click', () => navigateTour(1));
  dom.finishTourBtn.addEventListener('click', () => finishTour());

  document.getElementById('simulateSyncBtn').addEventListener('click', simulateSync);
  dom.protocolSearch.addEventListener('input', renderProtocols);

  document.getElementById('visitList').addEventListener('click', (event) => {
    const item = event.target.closest('[data-household-id]');
    if (!item) return;
    state.selectedHouseholdId = item.dataset.householdId;
    renderVisitList();
    renderHouseholdDetail();
  });

  dom.householdDetail.addEventListener('click', (event) => {
    const actionButton = event.target.closest('[data-visit-action]');
    if (!actionButton) return;
    handleHouseholdAction(actionButton.dataset.visitAction);
  });

  document.getElementById('chatLog').addEventListener('click', (event) => {
    const button = event.target.closest('[data-read-aloud]');
    if (!button) return;
    const messageText = button.dataset.readAloud || '';
    speakText(messageText, state.language);
  });
}

function initializeDemoAuth() {
  setSignInFormEnabled(true);
  setAuthStatus('Demo mode: changes are saved only in this browser.');
}

function setAuthStatus(message) {
  dom.authStatus.textContent = message;
}

function setSignInFormEnabled(isEnabled) {
  dom.signInEmail.disabled = !isEnabled;
  dom.signInPassword.disabled = !isEnabled;
  dom.signInBtn.disabled = !isEnabled;
}

function configureRoleAccess() {
  const allowedPages = ROLE_PAGES[state.role] || [];
  dom.navButtons.forEach((button) => {
    button.hidden = !allowedPages.includes(button.dataset.page);
  });
  const actionPages = {
    onboarding: 'onboarding-page',
    assistant: 'assistant-page',
    visits: 'visits-page',
    protocols: 'protocols-page',
    offline: 'offline-page'
  };
  document.querySelectorAll('[data-action]').forEach((button) => {
    button.hidden = !allowedPages.includes(actionPages[button.dataset.action]);
  });
}

async function initializeApp() {
  const savedLanguage = localStorage.getItem(STORAGE_KEYS.language);
  if (savedLanguage) {
    state.language = savedLanguage;
  }

  await loadHouseholds();
  loadChatHistory();
  loadOnboardingState();
  await loadProtocols();
  renderAll();
  setLanguage(state.language);
  renderHouseholdDetail();
  updateClock();
  setInterval(updateClock, 60000);
}

function setLanguage(newLanguage) {
  if (!['en', 'te'].includes(newLanguage)) {
    newLanguage = 'en';
  }

  state.language = newLanguage;
  localStorage.setItem(STORAGE_KEYS.language, newLanguage);
  dom.languageSelect.value = newLanguage;
  dom.onboardingLanguageSelect.value = newLanguage;
  applyTranslations();
  renderOnboardingTour();
  renderChatLog();
  updateClock();
}

function getTranslation(path) {
  const parts = path.split('.');
  let current = translations[state.language];
  for (const part of parts) {
    if (!current || !Object.prototype.hasOwnProperty.call(current, part)) {
      current = translations.en;
      for (const fallbackPart of parts) {
        if (!current || !Object.prototype.hasOwnProperty.call(current, fallbackPart)) {
          return path;
        }
        current = current[fallbackPart];
      }
      return path;
    }
    current = current[part];
  }
  return current;
}

function applyTranslations() {
  document.documentElement.lang = state.language;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const value = getTranslation(key);
    if (typeof value === 'string') {
      element.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const value = getTranslation(key);
    if (typeof value === 'string') {
      element.placeholder = value;
    }
  });

  if (dom.greetingText) {
    const greeting = getGreetingLabel();
    dom.greetingText.textContent = greeting;
  }

  if (dom.householdSearch) {
    dom.householdSearch.placeholder = getTranslation('visits.searchPlaceholder');
  }

  if (dom.protocolSearch) {
    dom.protocolSearch.placeholder = getTranslation('protocols.searchPlaceholder');
  }

  if (dom.assistantInput) {
    dom.assistantInput.placeholder = getTranslation('assistant.placeholder');
  }

  document.title = `SwasthyaSakhi | ${getTranslation('nav.dashboard')}`;
}

function getGreetingLabel() {
  const hour = new Date().getHours();
  if (hour < 12) {
    return getTranslation('dashboard.greetingMorning');
  }
  if (hour < 17) {
    return getTranslation('dashboard.greetingAfternoon');
  }
  return getTranslation('dashboard.greetingEvening');
}

function updateClock() {
  const now = new Date();
  const locale = state.language === 'te' ? 'te-IN' : 'en-IN';
  const formatted = now.toLocaleDateString(locale, {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  if (dom.currentDate) {
    dom.currentDate.textContent = formatted;
  }

  if (dom.greetingText) {
    dom.greetingText.textContent = getGreetingLabel();
  }
}

function showPage(pageId) {
  if (!state.role || !ROLE_PAGES[state.role]?.includes(pageId)) return;

  dom.pages.forEach((page) => {
    page.classList.toggle('active', page.id === pageId);
  });

  dom.navButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.page === pageId);
  });

  setMobileNavOpen(false);
}

function setMobileNavOpen(isOpen) {
  const sidebar = document.getElementById('sidebar');
  const toggle = document.querySelector('.mobile-toggle');
  const scrim = document.querySelector('.mobile-scrim');
  sidebar.classList.toggle('is-open', isOpen);
  scrim.classList.toggle('is-visible', isOpen);
  toggle.setAttribute('aria-expanded', String(isOpen));
}

function handleLogout() {
  state.chatMessages = [];
  state.selectedHouseholdId = null;
  stopSpeech();
  state.households = [];
  state.user = null;
  state.profile = null;
  state.role = null;
  state.onboarding = { complete: false, stepIndex: 0, active: false };
  dom.currentUserLabel.textContent = '';
  dom.appShell.hidden = true;
  dom.authPage.hidden = false;
  dom.signInEmail.value = '';
  dom.signInPassword.value = '';
  setSignInFormEnabled(true);
  setAuthStatus('Signed out. Demo data remains in this browser.');
  renderAll();
}

function handleAction(action) {
  const actionPages = {
    onboarding: 'onboarding-page',
    assistant: 'assistant-page',
    visits: 'visits-page',
    protocols: 'protocols-page',
    offline: 'offline-page'
  };
  const pageId = actionPages[action];
  if (pageId) showPage(pageId);
}

async function loadHouseholds() {
  const savedData = readLocalStorageJson(userStorageKey(STORAGE_KEYS.households), null);
  if (Array.isArray(savedData)) {
    state.households = savedData.map((item) => ({
      ...item,
      status: normalizeStatus(item.status)
    }));
  } else {
    const response = await fetch('./demo_families.csv');
    if (!response.ok) throw new Error('Unable to load synthetic household records.');
    const parsedHouseholds = parseCsvToHouseholds(await response.text());
    state.households = scopeHouseholds(parsedHouseholds);
    saveHouseholds();
  }

  state.selectedHouseholdId = state.households[0]?.id || null;
  renderHouseholdFilters();
}

function parseCsvToHouseholds(csvText) {
  const rows = csvText.split(/\r?\n/).filter(Boolean);
  if (!rows.length) return [];

  const headers = rows[0].split(',');
  return rows.slice(1).map((row) => {
    const values = row.split(',');
    const entry = {};
    headers.forEach((header, index) => {
      entry[header.trim()] = values[index]?.trim() || '';
    });
    return {
      id: entry.household_id || entry.id,
      areaCode: entry.area_code || entry.areaCode || '',
      category: entry.category || 'General care',
      scheduledDate: entry.scheduled_date || entry.scheduledDate || '',
      status: normalizeStatus(entry.status),
      notes: entry.notes || '',
      lastUpdated: entry.last_updated || entry.lastUpdated || new Date().toISOString(),
      syncPending: (entry.sync_pending || entry.syncPending) === 'true'
    };
  }).filter((household) => household.id);
}

function scopeHouseholds(households) {
  if (state.role === 'admin') return households;
  const allowedAreaCodes = state.profile.areaCodes || [];
  return households.filter((household) => allowedAreaCodes.includes(household.areaCode));
}

function normalizeStatus(rawStatus) {
  const value = (rawStatus || '').toString().trim();
  const lower = value.toLowerCase();
  if (lower.includes('completed')) return 'Completed';
  if (lower.includes('follow')) return 'Follow-up Required';
  if (lower.includes('progress')) return 'In Progress';
  return 'Pending';
}

function saveHouseholds() {
  if (!state.user) return;
  localStorage.setItem(userStorageKey(STORAGE_KEYS.households), JSON.stringify(state.households));
}

function saveHousehold() {
  saveHouseholds();
}

function readLocalStorageJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (error) {
    return fallback;
  }
}

function renderAll() {
  renderDashboard();
  renderHouseholdFilters();
  renderVisitList();
  renderHouseholdDetail();
  renderProtocols();
  renderSyncQueue();
  renderAssistantExamples();
  renderOnboardingTour();
  applyTranslations();
}

function renderDashboard() {
  const total = state.households.length;
  const completed = state.households.filter((household) => household.status === 'Completed').length;
  const remaining = Math.max(total - completed, 0);
  const followUp = state.households.filter((household) => household.status === 'Follow-up Required').length;
  const upcomingVisits = getUpcomingHouseholds();

  dom.totalHouseholdsValue.textContent = String(total);
  dom.completedHouseholdsValue.textContent = String(completed);
  dom.remainingHouseholdsValue.textContent = String(remaining);
  dom.followUpHouseholdsValue.textContent = String(followUp);
  dom.savedRecordsValue.textContent = String(state.households.length);
  dom.pendingSyncValue.textContent = String(state.households.filter((household) => household.syncPending).length);
  dom.upcomingVisitsValue.textContent = String(upcomingVisits.length);

  dom.upcomingVisitsList.innerHTML = '';

  if (!upcomingVisits.length) {
    dom.upcomingVisitsList.innerHTML = `<li class="empty-state">${getTranslation('visits.emptyDetail')}</li>`;
    return;
  }

  upcomingVisits.slice(0, 4).forEach((household) => {
    const item = document.createElement('li');
    item.innerHTML = `
      <div>
        <strong>${household.id}</strong>
        <small>${household.category}</small>
      </div>
      <div>
        <small>${formatDate(household.scheduledDate)}</small>
      </div>
    `;
    dom.upcomingVisitsList.appendChild(item);
  });
}

function renderHouseholdFilters() {
  const categories = [...new Set([
    ...HOUSEHOLD_CATEGORIES,
    ...state.households.map((household) => household.category).filter(Boolean)
  ])];
  const current = dom.categoryFilter.value || 'all';
  dom.categoryFilter.innerHTML = `<option value="all">${getTranslation('visits.filterCategoryAll')}</option>`;
  categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    if (category === current) {
      option.selected = true;
    }
    dom.categoryFilter.appendChild(option);
  });

  dom.categoryFilter.value = categories.includes(current) ? current : 'all';
}

function renderVisitList() {
  const searchTerm = (dom.householdSearch.value || '').toLowerCase();
  const statusValue = dom.statusFilter.value || 'all';
  const categoryValue = dom.categoryFilter.value || 'all';

  const filteredHouseholds = state.households.filter((household) => {
    const matchesSearch = household.id.toLowerCase().includes(searchTerm);
    const matchesStatus = statusValue === 'all' || household.status === statusValue;
    const matchesCategory = categoryValue === 'all' || household.category === categoryValue;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  if (!filteredHouseholds.length) {
    dom.visitList.innerHTML = `<div class="empty-state">${getTranslation('visits.emptyDetail')}</div>`;
    return;
  }

  dom.visitList.innerHTML = filteredHouseholds
    .map((household) => {
      const activeClass = household.id === state.selectedHouseholdId ? 'active' : '';
      const statusClass = getStatusClass(household.status);
      return `
        <div class="visit-item ${activeClass}" data-household-id="${household.id}">
          <div class="visit-item-header">
            <div class="household-id">${household.id}</div>
            <span class="status-badge ${statusClass}">${household.status}</span>
          </div>
          <div class="visit-meta">
            <span>${household.areaCode}</span>
            <span>${household.category}</span>
          </div>
          <div class="summary-row">
            <small>${formatDate(household.scheduledDate)}</small>
            <small>${household.notes.slice(0, 28)}</small>
          </div>
        </div>
      `;
    })
    .join('');

  if (!filteredHouseholds.some((household) => household.id === state.selectedHouseholdId)) {
    state.selectedHouseholdId = filteredHouseholds[0].id;
  }

  renderHouseholdDetail();
}

function renderHouseholdDetail() {
  const selected = state.households.find((household) => household.id === state.selectedHouseholdId);
  if (!selected) {
    dom.householdDetail.innerHTML = `<div class="empty-detail">${getTranslation('visits.emptyDetail')}</div>`;
    return;
  }

  const statusClass = getStatusClass(selected.status);
  const safeNote = escapeHtml(selected.notes || '');
  dom.householdDetail.innerHTML = `
    <div class="detail-header">
      <h3>${selected.id}</h3>
      <span class="status-badge ${statusClass}">${selected.status}</span>
    </div>
    <div class="detail-table">
      <div class="detail-row"><strong>Area</strong><span>${selected.areaCode}</span></div>
      <div class="detail-row"><strong>Category</strong><span>${selected.category}</span></div>
      <div class="detail-row"><strong>Scheduled</strong><span>${formatDate(selected.scheduledDate)}</span></div>
      <div class="detail-row"><strong>Updated</strong><span>${formatDateTime(selected.lastUpdated)}</span></div>
    </div>
    <textarea id="noteEditor" class="note-box" aria-label="Household notes">${safeNote}</textarea>
    <div class="detail-actions">
      <button class="primary-btn" data-visit-action="start-visit">${getTranslation('visits.startVisit')}</button>
      <button class="secondary-btn" data-visit-action="complete-visit">${getTranslation('visits.markComplete')}</button>
      <button class="ghost-btn" data-visit-action="reopen-visit">${getTranslation('visits.reopen')}</button>
      <button class="secondary-btn" data-visit-action="follow-up-visit">${getTranslation('visits.followUpAction')}</button>
      <button class="primary-btn" data-visit-action="save-note">${getTranslation('visits.saveNote')}</button>
    </div>
  `;
}

function handleHouseholdAction(action) {
  const selected = state.households.find((household) => household.id === state.selectedHouseholdId);
  if (!selected) return;
  const previous = { ...selected };

  if (action === 'start-visit') {
    selected.status = 'In Progress';
    selected.syncPending = false;
    selected.lastUpdated = new Date().toISOString();
    showToast(`Started visit for ${selected.id}`);
  }

  if (action === 'complete-visit') {
    selected.status = 'Completed';
    selected.syncPending = false;
    selected.lastUpdated = new Date().toISOString();
    showToast(`Completed household ${selected.id}`);
  }

  if (action === 'reopen-visit') {
    selected.status = 'Pending';
    selected.syncPending = false;
    selected.lastUpdated = new Date().toISOString();
    showToast(`Reopened household ${selected.id}`);
  }

  if (action === 'follow-up-visit') {
    selected.status = 'Follow-up Required';
    selected.syncPending = false;
    selected.lastUpdated = new Date().toISOString();
    showToast(`Marked follow-up for ${selected.id}`);
  }

  if (action === 'save-note') {
    const noteEditor = document.getElementById('noteEditor');
    if (noteEditor) {
      selected.notes = noteEditor.value.trim() || 'Synthetic demo note.';
      selected.syncPending = false;
      selected.lastUpdated = new Date().toISOString();
      showToast(`Saved note for ${selected.id}`);
    }
  }

  saveHousehold(selected);
  renderAll();
}

function renderAssistantExamples() {
  dom.examplePrompts.innerHTML = '';
  EXAMPLE_PROMPTS.forEach((example) => {
    const button = document.createElement('button');
    button.className = 'prompt-chip';
    button.type = 'button';
    button.textContent = example[state.language] || example.en;
    button.addEventListener('click', () => {
      dom.assistantInput.value = example.en;
      submitAssistantQuestion();
    });
    dom.examplePrompts.appendChild(button);
  });
}

function renderChatLog() {
  if (!state.chatMessages.length) {
    dom.chatLog.innerHTML = '<div class="empty-state">Ask about routine care, warning signs, or low-connectivity workflows.</div>';
    return;
  }

  dom.chatLog.innerHTML = state.chatMessages
    .map((message) => {
      const className = message.role === 'user' ? 'user' : 'assistant';
      const urgentClass = message.urgent ? 'urgent' : '';
      const readButton = message.role === 'assistant'
        ? `<div class="message-actions"><button class="read-aloud-btn" data-read-aloud="${escapeHtml(message.text)}">${getTranslation('assistant.readAloud')}</button></div>`
        : '';
      return `
        <div class="message ${className} ${urgentClass}">
          <div class="message-content">${escapeHtml(message.text)}</div>
          ${readButton}
        </div>
      `;
    })
    .join('');
}

function submitAssistantQuestion() {
  const inputText = (dom.assistantInput.value || '').trim();
  if (!inputText) {
    showToast('Please enter a question first.');
    return;
  }

  const reply = generateAssistantReply(inputText);
  state.chatMessages.push({ role: 'user', text: inputText, urgent: false });
  state.chatMessages.push({ role: 'assistant', text: reply.text, urgent: reply.urgent });
  dom.assistantInput.value = '';
  renderChatLog();
}

function loadChatHistory() {
  state.chatMessages = [];
}

function generateAssistantReply(question) {
  const normalized = question.toLowerCase();
  const emergencyHit = detectEmergencyQuestion(normalized);

  if (emergencyHit) {
    return {
      urgent: true,
      text: `${getTranslation('assistant.urgentTitle')}: ${emergencyHit.response}`
    };
  }

  if (isMedicationDoseRequest(normalized)) {
    return {
      urgent: false,
      text: getTranslation('assistant.dosageRefusal')
    };
  }

  if (normalized.includes('pregnancy') || normalized.includes('garm') || normalized.includes('గర్భం')) {
    return {
      urgent: false,
      text: 'For general pregnancy support, monitor bleeding, severe pain, dizziness, or reduced movement and escalate to a clinician when the concern is severe or worsening. This is a demo answer only.'
    };
  }

  if (normalized.includes('newborn') || normalized.includes('baby') || normalized.includes('శిశువు') || normalized.includes('బిడ్డ')) {
    return {
      urgent: false,
      text: 'For new babies, watch for fever, poor feeding, breathing difficulty, jaundice, or unusual sleepiness. If symptoms are severe or worsening, seek prompt clinical review using approved local referral pathways.'
    };
  }

  if (normalized.includes('follow') || normalized.includes('routine') || normalized.includes('పర్యవేక్షణ') || normalized.includes('సాధారణ')) {
    return {
      urgent: false,
      text: 'A routine follow-up should confirm recent symptoms, note any concerns, check whether the household needs a repeat visit, and record the next action in the local record. This is a demo answer.'
    };
  }

  if (normalized.includes('hygiene') || normalized.includes('water') || normalized.includes('clean') || normalized.includes('శుభ్రత') || normalized.includes('నీరు')) {
    return {
      urgent: false,
      text: 'General community guidance includes safe water, handwashing, clean food storage, and safe waste disposal. Use approved local public health messages for your region.'
    };
  }

  if (normalized.includes('offline') || normalized.includes('network') || normalized.includes('low-connectivity') || normalized.includes('ఆఫ్‌లైన్') || normalized.includes('కనెక్టివిటీ')) {
    return {
      urgent: false,
      text: 'In low-connectivity settings, record the household visit locally, save notes, and wait for the approved sync step when the workflow allows it. This demo is not a production sync system.'
    };
  }

  return {
    urgent: false,
    text: getTranslation('assistant.unknown')
  };
}

function detectEmergencyQuestion(normalized) {
  const emergencyPhrases = [
    'severe bleeding', 'heavy bleeding', 'bleeding a lot', 'difficulty breathing', 'shortness of breath', 'cant breathe', 'can\'t breathe', 'unconscious', 'fainted', 'not waking', 'seizure', 'fit', 'convulsion', 'newborn emergency', 'newborn not breathing', 'baby not breathing', 'blue lips', 'hard to wake', 'sudden confusion', 'mental status'
  ];

  const teluguPhrases = [
    'రక్తస్రావం', 'శ్వాస', 'శ్వాస తీసుకోవడంలో ఇబ్బంది', 'చేతులు కదలడం లేదు', 'మూర్ఛ', 'మూర్చ', 'బిడ్డ శ్వాస తీసుకో లేదు', 'శిశువు శ్వాస', 'చనిపోయే స్థితి', 'అవసర అత్యవసరం', 'మత్తు', 'స్పృహ ఉంది లేదు'
  ];

  const combined = [...emergencyPhrases, ...teluguPhrases];
  const anyMatch = combined.some((keyword) => normalized.includes(keyword));

  if (!anyMatch) return null;

  return {
    response: 'This is an emergency. Immediately contact emergency services or follow your approved local referral protocol. Do not delay care while waiting for a response. This demo is not a diagnosis tool.'
  };
}

function isMedicationDoseRequest(normalized) {
  const dosageKeywords = ['dose', 'dosage', 'tablet', 'medicine', 'medication', 'amoxicillin', 'paracetamol', 'antibiotic', 'injection', 'how much medicine'];
  const teluguDoseKeywords = ['మోతాదు', 'మందు', 'డోస్', 'జబ్బు కొరకు', 'అంటిమొద్దు', 'పారాసిటమాల్'];
  return [...dosageKeywords, ...teluguDoseKeywords].some((keyword) => normalized.includes(keyword));
}

function renderProtocols() {
  const query = (dom.protocolSearch.value || '').toLowerCase();
  const items = state.protocols.filter((item) => {
    const text = `${item.title} ${item.category} ${item.description}`.toLowerCase();
    return text.includes(query);
  });

  dom.protocolGrid.innerHTML = '';

  if (!items.length) {
    dom.protocolGrid.innerHTML = `<div class="empty-state">No matching protocol cards found.</div>`;
    return;
  }

  items.forEach((protocol) => {
    const card = document.createElement('article');
    card.className = 'protocol-card';
    card.innerHTML = `
      <div class="protocol-meta">${protocol.category}</div>
      <h3>${protocol.title}</h3>
      <p>${protocol.description}</p>
      <ul class="protocol-list">
        <li>${protocol.sourceStatus}</li>
        <li>${protocol.reviewStatus}</li>
        <li>${getTranslation('protocols.demoNote')}</li>
      </ul>
      <p><strong>Safety:</strong> ${protocol.safetyNote}</p>
    `;
    dom.protocolGrid.appendChild(card);
  });
}

async function loadProtocols() {
  try {
    const response = await fetch('./demo_protocols.json');
    if (!response.ok) throw new Error('Unable to load local demo protocol data');
    const protocolData = await response.json();
    state.protocols = Array.isArray(protocolData) ? protocolData : FALLBACK_PROTOCOLS;
  } catch (error) {
    state.protocols = FALLBACK_PROTOCOLS;
  }
}

function renderSyncQueue() {
  const pending = state.households.filter((household) => household.syncPending);
  dom.offlineSavedRecords.textContent = String(state.households.length);
  dom.offlinePendingSync.textContent = String(pending.length);

  dom.syncQueueList.innerHTML = '';
  if (!pending.length) {
    dom.syncQueueList.innerHTML = '<li class="empty-state">No pending sync records.</li>';
    return;
  }

  pending.slice(0, 8).forEach((household) => {
    const item = document.createElement('li');
    item.className = 'sync-item';
    item.textContent = `${household.id} • ${household.status} • ${household.areaCode}`;
    dom.syncQueueList.appendChild(item);
  });
}

function simulateSync() {
  state.households.forEach((household) => { household.syncPending = false; });
  saveHouseholds();
  renderSyncQueue();
  renderDashboard();
  showToast('Demo sync completed locally in this browser.');
}

function startTour() {
  state.onboarding.active = true;
  state.onboarding.stepIndex = 0;
  saveOnboardingState();
  showPage('onboarding-page');
  renderOnboardingTour();
}

function navigateTour(direction) {
  const nextIndex = state.onboarding.stepIndex + direction;
  if (nextIndex < 0) return;
  if (nextIndex >= onboardingSteps.length) {
    finishTour();
    return;
  }
  state.onboarding.stepIndex = nextIndex;
  saveOnboardingState();
  renderOnboardingTour();
}

function finishTour() {
  state.onboarding.complete = true;
  state.onboarding.active = false;
  state.onboarding.stepIndex = 0;
  saveOnboardingState();
  showPage('dashboard-page');
  showToast('Onboarding finished and saved locally.');
}

function renderOnboardingTour() {
  const step = onboardingSteps[state.onboarding.stepIndex] || onboardingSteps[0];
  const stepNumber = state.onboarding.stepIndex + 1;

  dom.tourStepBadge.textContent = `${getTranslation('onboarding.stepLabel')} ${stepNumber} ${getTranslation('onboarding.ofLabel')} ${onboardingSteps.length}`;
  dom.onboardingTitle.textContent = getTranslation(step.titleKey);
  dom.onboardingContent.innerHTML = `<p>${getTranslation(step.bodyKey)}</p>`;

  const isFirst = state.onboarding.stepIndex === 0;
  const isLast = state.onboarding.stepIndex === onboardingSteps.length - 1;
  dom.prevTourBtn.disabled = isFirst;
  dom.nextTourBtn.classList.toggle('hidden', isLast);
  dom.finishTourBtn.classList.toggle('hidden', !isLast);
  dom.nextTourBtn.textContent = getTranslation('onboarding.next');
  dom.prevTourBtn.textContent = getTranslation('onboarding.previous');
  dom.finishTourBtn.textContent = getTranslation('onboarding.finish');
}

function saveOnboardingState() {
  localStorage.setItem(
    userStorageKey(STORAGE_KEYS.onboarding),
    JSON.stringify({
      complete: state.onboarding.complete,
      stepIndex: state.onboarding.stepIndex,
      active: state.onboarding.active
    })
  );
}

function loadOnboardingState() {
  const saved = readLocalStorageJson(userStorageKey(STORAGE_KEYS.onboarding), {
    complete: false,
    stepIndex: 0,
    active: false
  });
  state.onboarding.complete = !!saved.complete;
  state.onboarding.stepIndex = Number.isFinite(saved.stepIndex) ? saved.stepIndex : 0;
  state.onboarding.active = !!saved.active;
}

function userStorageKey(key) {
  return `${key}.${state.user?.uid || 'signed-out'}`;
}

function getUpcomingHouseholds() {
  return [...state.households]
    .filter((household) => household.scheduledDate)
    .sort((a, b) => new Date(a.scheduledDate) - new Date(b.scheduledDate));
}

function getStatusClass(status) {
  if (status === 'Completed') return 'status-completed';
  if (status === 'In Progress') return 'status-in-progress';
  if (status === 'Follow-up Required') return 'status-follow-up';
  return 'status-pending';
}

function formatDate(dateString) {
  if (!dateString) return '—';
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString(state.language === 'te' ? 'te-IN' : 'en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  } catch (error) {
    return dateString;
  }
}

function formatDateTime(dateString) {
  if (!dateString) return '—';
  try {
    const date = new Date(dateString);
    return date.toLocaleString(state.language === 'te' ? 'te-IN' : 'en-IN');
  } catch (error) {
    return dateString;
  }
}

function showToast(message) {
  dom.toast.textContent = message;
  dom.toast.classList.add('show');
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    dom.toast.classList.remove('show');
  }, 2200);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function toggleVoiceInput() {
  if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
    showToast(getTranslation('voice.unsupported'));
    dom.voiceStatus.textContent = getTranslation('voice.unsupported');
    return;
  }

  if (state.recognition) {
    state.recognition.stop();
    state.recognition = null;
    dom.voiceStatus.textContent = getTranslation('voice.stop');
    return;
  }

  const RecognitionConstructor = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new RecognitionConstructor();
  recognition.lang = state.language === 'te' ? 'te-IN' : 'en-IN';
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => {
    dom.voiceStatus.textContent = getTranslation('voice.listening');
  };

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0].transcript)
      .join(' ')
      .trim();

    if (transcript) {
      dom.assistantInput.value = transcript;
      dom.voiceStatus.textContent = getTranslation('voice.processing');
    }
  };

  recognition.onerror = (event) => {
    const message = event.error === 'not-allowed'
      ? getTranslation('voice.denied')
      : event.error === 'no-speech'
        ? getTranslation('voice.noSpeech')
        : getTranslation('voice.error');
    dom.voiceStatus.textContent = message;
    showToast(message);
    state.recognition = null;
  };

  recognition.onend = () => {
    state.recognition = null;
    if (!dom.assistantInput.value.trim()) {
      dom.voiceStatus.textContent = getTranslation('voice.stop');
    }
  };

  state.recognition = recognition;
  recognition.start();
}

function stopSpeech() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
    state.speaking = false;
    dom.voiceStatus.textContent = getTranslation('voice.stop');
  }
}

function speakText(text, language) {
  if (!('speechSynthesis' in window)) {
    showToast(getTranslation('voice.unavailable'));
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = language === 'te' ? 'te-IN' : 'en-IN';
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.onstart = () => {
    state.speaking = true;
    dom.voiceStatus.textContent = 'Speaking...';
  };
  utterance.onend = () => {
    state.speaking = false;
    dom.voiceStatus.textContent = '';
  };
  utterance.onerror = () => {
    state.speaking = false;
    dom.voiceStatus.textContent = getTranslation('voice.unavailable');
  };
  window.speechSynthesis.speak(utterance);
}

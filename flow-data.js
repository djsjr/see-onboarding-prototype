window.SEE_ONBOARDING_FLOW = (() => {
  const assetBase = window.SEE_FLOW_ASSET_BASE || "assets";
  const image = (name) => `${assetBase}/images/${name}`;

  const costOptions = [
    "Harms my physical health",
    "Causes brain fog",
    "Costs me too much money",
    "Lowers my sleep quality",
    "Less energy",
    "Extra calories or weight gain",
    "Hard to stop once I start",
    "I feel anxiety, shame, or regret",
    "Strained relationships",
    "Work or reputation problems",
    "Lost time",
  ];

  return {
    assets: {
      background: image("background_yellow.png"),
      lineChart: image("line_chart.png"),
      onOffSwitch: image("on_off_switch.png"),
      benefitsArc: image("drink_less.png"),
      toast: image("champagne_toast_2.png"),
      lettingGoHand: image("letting_go_hand.png"),
      scale: image("scale_square_4.png"),
      moon: image("moon_sleep.png"),
      lightning: image("lightning_bolt.png"),
      heart: image("heart.png"),
      checklist: image("checklist.png"),
      brain: image("brain.png"),
      relationship: image("relationship.png"),
      drinkNoise: image("drink_noise_simple.png"),
      autoDrinking: image("bottle_grab.png"),
    },
    firstScreen: "welcome",
    sampleScale: {
      displayWeeklyDrinks: 40,
      dailyCaloriesLow: 290,
      dailyCaloriesHigh: 430,
      yearlyPounds: 35,
    },
    screens: {
      welcome: {
        type: "copy",
        headline: "Get your life\nback from\nalcohol.",
        body: "If drinking is taking too much from you,\nyou’re in the right place.",
        next: "goal",
      },
      goal: {
        type: "goal",
        headline: "Which\nare you?",
        choices: [
          {
            goal: "less",
            label: "I want to drink less",
            imageKey: "lineChart",
            next: "social",
          },
          {
            goal: "stop",
            label: "I want or need to stop completely",
            imageKey: "onOffSwitch",
            next: "benefits",
          },
        ],
      },
      social: {
        type: "artCopy",
        headline: "That's great.",
        imageKey: "toast",
        body:
          "Alcohol is a powerful social lubricant. But consuming less is better your health— have more energy, less brain fog, and less regret.",
        next: "willpower",
      },
      benefits: {
        type: "artCopy",
        headline: "A life without alcohol changes a lot about you",
        headlineSize: "small",
        imageKey: "benefitsArc",
        body: [
          "You’ll sleep better, have more energy, and can repair relationships with loved ones.",
          "You’ll think more clearly, focus better, and experience improved memory, too.",
        ],
        next: "willpower",
      },
      willpower: {
        type: "artCopy",
        headline: "It’s Not About Willpower",
        headlineSize: "medium",
        imageKey: "lettingGoHand",
        body:
          "Trying harder to cut down doesn’t work, but the See App will show you how you access the power of choice.",
        button: "Let’s find that!",
        next: "catchMoment",
      },
      catchMoment: {
        type: "copy",
        headline: "Catch the moment before drinking happens.",
        body:
          "The See App shows you how to see the thought, urge, or automatic pull before it takes over. Then it loses its power over you.",
        next: "drinks",
      },
      drinks: {
        type: "radio",
        headline: "How many alcoholic drinks do you have weekly?",
        options: ["1–3", "4–7", "8–14", "15–24", "25–49", "50+"],
        selectedIndex: null,
        next: "scale",
      },
      scale: {
        type: "scale",
        headline: "Weekly Drinks Can Add Up Fast",
        next: "cost",
      },
      cost: {
        type: "checklist",
        headline: "What Else Does Alcohol Cost You?",
        body: "Pick all that apply.",
        options: costOptions,
        selectedIndexes: [],
        next: "grip",
      },
      grip: {
        type: "copy",
        headline: "Less alcohol means more energy, clear thinking and control of your life.",
        next: "sleep",
      },
      sleep: {
        type: "benefit",
        headline: "Get a Better Night’s Sleep",
        body:
          "Your sleep cycles improve. A better chance to rest, recover and reset.",
        imageKey: "moon",
        progressIndex: 0,
        next: "energy",
      },
      energy: {
        type: "benefit",
        headline: "More Energy",
        body:
          "Fewer sluggish mornings. Less time wasted and more initiative throughout the day,",
        imageKey: "lightning",
        progressIndex: 1,
        next: "physicalHealth",
      },
      physicalHealth: {
        type: "benefit",
        headline: "Physical Health Improves",
        body:
          "Your body repairs. Lower blood pressure, less inflammation, and stronger immune defense.",
        imageKey: "heart",
        progressIndex: 2,
        next: "focus",
      },
      focus: {
        type: "benefit",
        headline: "Better Focus",
        body:
          "Your attention comes back online. You finish tasks and get things done faster.",
        imageKey: "checklist",
        progressIndex: 3,
        next: "memory",
      },
      memory: {
        type: "benefit",
        headline: "Sharper Memory",
        body:
          "Brain fog lifts. Experience better recall and an increased sense of confidence.",
        imageKey: "brain",
        progressIndex: 4,
        next: "relationships",
      },
      relationships: {
        type: "benefit",
        headline: "Improved Relationships",
        body:
          "Freedom from anger and increased patience with friends and loved ones — the people in your life who matter.",
        imageKey: "relationship",
        progressIndex: 5,
        next: "questionsIntro",
      },
      questionsIntro: {
        type: "copy",
        headline: "But drinking can be hard to control.",
        body:
          "Sometimes it starts in your mind before you drink. Sometimes it happens in the moment.",
        next: "noiseQuestion1",
      },
      noiseQuestion1: {
        type: "question",
        headline: "Do you think about drinking before you even start?",
        body:
          "Like picturing where you’ll be, what you’ll drink, who you’ll be with, or how you’ll feel.",
        yes: "Yes",
        no: "Not really",
        next: "drinkNoise",
      },
      drinkNoise: {
        type: "artCopy",
        headline: "That’s\nDrink Noise.",
        imageKey: "drinkNoise",
        body: [
          "It’s the mental chatter that pushes you toward drinking. Your mind rehearses drinking events before you ever arrive for the first sip.",
          "You imagine social success, confidence, connection, or just fitting in with others who’ll drink too.",
        ],
        next: "innerTyrant",
      },
      innerTyrant: {
        type: "copy",
        headline: "The See App Separates You From the Inner Tyrant.",
        body: "You see the thoughts as they arise and the noise loses.",
        next: "withoutThinking",
      },
      withoutThinking: {
        type: "copy",
        headline: "But it can also happen quietly, without thinking…",
        next: "automaticQuestion",
      },
      automaticQuestion: {
        type: "question",
        headline:
          "When others are drinking, do you find yourself going along automatically?",
        body: "Maybe even when you planned on NOT drinking at all",
        yes: "Yes",
        no: "Not usually",
        next: "automaticDrinking",
      },
      automaticDrinking: {
        type: "artCopy",
        headline: "That’s Automatic Drinking.",
        imageKey: "autoDrinking",
        body:
          "No planning ahead. No real decision. The opportunity just appears — a party, a business meeting, a night out — and you’re on autopilot.",
        next: "catchAutomaticMoment",
      },
      catchAutomaticMoment: {
        type: "copy",
        headline: "The See App Helps you Catch That Moment.",
        body:
          "You begin to notice the automatic pull as it appears, before it turns into action.",
        next: "howItWorks",
      },
      howItWorks: {
        type: "copy",
        headline: "Here’s How it Works.",
        body:
          "Through Non-Contemplative Meditation, you learn to see the thoughts, urges, and automatic pulls before they take over.",
        next: "simplestMeditation",
      },
      simplestMeditation: {
        type: "copy",
        headline: "The Simplest, Most Effective Meditation on Earth.",
        body: [
          "One technique. Just 10 to 20 minutes, twice a day — once in the morning, and again before bed.",
          "No mantras. No hypnosis. No breathwork. No mood music.",
        ],
        next: "trustedVoice",
      },
      trustedVoice: {
        type: "videoCopy",
        headline: "One Trusted Voice",
        body:
          "With over 40 years of experience, Dan Schwarzhoff guides you through each session of Non-Contemplative Meditation exactly as he’s practiced it for decades. Meet him here.",
        next: "faithCompatible",
      },
      faithCompatible: {
        type: "copy",
        headline: "And It Won’t Conflict With Your Faith.",
        body:
          "Free from New Age narratives and Eastern philosophy, Non-Contemplative meditation is completely compatible across Christian denominations.",
        next: "choiceRestored",
      },
      choiceRestored: {
        type: "copy",
        headline: "The Power of Choice Is Restored.",
        body:
          "The pull to drink weakens, and you stop doing what you don’t want to do, and can choose to drink less/eliminate alcohol from your life.",
      },
    },
    overview: [
      { screen: "welcome", label: "1" },
      { screen: "goal", label: "2" },
      { screen: "social", label: "3A · Drink less" },
      { screen: "benefits", label: "3B · Stop completely" },
      { screen: "willpower", label: "4" },
      { screen: "catchMoment", label: "5" },
      { screen: "drinks", label: "6" },
      { screen: "scale", label: "7" },
      { screen: "cost", label: "8" },
      { screen: "grip", label: "9" },
      { screen: "sleep", label: "10A" },
      { screen: "energy", label: "10B" },
      { screen: "physicalHealth", label: "10C" },
      { screen: "focus", label: "10D" },
      { screen: "memory", label: "10E" },
      { screen: "relationships", label: "10F" },
      { screen: "questionsIntro", label: "11" },
      { screen: "noiseQuestion1", label: "12" },
      { screen: "drinkNoise", label: "13" },
      { screen: "innerTyrant", label: "14" },
      { screen: "withoutThinking", label: "15" },
      { screen: "automaticQuestion", label: "16" },
      { screen: "automaticDrinking", label: "17" },
      { screen: "catchAutomaticMoment", label: "18" },
      { screen: "howItWorks", label: "19" },
      { screen: "simplestMeditation", label: "20" },
      { screen: "trustedVoice", label: "21" },
      { screen: "faithCompatible", label: "22" },
      { screen: "choiceRestored", label: "23" },
    ],
  };
})();

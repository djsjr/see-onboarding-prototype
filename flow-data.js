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
      benefitsArc: image("life_benefits_arc.png"),
      toast: image("champagne_toast_2.png"),
      lettingGoHand: image("letting_go_hand.png"),
      scale: image("scale_square_4.png"),
      moon: image("moon_sleep.png"),
      lightning: image("lightning_bolt.png"),
      heart: image("heart.png"),
      checklist: image("checklist.png"),
      brain: image("brain.png"),
      relationship: image("relationship.png"),
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
          "Alcohol is a powerful social lubricant. Drink responsibly — with better health, less brain fog, and less regret.",
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
          "Trying harder doesn't always work, but the See App helps you access the power of choice.",
        button: "Let’s find that!",
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
        headline: "When alcohol has less control, life gets better",
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
          "Fewer sluggish mornings. Less time wasted and more power throughout the day",
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
          "Attention comes back online. Finish tasks and get things done faster.",
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
          "Freedom from anger and increased patience with friends and loved ones.",
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
        type: "copy",
        headline: "That’s\nDrink Noise.",
        body:
          "It’s the mental chatter that pushes you toward drinking. Your mind rehearses the event before you ever pick it up. You imagine social success, confidence, connection, or just fitting in with others who’ll drink too.",
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
        headline: "But it can also happen without thinking…",
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
        type: "copy",
        headline: "That’s Automatic Drinking.",
        body:
          "No planning ahead. No real decision. The opportunity just appears — a party, a business meeting, a night out — and you’re on autopilot.",
        next: "driverSeat",
      },
      driverSeat: {
        type: "copy",
        headline: "The See App\nPuts You Back\nin the Driver’s\nSeat.",
        body:
          "You become aware of the blind impulses and their pull evaporates.",
        next: "nonContemplative",
      },
      nonContemplative: {
        type: "copy",
        headline: "Through\nNon-Contemplative\nMeditation...",
        body:
          "The See App helps you recognize the thoughts, urges, and automatic pull before they turn into drinking.",
      },
    },
    overview: [
      { screen: "welcome", label: "1" },
      { screen: "goal", label: "2" },
      { screen: "social", label: "3A · Drink less" },
      { screen: "benefits", label: "3B · Stop completely" },
      { screen: "willpower", label: "4" },
      { screen: "drinks", label: "5" },
      { screen: "scale", label: "6" },
      { screen: "cost", label: "7" },
      { screen: "grip", label: "8" },
      { screen: "sleep", label: "9A" },
      { screen: "energy", label: "9B" },
      { screen: "physicalHealth", label: "9C" },
      { screen: "focus", label: "9D" },
      { screen: "memory", label: "9E" },
      { screen: "relationships", label: "9F" },
      { screen: "questionsIntro", label: "10" },
      { screen: "noiseQuestion1", label: "11" },
      { screen: "drinkNoise", label: "12" },
      { screen: "innerTyrant", label: "13" },
      { screen: "withoutThinking", label: "14" },
      { screen: "automaticQuestion", label: "15" },
      { screen: "automaticDrinking", label: "16" },
      { screen: "driverSeat", label: "17" },
      { screen: "nonContemplative", label: "18" },
    ],
  };
})();

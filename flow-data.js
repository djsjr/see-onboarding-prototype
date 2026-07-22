window.SEE_ONBOARDING_FLOW = (() => {
  const assetBase = window.SEE_FLOW_ASSET_BASE || "assets";
  const image = (name) => `${assetBase}/images/${name}`;
  const flow = {
  "version": "revised",
  "title": "Alcohol Onboarding Flow",
  "assets": {
    "background": "background_yellow.png",
    "lineChart": "line_chart.png",
    "onOffSwitch": "on_off_switch.png",
    "benefitsArc": "drink_less.png",
    "toast": "champagne_toast_2.png",
    "lettingGoHand": "letting_go_hand.png",
    "scale": "scale_square_4.png",
    "moon": "moon_sleep.png",
    "lightning": "lightning_bolt.png",
    "heart": "heart.png",
    "checklist": "checklist.png",
    "brain": "brain.png",
    "relationship": "relationship.png",
    "drinkNoise": "drink_noise_simple.png",
    "autoDrinking": "bottle_grab.png"
  },
  "firstScreen": "welcome",
  "sampleScale": {
    "displayWeeklyDrinks": 40,
    "dailyCaloriesLow": 290,
    "dailyCaloriesHigh": 430,
    "yearlyPounds": 35
  },
  "copyVariants": {
    "withoutThinkingDirect": {
      "page": "15",
      "headline": "Sometimes There Are No Thoughts."
    },
    "catchThoughts": {
      "page": "18",
      "headline": "Catch the Thoughts.",
      "body": [
        "The See App helps you notice the thoughts and urges before they take over.",
        "Awareness arrives first. Then choice becomes possible."
      ]
    },
    "catchUnrecognizedPattern": {
      "page": "18",
      "headline": "Not Every Pattern Feels Like a Pattern.",
      "body": [
        "Whether drinking feels deliberate or automatic, what leads to it can be easy to miss. The See App helps you see it more clearly.",
        "Awareness arrives first. Then choice becomes possible."
      ]
    }
  },
  "screens": {
    "welcome": {
      "page": "1",
      "type": "copy",
      "headline": "Put Alcohol Back in Its Place.",
      "body": "If drinking is taking too much from you, you’re in the right place.",
      "button": "Continue",
      "next": "goal"
    },
    "goal": {
      "page": "2",
      "type": "goal",
      "headline": "What do you want to change?",
      "choices": [
        {
          "goal": "less",
          "label": "Drink less",
          "imageKey": "lineChart",
          "next": "social"
        },
        {
          "goal": "stop",
          "label": "Stop completely",
          "imageKey": "onOffSwitch",
          "next": "benefits"
        }
      ]
    },
    "social": {
      "page": "3A",
      "type": "artCopy",
      "headline": "A Smart Place to Start.",
      "headlineSize": "size-48",
      "imageKey": "toast",
      "body": "Alcohol is a powerful social lubricant. But less alcohol means more energy, less brain fog and fewer regrets.",
      "button": "Continue",
      "next": "willpower"
    },
    "benefits": {
      "page": "3B",
      "type": "artCopy",
      "headline": "Life Changes Without Alcohol.",
      "headlineSize": "medium",
      "imageKey": "benefitsArc",
      "body": [
        "You sleep better. Think more clearly. Feel more energy. You can repair relationships with loved ones.",
        "You start becoming yourself again with better focus and improved memory too."
      ],
      "button": "Continue",
      "next": "willpower"
    },
    "willpower": {
      "page": "4",
      "type": "artCopy",
      "headline": "More Willpower Isn’t the Answer.",
      "headlineSize": "medium",
      "imageKey": "lettingGoHand",
      "body": [
        "The problem isn’t that you haven’t tried hard enough to cut down.",
        "The See App shows you access to a space within between the urge and the action—where choice is restored. No willpower needed at all."
      ],
      "button": "Let’s find it",
      "next": "catchMoment"
    },
    "catchMoment": {
      "page": "5",
      "type": "copy",
      "headline": "You can catch the moment before it happens.",
      "headlineSize": "size-44",
      "body": [
        "Drinking begins with a thought, an urge automatically steering you toward alcohol.",
        "See those moments before they take over and they lose their power over you. The See App shows you exactly how."
      ],
      "button": "Continue",
      "next": "drinks"
    },
    "drinks": {
      "page": "6",
      "type": "radio",
      "headline": "How many alcoholic drinks do you have weekly?",
      "headlineSize": "size-40",
      "options": [
        "1–3",
        "4–7",
        "8–14",
        "15–24",
        "25–49",
        "50+"
      ],
      "selectedIndex": null,
      "button": "Continue",
      "next": "scale"
    },
    "scale": {
      "page": "7",
      "type": "scale",
      "headline": "Weekly Drinks Can Add Up Fast",
      "headlineSize": "size-46",
      "body": [
        "At 40 drinks a week, alcohol alone can add roughly 4,000–6,000 calories every week.",
        "And calories are only a small part of the total cost."
      ],
      "button": "Continue",
      "next": "cost"
    },
    "cost": {
      "page": "8",
      "type": "checklist",
      "headline": "What Else Is Alcohol Costing You?",
      "body": "Select all that apply.",
      "options": [
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
        "Lost time"
      ],
      "selectedIndexes": [],
      "button": "Continue",
      "next": "grip"
    },
    "grip": {
      "page": "9",
      "type": "copy",
      "headline": "Less Alcohol Means More You.",
      "body": "More energy, clear thinking and control of your life.",
      "button": "Continue",
      "next": "sleep"
    },
    "sleep": {
      "page": "10A",
      "type": "benefit",
      "headline": "Get a Better Night’s Sleep",
      "headlineSize": "size-46",
      "body": [
        "Less alcohol gives your natural sleep cycles a better chance to work.",
        "Rest more deeply. Recover more fully. Wake up ready."
      ],
      "imageKey": "moon",
      "progressIndex": 0,
      "button": "Continue",
      "next": "energy"
    },
    "energy": {
      "page": "10B",
      "type": "benefit",
      "headline": "More Energy",
      "headlineSize": "size-46",
      "body": "Fewer sluggish mornings. Less wasted time and more initiative throughout the day",
      "imageKey": "lightning",
      "progressIndex": 1,
      "button": "Continue",
      "next": "physicalHealth"
    },
    "physicalHealth": {
      "page": "10C",
      "type": "benefit",
      "headline": "Better physical health",
      "headlineSize": "size-46",
      "body": "Your body gets a break. Lower blood pressure, less inflammation, better digestion, and stronger immune defense.",
      "imageKey": "heart",
      "progressIndex": 2,
      "button": "Continue",
      "next": "focus"
    },
    "focus": {
      "page": "10D",
      "type": "benefit",
      "headline": "Better focus",
      "headlineSize": "size-46",
      "body": "Your attention comes back online. You finish tasks and get things done faster.",
      "imageKey": "checklist",
      "progressIndex": 3,
      "button": "Continue",
      "next": "memory"
    },
    "memory": {
      "page": "10E",
      "type": "benefit",
      "headline": "Sharper memory",
      "headlineSize": "size-46",
      "body": "As the fog lifts. You feel more confident as recall becomes easier and thinking becomes clearer.",
      "imageKey": "brain",
      "progressIndex": 4,
      "button": "Continue",
      "next": "relationships"
    },
    "relationships": {
      "page": "10F",
      "type": "benefit",
      "headline": "Improved Relationships",
      "headlineSize": "size-46",
      "body": "Freedom from anger and increased patience with friends and loved ones — the people in your life who matter.",
      "imageKey": "relationship",
      "progressIndex": 5,
      "button": "Continue",
      "next": "questionsIntro"
    },
    "questionsIntro": {
      "page": "11",
      "type": "copy",
      "headline": "But Drinking Feels Difficult to Control",
      "body": "Because it can begin before the first drink. Sometimes it starts in your thoughts. Sometimes it happens automatically in the moment.",
      "button": "Continue",
      "next": "noiseQuestion1"
    },
    "noiseQuestion1": {
      "page": "12",
      "type": "question",
      "headline": "Do you think about drinking before you start?",
      "body": "Like where you’ll be, who you’ll be with, what you’ll drink, or how it'll make you feel?",
      "yes": "Yes",
      "no": "Not really",
      "next": "drinkNoise"
    },
    "drinkNoise": {
      "page": "13",
      "type": "artCopy",
      "headline": "That’s\nDrink Noise.",
      "headlineSize": "size-44",
      "imageKey": "drinkNoise",
      "body": [
        "Your mind starts drinking before your body does. It’s like an Inner Tyrant pushing thoughts toward alcohol.",
        "It rehearses the event—the confidence, connection, excitement, or feeling of fitting in—before you even arrive for the first sip."
      ],
      "button": "Continue",
      "next": "innerTyrant"
    },
    "innerTyrant": {
      "page": "14",
      "type": "copy",
      "headline": "The See App Separates You from the Inner Tyrant.",
      "body": [
        "You are guided to learning how to observe thoughts without automatically obeying them.",
        "Once you see them, they no longer control what happens next. You do."
      ],
      "button": "Continue",
      "next": "withoutThinking"
    },
    "withoutThinking": {
      "page": "15",
      "type": "copy",
      "headline": "But Sometimes There Is No Noise.",
      "body": "No debate. No plan. No conscious decision. You simply find yourself reaching for the drink without thinking.",
      "button": "Continue",
      "next": "automaticQuestion"
    },
    "automaticQuestion": {
      "page": "16",
      "type": "question",
      "headline": "Do you ever drink without thinking it through?",
      "body": "When others are drinking, or even when you're alone. You might even plan against it.",
      "yes": "Yes",
      "no": "Not usually",
      "next": "automaticDrinking"
    },
    "automaticDrinking": {
      "page": "17",
      "type": "artCopy",
      "headline": "That’s Automatic Drinking.",
      "headlineSize": "size-44",
      "imageKey": "autoDrinking",
      "body": [
        "The opportunity appears—a party, a business event, a night out—and years of conditioning take over.",
        "You’re drinking before you’ve truly decided to. You’re on autopilot."
      ],
      "button": "Continue",
      "next": "catchAutomaticMoment"
    },
    "catchAutomaticMoment": {
      "page": "18",
      "type": "copy",
      "headline": "Learn How to Catch the Moment.",
      "body": [
        "The See App helps you notice the automatic push toward drinking as it’s happening—before it turns into action.",
        "Awareness arrives first. Then choice becomes possible."
      ],
      "button": "Continue",
      "next": "howItWorks"
    },
    "howItWorks": {
      "page": "19",
      "type": "videoCopy",
      "headline": "Here’s how it works.",
      "videoSrc": "assets/videos/onboarding_alc_video.mp4",
      "videoPoster": "assets/videos/onboarding_alc_video_poster.jpg",
      "videoWidth": 720,
      "videoHeight": 1280,
      "videoLabel": "How Non-Contemplative Meditation works",
      "button": "Continue",
      "next": "simplestMeditation"
    },
    "simplestMeditation": {
      "page": "20",
      "type": "copy",
      "headline": "The Simplest, Most Effective Meditation on Earth.",
      "body": [
        "One technique. Just 10 to 20 minutes, twice a day — once in the morning, and again before bed.",
        "No mantras. No hypnosis. No breathwork. No mood music."
      ],
      "button": "Continue",
      "next": "trustedVoice"
    },
    "trustedVoice": {
      "page": "21",
      "type": "copy",
      "headline": "One voice. Decades of experience.",
      "headlineSize": "size-44",
      "body": [
        "Dan Schwarzhoff has practiced Non-Contemplative Meditation for more than 40 years.",
        "A recovered alcoholic and former drug abuser, he understands the desire and need that drives obsession from experience—and the way out. He guides every session exactly as he has taught thousands and practices himself."
      ],
      "button": "Continue",
      "next": "faithCompatible"
    },
    "faithCompatible": {
      "page": "22",
      "type": "copy",
      "headline": "And It Won’t Conflict With Your Faith.",
      "body": "Free from New Age narratives and Eastern philosophy, Non-Contemplative meditation is completely compatible across Christian denominations. Even spiritual recovery fellowships.",
      "button": "Continue",
      "next": "choiceRestored"
    },
    "choiceRestored": {
      "page": "23",
      "type": "copy",
      "headline": "Choice returns.",
      "body": [
        "The desire for the effect of alcohol weakens. Drink conditioning melts. Alcohol loses. And you win.",
        "You become able to do what you want to do: Drink less—or stop completely. Your choice."
      ],
      "button": "Continue"
    }
  },
  "overview": [
    {
      "screen": "welcome",
      "label": "1"
    },
    {
      "screen": "goal",
      "label": "2"
    },
    {
      "screen": "social",
      "label": "3A · Drink less"
    },
    {
      "screen": "benefits",
      "label": "3B · Stop completely"
    },
    {
      "screen": "willpower",
      "label": "4"
    },
    {
      "screen": "catchMoment",
      "label": "5"
    },
    {
      "screen": "drinks",
      "label": "6"
    },
    {
      "screen": "scale",
      "label": "7"
    },
    {
      "screen": "cost",
      "label": "8"
    },
    {
      "screen": "grip",
      "label": "9"
    },
    {
      "screen": "sleep",
      "label": "10A"
    },
    {
      "screen": "energy",
      "label": "10B"
    },
    {
      "screen": "physicalHealth",
      "label": "10C"
    },
    {
      "screen": "focus",
      "label": "10D"
    },
    {
      "screen": "memory",
      "label": "10E"
    },
    {
      "screen": "relationships",
      "label": "10F"
    },
    {
      "screen": "questionsIntro",
      "label": "11"
    },
    {
      "screen": "noiseQuestion1",
      "label": "12"
    },
    {
      "screen": "drinkNoise",
      "label": "13"
    },
    {
      "screen": "innerTyrant",
      "label": "14"
    },
    {
      "screen": "withoutThinking",
      "label": "15"
    },
    {
      "screen": "automaticQuestion",
      "label": "16"
    },
    {
      "screen": "automaticDrinking",
      "label": "17"
    },
    {
      "screen": "catchAutomaticMoment",
      "label": "18"
    },
    {
      "screen": "howItWorks",
      "label": "19"
    },
    {
      "screen": "simplestMeditation",
      "label": "20"
    },
    {
      "screen": "trustedVoice",
      "label": "21"
    },
    {
      "screen": "faithCompatible",
      "label": "22"
    },
    {
      "screen": "choiceRestored",
      "label": "23"
    }
  ]
};

  flow.assets = Object.fromEntries(
    Object.entries(flow.assets).map(([key, value]) => [key, image(value)])
  );

  return flow;
})();

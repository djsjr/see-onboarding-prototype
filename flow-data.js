window.SEE_ONBOARDING_FLOW = (() => {
  const assetBase = window.SEE_FLOW_ASSET_BASE || "assets";
  const image = (name) => `${assetBase}/images/${name}`;

  return {
    assets: {
      background: image("background_yellow.png"),
      lineChart: image("line_chart.png"),
      onOffSwitch: image("on-off_switch.png"),
      lifeBenefitsArc: image("life_benefits_arc.png"),
      champagneToast: image("champagne_toast.png"),
      letGoHand: image("let_go_hand_outline.png"),
    },
    screens: {
      welcome: {
        headline: "Get your life back from alcohol.",
        body: "If drinking is taking too much from you, you’re in the right place.",
        button: "continue",
      },
      goal: {
        headlineLines: ["Which", "are you?"],
        choices: [
          {
            goal: "less",
            label: "I want to drink less",
            imageKey: "lineChart",
          },
          {
            goal: "stop",
            label: "I want to stop entirely",
            imageKey: "onOffSwitch",
          },
        ],
      },
      benefits: {
        branchLabel: "Stop entirely path",
        headline: "A life without alcohol changes a lot about you",
        headlineClass: "compact",
        imageKey: "lifeBenefitsArc",
        imageClass: "benefits-art",
        body: [
          "You’ll sleep better, have more energy, and can repair relationships with loved ones.",
          "You’ll think more clearly, focus better, and experience improved memory, too.",
        ],
        button: "continue",
      },
      social: {
        branchLabel: "Drink less path",
        headline: "That is great.",
        headlineClass: "medium",
        imageKey: "champagneToast",
        imageClass: "toast-art",
        body: [
          "Alcohol is a powerful social lubricant. Parties, celebrations, events with friends and family.",
          "Drink responsibly — just less often, with less brain fog, less regret, and better health.",
        ],
        button: "continue",
      },
      willpower: {
        headline: "It’s Not About Willpower",
        headlineClass: "medium",
        imageKey: "letGoHand",
        imageClass: "willpower-art",
        body: ["Trying harder doesn’t always work, but you can access the power of choice."],
        button: "Let’s find that!",
      },
      downsides: {
        title: {
          less: "Why do you want to drink less?",
          stop: "Why do you want to stop drinking?",
        },
        subtitle: {
          less: "Pick all that apply.",
          stop: "Pick any that apply.",
        },
        options: {
          less: [
            "Social life without overdoing it",
            "Improved health",
            "Fewer bad mornings / less brain fog",
            "Better sleep",
            "Weight loss / fewer calories",
            "Drinking feels too automatic",
            "Alcohol takes up less space",
          ],
          stop: [
            "Get my health back",
            "No more bad mornings",
            "Less anxiety, shame, or regret",
            "Once I start, I can’t stop",
            "Protect my relationships",
            "Protect my work or reputation",
          ],
        },
        button: "continue",
      },
      drinks: {
        headline: "In a typical week, how many alcoholic drinks do you have?",
        options: ["0", "1–3", "4–7", "8–14", "15–24", "25–49", "50+"],
        button: "continue",
      },
    },
    overview: [
      { screen: "welcome", label: "1" },
      { screen: "goal", label: "2" },
      { screen: "social", label: "3A · Drink less" },
      { screen: "benefits", label: "3B · Stop entirely" },
      { screen: "willpower", label: "4" },
      { screen: "downsides", goal: "less", label: "5A · Why drink less" },
      { screen: "downsides", goal: "stop", label: "5B · Why stop" },
      { screen: "drinks", label: "6" },
    ],
  };
})();

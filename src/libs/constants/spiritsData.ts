import type { SpiritsData } from "#libs/types";

/**
 * Spirits Data
 * @example
 * const data = spiritsData["backflipping_champion"];
 */
const spiritsData: Record<string, SpiritsData> = {
  // Isle
  candlemaker: {
    name: "Pointing Candlemaker",
    type: "Regular Spirit",
    realm: "Isle of Dawn",
    main: {
      description: "Pointing Candlemaker Infographics by Ed.7",
      total: " ",
      image: "Pointing-Candlemaker-Guide-777-Ed.webp",
    },
    emote: {
      icon: "<:pointingcandlermaker:1205914230553976863>",
      level: [
        {
          title: '"Point Emote" Level 1',
          image: "Pointing-Candlemaker-point-emote-level-1.gif",
        },
        {
          title: '"Point Emote" Level 2',
          image: "Pointing-Candlemaker-point-emote-level-2.gif",
        },
        {
          title: '"Point Emote" Level 3',
          image: "Pointing-Candlemaker-point-emote-level-3.gif",
        },
        {
          title: '"Point Emote" Level 4',
          image: "Pointing-Candlemaker-point-emote-level-4.gif",
        },
      ],
    },
  },
  stargazer: {
    name: "Ushering Stargazer",
    type: "Regular Spirit",
    realm: "Isle of Dawn",
    main: {
      description: "Ushering Stargazer Infographics by Ed.7",
      image: "Ushering-Stargazer-Guide-777-Ed.webp",
    },
    emote: {
      icon: "<:usheringstargazer:1205914276498513972>",
      level: [
        {
          title: '"Come Emote" Level 1',
          image: "Ushering-Stargazer-come-emote-level-1.gif",
        },
        {
          title: '"Come Emote" Level 2',
          image: "Ushering-Stargazer-come-emote-level-2.gif",
        },
        {
          title: '"Come Emote" Level 3',
          image: "Ushering-Stargazer-come-emote-level-3.gif",
        },
        {
          title: '"Come Emote" Level 4',
          image: "Ushering-Stargazer-come-emote-level-4.gif",
        },
      ],
    },
  },
  voyager: {
    name: "Rejecting Voyager",
    type: "Regular Spirit",
    realm: "Isle of Dawn",
    main: {
      description: "Rejecting Voyager Infographics by Ed.7",
      image: "Rejecting-Voyager-Guide-777-Ed.webp",
    },
    emote: {
      icon: "<:rejectingvoyager:1205914255178727425>",
      level: [
        {
          title: '"No Thanks Emote" Level 1',
          image: "Rejecting-Voyager-no-thanks-emote-level-1.gif",
        },
        {
          title: '"No Thanks Emote" Level 2',
          image: "Rejecting-Voyager-no-thanks-emote-level-2.gif",
        },
        {
          title: '"No Thanks Emote" Level 3',
          image: "Rejecting-Voyager-no-thanks-emote-level-3.gif",
        },
        {
          title: '"No Thanks Emote" Level 4',
          image: "Rejecting-Voyager-no-thanks-emote-level-4.gif",
        },
      ],
    },
  },

  // prairie
  applauding_bellmaker: {
    name: "Applauding Bellmaker",
    type: "Regular Spirit",
    realm: "Daylight Prairie",
    main: {
      description: "Applauding Bellmaker Infographics by Ed.7",
      image: "Applauding-Bellmaker-Guide-777-Ed.webp",
    },
    emote: {
      icon: "<:applaudingbellmaker:1205914299814518784>",
      level: [
        {
          title: '"Clap Emote" Level 1',
          image: "Applauding-Bellmaker-clap-emote-level-1.gif",
        },
        {
          title: '"Clap Emote" Level 2',
          image: "Applauding-Bellmaker-clap-emote-level-2.gif",
        },
        {
          title: '"Clap Emote" Level 3',
          image: "Applauding-Bellmaker-clap-emote-level-3.gif",
        },
        {
          title: '"Clap Emote" Level 4',
          image: "Applauding-Bellmaker-clap-emote-level-4.gif",
        },
      ],
    },
  },
  bird_whisperer: {
    name: "Bird Whisperer",
    type: "Regular Spirit",
    realm: "Daylight Prairie",
    main: {
      description: "Bird Whisperer Infographics by Ed.7",
      image: "Bird-Whisperer-Guide-777-Ed.webp",
    },
    call: {
      title: "Bird Call",
      icon: "<:birdwhisperer:1205914321897398332>",
      image: "Bird_Call-1.mp4",
    },
  },
  charmer: {
    name: "Butterfly Charmer",
    type: "Regular Spirit",
    realm: "Daylight Prairie",
    main: {
      description: "Butterfly Charmer Infographics by Ed.7",
      image: "Butterfly-Charmer-Guide-777-Ed.png",
    },
    emote: {
      icon: "<:butterflycharmer:1205914343519158302>",
      level: [
        {
          title: '"Butterfly Emote" Level 1',
          image: "Butterfly-Charmer-butterfly-emote-level-1.gif",
        },
        {
          title: '"Butterfly Emote" Level 2',
          image: "Butterfly-Charmer-butterfly-emote-level-2.gif",
        },
        {
          title: '"Butterfly Emote" Level 3',
          image: "Butterfly-Charmer-butterfly-emote-level-3.gif",
        },
        {
          title: '"Butterfly Emote" Level 4',
          image: "Butterfly-Charmer-butterfly-emote-level-4.gif",
        },
      ],
    },
  },
  worshiper: {
    name: "Ceremonial Worshipper",
    type: "Regular Spirit",
    realm: "Daylight Prairie",
    main: {
      description: "Ceremonial Worshipper Infographics by Ed.7",
      image: "Ceremonial-Worshiper-Guide-777-Ed.png",
    },
    emote: {
      icon: "<:ceremonialworshiper:1205914362733404181>",
      level: [
        {
          title: '"Teamwork Emote"\n- There\'s only 1 level of this emote',
          image: "Ceremonial-Worshiper-teamwork-emote-level-1.gif",
        },
      ],
    },
  },
  dock_worker: {
    name: "Exhausted Dock Worker",
    type: "Regular Spirit",
    realm: "Daylight Prairie",
    main: {
      description: "Exhausted Dock Worker Infographics by Ed.7",
      image: "Exhausted-Dock-Worker-Guide-777-Ed.png",
    },
    emote: {
      icon: "<:exhausteddockworker:1205914381519556708>",
      level: [
        {
          title: '"Exhasted Emote" Level 1',
          image: "Exhausted-Dock-Worker-wipe-brow-emote-level-1.gif",
        },
        {
          title: '"Exhasted Emote" Level 2',
          image: "Exhausted-Dock-Worker-wipe-brow-emote-level-2.gif",
        },
        {
          title: '"Exhasted Emote" Level 3',
          image: "Exhausted-Dock-Worker-wipe-brow-emote-level-3.gif",
        },
        {
          title: '"Exhasted Emote" Level 4',
          image: "Exhausted-Dock-Worker-wipe-brow-emote-level-4.gif",
        },
      ],
    },
  },
  laughing_light_catcher: {
    name: "Laughing Light Catcher",
    type: "Regular Spirit",
    realm: "Daylight Prairie",
    main: {
      description: "Laughing Light Catcher Infographics by Ed.7",
      image: "Laughing-Light-Catcher-Guide-777-Ed.webp",
    },
    emote: {
      icon: "<:laughinglightcatcher:1205914422309290015>",
      level: [
        {
          title: '"Laugh Emote" Level 1',
          image: "Laughing-Light-Catcher-laugh-emote-level-1.gif",
        },
        {
          title: '"Laugh Emote" Level 2',
          image: "Laughing-Light-Catcher-laugh-emote-level-2.gif",
        },
        {
          title: '"Laugh Emote" Level 3',
          image: "Laughing-Light-Catcher-laugh-emote-level-3.gif",
        },
        {
          title: '"Laugh Emote" Level 4',
          image: "Laughing-Light-Catcher-laugh-emote-level-4.gif",
        },
      ],
    },
  },
  shipwright: {
    name: "Slumbering Shipwright",
    type: "Regular Spirit",
    realm: "Daylight Prairie",
    main: {
      description: "Slumbering Shipwright Infographics by Ed.7",
      image: "Slumbering-Shipwright-Guide-777-Ed.webp",
    },
    emote: {
      icon: "<:slumberingshipwright:1205914400901308546>",
      level: [
        {
          title: '"Yawn Emote" Level 1',
          image: "Slumbering-Shipwright-yawn-emote-level-1.gif",
        },
        {
          title: '"Yawn Emote" Level 2',
          image: "Slumbering-Shipwright-yawn-emote-level-2.gif",
        },
        {
          title: '"Yawn Emote" Level 3',
          image: "Slumbering-Shipwright-yawn-emote-level-3.gif",
        },
        {
          title: '"Yawn Emote" Level 4',
          image: "Slumbering-Shipwright-yawn-emote-level-4.gif",
        },
      ],
    },
  },
  waving_bellmaker: {
    name: "Waving Bellmaker",
    type: "Regular Spirit",
    realm: "Daylight Prairie",
    main: {
      description: "Waving Bellmaker Infographics by Ed.7",
      image: "Waving-Bellmaker-Guide-777-Ed.png",
    },
    emote: {
      icon: "<:wavingbellmaker:1205914441330466889>",
      level: [
        {
          title: '"Wave Emote" Level 1',
          image: "Waving-Bellmaker-wave-emote-level-1.gif",
        },
        {
          title: '"Wave Emote" Level 2',
          image: "Waving-Bellmaker-wave-emote-level-2.gif",
        },
        {
          title: '"Wave Emote" Level 3',
          image: "Waving-Bellmaker-wave-emote-level-3.gif",
        },
        {
          title: '"Wave Emote" Level 4',
          image: "Waving-Bellmaker-wave-emote-level-4.gif",
        },
        {
          title: '"Wave Emote" Level 5',
          image: "Waving-Bellmaker-wave-emote-level-5.gif",
        },
        {
          title: '"Wave Emote" Level 6',
          image: "Waving-Bellmaker-wave-emote-level-6.gif",
        },
      ],
    },
  },

  // forest
  lumberjack: {
    name: "Apologetic Lumberjack",
    type: "Regular Spirit",
    realm: "Hidden Forest",
    main: {
      description: "Apologetic Lumberjack Infographics by Ed.7",
      image: "Apologetic-Lumberjack-Guide-777-Ed.png",
    },
    emote: {
      icon: "<:apologeticlumberjack:1205914460661751808>",
      level: [
        {
          title: '"Apologize Emote" Level 1',
          image: "Apologetic-Lumberjack-Apologize_Level_1.gif",
        },
        {
          title: '"Apologize Emote" Level 2',
          image: "Apologetic-Lumberjack-Apologize_Level_2.gif",
        },
        {
          title: '"Apologize Emote" Level 3',
          image: "Apologetic-Lumberjack-Apologize_Level_3.gif",
        },
        {
          title: '"Apologize Emote" Level 4',
          image: "Apologetic-Lumberjack-Apologize_Level_4.gif",
        },
      ],
    },
  },
  prospector: {
    name: "Blushing Prospector",
    type: "Regular Spirit",
    realm: "Hidden Forest",
    main: {
      description: "Blushing Prospector Infographics by Ed.7",
      image: "Blushing-Prospector-Guide-777-Ed.png",
    },
    emote: {
      icon: "<:blushhingprosprector:1205914615259861132>",
      level: [
        {
          title: '"Shy Emote" Level 1',
          image: "Blushing-Prospector-Shy_Level_1.gif",
        },
        {
          title: '"Shy Emote" Level 2',
          image: "Blushing-Prospector-Shy_Level_2.gif",
        },
        {
          title: '"Shy Emote" Level 3',
          image: "Blushing-Prospector-Shy_Level_3.gif",
        },
        {
          title: '"Shy Emote" Level 4',
          image: "Blushing-Prospector-Shy_Level_4.gif",
        },
      ],
    },
  },
  dismayed_hunter: {
    name: "Dismayed Hunter",
    type: "Regular Spirit",
    realm: "Hidden Forest",
    main: {
      description: "Dismayed Hunter Infographics by Ed.7",
      image: "Dismayed-Hunter-Guide-777-Ed.png",
    },
    emote: {
      icon: "<:dismayedhunter:1205914594724290650>",
      level: [
        {
          title: '"Shock Emote" Level 1',
          image: "Dismayed-Hunter-Shock_Level_1.gif",
        },
        {
          title: '"Shock Emote" Level 2',
          image: "Dismayed-Hunter-Shock_Level_2.gif",
        },
        {
          title: '"Shock Emote" Level 3',
          image: "Dismayed-Hunter-Shock_Level_3.gif",
        },
        {
          title: '"Shock Emote" Level 4',
          image: "Dismayed-Hunter-Shock_Level_4.gif",
        },
      ],
    },
  },
  pioneer: {
    name: "Hide'n'seek Pioneer",
    type: "Regular Spirit",
    realm: "Hidden Forest",
    main: {
      description: "Hide'n'seek Pioneer Infographics by Ed.7",
      image: "Hide-n-Seek-Pioneer-Guide-777-Ed.png",
    },
    emote: {
      icon: "<:hidenseekpioneer:1205914575447527436>",
      level: [
        {
          title: "Hide and Seek Emote",
          description:
            "<:hidenseekpioneer:1205914575447527436> emote has only one level with no upgrades.\n\nInstead of being a standard animation, this Expression begins a mini game of Hide and Seek. When selected, a Hide and Seek icon (<:hidenseekpioneer:1205914575447527436>) appears over your avatar's head, inviting all nearby players to join the game by clicking on the icon. The player who starts the game is always the seeker. Everyone else is told to hide while a timer counts down to the start of the game. The seeker then has a limited amount of time to find the hidden players and tap on them. Honking and Deep Calls do not show any hidden players to the seeker for the duration of the game.",
          image: "HidenSeek_Hide_and_Seek.gif",
        },
      ],
    },
  },
  porter: {
    name: "Pouty Porter",
    type: "Regular Spirit",
    realm: "Hidden Forest",
    main: {
      description: "Pouty Porter Infographics by Ed.7",
      image: "Pouty-Porter-Guide-777-Ed.png",
    },
    emote: {
      icon: "<:poutyporter:1205914557579788298>",
      level: [
        {
          title: '"Angry Emote" Level 1',
          image: "Pouty-Porter-Angry_Level_1.gif",
        },
        {
          title: '"Angry Emote" Level 2',
          image: "Pouty_Porter_Angry_Level_2.gif",
        },
        {
          title: '"Angry Emote" Level 3',
          image: "Pouty_Porter_Angry_Level_3.gif",
        },
        {
          title: '"Angry Emote" Level 4',
          image: "Pouty_Porter_Angry_Level_4.gif",
        },
      ],
    },
  },
  trailblazer: {
    name: "Shivering Trailblazer",
    type: "Regular Spirit",
    realm: "Hidden Forest",
    main: {
      description: "Shivering Trailblazer Infographics by Ed.7",
      image: "Shivering-Trailblazer-Guide-777-Ed.png",
    },
    emote: {
      icon: "<:shiveringtrailblazer:1205914480601595954>",
      level: [
        {
          title: '"Shiver Emote" Level 1',
          image: "Shivering_Trailblazer_Shiver_Level_1.gif",
        },
        {
          title: '"Shiver Emote" Level 2',
          image: "Shivering_Trailblazer_Shiver_Level_2.gif",
        },
        {
          title: '"Shiver Emote" Level 3',
          image: "Shivering_Trailblazer_Shiver_Level_3.gif",
        },
        {
          title: '"Shiver Emote" Level 4',
          image: "Shivering_Trailblazer_Shiver_Level_4.gif",
        },
      ],
    },
  },
  miner: {
    name: "Tearful Light Miner",
    type: "Regular Spirit",
    realm: "Hidden Forest",
    main: {
      description: "Tearful Light Miner Infographics by Ed.7",
      image: "Tearful-Light-Miner-Guide-777-Ed.png",
    },
    emote: {
      icon: "<:tearfullightminer:1205914519575076915>",
      level: [
        {
          title: '"Crying Emote" Level 1',
          image: "Tearful_Light_Miner_Crying_Level_1.gif",
        },
        {
          title: '"Crying Emote" Level 2',
          image: "Tearful_Light_Miner_Crying_Level_2.gif",
        },
        {
          title: '"Crying Emote" Level 3',
          image: "Tearful_Light_Miner_Crying_Level_3.gif",
        },
        {
          title: '"Crying Emote" Level 4',
          image: "Tearful_Light_Miner_Crying_Level_4.gif",
        },
        {
          title: '"Crying Emote" Level 5',
          image: "Tearful_Light_Miner_Crying_Level_5.gif",
        },
        {
          title: '"Crying Emote" Level 6',
          image: "Tearful_Light_Miner_Crying_Level_6.gif",
        },
      ],
    },
  },
  whale_whisperer: {
    name: "Whale Whisperer",
    type: "Regular Spirit",
    realm: "Hidden Forest",
    main: {
      description: "Whale Whisperer Infographics by Ed.7",
      image: "Whale_Call.mp4",
    },
    call: {
      title: "Whale Call",
      icon: "<:whalewhisperer:1205914501241765918>",
      image: "Whale_Call-1.mp4",
    },
  },

  // valley
  backflipping_champion: {
    name: "Backflipping Champion",
    type: "Regular Spirit",
    realm: "Valley of Triumph",
    main: {
      description: "Backflipping Champion Infographics by Ed.7",
      total: " ",
      image: "Backflipping-Champion-Guide-777-Ed.webp",
    },
    emote: {
      icon: "<:backflippingchampion:1205914746977779762>",
      level: [
        {
          title: '"Backflip Emote" Level 1',
          image: "Backflipping_Champion_Backflip_Level_1.gif",
        },
        {
          title: '"Backflip Emote" Level 2',
          image: "Backflipping_Champion_Backflip_Level_2.gif",
        },
        {
          title: '"Backflip Emote" Level 3',
          image: "Backflipping_Champion_Backflip_Level_3.gif",
        },
        {
          title: '"Backflip Emote" Level 4',
          image: "Backflipping_Champion_Backflip_Level_4.gif",
        },
      ],
    },
  },
  medalist: {
    name: "Bowing Medalist",
    type: "Regular Spirit",
    realm: "Valley of Triumph",
    main: {
      description: "Bowing Medalist Infographics by Ed.7",
      image: "Bowing-Medalist-Guide-777-Ed.png",
    },
    emote: {
      icon: "<:bowingmedalist:1205914729130885130> ",
      level: [
        {
          title: '"Bow Emote" Level 1',
          image: "Bowing_Medalist_Bow_Level_1.gif",
        },
        {
          title: '"Bow Emote" Level 2',
          image: "Bowing_Medalist_Bow_Level_2.gif",
        },
        {
          title: '"Bow Emote" Level 3',
          image: "Bowing_Medalist_Bow_Level_3.gif",
        },
        {
          title: '"Bow Emote" Level 4',
          image: "Bowing_Medalist_Bow_Level_4.gif",
        },
      ],
    },
  },
  spectator: {
    name: "Cheerful Spectator",
    type: "Regular Spirit",
    realm: "Valley of Triumph",
    main: {
      description: "Cheerful Spectator Infographics by Ed.7",
      image: "Cheerful-Spectator-Guide-777-Ed.png",
    },
    emote: {
      icon: "<:cheerfulspectator:1205914711745626122>",
      level: [
        {
          title: '"Cheer Emote" Level 1',
          image: "Cheerful_Spectator_Cheer_Level_1.gif",
        },
        {
          title: '"Cheer Emote" Level 2',
          image: "Cheerful_Spectator_Cheer_Level_2.gif",
        },
        {
          title: '"Cheer Emote" Level 3',
          image: "Cheerful_Spectator_Cheer_Level_3.gif",
        },
        {
          title: '"Cheer Emote" Level 4',
          image: "Cheerful_Spectator_Cheer_Level_4.gif",
        },
      ],
    },
  },
  sightseer: {
    name: "Confident Sightseer",
    type: "Regular Spirit",
    realm: "Valley of Triumph",
    main: {
      description: "Confident Sightseer Infographics by Ed.7",
      image: "Confident-Sightseer-Guide-777-Ed.png",
    },
    stance: {
      title: "Confident Stance",
      icon: "<:confidentsightseer:1205914692346712194>",
      image: "Confident_Stance.gif",
    },
  },
  handstanding_thrillseeker: {
    name: "Handstanding Thrillseeker",
    type: "Regular Spirit",
    realm: "Valley of Triumph",
    main: {
      description: "Handstanding Thrillseeker Infographics by Ed.7",
      image: "Handstanding-Thrillseeker-Guide-777-Ed.png",
    },
    emote: {
      icon: "<:handstandingthrillseeker:1205914674445422642>",
      level: [
        {
          title: '"Handstand Emote" Level 1',
          image: "Handstanding_Handstand_Level_1.gif",
        },
        {
          title: '"Handstand Emote" Level 2',
          image: "Handstanding_Handstand_Level_2.gif",
        },
        {
          title: '"Handstand Emote" Level 3',
          image: "Handstanding_Handstand_Level_3.gif",
        },
        {
          title: '"Handstand Emote" Level 4',
          image: "Handstanding_Handstand_Level_4.gif",
        },
      ],
    },
  },
  manta_whisperer: {
    name: "Manta Whisperer",
    type: "Regular Spirit",
    realm: "Valley of Triumph",
    main: {
      description: "Manta Whisperer Infographics by Ed.7",
      image: "Manta-Whisperer-Guide-777-Ed.png",
    },
    call: {
      title: "Manta Call",
      icon: "<:mantawhisperer:1205914655885889647>",
      image: "Manta_Call-1.mp4",
    },
  },
  proud_victor: {
    name: "Proud Victor",
    type: "Regular Spirit",
    realm: "Valley of Triumph",
    main: {
      description: "Proud Victor Infographics by Ed.7",
      image: "Proud-Victor-Guide-777-Ed.webp",
    },
    stance: {
      title: "Proud Stance",
      icon: "<:proudvictor:1205914638747836538>",
      image: "Proud_Stance.gif",
    },
  },

  // wasteland
  courageous_soldier: {
    name: "Courageous Soldier",
    type: "Regular Spirit",
    realm: "Golden Wasteland",
    main: {
      description: "Courageous Soldier Infographics by Ed.7",
      image: "Courageous-Soldier-Guide-777-Ed.png",
    },
    stance: {
      title: "Courageous Stance",
      icon: "<:courageoussoldier:1205914854456696892>",
      image: "Courageous_Stance.gif",
    },
  },
  fainting_warrior: {
    name: "Fainting Warrior",
    type: "Regular Spirit",
    realm: "Golden Wasteland",
    main: {
      description: "Fainting Warrior Infographics by Ed.7",
      image: "Fainting-Warrior-Guide-777-Ed.png",
    },
    emote: {
      icon: "<:faintingwarrior:1205914837360840714>",
      level: [
        {
          title: '"Faint Emote" Level 1',
          image: "Fainting_Warrior_Faint_Level_1.gif",
        },
        {
          title: '"Faint Emote" Level 2',
          image: "Fainting_Warrior_Faint_Level_2.gif",
        },
        {
          title: '"Faint Emote" Level 3',
          image: "Fainting_Warrior_Faint_Level_3.gif",
        },
        {
          title: '"Faint Emote" Level 4',
          image: "Fainting_Warrior_Faint_Level_4.gif",
        },
      ],
    },
  },
  refugee: {
    name: "Frightened Refugee",
    type: "Regular Spirit",
    realm: "Golden Wasteland",
    main: {
      description: "Frightened Refugee Infographics by Ed.7",
      image: "Frightened-Refugee-Guide-777-Ed.png",
    },
    emote: {
      icon: "<:frightenedrefuge:1205914818134155294>",
      level: [
        {
          title: '"Duck Emote" Level 1',
          image: "Frightened_Refugee_Duck_Level_1.gif",
        },
        {
          title: '"Duck Emote" Level 2',
          image: "Frightened_Refugee_Duck_Level_2.gif",
        },
        {
          title: '"Duck Emote" Level 3',
          image: "Frightened_Refugee_Duck_Level_3.gif",
        },
        {
          title: '"Duck Emote" Level 4',
          image: "Frightened_Refugee_Duck_Level_4.gif",
        },
      ],
    },
  },
  lookout_scout: {
    name: "Looking Scout",
    type: "Regular Spirit",
    realm: "Golden Wasteland",
    main: {
      description: "Looking Scout Infographics by Ed.7",
      image: "Lookout-Scout-Guide-777-Ed.png",
    },
    emote: {
      icon: "<:lookoutscout:1205914800161558550>",
      level: [
        {
          title: '"Lookout Emote" Level 1',
          image: "Looking_Scout_Look_Around_Level_1.gif",
        },
        {
          title: '"Lookout Emote" Level 2',
          image: "Looking_Scout_Look_Around_Level_2.gif",
        },
        {
          title: '"Lookout Emote" Level 3',
          image: "Looking_Scout_Look_Around_Level_3.gif",
        },
        {
          title: '"Lookout Emote" Level 4',
          image: "Looking_Scout_Look_Around_Level_4.gif",
        },
      ],
    },
  },
  saluting_captain: {
    name: "Saluting Captain",
    type: "Regular Spirit",
    realm: "Golden Wasteland",
    main: {
      description: "Saluting Captain Infographics by Ed.7",
      image: "Saluting-Captain-Guide-777-Ed.png",
    },
    emote: {
      icon: "<:salutingcaptian:1205914782998335649>",
      level: [
        {
          title: '"Salute Emote" Level 1',
          image: "Saluting_Captain_Salute_Level_1.gif",
        },
        {
          title: '"Salute Emote" Level 2',
          image: "Saluting_Captain_Salute_Level_2.gif",
        },
        {
          title: '"Salute Emote" Level 3',
          image: "Saluting_Captain_Salute_Level_3.gif",
        },
        {
          title: '"Salute Emote" Level 4',
          image: "Saluting_Captain_Salute_Level_4.gif",
        },
      ],
    },
  },
  stealthy_survivor: {
    name: "Stealthy Survivor",
    type: "Regular Spirit",
    realm: "Golden Wasteland",
    main: {
      description: "Stealthy Survivor Infographics by Ed.7",
      image: "Stealthy-Survivor-Guide-777-Ed.png",
    },
    stance: {
      title: "Sneaky Stance",
      icon: "<:stealthysurvivor:1205914765558423552>",
      image: "Sneaky_Stance.gif",
    },
  },

  // vault
  levitating_adept: {
    name: "Levitating Adept",
    type: "Regular Spirit",
    realm: "Vault of Knowledge",
    main: {
      description: "Levitating Adept Infographics by Ed.7",
      image: "Levitating-Adept-Guide-777-Ed.png",
    },
    emote: {
      icon: "<:levitatingadept:1205914962921525269>",
      level: [
        {
          title: '"Telekinesis Emote" Level 1',
          image: "Levitating_Adept_Telekinesis_Level_1.gif",
        },
        {
          title: '"Telekinesis Emote" Level 2',
          image: "Levitating_Adept_Telekinesis_Level_2.gif",
        },
        {
          title: '"Telekinesis Emote" Level 3',
          image: "Levitating_Adept_Telekinesis_Level_3.gif",
        },
        {
          title: '"Telekinesis Emote" Level 4',
          image: "Levitating_Adept_Telekinesis_Level_4.gif",
        },
      ],
    },
  },
  meditating_monastic: {
    name: "Meditating Monastic",
    type: "Regular Spirit",
    realm: "Vault of Knowledge",
    main: {
      description: "Meditating Monastic Infographics by Ed.7",
      image: "Meditating-Monastic-Guide-777-Ed.png",
    },
    emote: {
      icon: "<:meditatingmonastic:1205914942193143808>",
      level: [
        {
          title: '"Float Emote" Level 1',
          image: "Meditating_Monastic_Float_Level_1.gif",
        },
        {
          title: '"Float Emote" Level 2',
          image: "Meditating_Monastic_Float_Level_2.gif",
        },
        {
          title: '"Float Emote" Level 3',
          image: "Meditating_Monastic_Float_Level_3.gif",
        },
        {
          title: '"Float Emote" Level 4',
          image: "Meditating_Monastic_Float_Level_4.gif",
        },
      ],
    },
  },
  memory_whisperer: {
    name: "Memory Whisperer",
    type: "Regular Spirit",
    realm: "Vault of Knowledge",
    main: {
      description: "Memory Whisperer Infographics by Ed.7",
      image: "Memory-Whisperer-Guide-777-Ed.png",
    },
    call: {
      title: "Cosmic Manta Call",
      icon: "<:memorywhisperer:1205914905275011123>",
      image: "Cosmic_Manta_Call-1.mp4",
    },
  },
  polite_scholar: {
    name: "Polite Scholar",
    type: "Regular Spirit",
    realm: "Vault of Knowledge",
    main: {
      description: "Polite Scholar Infographics by Ed.7",
      image: "Polite-Scholar-Guide-777-Ed.png",
    },
    stance: {
      title: "Polite Stance",
      icon: "<:politescholar:1205914889650970644>",
      image: "Polite_Stance.gif",
    },
  },
  praying: {
    name: "Praying Acolyte",
    type: "Regular Spirit",
    realm: "Vault of Knowledge",
    main: {
      description: "Praying Acolyte Infographics by Ed.7",
      image: "Praying-Acolyte-Guide-777-Ed.png",
    },
    emote: {
      icon: "<:prayinacolite:1205914871783235684>",
      level: [
        {
          title: '"Pray Emote" Level 1',
          image: "Praying_Acolyte_Pray_Level_1.gif",
        },
        {
          title: '"Pray Emote" Level 2',
          image: "Praying_Acolyte_Pray_Level_2.gif",
        },
        {
          title: '"Pray Emote" Level 3',
          image: "Praying_Acolyte_Pray_Level_3.gif",
        },
        {
          title: '"Pray Emote" Level 4',
          image: "Praying_Acolyte_Pray_Level_4.gif",
        },
      ],
    },
  },
  // Seasonal

  // duet
  cellistB: {
    name: "The Cellist's Beggining",
    icon: "<:CellistB:1262326135216406559>",
    type: "Seasonal Spirit",
    season: "Duet",
    ts: {
      eligible: false,
      returned: false,
      dates: [],
    },
    tree: {
      by: "@tea11",
      total: " ",
      image: "duet-tree.jpg",
    },
  },
  pianistB: {
    name: "The Pianists's Beggining",
    icon: "<:PianistB:1262326115024769107>",
    type: "Seasonal Spirit",
    season: "Duet",
    ts: {
      eligible: false,
      returned: false,
      dates: [],
    },
    tree: {
      by: "@tea11",
      total: " ",
      image: "duet-tree.jpg",
    },
  },
  musician_legacy: {
    name: "The Musician's Legacy",
    icon: "<:MusicianL:1262326097341714514>",
    type: "Seasonal Spirit",
    season: "Duet",
    ts: {
      eligible: false,
      returned: false,
      dates: [],
    },
    tree: {
      by: "@tea11",
      total: " ",
      image: "duet-tree.jpg",
    },
  },
  cellistF: {
    name: "The Cellist's Flourishing",
    icon: "<:CellistF:1262326155508318380>",
    type: "Seasonal Spirit",
    season: "Duet",
    ts: {
      eligible: false,
      returned: false,
      dates: [],
    },
    tree: {
      by: "@tea11",
      total: " ",
      image: "duet-tree.jpg",
    },
  },
  pianistF: {
    name: "The Cellist's Flourishing",
    icon: "<:PianistF:1262326075380334623>",
    type: "Seasonal Spirit",
    season: "Duet",
    ts: {
      eligible: false,
      returned: false,
      dates: [],
    },
    tree: {
      by: "@tea11",
      total: " ",
      image: "duet-tree.jpg",
    },
  },
  // nesting
  solarium: {
    name: "Nesting Solarium",
    type: "Seasonal Spirit",
    realm: "Aviary Village",
    season: "Nesting",
    ts: {
      eligible: false,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Mimi and Sam",
      total: " ",
      image: "Solarium_Tree_Mimi.jpg",
    },
  },

  loft: {
    name: "Nesting Loft",
    type: "Seasonal Spirit",
    realm: "Aviary Village",
    season: "Nesting",
    ts: {
      eligible: false,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Mimi and Sam",
      total: " ",
      image: "Loft_Tree_Mimi.jpg",
    },
  },

  atrium: {
    name: "Nesting Atrium",
    type: "Seasonal Spirit",
    realm: "Aviary Village",
    season: "Nesting",
    ts: {
      eligible: false,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Mimi and Sam",
      total: " ",
      image: "Atrium_Tree_Mimi.jpg",
    },
  },

  nook: {
    name: "Nesting Nook",
    type: "Seasonal Spirit",
    realm: "Aviary Village",
    season: "Nesting",
    ts: {
      eligible: false,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Mimi and Sam",
      total: " ",
      image: "Nook_Tree_Mimi.jpg",
    },
  },
  // nine colored deer
  hunter: {
    name: "Hunter",
    type: "Seasonal Spirit",
    realm: "Vault of Knowledge",
    season: "Nine-Colored Deer",
    ts: {
      eligible: false,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Mimi and Sam",
      total: " ",
      image: "Hunter-Tree_Mimi.jpg",
    },
    location: {
      by: "EM",
      description: "How to reach Crescent Oasis by Clement",
      image: "Deer_Spirits_Location_Em_Clement.jpg",
    },

    emote: {
      icon: "<:hunter:1197413131736064052>",
      level: [
        {
          title: '"Flex" Emote Level 1',
          image: "Hunter-flex-emote-level-1.gif",
        },
        {
          title: '"Flex" Emote Level 2',
          image: "Hunter-flex-emote-level-2.gif",
        },
        {
          title: '"Flex" Emote Level 3',
          image: "Hunter-flex-emote-level-3.gif",
        },
        {
          title: '"Flex" Emote Level 4',
          image: "Hunter-flex-emote-level-4.gif",
        },
      ],
    },
  },
  princess: {
    name: "Princess",
    type: "Seasonal Spirit",
    realm: "Vault of Knowledge",
    season: "Nine-Colored Deer",
    ts: {
      eligible: false,
      returned: true,
      dates: [],
    },
    tree: {
      by: "Mimi and Sam",
      total: " ",
      image: "Princess-tree_Mimi.jpg",
    },
    location: {
      by: "EM",
      description: "How to reach Crescent Oasis by Clement",
      image: "Deer_Spirits_Location_Em_Clement.jpg",
    },

    emote: {
      icon: "<:princess:1197413108717731840>",
      level: [
        {
          title: '"Float Spin" Emote Level 1',
          image: "Princess-float-spin-emote-level-1_1.gif",
        },
        {
          title: '"Float Spin" Emote Level 1',
          image: "Princess-float-spin-emote-level-2.gif",
        },
        {
          title: '"Float Spin" Emote Level 1',
          image: "Princess-float-spin-emote-level-3.gif",
        },
        {
          title: '"Float Spin" Emote Level 1',
          image: "Princess-float-spin-emote-level-4.gif",
        },
      ],
    },
  },
  lord: {
    name: "Feudal Lord",
    type: "Seasonal Spirit",
    realm: "Vault of Knowledge",
    season: "Nine-Colored Deer",
    ts: {
      eligible: false,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Mimi and Sam",
      total: " ",
      image: "Feudal_Lord_Tree_Mimi.jpg",
    },
    location: {
      by: "EM",
      description: "How to reach Crescent Oasis by Clement",
      image: "Deer_Spirits_Location_Em_Clement.jpg",
    },

    action: {
      icon: "<:feudallord:1197413178330578964>",
      level: [
        {
          title: '"Cradle Carry" Friend Action Level 1',
          image: "Feudal-Lord-cradle-carry-emote-level-1.gif",
        },
        {
          title: '"Cradle Carry" Friend Action Level 2',
          image: "Feudal-Lord-cradle-carry-emote-level-2.gif",
        },
      ],
    },
  },
  herb_gather: {
    name: "Herb Gatherer",
    type: "Seasonal Spirit",
    realm: "Vault of Knowledge",
    season: "Nine-Colored Deer",
    ts: {
      eligible: false,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Mimi and Sam",
      total: " ",
      image: "Herb_Gatherer_Tree_Mimi.jpg",
    },
    location: {
      by: "EM",
      description: "How to reach Crescent Oasis by Clement",
      image: "Deer_Spirits_Location_Em_Clement.jpg",
    },

    emote: {
      icon: "<:herbgatherer:1197413154938957885>",
      level: [
        {
          title: '"Whistle" Emote Level 1',
          image: "Herb-Gatherer-whistle-emote-level-1.gif",
        },
        {
          title: '"Whistle" Emote Level 2',
          image: "Herb-Gatherer-whistle-emote-level-2.gif",
        },
        {
          title: '"Whistle" Emote Level 3',
          image: "Herb-Gatherer-whistle-emote-level-3.gif",
        },
        {
          title: '"Whistle" Emote Level 4',
          image: "Herb-Gatherer-whistle-emote-level-4.gif",
        },
      ],
    },
  },

  // revival
  forgotten_haven: {
    name: "Remnant Of A Forgotten Haven",
    type: "Seasonal Spirit",
    season: "Revival",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Clement",
      total: " ",
      image: "Forgotten_Haven_Seasonal_Chart_Clement.jpg",
    },
  },
  abandoned_refuge: {
    name: "Echo Of An Abandoned Refuge",
    type: "Seasonal Spirit",
    season: "Revival",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Clement",
      total: " ",
      image: "Abandoned_Refuge_Seasonal_Chart_Clement.jpg",
    },
  },
  lost_village: {
    name: "Memory Of A Lost Village",
    type: "Seasonal Spirit",
    season: "Revival",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Clement",
      total: " ",
      image: "Lost_Village_Seasonal_Chart_Clement.jpg",
    },
  },
  deserted_oasis: {
    name: "Vestige Of A Deserted Oasis",
    type: "Seasonal Spirit",
    season: "Revival",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Clement",
      total: " ",
      image: "Deserted_Oasis_Seasonal_Chart_Clement.jpg",
    },
  },

  // moments
  nightbird: {
    name: "Nightbird Whisperer",
    type: "Seasonal Spirit",
    realm: "Daylight Prairie",
    season: "Moments",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "NyR",
      total: " ",
      image: "Nightbird_Seasonal_Chart_NyR-1.png",
    },
    location: {
      by: "Mimi and Sam",
      image: "Moments_Spirits_Location_Mimi.jpg",
    },

    call: {
      title: "Nightbird Call",
      icon: "<:nightbird:1130948807396429884>",
      image: "Nightbird_Call.mp4",
    },
  },
  monk: {
    name: "Ascetic Monk",
    type: "Seasonal Spirit",
    realm: "Daylight Prairie",
    season: "Moments",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "NyR",
      total: " ",
      image: "Ascetic_Monk_Seasonal_Chart_NyR.png",
    },
    location: {
      by: "Mimi and Sam",
      image: "Moments_Spirits_Location_Mimi.jpg",
    },

    emote: {
      icon: "<:monk:1130948859674243185>",
      level: [
        {
          title: '"Blindfold Balance" Emote Level 1',
          image: "Ascetic_Monk_Blindfold_Balance_LvL_1.gif",
        },
        {
          title: '"Blindfold Balance" Emote Level 2',
          image: "Ascetic_Monk_Blindfold_Balance_LvL_2.gif",
        },
        {
          title: '"Blindfold Balance" Emote Level 3',
          image: "Ascetic_Monk_Blindfold_Balance_LvL_3.gif",
        },
        {
          title: '"Blindfold Balance" Emote Level 4',
          image: "Ascetic_Monk_Blindfold_Balance_LvL_4.gif",
        },
      ],
    },
  },
  geologist: {
    name: "Jolly Geologist",
    type: "Seasonal Spirit",
    realm: "Daylight Prairie",
    season: "Moments",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "NyR",
      total: " ",
      image: "Jolly_Geologist_Seasonal_Chart_NyR.png",
    },
    location: {
      by: "Mimi and Sam",
      image: "Moments_Spirits_Location_Mimi.jpg",
    },

    emote: {
      icon: "<:geologist:1130948834365816973>",
      level: [
        {
          title: '"Jolly Dance" Emote Level 1',
          image: "Geologist_Jolly_Dance_LvL_1.gif",
        },
        {
          title: '"Jolly Dance" Emote Level 2',
          image: "Geologist_Jolly_Dance_LvL_2.gif",
        },
        {
          title: '"Jolly Dance" Emote Level 3',
          image: "Geologist_Jolly_Dance_LvL_3.gif",
        },
        {
          title: '"Jolly Dance" Emote Level 4',
          image: "Geologist_Jolly_Dance_LvL_4.gif",
        },
      ],
    },
  },
  ranger: {
    name: "Reassuring Ranger",
    type: "Seasonal Spirit",
    realm: "Daylight Prairie",
    season: "Moments",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "NyR",
      total: " ",
      image: "Reassuring_Ranger_Seasonal_Chart_NyR.png",
    },
    location: {
      by: "Mimi and Sam",
      image: "Moments_Spirits_Location_Mimi.jpg",
    },

    action: {
      icon: "<:ranger:1130948781026844692>",
      level: [
        {
          title: '"Sidehug" Friend Action Level 1',
          image: "Ranger_Side_Hug_LvL_1.gif",
        },
        {
          title: '"Sidehug" Friend Action Level 2',
          image: "Ranger_Side_Hug_LvL_2.gif",
        },
      ],
    },
  },

  // Passage
  outcast: {
    name: "Oddball Outcast",
    type: "Seasonal Spirit",
    realm: "Isle of Dawn",
    season: "Passage",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Clement",
      total: " ",
      image: "Oddball_Outcast_Seasonal_Chart_Clement.jpg",
    },
    location: {
      by: "Clement",
      image: "Passage_Spirits_Location_Clement.jpg",
    },

    emote: {
      icon: "<:oddball:1131583444116308072>",
      level: [
        {
          title: '"Hacky Sack" Emote Level 1',
          image: "Oddball_Hacky_Sack_Lvl_1.gif",
        },
        {
          title: '"Hacky Sack" Emote Level 2',
          image: "Oddball_Hacky_Sack_Lvl_2.gif",
        },
        {
          title: '"Hacky Sack" Emote Level 3',
          image: "Oddball_Hacky_Sack_Lvl_3.gif",
        },
        {
          title: '"Hacky Sack" Emote Level 4',
          image: "Oddball_Hacky_Sack_Lvl_4.gif",
        },
      ],
    },
  },
  overachiever: {
    name: "Overacting Overachiever",
    type: "Seasonal Spirit",
    realm: "Isle of Dawn",
    season: "Passage",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Clement",
      total: " ",
      image: "Overacting_Overachiever_Seasonal_Chart_Clement.jpg",
    },
    location: {
      by: "Clement",
      image: "Passage_Spirits_Location_Clement.jpg",
    },

    emote: {
      icon: "<:achiever:1131583465649876992>",
      level: [
        {
          title: '"Pull-Up" Emote Level 1',
          image: "Overachiever_Pull-Up_Lvl_1.gif",
        },
        {
          title: '"Pull-Up" Emote Level 2',
          image: "Overachiever_Pull-Up_Lvl_2.gif",
        },
        {
          title: '"Pull-Up" Emote Level 3',
          image: "Overachiever_Pull-Up_Lvl_3.gif",
        },
        {
          title: '"Pull-Up" Emote Level 4',
          image: "Overachiever_Pull-Up_Lvl_4.gif",
        },
      ],
    },
  },
  mope: {
    name: "Melancholy Mope",
    type: "Seasonal Spirit",
    realm: "Isle of Dawn",
    season: "Passage",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Clement",
      total: " ",
      image: "Melancholy_Mope_Seasonal_Chart_Clement.jpg",
    },
    location: {
      by: "Clement",
      image: "Passage_Spirits_Location_Clement.jpg",
    },

    emote: {
      icon: "<:mope:1131583421529989211>",
      level: [
        {
          title: '"Moping" Emote Level 1',
          image: "Melancholy_Mope_Moping_LvL_1.gif",
        },
        {
          title: '"Moping" Emote Level 2',
          image: "Melancholy_Mope_Moping_LvL_2.gif",
        },
        {
          title: '"Moping" Emote Level 3',
          image: "Melancholy_Mope_Moping_LvL_3.gif",
        },
        {
          title: '"Moping" Emote Level 4',
          image: "Melancholy_Mope_Moping_LvL_4.gif",
        },
      ],
    },
  },
  troublemaker: {
    name: "Tumbling Troublemaker",
    type: "Seasonal Spirit",
    realm: "Isle of Dawn",
    season: "Passage",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Clement",
      total: " ",
      image: "Tumbling_Troublemaker_Seasonal_Chart_Clement.jpg",
    },
    location: {
      by: "Clement",
      image: "Passage_Spirits_Location_Clement.jpg",
    },

    emote: {
      icon: "<:tumbling:1131583486940164126>",
      level: [
        {
          title: '"Somersault" Emote Level 1',
          image: "Troublemaker_Somersault_LvL_1.gif",
        },
        {
          title: '"Somersault" Emote Level 2',
          image: "Troublemaker_Somersault_LvL_2.gif",
        },
        {
          title: '"Somersault" Emote Level 3',
          image: "Troublemaker_Somersault_LvL_3.gif",
        },
        {
          title: '"Somersault" Emote Level 4',
          image: "Troublemaker_Somersault_LvL_4.gif",
        },
      ],
    },
  },

  // Remembrance
  wounded_warrior: {
    name: "Wounded Warrior",
    type: "Seasonal Spirit",
    realm: "Vault of Knowledge",
    season: "Remembrance",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Clement",
      total: " ",
      image: "Wounded_Warrior_Seasonal_Chart_Clement.jpg",
    },
    location: {
      by: "Mimi and Sam",
      image: "Remembrance_Spirits_Location_Mimi.png",
    },

    stance: {
      title: "Injured Stance",
      icon: "<:wounded:1131584200735211710>",
      image: "Injured_Stance.gif",
    },
  },
  pleading_child: {
    name: "Pleading Child",
    type: "Seasonal Spirit",
    realm: "Vault of Knowledge",
    season: "Remembrance",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Clement",
      total: " ",
      image: "Pleading_Child_Seasonal_Chart_Clement.jpg",
    },
    location: {
      by: "Mimi and Sam",
      image: "Remembrance_Spirits_Location_Mimi.png",
    },

    emote: {
      icon: "<:pleading:1131584152332935331>",
      level: [
        {
          title: '"Pleading" Emote Level 1',
          image: "Pleading_Child_Pleading_Lvl_1.gif",
        },
        {
          title: '"Pleading" Emote Level 2',
          image: "Pleading_Child_Pleading_Lvl_2.gif",
        },
        {
          title: '"Pleading" Emote Level 3',
          image: "Pleading_Child_Pleading_Lvl_3.gif",
        },
        {
          title: '"Pleading" Emote Level 4',
          image: "Pleading_Child_Pleading_Lvl_4.gif",
        },
      ],
    },
  },
  veteran: {
    name: "Bereft Veteran",
    type: "Seasonal Spirit",
    realm: "Vault of Knowledge",
    season: "Remembrance",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Clement",
      total: " ",
      image: "Bereft_Veteran_Seasonal_Chart_Clement.jpg",
    },
    location: {
      by: "Mimi and Sam",
      image: "Remembrance_Spirits_Location_Mimi.png",
    },

    emote: {
      icon: "<:Bereft:1131584129054560396>",
      level: [
        {
          title: '"Grieving" Emote Level 1',
          image: "Veteran_Grieving_LvL_1.gif",
        },
        {
          title: '"Grieving" Emote Level 2',
          image: "Veteran_Grieving_LvL_2.gif",
        },
        {
          title: '"Grieving" Emote Level 3',
          image: "Veteran_Grieving_LvL_3.gif",
        },
        {
          title: '"Grieving" Emote Level 4',
          image: "Veteran_Grieving_LvL_4.gif",
        },
      ],
    },
  },
  tea_brewer: {
    name: "Tiptoeing Tea-Brewer",
    type: "Seasonal Spirit",
    realm: "Vault of Knowledge",
    season: "Remembrance",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Clement",
      total: " ",
      image: "Tea_Brewer_Seasonal_Chart_Clement.jpg",
    },
    location: {
      by: "Mimi and Sam",
      image: "Remembrance_Spirits_Location_Mimi.png",
    },

    emote: {
      icon: "<:tiptoe:1131584176882192455>",
      level: [
        {
          title: '"Tiptoeing" Emote Level 1',
          image: "Teamaker_Tiptoeing_Lvl_1.gif",
        },
        {
          title: '"Tiptoeing" Emote Level 2',
          image: "Teamaker_Tiptoeing_Lvl_2.gif",
        },
        {
          title: '"Tiptoeing" Emote Level 3',
          image: "Teamaker_Tiptoeing_Lvl_3.gif",
        },
        {
          title: '"Tiptoeing" Emote Level 4',
          image: "Teamaker_Tiptoeing_Lvl_4.gif",
        },
      ],
    },
  },

  // Aurora
  warrior_of_love: {
    name: "Warrior of Love",
    type: "Seasonal Spirit",
    realm: "Valley of Triumph",
    season: "Aurora",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Clement",
      total: " ",
      image: "Warrior_of_Love_Seasonal_Chart_Clement.jpg",
    },
    location: {
      by: "Zed",
      image: "AURORA_Location_Zed.png",
    },

    emote: {
      icon: "<:warriorlove:1131584753036963882>",
      level: [
        {
          title: '"Twirl" Emote Level 1',
          image: "Warrior_of_Love_Twirl_Lvl_1.gif",
        },
        {
          title: '"Twirl" Emote Level 2',
          image: "Warrior_of_Love_Twirl_Lvl_2.gif",
        },
        {
          title: '"Twirl" Emote Level 3',
          image: "Warrior_of_Love_Twirl_Lvl_3.gif",
        },
        {
          title: '"Twirl" Emote Level 4',
          image: "Warrior_of_Love_Twirl_Lvl_4.gif",
        },
      ],
    },
  },
  seed_of_hope: {
    name: "Seed of Hope",
    type: "Seasonal Spirit",
    realm: "Valley of Triumph",
    season: "Aurora",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Clement",
      total: " ",
      image: "Seed_of_Hope_Seasonal_Chart_Clement.jpg",
    },
    location: {
      by: "Zed",
      image: "AURORA_Location_Zed.png",
    },

    emote: {
      icon: "<:seedofhope:1131584732887523388>",
      level: [
        {
          title: '"Rhythmic Clap" Emote Level 1',
          image: "Seed_of_Hope_Rhythmic_Clap_Lvl_1.gif",
        },
        {
          title: '"Rhythmic Clap" Emote Level 2',
          image: "Seed_of_Hope_Rhythmic_Clap_Lvl_2.gif",
        },
        {
          title: '"Rhythmic Clap" Emote Level 3',
          image: "Seed_of_Hope_Rhythmic_Clap_Lvl_3.gif",
        },
        {
          title: '"Rhythmic Clap" Emote Level 4',
          image: "Seed_of_Hope_Rhythmic_Clap_Lvl_4.gif",
        },
      ],
    },
  },
  wayfarer: {
    name: "Running Wayfarer",
    type: "Seasonal Spirit",
    realm: "Valley of Triumph",
    season: "Aurora",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Clement",
      total: " ",
      image: "Running_Wayfarer_Seasonal_Chart_Clement.jpg",
    },
    location: {
      by: "Zed",
      image: "AURORA_Location_Zed.png",
    },

    emote: {
      icon: "<:wayfarer:1131584710192144606>",
      level: [
        {
          title: '"Waving Light" Emote Level 1',
          image: "Running_Wayfarer-_Waving_Light_Level_1_.gif",
        },
        {
          title: '"Waving Light" Emote Level 2',
          image: "Running_Wayfarer-_Waving_Light_Level_2.gif",
        },
        {
          title: '"Waving Light" Emote Level 3',
          image: "Running_Wayfarer-_Waving_Light_Level_3.gif",
        },
        {
          title: '"Waving Light" Emote Level 4',
          image: "Running_Wayfarer-_Waving_Light_Level_4.gif",
        },
      ],
    },
  },
  mindful_miner: {
    name: "Mindful Miner",
    type: "Seasonal Spirit",
    realm: "Valley of Triumph",
    season: "Aurora",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Clement",
      total: " ",
      image: "Mindful_Miner_Seasonal_Chart_Clement.jpg",
    },
    location: {
      by: "Zed",
      image: "AURORA_Location_Zed.png",
    },

    emote: {
      icon: "<:miner:1131584687454818404>",
      level: [
        {
          title: '"Raise the Roof" Emote Level 1',
          image: "Mindful-Miner-Raise-The-Roof-Emote_Lvl_1.gif",
        },
        {
          title: '"Raise the Roof" Emote Level 2',
          image: "Mindful-Miner-Raise-The-Roof-Emote_Lvl_2.gif",
        },
        {
          title: '"Raise the Roof" Emote Level 3',
          image: "Mindful-Miner-Raise-The-Roof-Emote_Lvl_3.gif",
        },
        {
          title: '"Raise the Roof" Emote Level 4',
          image: "Mindful-Miner-Raise-The-Roof-Emote_Lvl_4.gif",
        },
      ],
    },
  },

  // Shattering
  dark_plant: {
    name: "Ancient Darkness (Darkness Plant)",
    type: "Seasonal Spirit",
    season: "Shattering",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "NyR",
      total: " ",
      image: "Ancient_Darkness_Dark_Plant_Seasonal_Chart_NyR.png",
    },
  },
  dark_dragon: {
    name: "Ancient Darkness (Dragon)",
    type: "Seasonal Spirit",
    season: "Shattering",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "NyR",
      total: " ",
      image: "Ancient_Darkness_Dragon_Seasonal_chart_NyR.png",
    },
  },
  light_manta: {
    name: "Ancient Light (Manta)",
    type: "Seasonal Spirit",
    season: "Shattering",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "NyR",
      total: " ",
      image: "Ancient_Light_Manta_Seasonal_Chart_NyR.png",
    },
  },
  light_jelly: {
    name: "Ancient Light (Jellyfish)",
    type: "Seasonal Spirit",
    season: "Shattering",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "NyR",
      total: " ",
      image: "Ancient_Light_Jellyfish_Seasonal_Chart_NyR.png",
    },
  },

  // Performance
  modest_dancer: {
    name: "Modest Dancer",
    type: "Seasonal Spirit",
    realm: "Valley of Triumph",
    season: "Performance",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Clement",
      total: " ",
      image: "Modest_Dancer_Seasonal_Chart_Clement.jpg",
    },
    location: {
      by: "SkyZed",
      image: "Modest_Dancer_Location_SkyZed.jpg",
    },

    action: {
      icon: "<:modest:1131586528540381194>",
      level: [
        {
          title: '"Duet Dance" Friemd Action Level 1',
          image: "Modest-Dancer-duet-dance-emote-level-1.gif",
        },
        {
          title: '"Duet Dance" Friemd Action Level 2',
          image: "Modest-Dancer-duet-dance-emote-level-2.gif",
        },
      ],
    },
  },
  mellow_musician: {
    name: "Mellow Musician",
    type: "Seasonal Spirit",
    realm: "Valley of Triumph",
    season: "Performance",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Clement",
      total: " ",
      image: "Mellow_Musician_Seasonal_Chart_Clement.jpg",
    },
    location: {
      by: "SkyZed",
      image: "Mellow_Musician_Location_SkyZed.jpg",
    },

    emote: {
      icon: "<:mellow:1131586502149816411>",
      level: [
        {
          title: '"Headbob" Emote Level 1',
          image: "Mellow-Musician-headbob-emote-level-1.gif",
        },
        {
          title: '"Headbob" Emote Level 2',
          image: "Mellow-Musician-headbob-emote-level-2.gif",
        },
        {
          title: '"Headbob" Emote Level 3',
          image: "Mellow-Musician-headbob-emote-level-3.gif",
        },
        {
          title: '"Headbob" Emote Level 4',
          image: "Mellow-Musician-headbob-emote-level-4.gif",
        },
      ],
    },
  },
  stagehand: {
    name: "Frantic Stagehand",
    type: "Seasonal Spirit",
    realm: "Valley of Triumph",
    season: "Performance",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Clement",
      total: " ",
      image: "Frantic_Stagehand_Seasonal_Chart_Clement.jpg",
    },
    location: {
      by: "SkyZed",
      image: "Frantic_Stagehand_Location_SkyZed.jpg",
    },

    action: {
      icon: "<:stagehand:1131586475226562670>",
      level: [
        {
          title: '"Handshake" Friend Action Level 1',
          image: "Frantic_Stagehand_Handshake_Action_LvL_1.gif",
        },
        {
          title: '"Handshake" Friend Action Level 2',
          image: "Frantic_Stagehand_Handshake_Action_LvL_2.gif",
        },
      ],
    },
  },
  storyteller: {
    name: "Forgetful Storyteller",
    type: "Seasonal Spirit",
    realm: "Valley of Triumph",
    season: "Performance",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: " Clement",
      total: " ",
      image: "Forgetful_Storyteller_Seasonal_Chart_Clement.jpg",
    },
    location: {
      by: "SkyZed",
      image: "Storyteller_Location_SkyZed.jpg",
    },

    emote: {
      icon: "<:storyteller:1131586451885260831>",
      level: [
        {
          title: '"Aww!" Emote Level 1',
          image: "Forgetful-Storyteller-awww-emote-level-1.gif",
        },
        {
          title: '"Aww!" Emote Level 2',
          image: "Forgetful-Storyteller-awww-emote-level-2.gif",
        },
        {
          title: '"Aww!" Emote Level 3',
          image: "Forgetful-Storyteller-awww-emote-level-3.gif",
        },
        {
          title: '"Aww!" Emote Level 4',
          image: "Forgetful-Storyteller-awww-emote-level-4.gif",
        },
      ],
    },
  },

  // Abyss
  commodore: {
    name: "Ceasing Commodore",
    type: "Seasonal Spirit",
    realm: "Golden Wasteland",
    season: "Abyss",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "NyR",
      total: " ",
      image: "Ceasing_Commodore_Seasonal_Chart_NyR.png",
    },
    location: {
      by: "SkyZed",
      image: "Ceasing_comodore_Location_SkyZed.png",
    },

    emote: {
      icon: "<:commodore:1131587707315949608>",
      level: [
        {
          title: '"Calm Down" Emote Level 1',
          image: "Ceasing-Commodore-calm-down-emote-level-1.gif",
        },
        {
          title: '"Calm Down" Emote Level 2',
          image: "Ceasing-Commodore-calm-down-emote-level-2.gif",
        },
        {
          title: '"Calm Down" Emote Level 3',
          image: "Ceasing-Commodore-calm-down-emote-level-3.gif",
        },
        {
          title: '"Calm Down" Emote Level 4',
          image: "Ceasing-Commodore-calm-down-emote-level-4.gif",
        },
      ],
    },
  },
  cannoneer: {
    name: "Cackling Cannoneer",
    type: "Seasonal Spirit",
    realm: "Golden Wasteland",
    season: "Abyss",
    ts: {
      eligible: true,
      returned: true,
      dates: ["August 07, 2023 (SV#4)"],
    },
    tree: {
      by: "NyR",
      total: "188 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Cackling_Cannoner_Tree_NyR.png",
    },
    location: {
      by: "Clement",
      image: "Cackling_Cannoneer_Location_Clement.png",
    },

    emote: {
      icon: "<:cannoneer:1131587675061747854>",
      level: [
        {
          title: '"Evil Laugh" Emote Level 1',
          image: "Cackling-Cannoneer-evil-laugh-emote-level-1.gif",
        },
        {
          title: '"Evil Laugh" Emote Level 2',
          image: "Cackling-Cannoneer-evil-laugh-emote-level-2.gif",
        },
        {
          title: '"Evil Laugh" Emote Level 3',
          image: "Cackling-Cannoneer-evil-laugh-emote-level-3.gif",
        },
        {
          title: '"Evil Laugh" Emote Level 4',
          image: "Cackling-Cannoneer-evil-laugh-emote-level-4.gif",
        },
      ],
    },
  },
  boatswain: {
    name: "Bumbling Boatswain",
    type: "Seasonal Spirit",
    realm: "Golden Wasteland",
    season: "Abyss",
    ts: {
      eligible: true,
      returned: false,
      dates: [],
    },
    tree: {
      by: "Clement",
      total: " ",
      image: "Bumbling_Boatswain_Seasonal_Chart_Clement.jpg",
    },
    location: {
      by: "SkyZed",
      image: "Bumbling_boatswain_Location_SkyZed.png",
    },

    emote: {
      icon: "<:boatswain:1131587645219295382>",
      level: [
        {
          title: '"Ouch!" Emote Level 1',
          image: "Bumbling-Boatswain-ouch-emote-level-1.gif",
        },
        {
          title: '"Ouch!" Emote Level 2',
          image: "Bumbling-Boatswain-ouch-emote-level-2.gif",
        },
        {
          title: '"Ouch!" Emote Level 3',
          image: "Bumbling-Boatswain-ouch-emote-level-3.gif",
        },
        {
          title: '"Ouch!" Emote Level 4',
          image: "Bumbling-Boatswain-ouch-emote-level-4.gif",
        },
      ],
    },
  },
  angler: {
    name: "Anxious Angler",
    type: "Seasonal Spirit",
    realm: "Golden Wasteland",
    season: "Abyss",
    ts: {
      eligible: true,
      returned: true,
      dates: ["January 18, 2024 (#105)"],
    },
    tree: {
      by: "EM",
      total: "228 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Anxious_Angler_Tree_Em.jpg",
    },
    location: {
      by: "Clement",
      image: "Anxious_Angler_Location_Clement.jpg",
    },

    emote: {
      icon: "<:angler:1131587623165632594>",
      level: [
        {
          title: '"Anxious" Emote Level 1',
          image: "Anxious-Angler-anxious-emote-level-1.gif",
        },
        {
          title: '"Anxious" Emote Level 2',
          image: "Anxious-Angler-anxious-emote-level-2.gif",
        },
        {
          title: '"Anxious" Emote Level 3',
          image: "Anxious-Angler-anxious-emote-level-3.gif",
        },
        {
          title: '"Anxious" Emote Level 4',
          image: "Anxious-Angler-anxious-emote-level-4.gif",
        },
      ],
    },
  },

  // Flight
  chimesmith: {
    name: "Tinkering Chimesmith",
    type: "Seasonal Spirit",
    realm: "Hidden Forest",
    season: "Flight",
    ts: {
      eligible: true,
      returned: true,
      dates: ["May 11, 2023 (#87)"],
    },
    tree: {
      by: "Clement",
      total: "238 :RegularCandle: 0 :RegularHeart: 2 :AC:",
      image: "Tinkering_Chimesmith_Tree_Clement.png",
    },
    location: {
      by: "Clement",
      image: "Tinkering_Chimesmith_Location_Clement.png",
    },

    stance: {
      title: "Tinker Stance",
      icon: "<:chimesmith:1131589172822544435>",
      image: "Tinker_Stance_.gif",
    },
  },
  navigator: {
    name: "Lively Navigator",
    type: "Seasonal Spirit",
    realm: "Hidden Forest",
    season: "Flight",
    ts: {
      eligible: true,
      returned: true,
      dates: ["August 17, 2023 (#94)"],
    },
    tree: {
      by: "Xander",
      total: "198 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Lively_Navigator_Tree_Xander.jpg",
    },
    location: {
      by: "Clement",
      image: "Lively_Navigator_Location_Clement.jpg",
    },

    emote: {
      icon: "<:navigator:1131589125636632596>",
      level: [
        {
          title: '"Navigate" Emote Level 1',
          image: "Lively-Navigator-navigate-emote-level-1.gif",
        },
        {
          title: '"Navigate" Emote Level 2',
          image: "Lively-Navigator-navigate-emote-level-2.gif",
        },
        {
          title: '"Navigate" Emote Level 3',
          image: "Lively-Navigator-navigate-emote-level-3.gif",
        },
        {
          title: '"Navigate" Emote Level 4',
          image: "Lively-Navigator-navigate-emote-level-4.gif",
        },
      ],
    },
  },
  light_whisperer: {
    name: "Light Whisperer",
    type: "Seasonal Spirit",
    realm: "Hidden Forest",
    season: "Flight",
    ts: {
      eligible: true,
      returned: true,
      dates: ["February 29, 2024 (#108)"],
    },
    tree: {
      by: "Kai Ji",
      total: "243 :RegularCandle: 0 :RegularHeart: 2 :AC: ",
      image: "Light_Whisperer_Tree_Kai-Ji.png",
    },
    location: {
      by: "Clement",
      image: "Light_Whisper_Location_Clement.png",
    },

    call: {
      title: "Baby Manta Call",
      icon: "<:lightwhisperer:1131589102626672761>",
      image: "Baby_Manta_Call-2.mp4",
    },
  },
  talented_builder: {
    name: "Talented Builder",
    type: "Seasonal Spirit",
    realm: "Hidden Forest",
    season: "Flight",
    ts: {
      eligible: true,
      returned: true,
      dates: ["November 23, 2023 (#101)"],
    },
    tree: {
      by: "Kontra",
      total: "183 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Talented_Builder_Tree_Kontra.png",
    },
    location: {
      by: "Clement",
      image: "Talented_Builder_Location_Clement.png",
    },

    emote: {
      icon: "<:builder:1131589149464481812>",
      level: [
        {
          title: '"Voila!" Emote Level 1',
          image: "Talented-Builder-voila-emote-level-1.gif",
        },
        {
          title: '"Voila!" Emote Level 2',
          image: "Talented-Builder-voila-emote-level-2.gif",
        },
        {
          title: '"Voila!" Emote Level 3',
          image: "Talented-Builder-voila-emote-level-3.gif",
        },
        {
          title: '"Voila!" Emote Level 4',
          image: "Talented-Builder-voila-emote-level-4.gif",
        },
      ],
    },
  },

  // The Little Prince
  lamplighter: {
    name: "Stretching Lamplighter",
    type: "Seasonal Spirit",
    realm: "Vault of Knowledge",
    season: "The Little Prince",
    ts: {
      eligible: true,
      returned: true,
      dates: ["December 07, 2023 (#102)"],
    },
    tree: {
      by: "EM",
      total: "127 :RegularCandle: 13:RegularHeart: 2 :AC: ",
      image: "Stretching_Lamplighter_Tree_Clement.jpg",
    },
    location: {
      by: "Clement",
      image: "Stretching_Lamplighter_Location_Clement.jpg",
    },

    emote: {
      icon: "<:lamplighter:1131590417360625675>",
      level: [
        {
          title: '"Stretch" Emote Level 1',
          image: "Stretching-Lamplighter-stretch-emote-level-1.gif",
        },
        {
          title: '"Stretch" Emote Level 2',
          image: "Stretching-Lamplighter-stretch-emote-level-2.gif",
        },
        {
          title: '"Stretch" Emote Level 3',
          image: "Stretching-Lamplighter-stretch-emote-level-3.gif",
        },
        {
          title: '"Stretch" Emote Level 4',
          image: "Stretching-Lamplighter-stretch-emote-level-4.gif",
        },
      ],
    },
  },
  star_collector: {
    name: "Star Collector",
    type: "Seasonal Spirit",
    realm: "Vault of Knowledge",
    season: "The Little Prince",
    ts: {
      eligible: true,
      returned: true,
      dates: ["September 14, 2023 (#96)"],
    },
    tree: {
      by: "Kontra",
      total: "198 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Star_Collector_Tree_Kontra.png",
    },
    location: {
      by: "Clement",
      image: "Star_Collector_Location_Clement.jpg",
    },

    emote: {
      icon: "<:starcollector:1131590394874962040>",
      level: [
        {
          title: '"Hand Rub" Emote Level 1',
          image: "Star-Collector-hand-rub-emote-level-1.gif",
        },
        {
          title: '"Hand Rub" Emote Level 2',
          image: "Star-Collector-hand-rub-emote-level-2.gif",
        },
        {
          title: '"Hand Rub" Emote Level 3',
          image: "Star-Collector-hand-rub-emote-level-3.gif",
        },
        {
          title: '"Hand Rub" Emote Level 4',
          image: "Star-Collector-hand-rub-emote-level-4.gif",
        },
      ],
    },
  },
  geographer: {
    name: "Sneezing Geographer",
    type: "Seasonal Spirit",
    realm: "Vault of Knowledge",
    season: "The Little Prince",
    ts: {
      eligible: true,
      returned: true,
      dates: ["April 13, 2023 (#85)"],
    },
    tree: {
      by: "Clement",
      total: "123 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Sneezing_Geographer_Tree_Clement.png",
    },
    location: {
      by: "Clement",
      image: "Sneezing_Geographer_Location_Clement.png",
    },

    emote: {
      icon: "<:geographer:1131590372502548660>",
      level: [
        {
          title: '"Sneeze" Emote Level 1',
          image: "Sneezing-Geographer-sneeze-emote-level-1.gif",
        },
        {
          title: '"Sneeze" Emote Level 2',
          image: "Sneezing-Geographer-sneeze-emote-level-2.gif",
        },
        {
          title: '"Sneeze" Emote Level 3',
          image: "Sneezing-Geographer-sneeze-emote-level-3.gif",
        },
        {
          title: '"Sneeze" Emote Level 4',
          image: "Sneezing-Geographer-sneeze-emote-level-4.gif",
        },
      ],
    },
  },
  slouching_soldier: {
    name: "Slouching Soldier",
    type: "Seasonal Spirit",
    realm: "Vault of Knowledge",
    season: "The Little Prince",
    ts: {
      eligible: true,
      returned: true,
      dates: ["February 16, 2023 (#81)"],
    },
    tree: {
      by: "Clement",
      total: "140 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Slouching_Soldier_Tree_Clement.png",
    },
    location: {
      by: "Clement",
      image: "Slouching_Soldier_Location_Clement.png",
    },

    emote: {
      icon: "<:slouching:1131590352038531143>",
      level: [
        {
          title: '"Slouch" Emote Level 1',
          image: "Slouching-Soldier-slouch-emote-level-1.gif",
        },
        {
          title: '"Slouch" Emote Level 2',
          image: "Slouching-Soldier-slouch-emote-level-2.gif",
        },
        {
          title: '"Slouch" Emote Level 3',
          image: "Slouching-Soldier-slouch-emote-level-3.gif",
        },
        {
          title: '"Slouch" Emote Level 4',
          image: "Slouching-Soldier-slouch-emote-level-4.gif",
        },
      ],
    },
  },
  narcissist: {
    name: "Gloating Narcissist",
    type: "Seasonal Spirit",
    realm: "Vault of Knowledge",
    season: "The Little Prince",
    ts: {
      eligible: true,
      returned: true,
      dates: ["July 20, 2023 (#92)"],
    },
    tree: {
      by: "Jay",
      total: "139 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Gloating_Narcissist_Tree_Jay.png",
    },
    location: {
      by: "Clement",
      image: "Gloating_Narcissist_Location_Clement.jpg",
    },

    emote: {
      icon: "<:narcissist:1131590328714010684>",
      level: [
        {
          title: '"Gloat" Emote Level 1',
          image: "Gloating-Narcissist-gloat-emote-level-1.gif",
        },
        {
          title: '"Gloat" Emote Level 2',
          image: "Gloating-Narcissist-gloat-emote-level-2.gif",
        },
        {
          title: '"Gloat" Emote Level 3',
          image: "Gloating-Narcissist-gloat-emote-level-3.gif",
        },
        {
          title: '"Gloat" Emote Level 4',
          image: "Gloating-Narcissist-gloat-emote-level-4.gif",
        },
      ],
    },
  },
  beckoning_ruler: {
    name: "Beckoning Ruler",
    type: "Seasonal Spirit",
    realm: "Vault of Knowledge",
    season: "The Little Prince",
    ts: {
      eligible: true,
      returned: true,
      dates: ["September 29, 2022 (#71)"],
    },
    tree: {
      by: "Clement",
      total: "103 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Beckoning_Ruler_Tree_Clement.png",
    },
    location: {
      by: "Clement",
      image: "Beckoning_Ruler_Location_Clement.png",
    },

    emote: {
      icon: "<:ruler:1131590308430348369>",
      level: [
        {
          title: '"Beckon" Emote Level 1',
          image: "Beckoning-Ruler-beckon-emote-level-1.gif",
        },
        {
          title: '"Beckon" Emote Level 2',
          image: "Beckoning-Ruler-beckon-emote-level-2.gif",
        },
        {
          title: '"Beckon" Emote Level 3',
          image: "Beckoning-Ruler-beckon-emote-level-3.gif",
        },
        {
          title: '"Beckon" Emote Level 4',
          image: "Beckoning-Ruler-beckon-emote-level-4.gif",
        },
      ],
    },
  },

  // Assembly
  scolding_student: {
    name: "Scolding Student",
    type: "Seasonal Spirit",
    realm: "Hidden Forest",
    season: "Assembly",
    ts: {
      eligible: true,
      returned: true,
      dates: ["August 18, 2022 (#68)"],
    },
    tree: {
      by: "Clement",
      total: "157 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Scolding_Student_Tree_Clement.png",
    },
    location: {
      by: "Clement",
      image: "Scolding_Student_Location_Clement.png",
    },

    emote: {
      icon: "<:student:1131591495993016421>",
      level: [
        {
          title: '"Scold" Emote Level 1',
          image: "Scolding-Student-scold-emote-level-1.gif",
        },
        {
          title: '"Scold" Emote Level 2',
          image: "Scolding-Student-scold-emote-level-2.gif",
        },
        {
          title: '"Scold" Emote Level 3',
          image: "Scolding-Student-scold-emote-level-3.gif",
        },
        {
          title: '"Scold" Emote Level 4',
          image: "Scolding-Student-scold-emote-level-4.gif",
        },
      ],
    },
  },
  cadet: {
    name: "Scaredy Cadet",
    type: "Seasonal Spirit",
    realm: "Hidden Forest",
    season: "Assembly",
    ts: {
      eligible: true,
      returned: true,
      dates: ["March 06, 2023 (SV#1)"],
    },
    tree: {
      by: "NyR",
      total: "152 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Scaredy_Cadet_Tree_NyR.jpg",
    },
    location: {
      by: "Clement",
      image: "Scaredy_Cadet_Location_Clement.png",
    },

    emote: {
      icon: "<:cadet:1131591467429793962>",
      level: [
        {
          title: '"Eww" Emote Level 1',
          image: "Scaredy-Cadet-eww-emote-level-1.gif",
        },
        {
          title: '"Eww" Emote Level 2',
          image: "Scaredy-Cadet-eww-emote-level-2.gif",
        },
        {
          title: '"Eww" Emote Level 3',
          image: "Scaredy-Cadet-eww-emote-level-3.gif",
        },
        {
          title: '"Eww" Emote Level 4',
          image: "Scaredy-Cadet-eww-emote-level-4.gif",
        },
      ],
    },
  },
  foresterer: {
    name: "Daydream Forester",
    type: "Seasonal Spirit",
    realm: "Hidden Forest",
    season: "Assembly",
    ts: {
      eligible: true,
      returned: true,
      dates: ["March 14, 2024 (#109)", "April 28, 2022 (#60)"],
    },
    tree: {
      by: "Clement",
      total: "96 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Daydream_Forestor_Tree_Clement.png",
    },
    location: {
      by: "Clement",
      image: "Daydreaming_Forester_Location_Clement.png",
    },

    emote: {
      icon: "<:forester:1131591420239675402>",
      level: [
        {
          title: '"Bubbles" Emote Level 1',
          image: "Daydream-Forester-bubbles-emote-level-1.gif",
        },
        {
          title: '"Bubbles" Emote Level 2',
          image: "Daydream-Forester-bubbles-emote-level-2.gif",
        },
        {
          title: '"Bubbles" Emote Level 3',
          image: "Daydream-Forester-bubbles-emote-level-3.gif",
        },
        {
          title: '"Bubbles" Emote Level 4',
          image: "Daydream-Forester-bubbles-emote-level-4.gif",
        },
      ],
    },
  },
  adventurer: {
    name: "Marching Adventurer",
    type: "Seasonal Spirit",
    realm: "Hidden Forest",
    season: "Assembly",
    ts: {
      eligible: true,
      returned: true,
      dates: ["March 06, 2023 (SV#1)"],
    },
    tree: {
      by: "NyR",
      total: "143:RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Marching_Adventurer_Tree_NyR.jpg",
    },
    location: {
      by: "Clement",
      image: "Marching_Adventurer_Location_Clement.png",
    },

    emote: {
      icon: "<:adventurer:1131591445057372272>",
      level: [
        {
          title: '"Marching" Emote Level 1',
          image: "Marching-Adventurer-marching-emote-level-1.gif",
        },
        {
          title: '"Marching" Emote Level 2',
          image: "Marching-Adventurer-marching-emote-level-2.gif",
        },
        {
          title: '"Marching" Emote Level 3',
          image: "Marching-Adventurer-marching-emote-level-3.gif",
        },
        {
          title: '"Marching" Emote Level 4',
          image: "Marching-Adventurer-marching-emote-level-4.gif",
        },
      ],
    },
  },
  scout: {
    name: "Chuckling Scout",
    type: "Seasonal Spirit",
    realm: "Hidden Forest",
    season: "Assembly",
    ts: {
      eligible: true,
      returned: true,
      dates: ["March 06, 2023 (SV#1)"],
    },
    tree: {
      by: "NyR",
      total: "159 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Chuckling_Scout_Tree_NyR.jpg",
    },
    location: {
      by: "Clement",
      image: "Chuckling_Scout_Location_Clement.png",
    },

    emote: {
      icon: "<:scout:1131591393282904084>",
      level: [
        {
          title: '"Chuckle" Emote Level 1',
          image: "Chuckling-Scout-chuckle-emote-level-1.gif",
        },
        {
          title: '"Chuckle" Emote Level 2',
          image: "Chuckling-Scout-chuckle-emote-level-2.gif",
        },
        {
          title: '"Chuckle" Emote Level 3',
          image: "Chuckling-Scout-chuckle-emote-level-3.gif",
        },
        {
          title: '"Chuckle" Emote Level 4',
          image: "Chuckling-Scout-chuckle-emote-level-4.gif",
        },
      ],
    },
  },
  botanist: {
    name: "Baffled Botanist",
    type: "Seasonal Spirit",
    realm: "Hidden Forest",
    season: "Assembly",
    ts: {
      eligible: true,
      returned: true,
      dates: ["March 06, 2023 (SV#1)", "January 05, 2023 (#78)"],
    },
    tree: {
      by: "Clement",
      total: "127 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Baffled_Botanist_Tree_Clement.png",
    },
    location: {
      by: "Clement",
      image: "Baffled_Botanist_Location_Clement.png",
    },

    emote: {
      icon: "<:botanist:1131591369492795503>",
      level: [
        {
          title: '"Facepalm" Emote Level 1',
          image: "Baffled-Botanist-facepalm-emote-level-1.gif",
        },
        {
          title: '"Facepalm" Emote Level 2',
          image: "Baffled-Botanist-facepalm-emote-level-2.gif",
        },
        {
          title: '"Facepalm" Emote Level 3',
          image: "Baffled-Botanist-facepalm-emote-level-3.gif",
        },
        {
          title: '"Facepalm" Emote Level 4',
          image: "Baffled-Botanist-facepalm-emote-level-4.gif",
        },
      ],
    },
  },

  // Dreams
  spinning_mentor: {
    name: "Spinning Mentor",
    type: "Seasonal Spirit",
    realm: "Valley of Triumoh",
    season: "Dreams",
    ts: {
      eligible: true,
      returned: true,
      dates: ["July 06, 2023 (#91)", "April 14, 2022 (#59)"],
    },
    tree: {
      by: "Clement",
      total: "169 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Spinning_Mentor_Tree_Clement.png",
    },
    location: {
      by: "Clement",
      image: "Spinning_Mentor_Location_Clement.png",
    },

    emote: {
      icon: "<:mentor:1131645203548209162>",
      level: [
        {
          title: '"Spin Trick" Level 1',
          image: "Spinning-Mentor-spin-trick-emote-level-1.gif",
        },
        {
          title: '"Spin Trick" Level 2',
          image: "Spinning-Mentor-spin-trick-emote-level-2.gif",
        },
        {
          title: '"Spin Trick" Level 3',
          image: "Spinning-Mentor-spin-trick-emote-level-3.gif",
        },
        {
          title: '"Spin Trick" Level 4',
          image: "Spinning-Mentor-spin-trick-emote-level-4.gif",
        },
      ],
    },
  },
  postman: {
    name: "Peeking Postman",
    type: "Seasonal Spirit",
    realm: "Valley of triumph",
    season: "Dreams",
    ts: {
      eligible: true,
      returned: true,
      dates: ["June 23, 2022 (#64)"],
    },
    tree: {
      by: "Clement",
      total: "217 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Peeking_Postman_Tree_Clement.png",
    },
    location: {
      by: "Clement",
      image: "Peeking_Postman_Location_Clement.png",
    },

    emote: {
      icon: "<:postman:1131645181926584341>",
      level: [
        {
          title: '"Peek" Emote Level 1',
          image: "Peeking-Postman-peek-emote-level-1.gif",
        },
        {
          title: '"Peek" Emote Level 2',
          image: "Peeking-Postman-peek-emote-level-2.gif",
        },
        {
          title: '"Peek" Emote Level 3',
          image: "Peeking-Postman-peek-emote-level-3.gif",
        },
        {
          title: '"Peek" Emote Level 4',
          image: "Peeking-Postman-peek-emote-level-4.gif",
        },
      ],
    },
  },
  dancing_performer: {
    name: "Dancing Performer",
    type: "Seasonal Spirit",
    realm: "Valley of Triumph",
    season: "Dreams",
    ts: {
      eligible: true,
      returned: true,
      dates: ["April 25, 2024 (#112)"],
    },
    tree: {
      by: "NyR",
      total: "251 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Dancing_Performer_Tree_NyR-1.png",
    },
    location: {
      by: "Clement",
      image: "Dancing_Performer_Location_Clement.png",
    },

    emote: {
      icon: "<:dancing:1131645163383574569>",
      level: [
        {
          title: '"Snow Dance" Emote Level 1',
          image: "Dancing-Performer-show-dance-emote-level-1.gif",
        },
        {
          title: '"Snow Dance" Emote Level 2',
          image: "Dancing-Performer-show-dance-emote-level-2.gif",
        },
        {
          title: '"Snow Dance" Emote Level 3',
          image: "Dancing-Performer-show-dance-emote-level-3.gif",
        },
        {
          title: '"Snow Dance" Emote Level 4',
          image: "Dancing-Performer-show-dance-emote-level-4.gif",
        },
      ],
    },
  },
  hermit: {
    name: "Bearhug Hermit",
    type: "Seasonal Spirit",
    realm: "Valley of Triumph",
    season: "Dreams",
    ts: {
      eligible: true,
      returned: true,
      dates: ["February 15, 2024 (#107)", "November 24, 2022 (#75)"],
    },
    tree: {
      by: "Clement",
      total: "190 :RegularCandle: 8 :RegularHeart: 2 :AC:",
      image: "BearHug_Hermit_Tree_Clement.png",
    },
    location: {
      by: "Clement",
      image: "Bearhug_Hermit_Location_Clement.png.jpg",
    },

    action: {
      icon: "<:hermit:1131645142898581535>",
      level: [
        {
          title: '"Bear Hug" Friend Action Level 1',
          image: "Bearhug-Hermit-bearhug-emote-level-1.gif",
        },
        {
          title: '"Bear Hug" Friend Action Level 2',
          image: "Bearhug_Hermit_Bear_Hug_LvL_2.gif",
        },
      ],
    },
  },

  // Prophecy
  fireprophet: {
    name: "Prophet of Fire",
    type: "Seasonal Spirit",
    realm: "Isle of Dawn",
    season: "Prophecy",
    ts: {
      eligible: true,
      returned: true,
      dates: ["August 03, 2023 (#93)", "December 09, 2021 (#50)"],
    },
    tree: {
      by: "Clement",
      total: "216 :RegularCandle: 26 :RegularHeart: 2 :AC:",
      image: "Prophet_of_Fire_Tree_Jay.png",
    },
    location: {
      by: "Clement",
      image: "Prophet_of_Fire_Location_Clement.jpg",
    },

    emote: {
      icon: "<:fireprophet:1131649539682603008>",
      level: [
        {
          title: '"Chest Pound" Level 1',
          image: "Prophet-of-Fire-chest-pound-emote-level-3.gif",
        },
        {
          title: '"Chest Pound" Level 2',
          image: "Prophet-of-Fire-chest-pound-emote-level-2.gif",
        },
        {
          title: '"Chest Pound" Level 3',
          image: "Prophet-of-Fire-chest-pound-emote-level-3.gif",
        },
        {
          title: '"Chest Pound" Level 4',
          image: "Prophet-of-Fire-chest-pound-emote-level-4.gif",
        },
      ],
    },
  },
  airprophet: {
    name: "Prophet of Air",
    type: "Seasonal Spirit",
    realm: "Isle of Dawn",
    season: "Prophecy",
    ts: {
      eligible: true,
      returned: true,
      dates: ["May 15, 2023 (SV#2)", "May 12, 2022 (#61)"],
    },
    tree: {
      by: "Clement",
      total: "201 :RegularCandle: 12 :RegularHeart: 2:AC:",
      image: "Prophet_of_Air_Tree_Clement.png",
    },
    location: {
      by: "Clement",
      image: "Prophet_of_Air_Location_Clement.png",
    },

    emote: {
      icon: "<:airprophet:1131649484347154433>",
      level: [
        {
          title: '"Balance" Emote Level 1',
          image: "Prophet-of-Air-balance-emote-level-1.gif",
        },
        {
          title: '"Balance" Emote Level 2',
          image: "Prophet-of-Air-balance-emote-level-2.gif",
        },
        {
          title: '"Balance" Emote Level 3',
          image: "Prophet-of-Air-balance-emote-level-3.gif",
        },
        {
          title: '"Balance" Emote Level 4',
          image: "Prophet-of-Air-balance-emote-level-4.gif",
        },
      ],
    },
  },
  earthprophet: {
    name: "Prophet of Earth",
    type: "Seasonal Spirit",
    realm: "Isle of Dawn",
    season: "Prophecy",
    ts: {
      eligible: true,
      returned: true,
      dates: ["May 15, 2023 (SV#2)", "February 03, 2022 (#54)"],
    },
    tree: {
      by: "Clement",
      total: "211 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Prophet_of_Earth_Tree_Clement.jpg",
    },
    location: {
      by: "Clement",
      image: "Prophet_of_Earth_Location_Clement.png",
    },

    emote: {
      icon: "<:earthprophet:1131649510045646908>",
      level: [
        {
          title: '"Dust Off" Emote Level 1',
          image: "Prophet-of-Earth-dust-off-emote-level-1.gif",
        },
        {
          title: '"Dust Off" Emote Level 2',
          image: "Prophet-of-Earth-dust-off-emote-level-2.gif",
        },
        {
          title: '"Dust Off" Emote Level 3',
          image: "Prophet-of-Earth-dust-off-emote-level-3.gif",
        },
        {
          title: '"Dust Off" Emote Level 4',
          image: "Prophet-of-Earth-dust-off-emote-level-4.gif",
        },
      ],
    },
  },
  waterprophet: {
    name: "Prophet of Water",
    type: "Seasonal Spirit",
    realm: "Isle of Dawn",
    season: "Prophecy",
    ts: {
      eligible: true,
      returned: true,
      dates: ["May 15, 2023 (SV#2)", "November 10, 2022 (#74)", "August 08, 2021 (#41)"],
    },
    tree: {
      by: "Clement",
      total: "187 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Prophecy_Water_Tree_Clement.png",
    },
    location: {
      by: "Clement",
      image: "Prophet_of_Water_Location_Clement.png",
    },

    emote: {
      icon: "<:waterprophet:1131649574465974302>",
      level: [
        {
          title: '"Deep Breath" Emote Level 1',
          image: "Prophet-of-Water-deep-breath-emote-level-1.gif",
        },
        {
          title: '"Deep Breath" Emote Level 2',
          image: "Prophet-of-Water-deep-breath-emote-level-2.gif",
        },
        {
          title: '"Deep Breath" Emote Level 3',
          image: "Prophet-of-Water-deep-breath-emote-level-3.gif",
        },
        {
          title: '"Deep Breath" Emote Level 4',
          image: "Prophet-of-Water-deep-breath-emote-level-4.gif",
        },
      ],
    },
  },

  // Sanctuary
  bookworm: {
    name: "Timid Bookworm",
    type: "Seasonal Spirit",
    realm: "Daylight Prairie",
    season: "Sanctuary",
    ts: {
      eligible: true,
      returned: true,
      dates: ["July 07, 2022 (#65)", "June 10, 2021 (#37)"],
    },
    tree: {
      by: "Jed",
      total: "140 :RegularCandle: 0 :RegularHeart: 2 :AC:",
      image: "Timid_Bookworm_Tree_Jed.png",
    },
    location: {
      by: "Clement",
      image: "Timid_Bookworm_Location.png",
    },

    stance: {
      title: "Timid Stance",
      icon: "<:bookworm:1131649753420140595>",
      image: "Timid_Bookworm_Timid_Stance.gif",
    },
  },
  rallying_thrillseeker: {
    name: "Rallying Thrillseeker",
    type: "Seasonal Spirit",
    realm: "Daylight Prairie",
    season: "Sanctuary",
    ts: {
      eligible: true,
      returned: true,
      dates: ["January 19, 2023 (#79)", "April 29, 2021 (#34)"],
    },
    tree: {
      by: "Jed",
      total: "125 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Rallying_Thrillseeker_Tree_jed.png",
    },
    location: {
      by: "Clement",
      image: "Rallying_Thrillseeker_Location.png",
    },

    emote: {
      icon: "<:rallying:1131649722042564758>",
      level: [
        {
          title: '"Rally Cheer" Emote Level 1',
          image: "Rallying-Thrillseeker-rally-cheer-emote-level-1.gif",
        },
        {
          title: '"Rally Cheer" Emote Level 2',
          image: "Rallying-Thrillseeker-rally-cheer-emote-level-2.gif",
        },
        {
          title: '"Rally Cheer" Emote Level 3',
          image: "Rallying-Thrillseeker-rally-cheer-emote-level-3.gif",
        },
        {
          title: '"Rally Cheer" Emote Level 4',
          image: "Rallying-Thrillseeker-rally-cheer-emote-level-4.gif",
        },
      ],
    },
  },
  jellywhisperer: {
    name: "Jelly Whisperer",
    type: "Seasonal Spirit",
    realm: "Daylight Prairie",
    season: "Sanctuary",
    ts: {
      eligible: true,
      returned: true,
      dates: ["August 31, 2023 (#95)", "November 25, 2021 (#49)"],
    },
    tree: {
      by: "Clement",
      total: "135 :RegularCandle: 15 :RegularHeart: 2 :AC:",
      image: "Jelly_Whisperer_Tree_Clement.png",
    },
    location: {
      by: "Clement",
      image: "jelly_Whisperer_Location_Clement.png",
    },

    call: {
      title: "Jellyfish Call",
      icon: "<:jellywhisperer:1131649695807176895>",
      image: "Jellyfish_Call-1.mp4",
    },
  },
  grouch: {
    name: "Hiking Grouch",
    type: "Seasonal Spirit",
    realm: "Daylight Prairie",
    season: "Sanctuary",
    ts: {
      eligible: true,
      returned: true,
      dates: ["August 07, 2023 (SV#4)", "February 17, 2022 (#55)"],
    },
    tree: {
      by: "Clement",
      total: "139 :RegularCandle: 29 :RegularHeart: 2 :AC:",
      image: "Hiking_Grouch_Tree_Clement.png",
    },
    location: {
      by: "Clement",
      image: "Hiking_Grouch_Location_Clement.png",
    },

    emote: {
      icon: "<:grouch:1131649666954575982>",
      level: [
        {
          title: '"Grumpy" Emote Level 1',
          image: "Hiking-Grouch-grumpy-emote-level-1.gif",
        },
        {
          title: '"Grumpy" Emote Level 2',
          image: "Hiking-Grouch-grumpy-emote-level-2.gif",
        },
        {
          title: '"Grumpy" Emote Level 3',
          image: "Hiking-Grouch-grumpy-emote-level-3.gif",
        },
        {
          title: '"Grumpy" Emote Level 4',
          image: "Hiking-Grouch-grumpy-emote-level-4.gif",
        },
      ],
    },
  },
  shell_collector: {
    name: "Gratefull Shell Collector",
    type: "Seasonal Spirit",
    realm: "Daylight Prairie",
    season: "Sanctuary",
    ts: {
      eligible: true,
      returned: true,
      dates: ["May 25, 2023 (#88)", "September 30, 2021 (#45)"],
    },
    tree: {
      by: "Clement",
      total: "162 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Shell_Collector_Tree_Clement.png",
    },
    location: {
      by: "Clement",
      image: "Grateful_Shell_Collector_Location_Clement.png",
    },

    emote: {
      icon: "<:shellcollector:1131649635153363024>",
      level: [
        {
          title: '"Grateful" Level 1',
          image: "Grateful-Shell-Collector-grateful-emote-level-1.gif",
        },
        {
          title: '"Grateful" Level 2',
          image: "Grateful-Shell-Collector-grateful-emote-level-2.gif",
        },
        {
          title: '"Grateful" Level 3',
          image: "Grateful-Shell-Collector-grateful-emote-level-3.gif",
        },
        {
          title: '"Grateful" Level 4',
          image: "Grateful-Shell-Collector-grateful-emote-level-4.gif",
        },
      ],
    },
  },
  sunbather: {
    name: "Chill Sunbather",
    type: "Seasonal Spirit",
    realm: "Daylight Prairie",
    season: "Sanctuary",
    ts: {
      eligible: true,
      returned: true,
      dates: ["January 04, 2024 (#104)", "August 19, 2021 (#42)"],
    },
    tree: {
      by: "NyR",
      total: "213 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Chill_sunbather_tree_NyR.png",
    },
    location: {
      by: "Clement",
      image: "Spirit_-_Chill_Sunbather_Location_Clement.png",
    },

    emote: {
      icon: "<:sunbather:1131649605336047676>",
      level: [
        {
          title: '"Belly Scratch" Emote Level 1',
          image: "Chill-Sunbather-belly-scratch-emote-level-1.gif",
        },
        {
          title: '"Belly Scratch" Emote Level 2',
          image: "Chill-Sunbather-belly-scratch-emote-level-2.gif",
        },
        {
          title: '"Belly Scratch" Emote Level 3',
          image: "Chill-Sunbather-belly-scratch-emote-level-3.gif",
        },
        {
          title: '"Belly Scratch" Emote Level 4',
          image: "Chill-Sunbather-belly-scratch-emote-level-4.gif",
        },
      ],
    },
  },

  // Enchantment
  carpenter: {
    name: "Snoozing Carpenter",
    type: "Seasonal Spirit",
    realm: "Golden Wasteland",
    season: "Enchantment",
    ts: {
      eligible: true,
      returned: true,
      dates: ["April 27, 2023 (#86)", "May 27, 2021 (#36)"],
    },
    tree: {
      by: "Jed",
      total: "112 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Golden_Wasteland_-_Snoozing_Carpenter.png",
    },
    location: {
      by: "Clement",
      image: "05_Season_of_Enchantment_-_Snoozing_Carpenter.png",
    },

    emote: {
      icon: "<:carpenter:1131649953505230848>",
      level: [
        {
          title: '"Doze" Emote Level 1',
          image: "Snoozing-Carpenter-doze-emote-level-1.gif",
        },
        {
          title: '"Doze" Emote Level 2',
          image: "Snoozing-Carpenter-doze-emote-level-2.gif",
        },
        {
          title: '"Doze" Emote Level 3',
          image: "Snoozing-Carpenter-doze-emote-level-3.gif",
        },
        {
          title: '"Doze" Emote Level 4',
          image: "Snoozing-Carpenter-doze-emote-level-4.gif",
        },
      ],
    },
  },
  scarecrow_farmer: {
    name: "Scarecrow Farmer",
    type: "Seasonal Spirit",
    realm: "Golden Wasteland",
    season: "Enchantment",
    ts: {
      eligible: true,
      returned: true,
      dates: ["March 31, 2022 (#58)"],
    },
    tree: {
      by: "Clement",
      total: "88 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Traveling_Spirit_0582.png",
    },
    location: {
      by: "Clement",
      image: "Scarecrow_Farmer_Location_Clement.png",
    },

    emote: {
      icon: "<:scarecrow:1131649929492828180>",
      level: [
        {
          title: '"Boo" Emote Level 1',
          image: "Scarecrow-Farmer-boo-emote-level-1.gif",
        },
        {
          title: '"Boo" Emote Level 2',
          image: "Scarecrow-Farmer-boo-emote-level-2.gif",
        },
        {
          title: '"Boo" Emote Level 3',
          image: "Scarecrow-Farmer-boo-emote-level-3.gif",
        },
        {
          title: '"Boo" Emote Level 4',
          image: "Scarecrow-Farmer-boo-emote-level-4.gif",
        },
      ],
    },
  },
  herbalist: {
    name: "Playfighting Herbalist",
    type: "Seasonal Spirit",
    realm: "Golden Wasteland",
    season: "Enchantment",
    ts: {
      eligible: true,
      returned: true,
      dates: ["October 12, 2023 (#98)", "October 28, 2021 (#47)"],
    },
    tree: {
      by: "Clement",
      total: "195 :RegularCandle: 10 :RegularHeart: 2 :AC:",
      image: "Playfight_herbalist-TS2.jpg",
    },
    location: {
      by: "Clement",
      image: "Playfighting_Herbalist_Location_Clement.jpg",
    },

    action: {
      icon: "<:herbalist:1131649901814624276>",
      level: [
        {
          title: '"Playfight" Friend Action Level 1',
          image: "Playfighting-Herbalist-play-fight-emote-level-1.gif",
        },
        {
          title: '"Playfight" Friend Action Level 2',
          image: "Playfighting-Herbalist-play-fight-emote-level-2.gif",
        },
      ],
    },
  },
  muralist: {
    name: "Nodding Muralist",
    type: "Seasonal Spirit",
    realm: "Golden Wasteland",
    season: "Enchantment",
    ts: {
      eligible: true,
      returned: true,
      dates: ["October 27, 2022 (#73)", "January 07, 2021 (#26)"],
    },
    tree: {
      by: "Jed",
      total: "77 :RegularCandle: 13 :RegularHeart: 2 :RegularCandle:",
      image: "Nodding_Muralist_Tree_Jed.png",
    },
    location: {
      by: "Clement",
      image: "Nodding_Muralist_Location_Clement.png",
    },

    emote: {
      icon: "<:muralist:1131649861377339452>",
      level: [
        {
          title: '"Nod" Emote Level 1',
          image: "Nodding-Muralist-nod-emote-level-1.gif",
        },
        {
          title: '"Nod" Emote Level 2',
          image: "Nodding-Muralist-nod-emote-level-2.gif",
        },
        {
          title: '"Nod" Emote Level 3',
          image: "Nodding-Muralist-nod-emote-level-3.gif",
        },
        {
          title: '"Nod" Emote Level 4',
          image: "Nodding-Muralist-nod-emote-level-4.gif",
        },
      ],
    },
  },
  alchemist: {
    name: "Indifferent Alchemist",
    type: "Seasonal Spirit",
    realm: "Golden Wasteland",
    season: "Enchantment",
    ts: {
      eligible: true,
      returned: true,
      dates: ["September 01, 2022 (#69)", "October 29, 2020 (#21)"],
    },
    tree: {
      by: "Jed",
      total: "167 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Indifferent_Alchemist_Tree_Jed.png",
    },
    location: {
      by: "Clement",
      image: "Indifferent_Alchemist_Location_Clement.jpg",
    },

    emote: {
      icon: "<:alchemist:1131649811439947796>",
      level: [
        {
          title: '"Shrug" Emote Level 1',
          image: "Indifferent-Alchemist-shrug-emote-level-1.gif",
        },
        {
          title: '"Shrug" Emote Level 2',
          image: "Indifferent-Alchemist-shrug-emote-level-2.gif",
        },
        {
          title: '"Shrug" Emote Level 3',
          image: "Indifferent-Alchemist-shrug-emote-level-3.gif",
        },
        {
          title: '"Shrug" Emote Level 4',
          image: "Indifferent-Alchemist-shrug-emote-level-4.gif",
        },
      ],
    },
  },
  crab_walker: {
    name: "Crab Walker",
    type: "Seasonal Spirit",
    realm: "Golden Wasteland",
    season: "Enchantment",
    ts: {
      eligible: true,
      returned: true,
      dates: ["March 16, 2023 (#83)", "February 18, 2021 (#29)"],
    },
    tree: {
      by: "Jed",
      total: "115 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Crab_Walker_Tree_Jed.png",
    },
    location: {
      by: "Clement",
      image: "Crab_Walker_Location_Clement.jpg",
    },

    emote: {
      icon: "<:crabwalker:1131649778434981908>",
      level: [
        {
          title: '"Crab Walk" Emote Level 1',
          image: "Crab-Walker-crab-walk-emote-level-1.gif",
        },
        {
          title: '"Crab Walk" Emote Level 2',
          image: "Crab-Walker-crab-walk-emote-level-2.gif",
        },
        {
          title: '"Crab Walk" Emote Level 3',
          image: "Crab-Walker-crab-walk-emote-level-3.gif",
        },
        {
          title: '"Crab Walk" Emote Level 4',
          image: "Crab-Walker-crab-walk-emote-level-4.gif",
        },
      ],
    },
  },

  // Rhythm
  juggler: {
    name: "Troupe Juggler",
    image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/56/Rhythm-Spirit-Troupe-Juggler.png",
    type: "Seasonal Spirit",
    realm: "Valley of Triumph",
    season: "Rhythm",
    ts: {
      eligible: true,
      returned: true,
      dates: ["October 26, 2023 (#99)", "September 16, 2021 (#44)"],
    },
    tree: {
      by: "Clement",
      total: "205 :RegularCandle: 27 :RegularHeart: 2 :AC:",
      image: "Troupe_Juggler_Tree_Clement.png",
    },
    location: {
      by: "Clement",
      image: "Troupe_Juggler_Location_Clement.jpg",
    },
    emote: {
      icon: "<:troupejuggler:1131650191754268854>",
      level: [
        {
          title: '"Juggle" Emote Level 1',
          image: "Troupe-Juggler-juggle-emote-level-1.gif",
        },
        {
          title: '"Juggle" Emote Level 2',
          image: "Troupe-Juggler-juggle-emote-level-2.gif",
        },
        {
          title: '"Juggle" Emote Level 3',
          image: "Troupe-Juggler-juggle-emote-level-3.gif",
        },
        {
          title: '"Juggle" Emote Level 4',
          image: "Troupe-Juggler-juggle-emote-level-4.gif",
        },
      ],
    },
    cosmetics: [
      {
        name: "Outfit",
        type: "Outfit",
        icon: "<:TroupeJugglerOutfit:1272778674139037707>",
        images: [
          {
            description: "Front",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/de/Season_of_rhythm_pants_valley_juggle_v2.png"
          },
          {
            description: "Back",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/3/3d/Troupe-Juggler-Outfit-Back.png"
          },
          ],
        price: "70 <:RegularCandle:1207793250895794226>",
        spPrice: "60 <:RythmCandle:1272754526008381510>"
      },
      {
        name: "Hair",
        type: "Hair",
        icon: "<:TroupeJugglerHair:1272778685581361254>",
        images: [
          {
            description: "The Hair",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/7/70/Season_of_rhythm_hair_valley_juggle_v2.png"
          }
          ],
        price: "42 <:RegularCandle:1207793250895794226>",
        spPrice: "12 <:RythmCandle:1272754526008381510>"
      },
      {
        name: "Cape",
        type: "Cape",
        icon: "<:TroupeJugglerCape:1272778696855523391>",
        images: [
          {
            description: "Front",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/1/1d/Season_of_rhythm_cape_valley_juggle_front_v2.png"
          },
          {
            description: "Interior",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/3/3f/Season_of_rhythm_cape_valley_juggle_open_v2.png"
          },
          {
            description: "Back",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/7/7f/Season_of_rhythm_cape_valley_juggle_back_v2.png"
          },
          {
            description: "Exterior",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/9/97/Troupe-Juggler-Cape-Exterior.png"
          },
          ],
        price: "75 <:RegularCandle:1207793250895794226>",
        isSP: true
      },
      {
        name: "Stone brazier",
        type: "Prop",
        icon: "<:TriupeJugglerProp:1272778706796150876>",
        images: [
          {
            description: "The Prop",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/f8/Summer_prop_lantern_out.png"
          },
          {
            description: "On player's back",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/aa/Summer_prop_lantern_on_back.png"
          }
          ],
        price: "15 <:regularHeart:1207793247792013474>",
        notes: ["This item was not available during the Season of Rhythm. Instead, it was added to the Troupe Juggler's Friend Tree during their first visit as a Traveling Spirit on September 16, 2021, in conjunction with Days of Summer"]
      }
      ]
  },
  greeter: {
    name: "Troupe Greeter",
    image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/56/Rhythm-Spirit-Troupe-Greeter.png",
    type: "Seasonal Spirit",
    realm: "Isle of Dawn",
    season: "Rhythm",
    ts: {
      eligible: true,
      returned: true,
      dates: ["August 07, 2023 (SV#4)", "March 03, 2022 (#56)", "December 24, 2020 (#25)"],
    },
    tree: {
      by: "Clement",
      total: "146 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Troupe_Greeter_Tree_Clement.png",
    },
    location: {
      by: "Clement",
      image: "Troupe_Greeter_Location_Clement.jpg",
    },
    emote: {
      icon: "<:troupegreeter:1131650161655943228>",
      level: [
        {
          title: '"Welcome" Emote Level 1',
          image: "Troupe-Greeter-welcome-emote-level-1.gif",
        },
        {
          title: '"Welcome" Emote Level 2',
          image: "Troupe-Greeter-welcome-emote-level-2.gif",
        },
        {
          title: '"Welcome" Emote Level 3',
          image: "Troupe-Greeter-welcome-emote-level-3.gif",
        },
        {
          title: '"Welcome" Emote Level 4',
          image: "Troupe-Greeter-welcome-emote-level-4.gif",
        },
      ],
    },
    cosmetics: [
      {
        name: "Outfit",
        type: "Outfit",
        icon: "<:TroupeGreeterOutfit:1272777108137054279>",
        images: [
          {
           description: "Front",
           image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/3/31/Season_of_rhythm_pants_isle_welcome_v2.png"
          },
          {
            description: "Back",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/0f/Troupe-Greeter-Outfit-Back.png"
          }
          ],
        price: "70 <:RegularCandle:1207793250895794226>",
        isSP: true
      },
      {
        name: "Mask",
        type: "Mask",
        icon: "<:TroupeGreeterMask:1272777104882270281>",
        images: [
          {
            description: "The Mask",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/7/71/Season_of_rhythm_mask_isle_welcome_v2.png"
          }
          ],
        price: "48 <:RegularCandle:1207793250895794226>",
        spPrice: "30 <:RythmCandle:1272754526008381510>"
      }
      ]
  },
  director: {
    name: "Thoughtful Director",
    type: "Seasonal Spirit",
    image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/2/27/Rhythm-Spirit-Thoughtful-Director.png",
    realm: "Vault of Knowledge",
    season: "Rhythm",
    ts: {
      eligible: true,
      returned: true,
      dates: ["July 03, 2023 (SV#3)", "July 08, 2022 (#67)", "May 13, 2021 (#35)"],
    },
    tree: {
      by: "Jed",
      total: "195 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Thoughtful_Director_Tree_Jed.png",
    },
    location: {
      by: "Clement",
      image: "Thoughtful_Director_Location_Clement.png",
    },
    emote: {
      icon: "<:thoughtfuldirector:1131650086422728795>",
      level: [
        {
          title: '"Thinking" Emote Level 1',
          image: "Thoughtful-Director-thinking-emote-level-1.gif",
        },
        {
          title: '"Thinking" Emote Level 2',
          image: "Thoughtful-Director-thinking-emote-level-2.gif",
        },
        {
          title: '"Thinking" Emote Level 3',
          image: "Thoughtful-Director-thinking-emote-level-3.gif",
        },
        {
          title: '"Thinking" Emote Level 4',
          image: "Thoughtful-Director-thinking-emote-level-4.gif",
        },
      ],
    },
    cosmetics: [
      {
        name: "Mask",
        type: "Mask",
        icon: "<:DirectorMask:1272773138949607506>",
        images: [
          {
            description: "Front",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/03/Season_of_rhythm_mask_vault_think_v2.png"
          },
          {
            description: "Side",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/a6/Thoughtful-Director-Mask-side.png"
          }
          ],
        price: "42 <:RegularCandle:1207793250895794226>",
        isSP: true
      },
      {
        name: "Cape",
        type: "Cape",
        icon: "<:DirectorCape:1272773131794382848>",
        images: [
          {
            description: "Front",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/8b/Season_of_rhythm_cape_vault_think_front_v2.png"
          },
          {
            description: "Interior",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/68/Season_of_rhythm_cape_vault_think_open_v2.png"
          },
          {
            description: "Back",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/54/Season_of_rhythm_cape_vault_think_back_v2.png"
          },
          {
            description: "Exterior",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/82/Thoughtful-Director-Cape-back-exterior.png"
          }
          ],
        price: "75 <:RegularCandle:1207793250895794226>",
        isSP: true
      },
      {
        name: "Xylophone",
        type: "Instrument",
        icon: "<:DirectorInstrument:1272773126404702251>",
        images: [
          {
            description: "The Xylophone",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/c/c4/Rhythm-Thoughtful-Director-xylophone.png"
          },
          {
            description: "On player's back",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/2/2e/Season_of_rhythm_instrument_vault_thinking_on_back_v2.png"
          },
          {
            description: "Playing the instrument",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/a0/Season_of_rhythm_instrument_vault_thinking_playing_v2.png"
          }
          ],
        price: "65 <:RegularCandle:1207793250895794226>",
        spPrice: "54 <:RythmCandle:1272754526008381510>",
        notes: ["In Harmony Hall, the Xylophone can be found on the back wall, behind and to the left of the front counter, next to the alcove containing the two pianos", "It is one of the highest-pitched Instrument available in the game, along with the Winter Piano"]
      }
      ]
  },
  pianist: {
    name: "Respectful Pianist",
    image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/8a/Rhythm-Spirit-Respectful-Pianist.png",
    type: "Seasonal Spirit",
    realm: "Golden Wasteland",
    season: "Rhythm",
    ts: {
      eligible: true,
      returned: true,
      dates: ["July 03, 2023 (SV#3)", "February 04, 2021 (#28)"],
    },
    tree: {
      by: "Jed",
      total: "162 :RegularCandle: 13 :RegularHeart: 2:AC:",
      image: "Respectful_Pianist_Tree_Jed.png",
    },
    location: {
      by: "Clement",
      image: "Respectful_Pianist_Location_Clement.png",
    },
    emote: {
      icon: "<:respectfulpianist:1131650056206942300>",
      level: [
        {
          title: '"Respect" Emote Level 1',
          image: "Respectful-Pianist-respect-emote-level-1.gif",
        },
        {
          title: '"Respect" Emote Level 2',
          image: "Respectful-Pianist-respect-emote-level-2.gif",
        },
        {
          title: '"Respect" Emote Level 3',
          image: "Respectful-Pianist-respect-emote-level-3.gif",
        },
        {
          title: '"Respect" Emote Level 4',
          image: "Respectful-Pianist-respect-emote-level-4.gif",
        },
      ],
    },
    cosmetics: [
      {
        name: "Mask",
        type: "Mask",
        icon: "<:PianistMask:1272767463372755005>",
        images: [
          {
            description: "The Mask",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/e/e4/Season_of_rhythm_mask_wasteland_respect_v2.png"
          }
          ],
        price: "48 <:RegularCandle:1207793250895794226>",
        spPrice: "68 <:RythmCandle:1272754526008381510>"
      },
      {
        name: "Hair",
        type: "Hair",
        icon: "<:PianistHair:1272767461518868521>",
        images: [
          {
            description: "The Hair",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/1/1e/Season_of_rhythm_hair_wasteland_respect_v2.png"
          }
          ],
        price: "26 <:RegularCandle:1207793250895794226>",
        spPrice: "14 <:RythmCandle:1272754526008381510>"
      },
      {
        name: "Winter Piano",
        type: "Instrument",
        icon: "<:PianistInstrument:1272767462621839464>",
        images: [
          {
            description: "The Winter Piano",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/f6/Rhythm-Respectul-Pianist-Piano.png"
          },
          {
            description: "Playing the Piano",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/50/Season_of_rhythm_instrument_wasteland_respect_playing_v2.png"
          },
          {
            description: "On player's back",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/d7/Season_of_rhythm_instrument_wasteland_respect_on_back_v2.png"
          }
          ],
        price: "75 <:RegularCandle:1207793250895794226>",
        isSP: true,
        notes: ["In Harmony Hall, the Winter Piano can be found on the back wall, behind and to the left of the front counter, in an alcove below the standard Piano"]
      }
      ]
  },
  spin_dancer: {
    name: "Festival Spin Dancer",
    image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/3/35/Rhythm-Spirit-Festival-Spin-Dancer.png",
    type: "Seasonal Spirit",
    realm: "Daylight Prairie",
    season: "Rhythm",
    ts: {
      eligible: true,
      returned: true,
      dates: ["December 21, 2023 (#103)", "October 14, 2021 (#46)", "September 03, 2020 (#17)"],
    },
    tree: {
      by: "Clement",
      total: "157 :RegularCandle: 19 :RegularHeart: 2 :AC:",
      image: "Spin_Dancer_Tree_Clement.png",
    },
    location: {
      by: "Clement",
      image: "Spin_Dancer_Location.png",
    },
    emote: {
      icon: "<:spindancer:1131650001571946616>",
      level: [
        {
          title: '"Spin Dance" Emote Level 1',
          image: "Festive-Spin-Dancer-spin-dance-emote-level-1.gif",
        },
        {
          title: '"Spin Dance" Emote Level 2',
          image: "Festive-Spin-Dancer-spin-dance-emote-level-2.gif",
        },
        {
          title: '"Spin Dance" Emote Level 3',
          image: "Festive-Spin-Dancer-spin-dance-emote-level-3.gif",
        },
        {
          title: '"Spin Dance" Emote Level 4',
          image: "Festive-Spin-Dancer-spin-dance-emote-level-4.gif",
        },
      ],
    },
    cosmetics: [
      {
        name: "Outfit",
        type: "Outfit",
        icon: "<:SpinDancerOutfit:1272761360383742023>",
        images: [
          {
            description: "Front",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/f7/Season_of_rhythm_pants_prairie_dance_v2.png"
          },
          {
            description: "Back",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/a0/Festival-Spin-Dancer-Outfit-Back.png"
          }
          ],
        price: "65 <:RegularCandle:1207793250895794226>",
        isSP: true
      },
      {
        name: "Hair",
        type: "Hair",
        icon: "<:SpinDancerHair:1272761353156952135>",
        images: [
          {
            description: "Front",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/1/11/Season_of_rhythm_hair_prairie_dance_v2.png"
          },
          {
            description: "Side",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/a1/Festival-Spin-Dancer-Hair-side.png"
          },
          {
            description: "Back",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/3/3c/Festival-Spin-Dancer-Hair-back.png"
          }
          ],
        price: "34 <:RegularCandle:1207793250895794226>",
        spPrice: "36 <:RythmCandle:1272754526008381510>"
      },
      {
        name: "Purple Flag",
        type: "Prop",
        icon: "<:SpinDancerProp:1272761347012165642>",
        images: [
          {
            description: "The Flag",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/5f/Festival_spin_dancers_flag.png"
          },
          {
            description: "On player's back",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/4/4e/Festival-Spin-Dancer-Prop-on-back.png"
          }
          ],
        price: "30 <:RegularCandle:1207793250895794226>",
        notes: ["This item was not available during the Season of Rhythm. Instead, it was added to the Festival Spin Dancer's Friend Tree during their second visit as a Traveling Spirit on October 14, 2021"]
      }
      ]
  },
  actor: {
    name: "Admiring Actor",
    image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/2/2f/Rhythm-Spirit-Admiring-Actor.png",
    type: "Seasonal Spirit",
    realm: "Hidden Forest",
    season: "Rhythm",
    ts: {
      eligible: true,
      returned: true,
      dates: ["June 08, 2023 (#89)", "June 24, 2021 (#38)", "October 15, 2020 (#20)"],
    },
    tree: {
      by: "Jed",
      total: "135 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Admiring_Actor_Tree_Jed.png",
    },
    location: {
      by: "Clement",
      image: "Admiring_Actor_Location_Clement.png",
    },
    emote: {
      icon: "<:actor:1131649977710555136>",
      level: [
        {
          title: '"Blow Kiss" Emote Level 1',
          image: "Admiring-Actor-blow-kiss-emote-level-1.gif",
        },
        {
          title: '"Blow Kiss" Emote Level 2',
          image: "Admiring-Actor-blow-kiss-emote-level-2.gif",
        },
        {
          title: '"Blow Kiss" Emote Level 3',
          image: "Admiring-Actor-blow-kiss-emote-level-3.gif",
        },
        {
          title: '"Blow Kiss" Emote Level 4',
          image: "Admiring-Actor-blow-kiss-emote-level-4.gif",
        },
      ],
    },
    cosmetics: [
      {
        name: "Outfit",
        type: "Outfit",
        icon: "<:ActorOutfit:1272753382892769381>",
        images: [
           {
            description: "The Outfit (Front)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/c/c7/Season_of_rhythm_pants_forest_kisses_v2.png"
          },
          {
            description: "The Outfit (Back)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/04/Admiring-Actor-Outfit-Back.png"
          },
          ],
        price: "65 <:RegularCandle:1207793250895794226>",
        spPrice: "42 <:RythmCandle:1272754526008381510>"
      },
      {
        name: "Mask",
        type: "Mask",
        icon: "<:ActorMask:1272753373862695014>", 
        images: [
          {
            description: "The Mask",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/d1/Season_of_rhythm_mask_forest_kisses_v2.png"
          }
      ],
        price: "42 <:RegularCandle:1207793250895794226>",
        isSP: true
  },
      {
        name: "Music Sheet #6",
        type: "Music Sheet",
        icon: "<:ActorSheet:1272753357269766226>",
        images: [],
        price: "15 <:RegularCandle:1207793250895794226>",
        isSP: true
      }
      ],
  },
  

  // Belonging
  wise_grandparent: {
    name: "Wise Grandparent",
    image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/2/2e/Belonging-Spirit-Wise-Grandpa.png",
    type: "Seasonal Spirit",
    realm: "Vault of Knowledge",
    season: "Belonging",
    ts: {
      eligible: true,
      returned: true,
      dates: ["November 09, 2023 (#100)", "November 11, 2021 (#48)", "August 06, 2020 (#15)"],
    },
    tree: {
      by: "Clement",
      total: "156 :RegularCandle: 0 :RegularHeart: 2 :AC:",
      image: "Wise_Grandparent_Tree_Clement.png",
    },
    location: {
      by: "Clement",
      image: "Wise_Grandparent_Location_Clement.jpg",
    },
    stance: {
      title: "Wise Stance",
      icon: "<:wisegrandparent:1131650518792536125>",
      image: "Wise_Stand.gif",
    },
    cosmetics: [
      {
        name: "Bearded Mask",
        type: "Mask",
        icon: "<:WiseGrandparentMask:1272626214661656588>",
        images: [
          {
            description: "The Mask",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/4/48/Belonging_Mask_Vault.png",
          },
        ],
        price: "48 <:RegularCandle:1207793250895794226>",
        spPrice: "36 <:BelongingCandle:1272602132549341238>",
      },
      {
        name: "Golden-white Cape",
        type: "Cape",
        icon: "<:WiseGrandParentCape:1272626201139216468>",
        images: [
          {
            description: "The Cape (Front)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/1/10/Belonging_cape_white_front.png",
          },
          {
            description: "The Cape (Interior)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/9/93/Belonging_Cape_Vault.png",
          },
          {
            description: "The Cape (Back)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/df/Belonging_cape_white_back.png",
          },
        ],
        price: "70 <:RegularCandle:1207793250895794226>",
        isSP: true,
      },
      {
        name: "Lantern",
        type: "Prop",
        icon: "<:WiseGrandparentProp:1272626086009765920>",
        images: [
          {
            description: "The Lantern",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/ac/Wise_grandparent_book.png",
          },
          {
            description: "Lantern on player's back",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/0a/Wise-Grandparent-prop-on-back.png",
          },
        ],
        price: "10 <:RegularCandle:1207793250895794226>",
        notes: [
          "This item is purely cosmetic and does not offer any functionality, and cannot be lit despite its resemblance to the lanterns seen in the Vault of Knowledge",
          "This item was not available during the Season of Belonging. Instead, it was added to the Wise Grandparent's Friendship Tree during their second visit as a Traveling Spirit on November 11, 2021",
        ],
      },
    ],
  },
  sparkler_parent: {
    name: "Sparkler Parent",
    image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/f6/Belonging-Spirit-Sparkler-Parent.png",
    type: "Seasonal Spirit",
    realm: "Valley of Triumph",
    season: "Belonging",
    ts: {
      eligible: true,
      returned: true,
      dates: ["June 22, 2023 (#90)", "December 23, 2021 (#51)", "April 01, 2021 (#32)", "May 14, 2020 (#9)"],
    },
    tree: {
      by: "Clement",
      total: "116 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Sparkler_Parent_Tree_Clement.png",
    },
    location: {
      by: "Clement",
      image: "Sparkler_Parent_Location_Clement.png",
    },
    emote: {
      icon: "<:sparklerparent:1131650491923837018>",
      level: [
        {
          title: '"Sparkler" Emote Level 1',
          image: "Sparkler-Parent-sparkler-emote-level-1.gif",
        },
        {
          title: '"Sparkler" Emote Level 2',
          image: "Sparkler-Parent-sparkler-emote-level-2.gif",
        },
        {
          title: '"Sparkler" Emote Level 3',
          image: "Sparkler-Parent-sparkler-emote-level-3.gif",
        },
        {
          title: '"Sparkler" Emote Level 4',
          image: "Sparkler-Parent-sparkler-emote-level-4.gif",
        },
      ],
    },
    cosmetics: [
      {
        name: "Mask",
        type: "Mask",
        icon: "<:SparklerParentMask:1272623284306972723>",
        images: [
          {
            description: "The Mask",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/c/cd/Belonging_Mask_Valley.png",
          },
        ],
        price: "36 <:RegularCandle:1207793250895794226>",
        isSP: true,
      },
      {
        name: "Hair",
        type: "Hair",
        icon: "<:SparklerParentHair:1272623272923496572>",
        images: [
          {
            description: "The Hair",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/b/b8/Belonging_Hair_Valley.png",
          },
        ],
        price: "34 <:RegularCandle:1207793250895794226>",
        spPrice: "36 <:BelongingCandle:1272602132549341238>",
      },
      {
        name: "Pinwheel",
        type: "Prop",
        icon: "<:SparklerParentProp:1272623259073908858>",
        images: [
          {
            description: "The Pinwheel",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/9/91/Pinwheel_.png",
          },
          {
            description: "Pinwheel on player's back",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/9/9e/Sparkler-Parent-prop-on-back.png",
          },
        ],
        price: "33 <:RegularCandle:1207793250895794226>",
        notes: [
          "This item was not available during the Season of Belonging. Instead, it was added to the Sparkler Parent's Friendship Tree, during their third visit as Traveling Spirit on December 23rd, 2021.",
        ],
      },
    ],
  },
  pleaful_parent: {
    name: "Pleaful Parent",
    image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/6c/Belonging-Spirit-Pleaful-Parent.png",
    type: "Seasonal Spirit",
    realm: "Golden Wasteland",
    season: "Belonging",
    ts: {
      eligible: true,
      returned: true,
      dates: ["December 22, 2022 (#77)", "December 10, 2020 (#24)", "March 26, 2020 (#5)"],
    },
    tree: {
      by: "Jed",
      total: "195 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Pleaful_Parent_Tree_Jed.png",
    },
    location: {
      by: "Clement",
      image: "Pleaful_Parent_Location_Clement.jpg",
    },
    emote: {
      icon: "<:pleafulparent:1131650465076101212>",
      level: [
        {
          title: '"Don\'t Go!" Emote Level 1',
          image: "Pleaful-Parent-dont-go-emote-level-1.gif",
        },
        {
          title: '"Don\'t Go!" Emote Level 2',
          image: "Pleaful-Parent-dont-go-emote-level-2.gif",
        },
        {
          title: '"Don\'t Go!" Emote Level 3',
          image: "Pleaful-Parent-dont-go-emote-level-3.gif",
        },
        {
          title: '"Don\'t Go!" Emote Level 4',
          image: "Pleaful-Parent-dont-go-emote-level-4.gif",
        },
      ],
    },
    cosmetics: [
      {
        name: "Mask",
        type: "Mask",
        icon: "<:PleafulParentMask:1272615600287387658>",
        images: [
          {
            description: "The Mask",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/e/eb/Belonging_Mask_Wasteland.png",
          },
        ],
        price: "42 <:RegularCandle:1207793250895794226>",
        spPrice: "48 <:BelongingCandle:1272602132549341238>",
      },
      {
        type: "Cape",
        name: "Dark-green Cape",
        icon: "<:PleafulParentCape:1272615583049056316>",
        images: [
          {
            description: "The Cape (Front)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/63/Belonging_cape_dark_blue_front.png",
          },
          {
            description: "The Cape (Interior)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/82/Belonging_Cape_wasteland.png",
          },
          {
            description: "The Cape (Back)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/4/44/Belonging_cape_dark_blue_back.png",
          },
        ],
        price: "65 <:RegularCandle:1207793250895794226>",
        isSP: true,
      },
      {
        name: "Guitar",
        type: "Instrument",
        icon: "<:PleafulParentInstrument:1272615566510657619>",
        images: [
          {
            description: "The Guitar",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/e/e0/Belonging-Pleaful-Parent-Guitar.png",
          },
          {
            description: "Playing the guitar",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/02/Belonging_Inst_Wasteland_Guitar.png",
          },
          {
            description: "Guitar on the back",
            image:
              "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/87/Belonging_instrument_guitar_on_back.png",
          },
        ],
        price: "75 <:RegularCandle:1207793250895794226>",
        isSP: true,
        notes: [
          "In Harmony Hall, the Guitar can be found in the left room with all the other stringed Instruments, on the left-most side",
          "It is also available in the Village Theater, at the front left of the stage, where it can be used by all players who have completed the third Quest of the Season of Performance",
        ],
      },
    ],
  },
  hairtousle_teen: {
    name: "Hairtousle Teen",
    image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/9/9f/Belonging-Spirit-Hairtousle-Teen.png",
    type: "Seasonal Spirit",
    realm: "Hidden Forest",
    season: "Belonging",
    ts: {
      eligible: true,
      returned: true,
      dates: ["March 28, 2024 (#110)", "June 09, 2022 (#63)", "June 11, 2020 (#11)"],
    },
    tree: {
      by: "Clement",
      total: "148 :RegularCandle: 9 :RegularHeart: 2 :AC:",
      image: "Hairtousle_Teen_Tree_Clement.png",
    },
    location: {
      by: "Clement",
      image: "Haitousle_Teen_Location_Clement.webp",
    },
    action: {
      icon: "<:hairtousle:1131650432180175008>",
      level: [
        {
          title: '"Hairtousle" Friend Action Level 1',
          image: "Hairtousle-Teen-hairtousle-emote-level-1.gif",
        },
        {
          title: '"Hairtousle" Friend Action Level 2',
          image: "Hairtousle-Teen-hairtousle-emote-level-2.gif",
        },
      ],
    },
    cosmetics: [
      {
        name: "Face Accessory",
        icon: "<:HairtousleHat:1272607540458426506>",
        images: [
          {
            description: "The Earmuffs",
            image:
              "https://static.wikia.nocookie.net/sky-children-of-the-light/images/b/b6/Belonging_Headgear_Forest_Ear_Muffs.png",
          },
        ],
        price: "50 <:RegularCandle:1207793250895794226>",
        isSP: true,
      },
      {
        name: "Instrument",
        icon: "<:HairtousleInstrument:1272607556065431552>",
        images: [
          {
            description: "The Instrument",
            image:
              "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/06/Belonging-Hairtousle-teen-Ukulele.png",
          },
          {
            description: "Playing the Instrument",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/d0/Belonging_Inst_Forest_Mando.png",
          },
          {
            description: "The Instrument (On the back)",
            image:
              "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/d7/Belonging_instrument_ukulele_on_back.png",
          },
        ],
        price: "70 <:RegularCandle:1207793250895794226>",
        spPrice: "60 <:BelongingCandle:1272602132549341238>",
        notes: [
          "In Harmony Hall, the Ukulele can be found in the left room with all the other stringed Instruments. It is the second Instrument from the left.",
        ],
      },
    ],
  },
  confetti_cousin: {
    name: "Confetti Cousin",
    image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/06/Belonging-Spirit-Confetti-Cousin.png",
    type: "Seasonal Spirit",
    realm: "Daylight Prairie",
    season: "Belonging",
    ts: {
      eligible: true,
      returned: true,
      dates: ["September 28, 2023 (#97)", "January 21, 2021 (#27)", "July 09, 2020 (#13)"],
    },
    tree: {
      by: "Jay",
      total: "115 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Confetti_Cousin_Tree_Jay.png",
    },
    location: {
      by: "Clement",
      image: "Confetti_Cousin_Location_Clement.png",
    },
    emote: {
      icon: "<:confettiCousin:1131650251216920656>",
      level: [
        {
          title: '"Confetti" Emote Level 1',
          image: "Confetti-Cousin-confetti-emote-level-1.gif",
        },
        {
          title: '"Confetti" Emote Level 2',
          image: "Confetti-Cousin-confetti-emote-level-2.gif",
        },
        {
          title: '"Confetti" Emote Level 3',
          image: "Confetti-Cousin-confetti-emote-level-3.gif",
        },
        {
          title: '"Confetti" Emote Level 4',
          image: "Confetti-Cousin-confetti-emote-level-4.gif",
        },
      ],
    },
    cosmetics: [
      {
        name: "Hair",
        icon: "<:ConfettiCousinHair:1272604132464656404>",
        images: [
          {
            description: "The Hair (Front)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/d5/Belonging_Hair_Prairie.png",
          },
          {
            description: "The Hair (Side)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/7/7c/Confetti-Cousin-Hair-side.png",
          },
          {
            description: "The Hair (Back)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/e/ea/Confetti-Cousin-Hair-back.png",
          },
        ],
        price: "42 <:RegularCandle:1207793250895794226>",
        isSP: true,
        notes: [
          "Note that this item is considered a Hair, not a Hair Accessory, and as such cannot be worn over other Hairstyles",
        ],
      },
      {
        name: "Cape",
        icon: "<:ConfettiCousinCape:1272604119550398475>",
        images: [
          {
            description: "The Cape (Front)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/7/71/Belonging_cape_red_front.png",
          },
          {
            description: "The Cape (Interior)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/87/Belonging_Cape_Prairie.png",
          },
          {
            description: "The Cape (Back)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/7/78/Belonging_cape_red_back.png",
          },
        ],
        price: "60 <:RegularCandle:1207793250895794226>",
        spPrice: "30 <:BelongingCandle:1272602132549341238>",
      },
    ],
  },
  boogie_kid: {
    name: "Boogie Kid",
    image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/3/3c/Belonging-Spirit-Boogie-Kid.png",
    type: "Seasonal Spirit",
    realm: "Isle of Dawn",
    season: "Belonging",
    ts: {
      eligible: true,
      returned: true,
      dates: ["March 02, 2023 (#82)", "July 22, 2021 (#40)", "November 12, 2020 (#22)"],
    },
    tree: {
      by: "Jed",
      total: "103 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Boogie_Kid_Tree_Jed.png",
    },
    location: {
      by: "Clement",
      image: "Boogie_Kid_Location_Clement.jpg",
    },
    emote: {
      icon: "<:boogiekid:1131650220317478923>",
      level: [
        {
          title: '"Boogie Dance" Emote Level 1',
          image: "Boogie-Kid-boogie-dance-emote-level-1.gif",
        },
        {
          title: '"Boogie Dance" Emote Level 2',
          image: "Boogie-Kid-boogie-dance-emote-level-2.gif",
        },
        {
          title: '"Boogie Dance" Emote Level 3',
          image: "Boogie-Kid-boogie-dance-emote-level-3.gif",
        },
        {
          title: '"Boogie Dance" Emote Level 4',
          image: "Boogie-Kid-boogie-dance-emote-level-4.gif",
        },
      ],
    },
    cosmetics: [
      {
        name: "Mask",
        icon: "<:BoogieMask:1272601546638753892>",
        images: [
          {
            description: "The Mask",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/e/ee/Belonging_Mask_Isle.png",
          },
        ],
        price: "30 <:RegularCandle:1207793250895794226>",
        spPrice: "30 <:BelongingCandle:1272602132549341238>",
      },
      {
        name: "Outfit",
        icon: "<:BoogiePant:1272601567853543504>",
        images: [
          {
            description: "The Outfit (Front)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/a6/Belonging_Legs_Isle.png",
          },
          {
            description: "The Outfit (Back)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/b/bb/Boogie-Kid-Outfit-Back.png",
          },
        ],
        price: "60 <:RegularCandle:1207793250895794226>",
        isSP: true,
      },
    ],
  },

  // Lighseekers
  twirling_champion: {
    name: "Twirling Champion",
    image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/de/Lightseekers-Spirit-Twirling-Champion.png",
    type: "Seasonal Spirit",
    realm: "Valley of Triumph",
    season: "Lightseekers",
    ts: {
      eligible: true,
      returned: true,
      dates: ["February 01, 2024 (#106)", "January 06, 2022 (#52)", "September 17, 2020 (#18)"],
    },
    tree: {
      by: "Clement",
      total: "131 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "SoL_Valley_TS_placeholder.PNG2.png",
    },
    location: {
      by: "Clement",
      image: "Twirling_Champion_Location_Clement.jpg",
    },
    emote: {
      icon: "<:twirlingChampion:1153511535499550771>",
      level: [
        {
          title: '"Triple Axel" Emote Level 1',
          image: "Twirling-Champion-triple-axel-emote-level-1.gif",
        },
        {
          title: '"Triple Axel" Emote Level 2',
          image: "Twirling-Champion-triple-axel-emote-level-2.gif",
        },
        {
          title: '"Triple Axel" Emote Level 3',
          image: "Twirling-Champion-triple-axel-emote-level-3.gif",
        },
        {
          title: '"Triple Axel" Emote Level 4',
          image: "Twirling-Champion-triple-axel-emote-level-4.gif",
        },
      ],
    },
    cosmetics: [
      {
        name: "Mask",
        icon: "<:TwirlingChampionMask:1272251658486943826>",
        images: [
          {
            description: "The Mask",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/a5/Lightseekers_mask_valley_v2.png",
          },
        ],
        price: "24 <:RegularCandle:1207793250895794226>",
        isSP: true,
      },
      {
        name: "Hair",
        icon: "<:TwirlingChampionHair:1272251652203610134>",
        images: [
          {
            description: "The Hair (Front)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/64/Twirling-Champion-Hair-front.png",
          },
          {
            description: "The Hair (Side)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/6d/Lightseekers_hair_valley_v2.png",
          },
          {
            description: "The Hair (Back)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/a3/Twirling-Champion-Hair-back.png",
          },
        ],
        price: "34 <:RegularCandle:1207793250895794226>",
        spPrice: "42 <:LightseekerCandle:1272236745035091998>",
      },
      {
        name: "Instrument",
        icon: "<:TwirlingChampionInstrument:1272251644746272919>",
        images: [
          {
            description: "The Instrument",
            image:
              "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/aa/Lightseekers-Twirling-Champion_-_Panpipes-Panflute.png",
          },
          {
            description: "Playing the Instrument",
            image:
              "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/50/Lightseekers_instrument_pan_flute_valley_v2.png",
          },
          {
            description: "The Instrument on the back",
            image:
              "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/04/Lightseekers_instrument_panflute_on_back_v2.png",
          },
        ],
        price: "60 <:RegularCandle:1207793250895794226>",
        isSP: true,
        notes: [
          "In Harmony Hall, the Panflute can be found on the back wall, behind and to the right of the front counter in an alcove above the Horn",
        ],
      },
    ],
  },
  light_scholar: {
    name: "Sushing Light Scholar",
    image:
      "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/a0/Lightseekers-Spirit-Shushing-Light-Scholar.png",
    type: "Seasonal Spirit",
    realm: "Vault of Knowledge",
    season: "Lightseekers",
    ts: {
      eligible: true,
      returned: true,
      dates: ["September 15, 2022 (#70)", " August 20, 2020 (#16)"],
    },
    tree: {
      by: "Jed",
      total: "108 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Shushing_Light_Scholar_Tree_Jed.png",
    },
    location: {
      by: "Clement",
      image: "Shushing_Light_Scholar_Location_Clement.png",
    },
    emote: {
      icon: "<:shushingscholar:1153511408537980969>",
      level: [
        {
          title: '"Shush" Emote Level 1',
          image: "Shushing-Light-Scholar-shush-emote-level-1.gif",
        },
        {
          title: '"Shush" Emote Level 2',
          image: "Shushing-Light-Scholar-shush-emote-level-2.gif",
        },
        {
          title: '"Shush" Emote Level 3',
          image: "Shushing-Light-Scholar-shush-emote-level-3.gif",
        },
        {
          title: '"Shush" Emote Level 4',
          image: "Shushing-Light-Scholar-shush-emote-level-4.gif",
        },
      ],
    },
    cosmetics: [
      {
        name: "Mask",
        icon: "<:SushingScholarMask:1272249646793621534>",
        images: [
          {
            description: "The Mask",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/f1/Lightseekers_mask_vault_v2.png",
          },
        ],
        price: "30 <:RegularCandle:1207793250895794226>",
        isSP: true,
      },
      {
        name: "Cape",
        icon: "<:SushingScholarCape:1272249640246312961>",
        images: [
          {
            description: "The Cape (Front)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/8e/Lightseekers_cape_vault_front.png",
          },
          {
            description: "The Cape (Interior)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/59/Lightseekers_cape_vault.png",
          },
          {
            description: "The Cape (Back)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/81/Lightseekers_cape_vault_back.png",
          },
        ],
        price: "65 <:RegularCandle:1207793250895794226>",
        isSP: true,
      },
    ],
  },
  piggyback: {
    name: "Piggyback Lightseeker",
    image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/a7/Lightseeker-Spirit-Piggyback-Lightseeker.png",
    type: "Seasonal Spirit",
    realm: "Isle of Dawn",
    season: "Lightseekers",
    ts: {
      eligible: true,
      returned: true,
      dates: ["February 02, 2023 (#80)", "March 04, 2021 (#30)", "April 16, 2020 (#7)"],
    },
    tree: {
      by: "Jed",
      total: "123 :RegularCandle: 8 :RegularHeart: 2:AC:",
      image: "Piggyback_Lightseeker_Tree_Jed.png",
    },
    location: {
      by: "Clement",
      image: "Puggyback_Lightseeker_Location_Clement.jpg",
    },
    action: {
      icon: "<:piggyback:1153511511701065738>",
      level: [
        {
          title: '"Piggyback" Friend Action Level 1',
          image: "Piggyback-Lightseeker-piggyback-emote-level-1.gif",
        },
        {
          title: '"Piggyback" Friend Action Level 2',
          image: "Piggyback-Lightseeker-piggyback-emote-level-2.gif",
        },
      ],
    },
    cosmetics: [
      {
        name: "Mask",
        icon: "<:PiggybackMask:1272247105985052773>",
        images: [
          {
            description: "The Mask",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/b/b3/Lightseekers_mask_isle_v2.png",
          },
        ],
        price: "24 <:RegularCandle:1207793250895794226>",
        spPrice: "16 <:LightseekerCandle:1272236745035091998>",
      },
      {
        name: "Hair",
        icon: "<:PiggybackHair:1272247097327882251>",
        images: [
          {
            description: "The Hair",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/f0/Lightseekers_hair_isle_v2.png",
          },
        ],
        price: "26 <:RegularCandle:1207793250895794226>",
        spPrice: "54 <:LightseekerCandle:1272236745035091998>",
      },
      {
        name: "Cape",
        icon: "<:PiggybackCape:1272247065245913161>",
        images: [
          {
            description: "The Cape (Front)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/f9/Lightseekers_cape_isle_front.png",
          },
          {
            description: "The Cape (Interior)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/d3/Lightseekers_cape_isle_v2.png",
          },
          {
            description: "The Cape (Back)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/b/b0/Lightseekers_cape_isle_back.png",
          },
          {
            description: "The Cape (Exterior)",
            image:
              "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/f2/Piggyback-Lightseeker-Cape-exterior.png",
          },
        ],
        price: "60 <:RegularCandle:1207793250895794226>",
        isSP: true,
      },
    ],
  },
  laidback: {
    name: "Laidback Pioneer",
    image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/a6/Lightseekers-Spirit-Laidback-Pioneer.png",
    type: "Seasonal Spirit",
    realm: "Hidden Forest",
    season: "Lightseekers",
    ts: {
      eligible: true,
      returned: true,
      dates: ["October 13, 2022 (#72)", "November 26, 2020 (#23)", "February 27, 2020 (#3)"],
    },
    tree: {
      by: "Clement",
      total: "151 :RegularCandle: 0 :RegularHeart: 2 :AC:",
      image: "Traveling_Spirit_072-by-Clement2.png",
    },
    location: {
      by: "Clement",
      image: "02_HF_Seasonal_Spirit_-_Laidback_Pioneer.png",
    },
    stance: {
      title: "Laidback Stance",
      icon: "<:laidbackPioneer:1153511482949107765>",
      image: "Laidback_Stance.gif",
    },
    cosmetics: [
      {
        name: "Mask",
        icon: "<:LaidbackMask:1272243663266906213>",
        images: [
          {
            description: "The Mask",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/f6/Lightseekers_mask_forest_v2.png",
          },
        ],
        price: "30 <:RegularCandle:1207793250895794226>",
        spPrice: "6 <:LightseekerCandle:1272236745035091998>",
      },
      {
        name: "Hair",
        icon: "<:LaidbackHair:1272243652948787251>",
        images: [
          {
            description: "The Hair",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/5b/Lightseekers_hair_forest_v2.png",
          },
        ],
        price: "18 <:RegularCandle:1207793250895794226>",
        spPrice: "24 <:LightseekerCandle:1272236745035091998>",
      },
      {
        name: "Prop",
        icon: "<:LaidbackProp:1272243643268337765>",
        images: [
          {
            description: "The Prop",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/fb/Laidback-Pioneer-Umbrella-Prop.png",
          },
          {
            description: "Holding the Prop",
            image:
              "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/aa/Instrument_lightseekers_small_umbrella.png",
          },
          {
            description: "The prop on the back",
            image:
              "https://static.wikia.nocookie.net/sky-children-of-the-light/images/b/bd/Lightseekers_instrument_umbrella_on_back_v2.png",
          },
        ],
        price: "75 <:RegularCandle:1207793250895794226>",
        isSP: true,
        notes: [
          "When equipped, this umbrella is carried by the player and provides protection from polluted rain",
          "It cannot be placed and therefore cannot be used in Shared Spaces (unlike the Umbrella Prop offered by the <:jellywhisperer:1131649695807176895> Jelly Whisperer)",
        ],
      },
    ],
  },
  light_catcher: {
    name: "Doublefive light Catcher",
    image:
      "https://static.wikia.nocookie.net/sky-children-of-the-light/images/9/97/Lightseekers-Spirit-Doublefive-Light-Catcher.png",
    type: "Seasonal Spirit",
    realm: "Daylight Prairie",
    season: "Lightseekers",
    ts: {
      eligible: true,
      returned: true,
      total: "3",
      dates: ["July 01, 2022(#66)", "April 15, 2021(#33)", "February 14, 2020(#2)"],
    },
    tree: {
      by: "Clement",
      total: "126 :RegularCandle: 7 :RegularHeart: 2 :AC:",
      image: "Traveling_Spirit_0662.png",
    },
    location: {
      by: "Clement",
      image: "DoubleFive_Light_Catcher_Location_Clement.png",
    },
    action: {
      icon: "<:doublefiveCatcher:1153511455132496032>",
      level: [
        {
          title: '"Double Five" Friend Action Level 1',
          image: "Doublefive-Light-Catcher-double-five-emote-level-1.gif",
        },
        {
          title: '"Double Five" Friend Action Level 2',
          image: "Doublefive-Light-Catcher-double-five-emote-level-2.gif",
        },
      ],
    },
    cosmetics: [
      {
        name: "Mask",
        icon: "<:DoubleFiveMask:1272238796733157397>",
        images: [
          {
            description: "The Mask",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/c/c3/Lightseekers_mask_prairie_v2.png",
          },
        ],
        price: "24 <:RegularCandle:1207793250895794226>",
        spPrice: "10 <:LightseekerCandle:1272236745035091998>",
      },
      {
        name: "Hair",
        icon: "<:DoubleFiveHair:1272238789477273662>",
        images: [
          {
            description: "The Hair (Front)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/8d/Lightseekers_hair_prairie_v2.png",
          },
          {
            description: "The Hair (Back)",
            image:
              "https://static.wikia.nocookie.net/sky-children-of-the-light/images/b/b5/Doublefive-Light-Catcher-Hair-back.png",
          },
          {
            description: "The Hair (Side)",
            image:
              "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/d3/Doublefive-Light-Catcher-Hair-side.png",
          },
        ],
        price: "34 <:RegularCandle:1207793250895794226>",
        isSP: true,
        notes: [
          "Note that this item is considered a Hair, not a Hair Accessory, and as such it can not be worn over other Hairstyles",
        ],
      },
      {
        name: "Instrument",
        icon: "<:DoubleFiveInstrument:1272238779402551317>",
        images: [
          {
            description: "The Instrument",
            image:
              "https://static.wikia.nocookie.net/sky-children-of-the-light/images/2/22/Lightseekers-Doublefive-Light-Catcher-Flute.png",
          },
          {
            description: "Playing The Instrument",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/f3/Lightseekers_instrument_flute.png",
          },
          {
            description: "The Instrument (On Back)",
            image:
              "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/d3/Lightseekers_instrument_flute_on_back_v2.png",
          },
        ],
        price: "55 <:RegularCandle:1207793250895794226>",
        isSP: true,
        notes: [
          "In Harmony Hall, the Flute can be found on the back wall, behind and to the right of the front counter, propped up against the wall next to the alcove containing the Panflute and Horn.",
        ],
      },
    ],
  },
  crab_whisperer: {
    name: "Crab Whisperer",
    type: "Seasonal Spirit",
    image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/1/10/Lightseekers-Spirit-Crab-Whisperer.png",
    realm: "Golden Wasteland",
    season: "Lightseekers",
    ts: {
      eligible: true,
      returned: true,
      dates: ["August 07, 2023(SV#4)", "September 02, 2021(#43)", "April 09, 2020(#6)"],
    },
    tree: {
      by: "Clement",
      total: "190 :RegularCandle: 0 :RegularHeart: 2 :AC:",
      image: "Crab_Whisperer_Tree_Clement.png",
    },
    location: {
      by: "Clement",
      image: "Crab_Whisperer_Location_Clement.jpg",
    },
    call: {
      title: "Crab Call",
      icon: "<:crabWhisperer:1153511432349032508>",
      image: "Crab_Call-1.mp4",
    },
    cosmetics: [
      {
        name: "Mask",
        icon: "<:CrabWhispererMask:1272233363809374360>",
        images: [
          {
            description: "The Mask",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/2/28/Lightseekers_mask_wasteland_v2.png",
          },
        ],
        price: "30 <:RegularCandle:1207793250895794226>",
        spPrice: "12 <:LightseekerCandle:1272236745035091998>",
      },
      {
        name: "Hair",
        icon: "<:CrabWhispererHair:1272233357207404629>",
        images: [
          {
            description: "The Hair",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/d8/Lightseekers_hair_wasteland_v2.png",
          },
        ],
        price: "42 <:RegularCandle:1207793250895794226>",
        spPrice: "60 <:LightseekerCandle:1272236745035091998>",
        notes: [
          "Note that this item is considered a Hair, not a Hair Accessory, and as such it can not be worn over other Hairstyles",
        ],
      },
      {
        name: "Cape",
        icon: "<:CrabWhispererCape:1272233350295322636>",
        images: [
          {
            description: "The Cape (Front)",
            image:
              "https://static.wikia.nocookie.net/sky-children-of-the-light/images/1/19/Lightseekers_cape_wasteland_front.png",
          },
          {
            description: "The Cape (Interior)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/53/Lightseekers_cape_wasteland_v2.png",
          },
          {
            description: "The Cape (Back)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/9/9c/Lightseekers_cape_wasteland_back.png",
          },
          {
            description: "The Cape (Exterior)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/c/cc/Crab-Whisperer-Cape-exterior.png",
          },
        ],
        price: "70 <:RegularCandle:1207793250895794226>",
        isSP: true,
      },
      {
        name: "Prop",
        icon: "<:CrabWhispererProp:1272233342703501474>",
        images: [
          {
            description: "The Prop",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/5e/Summer_prop_tube_down.png",
          },
          {
            description: "The Prop (On Player's Back)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/55/Summer_prop_tube_on_back.png",
          },
        ],
        price: "20 <:RegularCandle:1207793250895794226>",
        notes: [
          "This item was not available during the Season of Lightseekers. Instead, it was added to the Crab Whisperer's Friendship Tree during their second return as a Traveling Spirit on September 2, 2021.",
        ],
      },
    ],
  },

  // Gratitude
  stretching: {
    name: "Stretching Guru",
    image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/4/46/Gratitude-Spirit-Stretching-Guru.png",
    type: "Seasonal Spirit",
    realm: "Daylight Prairie",
    season: "Gratitude",
    ts: {
      eligible: true,
      returned: true,
      dates: ["March 17, 2022 (#57)", "April 30, 2020 (#8)"],
    },
    tree: {
      by: "Clement",
      total: "104 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Stretching_Guru_Tree.png",
    },
    location: {
      by: "Clement",
      image: "Stretching_Guru_Location.png",
    },

    emote: {
      icon: "<:stretchingGuru:1153511673949343805>",
      level: [
        {
          title: '"Yoga Emote" Level 1',
          image: "Stretching-Guru-yoga-emote-level-1.gif",
        },
        {
          title: '"Yoga Emote" Level 2',
          image: "Stretching-Guru-yoga-emote-level-2.gif",
        },
        {
          title: '"Yoga Emote" Level 3',
          image: "Stretching-Guru-yoga-emote-level-3.gif",
        },
        {
          title: '"Yoga Emote" Level 4',
          image: "Stretching-Guru-yoga-emote-level-4.gif",
        },
      ],
    },
    cosmetics: [
      {
        name: "Hair",
        images: [
          {
            description: "The Hair",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/4/43/SoG2-2019_Hat.png",
          },
        ],
        icon: "<:StretchingHair:1272175411849203763>",
        price: "26 <:RegularCandle:1207793250895794226>",
        spPrice: "<:GratitudeSC:1272164085815054337>",
      },
      {
        name: "Cape",
        images: [
          {
            description: "The Cape (Front)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/e/e3/Gratitude_cape_prairie_front.png",
          },
          {
            description: "The Cape (Interior)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/8f/Gratitude_cape_prairie_inner.png",
          },
          {
            description: "THe Cape (Back)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/7/7b/Cape1-Season_of_Gratitude_2019.png",
          },
        ],
        icon: "<:StretchingCape:1272175400071594086>",
        price: "65 <:RegularCandle:1207793250895794226>",
        isSP: true,
      },
    ],
  },
  sassy: {
    name: "Sassy Drifter",
    image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/5d/Gratitude-Spirit-Sassy-Drifter.png",
    type: "Seasonal Spirit",
    realm: "Isle of Dawn",
    season: "Gratitude",
    ts: {
      eligible: true,
      returned: true,
      total: "5",
      dates: [
        "April 11, 2024 (#111)",
        "December 08, 2022 (#76)",
        "July 08, 2021 (#39)",
        "May 28, 2020 (#10)",
        "January 31, 2020 (#1)",
      ],
    },
    tree: {
      by: "Jed",
      total: "87 :RegularCandle: 2 :AC:",
      image: "Sassy_Drifter_Tree.png",
    },
    location: {
      by: "Clement",
      image: "Sassy_Drifter_Location.jpg",
    },

    stance: {
      title: "Sassy Stance",
      icon: "<:sassyDrifter:1153511651522396322>",
      image: "Sassy_Stance.gif",
    },
    cosmetics: [
      {
        name: "Mask",
        icon: "<:SassyMask:1272172108193075326>",
        images: [
          {
            description: "The Mask (Front)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/db/SoG2-2019_Cat_Mask.png",
          },
          {
            description: "The Mask (Side)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/f5/Sassy-Drifter-Mask-side.png",
          },
        ],
        isSP: true,
        price: "48 <:RegularCandle:1207793250895794226>",
      },
      {
        name: "Hair",
        icon: "<:SassyHair:1272172095169626163>",
        images: [
          {
            description: "The Hair (Front)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/01/Sassy-Drifter-Hair-front.png",
          },
          {
            description: "The Hair (Side)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/1/1c/Hair40-SeasonOfGratitude_2019.png",
          },
          {
            description: "The Hair (Back)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/e/e3/Sassy-Drifter-Hair-back.png",
          },
        ],
        price: "26 <:RegularCandle:1207793250895794226>",
        spPrice: "6 <:GratitudeSC:1272164085815054337>",
      },
    ],
  },
  saluting: {
    name: "Saluting Protector",
    image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/82/Gratitude-Spirit-Saluting-Protector.png",
    type: "Seasonal Spirit",
    realm: "Golden Wasteland",
    season: "Gratitude",
    ts: {
      eligible: true,
      returned: true,
      total: "1",
      dates: ["January 20, 2022 (#53)"],
    },
    tree: {
      by: "Clement",
      total: "145 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "saluting_Protector_Tree.png",
    },
    location: {
      by: "Clement",
      image: "Saluting_Performer_Location.png",
    },

    emote: {
      icon: "<:salutingProtector:1153511628596334723>",
      level: [
        {
          title: '"Acknowledge Emote" Level 1',
          image: "Saluting-Protector-acknowledge-emote-level-1.gif",
        },
        {
          title: '"Acknowledge Emote" Level 2',
          image: "Saluting-Protector-acknowledge-emote-level-2.gif",
        },
        {
          title: '"Acknowledge Emote" Level 3',
          image: "Saluting-Protector-acknowledge-emote-level-3.gif",
        },
        {
          title: '"Acknowledge Emote" Level 4',
          image: "Saluting-Protector-acknowledge-emote-level-4.gif",
        },
      ],
    },
    cosmetics: [
      {
        name: "Mask",
        icon: "<:SalutingMask:1272167717390254182>",
        images: [
          {
            description: "The Mask",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/e/eb/Mask17-Seasonal_SoG_2019.png",
          },
        ],
        isSP: true,
        price: "42 <:RegularCandle:1207793250895794226>",
      },
      {
        name: "Cape",
        icon: "<:SalutingCape:1272167679687528520>",
        images: [
          {
            description: "The Cape (Front)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/87/Gratitude_cape_white_front.png",
          },
          {
            description: "The Cape (Interior)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/3/36/Cape2-Season_of_Gratitude_2019.png",
          },
          {
            description: "The Cape (Back)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/9/92/Gratitude_cape_white_back.png",
          },
          {
            description: "The Cape (Exterior)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/69/Saluting-Protector-Cape-Exterior.png",
          },
        ],
        price: "75 <:RegularCandle:1207793250895794226>",
        spPrice: "54 <:GratitudeSC:1272164085815054337>",
      },
    ],
  },
  provoking: {
    name: "Provoking Performer",
    type: "Seasonal Spirit",
    realm: "Hidden Forest",
    image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/2/25/Gratitude-Spirit-Provoking-Performer.png",
    season: "Gratitude",
    ts: {
      eligible: true,
      returned: true,
      dates: ["March 30, 2023 (#84)", "October 01, 2020 (#19)", "March 12, 2020 (#4)"],
    },
    tree: {
      by: "Clement",
      total: "104 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Provoking_Performer_Tree.png.jpg",
    },
    location: {
      by: "Clement",
      image: "Provoking_Performer_Location.png",
    },

    emote: {
      icon: "<:provokingProtector:1153511606475554906>",
      level: [
        {
          title: '"Kabuki Emote" Level 1',
          image: "Provoking-Performer-kabuki-emote-level-1.gif",
        },
        {
          title: '"Kabuki Emote" Level 2',
          image: "Provoking-Performer-kabuki-emote-level-2.gif",
        },
        {
          title: '"Kabuki Emote" Level 3',
          image: "Provoking-Performer-kabuki-emote-level-3.gif",
        },
        {
          title: '"Kabuki Emote" Level 4',
          image: "Provoking-Performer-kabuki-emote-level-4.gif",
        },
      ],
    },
    cosmetics: [
      {
        name: "Mask",
        images: [
          {
            description: "THe Mask",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/4/42/Mask18-Seasonal_SoG_2019.png",
          },
        ],
        icon: "<:PerformerMask:1272165997440270386>",
        isSP: true,
        price: "42 <:RegularCandle:1207793250895794226>",
      },
      {
        name: "Hair",
        images: [
          {
            description: "The Hair",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/05/Hair41-SeasonOfGratitude_2019.png",
          },
        ],
        price: "34 <:RegularCandle:1207793250895794226>",
        spPrice: "36 <:GratitudeSC:1272164085815054337>",
        icon: "<:PerformerHair:1272165874937368626>",
      },
    ],
  },
  leaping: {
    name: "Leaping Dancer",
    type: "Seasonal Spirit",
    image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/ae/Gratitude-Spirit-Leaping-Dancer.png",
    realm: "Valley of Triumph",
    season: "Gratitude",
    ts: {
      eligible: true,
      returned: true,
      total: "3",
      dates: ["March 18, 2021 (#31)", "June 25, 2020 (#12)", "July 03, 2023 (SV#3)"],
    },
    tree: {
      by: "Jed",
      total: "107 :RegularCandle: 13  2:AC:",
      image: "leaping_dancer_tree.png",
    },
    location: {
      by: "Clement",
      image: "Leaping_Dancer_Location.png",
    },

    emote: {
      icon: "<:leepingDancer:1153511583532716032>",
      level: [
        {
          title: '"Kabuki Emote" Level 1',
          image: "Leaping-Dancer-leap-emote-level-1.gif",
        },
        {
          title: '"Kabuki Emote" Level 2',
          image: "Leaping-Dancer-leap-emote-level-2.gif",
        },
        {
          title: '"Kabuki Emote" Level 3',
          image: "Leaping-Dancer-leap-emote-level-3.gif",
        },
        {
          title: '"Kabuki Emote" Level 4',
          image: "Leaping-Dancer-leap-emote-level-4.gif",
        },
      ],
    },
    cosmetics: [
      {
        name: "Mask",
        images: [
          {
            description: "The Mask (Front)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/fd/Mask19-Seasonal_SoG_2019.png",
          },
          {
            description: "The Mask (Side)",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/f9/Leaping-Dancer-Mask-side.png",
          },
        ],
        price: "54 <:RegularCandle:1207793250895794226>",
        isSP: true,
        icon: "<:LeapingMask:1272162395581841408>",
      },
      {
        name: "Instrument",
        images: [
          {
            description: "The Instrument",
            image:
              "https://static.wikia.nocookie.net/sky-children-of-the-light/images/c/c9/Gratitude-Leaping-Dancer-Small-Bell.png",
          },
          {
            description: "Playing the Instrument",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/8f/Instrument-Small_Bell-Seasonal.png",
          },
          {
            description: "Instrument on a player's back",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/4/43/Gratitude_sm_bell_on_back.png",
          },
        ],
        price: "40 <:RegularCandle:1207793250895794226>",
        icon: "<:LeapingInstrument:1272162378565288037>",
        spPrice: "10 <:GratitudeSC:1272164085815054337>",
      },
    ],
  },
  shaman: {
    name: "Greeting Shaman",
    type: "Seasonal Spirit",
    image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/3/3e/Gratitude-Spirit-Greeting-Shaman.png",
    realm: "Vault of Knowledge",
    season: "Gratitude",
    ts: {
      eligible: true,
      returned: true,
      total: "3",
      dates: ["May 26, 2022 (#62)", "July 23, 2020 (#14)", "July 03, 2023 (SV#3)"],
    },
    tree: {
      by: "Clement",
      total: "112 :RegularCandle: 13 :RegularHeart: 2 :AC:",
      image: "Greeting_Shaman_Tree.png",
    },
    location: {
      by: "Clement",
      image: "Greeting_Shaman_Location.png",
    },

    emote: {
      icon: "<:greetingShaman:1153511559490965664>",
      level: [
        {
          title: '"Kung Fu Emote" Level 1',
          image: "Greeting-Shaman-kung-fu-emote-level-1.gif",
        },
        {
          title: '"Kung Fu Emote" Level 2',
          image: "Greeting-Shaman-kung-fu-emote-level-2.gif",
        },
        {
          title: '"Kung Fu Emote" Level 3',
          image: "Greeting-Shaman-kung-fu-emote-level-3.gif",
        },
        {
          title: '"Kung Fu Emote" Level 4',
          image: "Greeting-Shaman-kung-fu-emote-level-4.gif",
        },
      ],
    },
    cosmetics: [
      {
        name: "Mask",
        images: [
          {
            description: "The Mask",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/b/b7/Mask16-Seasonal_SoG_2019.png",
          },
        ],
        isSP: true,
        icon: "<:ShamanMask:1272141932579127357>",
        price: "54 <:RegularCandle:1207793250895794226>",
      },
      {
        name: "Instrument",
        images: [
          {
            description: "The Instrument",
            image:
              "https://static.wikia.nocookie.net/sky-children-of-the-light/images/1/18/Gratitude-Greeting-Shaman-Large_bell.png",
          },
          {
            description: "Playing the Instrument",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/4/4d/Instrument-Large_Bell-Seasonal.png",
          },
          {
            description: "Instrument on the Back",
            image: "https://static.wikia.nocookie.net/sky-children-of-the-light/images/2/2c/Gratitude_lg_bell_on_back.png",
          },
        ],
        icon: "<:ShamanInstrument:1272141953798242327>",
        price: "45 <:RegularCandle:1207793250895794226>",
        spPrice: "18 <:GratitudeSC:1272164085815054337>",
      },
    ],
  },
};

export default spiritsData;

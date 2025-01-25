const characterName = "Jasper";
const characterAncestry = "Ratfolk";
const characterBackground = "Acrobat";
const characterClass = "Rogue (Thief)";

const pathbuilderURL = "https://pathbuilder2e.com/launch.html?build=1005091";
const characterImageURL = "./images/jasper.webp";
const characterBackgroundImageURL = "./images/fantasy-background.png";

// Stat changes ordered from level 0 to 20.
const characterStats = [     
                     //0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
    {   strength:     [0, -1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1], 
        dexterity:    [0,  4,  0,  0,  0, .5,  0,  0,  0,  0, .5,  0,  0,  0,  0, .5,  0,  0,  0,  0, .5], 
        constitution: [0,  1,  0,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0], 
        intelligence: [0,  2,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1], 
        wisdom:       [0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  1], 
        charisma:     [0,  3,  0,  0,  0,  1,  0,  0,  0,  0, .5,  0,  0,  0,  0, .5,  0,  0,  0,  0,  0] },

    {   acrobatics:   [0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], 
        arcana:       [0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], 
        athletics:    [0,  1,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0], 
        crafting:     [0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], 
        deception:    [0,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0], 
        diplomacy:    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1], 
        intimidation: [0,  1,  0,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0], 
        medicine:     [0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        nature:       [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], 
        occultism:    [0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], 
        performance:  [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0],
        religion:     [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
        society:      [0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], 
        stealth:      [0,  0,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0],
        survival:     [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0],
        thievery:     [0,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0] },
];

/*
{ name: "",
    id: "",
    type: "", 
    action: "",
    level: 0,
    level_acquired: 0,
    manually_chosen: false, 
    description: "",
    icon_url: "",
    source_url: "" },
*/
const characterFeats = [
    // LEVEL 0
    { name: "Aid",
        id: "aid", 
        type: "basic",
        action: "reaction", 
        level: 0, 
        level_acquired: 0,
        manually_chosen: false, 
        description: "Before you can use Aid, spend an action preparing to help an ally by stating how you'll do it. Once the condition is met, roll relevant check. If critical success, grant +2 to ally's check (+3 if you are a master at check, +4 if legendary). If success, grant +1 to ally's check. If critical failure, grant -1 to ally's check.", 
        icon_url: "./images/feat-icons/aid.webp",
        source_url: "https://2e.aonprd.com/Actions.aspx?ID=2292&Redirected=1" },
    
    { name: "Recall Knowledge",
        id: "recall-knowledge", 
        type: "basic",
        action: "one", 
        level: 0, 
        level_acquired: 0, 
        manually_chosen: false, 
        description: "Ask a question and the DM will choose a skill check. If critical success, the GM answers truthfully and provides additional information. If success, the GM answers truthfully. On critical failure, the GM answers falsely or gives no answer.", 
        icon_url: "./images/feat-icons/recall-knowledge.webp",
        source_url: "https://2e.aonprd.com/Actions.aspx?ID=2367" },
    
    { name: "Step",
        id: "step", 
        type: "basic",
        action: "one", 
        level: 0, 
        level_acquired: 0, 
        manually_chosen: false, 
        description: "Move 5ft without triggering reactions.", 
        icon_url: "./images/feat-icons/step.webp",
        source_url: "https://2e.aonprd.com/Actions.aspx?ID=2304" },

    { name: "Take Cover",
        id: "take-cover", 
        type: "basic",
        action: "one", 
        level: 0, 
        level_acquired: 0, 
        manually_chosen: false, 
        description: "Press yourself against a wall or obstacle. Standard cover turns into greater cover (+4 AC). No cover turns into standard cover (+2 AC).", 
        icon_url: "./images/feat-icons/take-cover.webp",
        source_url: "https://2e.aonprd.com/Actions.aspx?ID=2307" },

    { name: "Feint",
        id: "feint", 
        type: "basic",
        action: "one", 
        level: 0, 
        level_acquired: 0, 
        manually_chosen: false, 
        description: "If you are within melee reach of a target, attempt a Deception check against your target's Perception DC. If critical success, target is off-guard to your melee attacks until the end of your next turn. If success, target is off-guard to your next melee attack before the end of your turn. If critical failure, you are off-guard against the target's melee attacks until the end of your next turn.", 
        icon_url: "./images/feat-icons/feint.webp",
        source_url: "https://2e.aonprd.com/Actions.aspx?ID=2390" },

    { name: "Grapple",
        id: "grapple", 
        type: "basic",
        action: "one", 
        level: 0, 
        level_acquired: 0, 
        manually_chosen: false, 
        description: "With one hand free and target is no more than 1 size larger than you, attempt an Athletics check against the target's Fortitude DC. On critical success, target is restrained until the end of your turn unless your move. On success, target is grabbed until the end of your turn unless you move. On failure, you fail to grab your target and all grabbing conditions end. On critical failure, the target can grab you or force you to go prone.", 
        icon_url: "./images/feat-icons/grapple.png",
        source_url: "https://2e.aonprd.com/Traits.aspx?ID=619" },

    { name: "Reposition", 
        id: "reposition",
        type: "basic",
        action: "one", 
        level: 0, 
        level_acquired: 0, 
        manually_chosen: false, 
        description: "If you have one hand free, attempt an Athletics check against the target's Fortitude DC. On critical success, move the target up to 10ft within reach. On success, move the target up to 5ft within reach. On critical failure, the target can move you up to 5ft.", 
        icon_url: "./images/feat-icons/reposition.webp",
        source_url: "https://2e.aonprd.com/Actions.aspx?ID=2379" },

    { name: "Shove", 
        id: "shove",
        type: "basic",
        action: "one", 
        level: 0, 
        level_acquired: 0, 
        manually_chosen: false, 
        description: "If you have one hand free and target is no more than 1 size larger than you, attempt an Athletics check against your target's Fortitude DC. On critical success, push target up to 10ft away from you and you can Stride after it. On success, push target up to 5ft and you can Stride after it. On critical failure, you fall prone.", 
        icon_url: "./images/feat-icons/shove.webp",
        source_url: "https://2e.aonprd.com/Actions.aspx?ID=2380" },

    { name: "Disarm", 
        id: "disarm",
        type: "basic",
        action: "one", 
        level: 0, 
        level_acquired: 0, 
        manually_chosen: false, 
        description: "With one hand free, attempt an Athletics check against a target's Reflex DC. On critical success, the target's weapon falls to the ground. On success, add +2 bonus to future Disarms and the target takes -2 penalty to attacks with the item. The target can change their grip to reset bonuses and penalties. On critical failure, you become off-guard.", 
        icon_url: "./images/feat-icons/disarm.webp",
        source_url: "https://2e.aonprd.com/Traits.aspx?ID=577" },

    { name: "Trip", 
        id: "trip",
        type: "basic",
        action: "one", 
        level: 0, 
        level_acquired: 0, 
        manually_chosen: false, 
        description: "If you have one hand free and the target is no more than 1 size larger than you, attempt an Athletics check against the target's Reflex DC. If critical success, the target falls prone and takes 1d6 bludgeoning damage. If success, target falls prone. If critical failure, you fall prone.", 
        icon_url: "./images/feat-icons/trip.gif",
        source_url: "https://2e.aonprd.com/Actions.aspx?ID=2382" },

    { name: "Tumble Through", 
        id: "tumble-through",
        type: "basic",
        action: "one", 
        level: 0, 
        level_acquired: 0, 
        manually_chosen: false, 
        description: "Attempt to move through the space of one enemy by attempting an Acrobatics Check against the enemy's Reflex DC. If success, you move through the enemy's space, treating the squares as difficult terrain.", 
        icon_url: "./images/feat-icons/tumble-through.webp",
        source_url: "https://2e.aonprd.com/Actions.aspx?ID=2370" },

    { name: "Demoralize", 
        id: "demoralize",
        type: "basic",
        action: "one", 
        level: 0, 
        level_acquired: 0, 
        manually_chosen: false, 
        description: "Attempt an Intimidation check against an enemy's Will DC. -4 penalty if there's a language barrier. On critical success, target becomes frightened 2. On success, target becomes frightened 1. Target is immune to your Demoralize for 10min.", 
        icon_url: "./images/feat-icons/demoralize.png",
        source_url: "https://2e.aonprd.com/Actions.aspx?ID=2395" },


        



    // LEVEL 1
    { name: "Nimble Dodge",
        id: "nimble-dodge",
        type: "class",
        action: "reaction",
        level: 1,
        level_acquired: 1,
        manually_chosen: true, 
        description: "When you are attacked and can see the target, you gain +2 AC.",
        icon_url: "./images/feat-icons/nimble-dodge.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=4916" },

    { name: "Sneak Attack",
        id: "sneak-attack",
        type: "class", 
        action: "passive",
        level: 1,
        level_acquired: 1,
        manually_chosen: false, 
        description: "Deal an extra 1d6 precision damage to off-guard enemies (increases # of dice at level 5, 11, and 17).",
        icon_url: "./images/feat-icons/sneak-attack.webp",
        source_url: "https://2e.aonprd.com/Classes.aspx?ID=37" },

    { name: "Surprise Attack",
        id: "surprise-attack",
        type: "class", 
        action: "passive",
        level: 1,
        level_acquired: 1,
        manually_chosen: false, 
        description: "If rolled Stealth or Deception for initiative, all enemies that move after you are off-guard to you during the first round.",
        icon_url: "./images/feat-icons/surprise-attack.webp",
        source_url: "https://2e.aonprd.com/Classes.aspx?ID=37" },
    
    { name: "Deep Rat",
        id: "deep-rat",
        type: "heritage", 
        action: "passive",
        level: 1,
        level_acquired: 1,
        manually_chosen: true, 
        description: "Gain darkvision.",
        icon_url: "./images/feat-icons/deep-rat.png",
        source_url: "https://2e.aonprd.com/Heritages.aspx?ID=347" },

    { name: "Tinkering Fingers",
        id: "tinkering-fingers",
        type: "ancestry", 
        action: "passive",
        level: 1,
        level_acquired: 1,
        manually_chosen: true, 
        description: "Repair items without penalties. +1 bonus when using a repair toolkit.",
        icon_url: "./images/feat-icons/tinkering-fingers.webp",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5656" },

    { name: "Steady Balance",
        id: "steady-balance",
        type: "background", 
        action: "passive",
        level: 1,
        level_acquired: 1,
        manually_chosen: false, 
        description: "When balancing, successes = critical successes. Prevents being off-guard from narrow and uneven surfaces.",
        icon_url: "./images/feat-icons/steady-balance.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5217" },

    { name: "Circus Lore",
        id: "circus-lore",
        type: "background", 
        action: "passive",
        level: 1,
        level_acquired: 1,
        manually_chosen: false, 
        description: "You are trained in Circus Lore.",
        icon_url: "./images/feat-icons/circus-lore.png",
        source_url: "https://2e.aonprd.com/Skills.aspx?ID=41" },

    { name: "Assurance (Athletics)",
        id: "assurance-athletics",
        type: "skill", 
        action: "passive",
        level: 1,
        level_acquired: 1,
        manually_chosen: true, 
        description: "Instead of rolling dice, apply 10 + your proficiency bonus to an Athletics skill check.",
        icon_url: "./images/feat-icons/assurance.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5121" },






    // LEVEL 2
    { name: "Underhanded Assault",
        id: "underhanded-assault",
        type: "class", 
        action: "two",
        level: 2,
        level_acquired: 2,
        manually_chosen: true, 
        description: "Sneak to an enemy adjacent to an ally. Roll stealth check. If success, melee Strike that enemy.",
        icon_url: "./images/feat-icons/underhanded-assault.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=4929" },

    { name: "Acrobat Dedication",
        id: "acrobat-dedication",
        type: "archetype", 
        action: "passive",
        level: 2,
        level_acquired: 2,
        manually_chosen: true, 
        description: "Gain the Acrobat archetype. If Tumble Through critically succeeds, ignore difficult terrain.",
        icon_url: "./images/feat-icons/acrobat-dedication.png",
        source_url: "https://2e.aonprd.com/Archetypes.aspx?ID=236" },
    
    { name: "Pickpocket",
        id: "pickpocket",
        type: "skill", 
        action: "passive",
        level: 1,
        level_acquired: 2,
        manually_chosen: true, 
        description: "Steal items without a -5 penalty. If master in Thievery, you can Steal in combat (2 actions, -5 penalty).",
        icon_url: "./images/feat-icons/steal.webp",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5187" },





    /*
    // LEVEL 3
    { name: "",
        id: "",
        type: "", 
        action: "",
        level: 0,
        level_acquired: 0,
        manually_chosen: false, 
        description: "",
        icon_url: "",
        source_url: "" },

    // LEVEL 4
    { name: "",
        id: "",
        type: "", 
        action: "",
        level: 0,
        level_acquired: 0,
        manually_chosen: false, 
        description: "",
        icon_url: "",
        source_url: "" },

    // LEVEL 5
    { name: "",
        id: "",
        type: "", 
        action: "",
        level: 0,
        level_acquired: 0,
        manually_chosen: false, 
        description: "",
        icon_url: "",
        source_url: "" },

    // LEVEL 6
    { name: "",
        id: "",
        type: "", 
        action: "",
        level: 0,
        level_acquired: 0,
        manually_chosen: false, 
        description: "",
        icon_url: "",
        source_url: "" },

    // LEVEL 7
    { name: "",
        id: "",
        type: "", 
        action: "",
        level: 0,
        level_acquired: 0,
        manually_chosen: false, 
        description: "",
        icon_url: "",
        source_url: "" },

    // LEVEL 8
    { name: "",
        id: "",
        type: "", 
        action: "",
        level: 0,
        level_acquired: 0,
        manually_chosen: false, 
        description: "",
        icon_url: "",
        source_url: "" },

    // LEVEL 9
    { name: "",
        id: "",
        type: "", 
        action: "",
        level: 0,
        level_acquired: 0,
        manually_chosen: false, 
        description: "",
        icon_url: "",
        source_url: "" },

    // LEVEL 10
    { name: "",
        id: "",
        type: "", 
        action: "",
        level: 0,
        level_acquired: 0,
        manually_chosen: false, 
        description: "",
        icon_url: "",
        source_url: "" },

    // LEVEL 11
    { name: "",
        id: "",
        type: "", 
        action: "",
        level: 0,
        level_acquired: 0,
        manually_chosen: false, 
        description: "",
        icon_url: "",
        source_url: "" },

    // LEVEL 12
    { name: "",
        id: "",
        type: "", 
        action: "",
        level: 0,
        level_acquired: 0,
        manually_chosen: false, 
        description: "",
        icon_url: "",
        source_url: "" },

    // LEVEL 13
    { name: "",
        id: "",
        type: "", 
        action: "",
        level: 0,
        level_acquired: 0,
        manually_chosen: false, 
        description: "",
        icon_url: "",
        source_url: "" },

    // LEVEL 14
    { name: "",
        id: "",
        type: "", 
        action: "",
        level: 0,
        level_acquired: 0,
        manually_chosen: false, 
        description: "",
        icon_url: "",
        source_url: "" },

    // LEVEL 15
    { name: "",
        id: "",
        type: "", 
        action: "",
        level: 0,
        level_acquired: 0,
        manually_chosen: false, 
        description: "",
        icon_url: "",
        source_url: "" },

    // LEVEL 16
    { name: "",
        id: "",
        type: "",
        action: "", 
        level: 0,
        level_acquired: 0,
        manually_chosen: false, 
        description: "",
        icon_url: "",
        source_url: "" },

    // LEVEL 17
    { name: "",
        id: "",
        type: "", 
        action: "",
        level: 0,
        level_acquired: 0,
        manually_chosen: false, 
        description: "",
        icon_url: "",
        source_url: "" },

    // LEVEL 18
    { name: "",
        id: "",
        type: "", 
        action: "",
        level: 0,
        level_acquired: 0,
        manually_chosen: false, 
        description: "",
        icon_url: "",
        source_url: "" },

    // LEVEL 19
    { name: "",
        id: "",
        type: "", 
        action: "",
        level: 0,
        level_acquired: 0,
        manually_chosen: false, 
        description: "",
        icon_url: "",
        source_url: "" },

    // LEVEL 20
    { name: "",
        id: "",
        type: "", 
        action: "",
        level: 0,
        level_acquired: 0,
        manually_chosen: false, 
        description: "",
        icon_url: "",
        source_url: "" },
    */
];




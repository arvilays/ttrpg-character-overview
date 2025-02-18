const characterName = "Jasper";
const characterAncestry = "Ratfolk";
const characterBackground = "Acrobat";
const characterClass = "Rogue (Thief)";

const pathbuilderURL = "https://pathbuilder2e.com/launch.html?build=1025625";
const characterImageURL = "./images/jasper.webp";

const headerBackgroundImageURL = "./images/fantasy-background.png";



// Stat changes ordered from level 0 to 20, followed by stat icon image URL.
// Icons are expected to be black SVG files.
const characterStats = [     
                      //0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
    {   strength:     [[0, -1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
                      "./images/ability-icons/strength.svg"], 
        dexterity:    [[0,  4,  0,  0,  0, .5,  0,  0,  0,  0, .5,  0,  0,  0,  0, .5,  0,  0,  0,  0, .5], 
                      "./images/ability-icons/dexterity.svg"],
        constitution: [[0,  1,  0,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0],
                      "./images/ability-icons/constitution.svg"],
        intelligence: [[0,  2,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
                      "./images/ability-icons/intelligence.svg"],
        wisdom:       [[0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  1],
                      "./images/ability-icons/wisdom.svg"],
        charisma:     [[0,  3,  0,  0,  0,  1,  0,  0,  0,  0, .5,  0,  0,  0,  0, .5,  0,  0,  0,  0,  0],
                      "./images/ability-icons/charisma.svg"] },

    {   acrobatics:   [[0,  1,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0],
                      "./images/skill-icons/acrobatics.svg"], 
        arcana:       [[0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], 
                      "./images/skill-icons/arcana.svg"],
        athletics:    [[0,  1,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0], 
                      "./images/skill-icons/athletics.svg"],
        crafting:     [[0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], 
                      "./images/skill-icons/crafting.svg"],
        deception:    [[0,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0], 
                      "./images/skill-icons/deception.svg"],
        diplomacy:    [[0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1],
                      "./images/skill-icons/diplomacy.svg"],
        intimidation: [[0,  1,  0,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0], 
                      "./images/skill-icons/intimidation.svg"],
        medicine:     [[0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                      "./images/skill-icons/medicine.svg"],
        nature:       [[0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], 
                      "./images/skill-icons/nature.svg"],
        occultism:    [[0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0], 
                      "./images/skill-icons/occultism.svg"],
        performance:  [[0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0],
                      "./images/skill-icons/performance.svg"],
        religion:     [[0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
                      "./images/skill-icons/religion.svg"],
        society:      [[0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                      "./images/skill-icons/society.svg"],
        stealth:      [[0,  0,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0],
                      "./images/skill-icons/stealth.svg"],
        survival:     [[0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0],
                      "./images/skill-icons/survival.svg"],
        thievery:     [[0,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0], 
                      "./images/skill-icons/thievery.svg"] },
];



/* 
EXAMPLE TEMPLATE:

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

// SUPPORTED TYPES: basic, skill, general, class, ancestry, archetype, background
// SUPPORTED ACTIONS: passive, reaction, free, one, two, three, action-dnd, bonus-dnd, reaction-dnd
// Displays on screen from bottom to top.
const characterFeats = [
    // LEVEL 0
    { name: "Aid",
        id: "aid", 
        type: "basic",
        action: "reaction", 
        level: 0, 
        level_acquired: 0,
        manually_chosen: false, 
        description: "Before you can use Aid, spend an action preparing to help an ally by stating how you'll do it. Once the condition is met, grant a bonus to your ally's checks.", 
        icon_url: "./images/feat-icons/aid.webp",
        source_url: "https://2e.aonprd.com/Actions.aspx?ID=2292&Redirected=1" },
    
    { name: "Recall Knowledge",
        id: "recall-knowledge", 
        type: "basic",
        action: "one", 
        level: 0, 
        level_acquired: 0, 
        manually_chosen: false, 
        description: "Ask a question and the DM will choose a skill check. The DM will answer truthfully depending on success.", 
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
        description: "Inflicts off-guard on target. Targets Perception DC.", 
        icon_url: "./images/feat-icons/feint.webp",
        source_url: "https://2e.aonprd.com/Actions.aspx?ID=2390" },

    { name: "Grapple",
        id: "grapple", 
        type: "basic",
        action: "one", 
        level: 0, 
        level_acquired: 0, 
        manually_chosen: false, 
        description: "Grab a target. If critical success, restrain them. Targets Fortitude DC.", 
        icon_url: "./images/feat-icons/grapple.png",
        source_url: "https://2e.aonprd.com/Traits.aspx?ID=619" },

    { name: "Reposition", 
        id: "reposition",
        type: "basic",
        action: "one", 
        level: 0, 
        level_acquired: 0, 
        manually_chosen: false, 
        description: "Move a target up to 5ft within reach. 10ft if critical success. Targets Fortitude DC.", 
        icon_url: "./images/feat-icons/reposition.webp",
        source_url: "https://2e.aonprd.com/Actions.aspx?ID=2379" },

    { name: "Shove", 
        id: "shove",
        type: "basic",
        action: "one", 
        level: 0, 
        level_acquired: 0, 
        manually_chosen: false, 
        description: "Push an enemy up to 5ft away from you. 10ft if critical success. You can also Stride after them. Targets Fortitude DC.", 
        icon_url: "./images/feat-icons/shove.webp",
        source_url: "https://2e.aonprd.com/Actions.aspx?ID=2380" },

    { name: "Disarm", 
        id: "disarm",
        type: "basic",
        action: "one", 
        level: 0, 
        level_acquired: 0, 
        manually_chosen: false, 
        description: "Cause the enemy to drop their weapon. Success increases with each attempt. Targets Reflex DC.", 
        icon_url: "./images/feat-icons/disarm.webp",
        source_url: "https://2e.aonprd.com/Traits.aspx?ID=577" },

    { name: "Trip", 
        id: "trip",
        type: "basic",
        action: "one", 
        level: 0, 
        level_acquired: 0, 
        manually_chosen: false, 
        description: "Cause the enemy to fall prone. Targets Reflex DC.", 
        icon_url: "./images/feat-icons/trip.gif",
        source_url: "https://2e.aonprd.com/Actions.aspx?ID=2382" },

    { name: "Tumble Through", 
        id: "tumble-through",
        type: "basic",
        action: "one", 
        level: 0, 
        level_acquired: 0, 
        manually_chosen: false, 
        description: "Cause the enemy to drop their weapon. Success increases on future attempts unless the enemy adjusts their grip. Targets Reflex DC.",
        icon_url: "./images/feat-icons/disarm.webp",
        source_url: "https://2e.aonprd.com/Actions.aspx?ID=2383"
    },

    { name: "Demoralize", 
        id: "demoralize",
        type: "basic",
        action: "one", 
        level: 0, 
        level_acquired: 0, 
        manually_chosen: false, 
        description: "Inflicts frightened on enemy. Targets Will DC.", 
        icon_url: "./images/feat-icons/demoralize.png",
        source_url: "https://2e.aonprd.com/Actions.aspx?ID=2395" },


        



    // LEVEL 1
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

    { name: "Deep Rat",
        id: "deep-rat",
        type: "ancestry", 
        action: "passive",
        level: 1,
        level_acquired: 1,
        manually_chosen: true, 
        description: "Gain darkvision.",
        icon_url: "./images/feat-icons/deep-rat.png",
        source_url: "https://2e.aonprd.com/Heritages.aspx?ID=347" }, 

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






    // LEVEL 2
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

    { name: "Acrobat Dedication",
            id: "acrobat-dedication",
            type: "archetype", 
            action: "passive",
            level: 2,
            level_acquired: 2,
            manually_chosen: true, 
            description: "Gain the Acrobat archetype. If Tumble Through critically succeeds, ignore difficult terrain. You become an expert in Acrobatics. At level 7, you become a master. At level 15, you become legendary.",
            icon_url: "./images/feat-icons/acrobat-dedication.png",
            source_url: "https://2e.aonprd.com/Archetypes.aspx?ID=236" },

    { name: "Quick Draw",
            id: "quick-draw",
            type: "class", 
            action: "one",
            level: 2,
            level_acquired: 2,
            manually_chosen: true, 
            description: "Draw a weapon, then Strike with that weapon.",
            icon_url: "./images/feat-icons/quick-draw.gif",
            source_url: "https://2e.aonprd.com/Feats.aspx?ID=4869" },

    
    
    


    // LEVEL 3
    { name: "Deny Advantage",
        id: "deny-advantage",
        type: "class", 
        action: "passive",
        level: 3,
        level_acquired: 3,
        manually_chosen: false, 
        description: "Prevents you from being off-guard to hidden, undetected, or flanking creatures of your level or lower (as well as surprise attacks from them).",
        icon_url: "./images/feat-icons/deny-advantage.png",
        source_url: "https://2e.aonprd.com/Classes.aspx?ID=37" },

    { name: "Fleet",
        id: "fleet",
        type: "general", 
        action: "passive",
        level: 1,
        level_acquired: 3,
        manually_chosen: true, 
        description: "+5ft to your speed.",
        icon_url: "./images/feat-icons/fleet.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5150" },    

    { name: "Battle Medicine",
        id: "battle-medicine",
        type: "skill", 
        action: "one",
        level: 1,
        level_acquired: 3,
        manually_chosen: true, 
        description: "Restore any target's HP, even in combat. Target is immune to your Battle Medicine for 1 day. You must hold/wear a healer's toolkit.",
        icon_url: "./images/feat-icons/battle-medicine.webp",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5125" },

    




    // LEVEL 4
    { name: "Godless Healing",
        id: "godless-healing",
        type: "skill", 
        action: "passive",
        level: 2,
        level_acquired: 4,
        manually_chosen: true, 
        description: "Recover an additional +5HP when someone uses Treat Wounds or Battle Medicine on you. Your Battle Medicine immunity is now 1 hour.",
        icon_url: "./images/feat-icons/godless-healing.webp",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=869" },

    { name: "Quick Squeeze",
        id: "quick-squeeze",
        type: "archetype", 
        action: "passive",
        level: 1,
        level_acquired: 4,
        manually_chosen: false, 
        description: "Squeeze 5ft per round, 10ft on critical success. If master in Acrobatics, squeeze at full speed.",
        icon_url: "./images/feat-icons/quick-squeeze.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5199" },

    { name: "Contortionist",
        id: "contortionist",
        type: "archetype", 
        action: "passive",
        level: 4,
        level_acquired: 4,
        manually_chosen: true, 
        description: "Gain Quick Squeeze. When you successfully escape from an enemy, that enemy is off-guard to your next attack before the end of your next turn.",
        icon_url: "./images/feat-icons/contortionist.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=6241" },  

    { name: "Dread Striker",
        id: "dread-striker",
        type: "class", 
        action: "passive",
        level: 4,
        level_acquired: 4,
        manually_chosen: true, 
        description: "Frightened creatures are off-guard to your attacks.",
        icon_url: "./images/feat-icons/dread-striker.webp",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=4930" },

   




    // LEVEL 5
    { name: "Weapon Tricks",
        id: "weapon-tricks",
        type: "class", 
        action: "passive",
        level: 5,
        level_acquired: 5,
        manually_chosen: false, 
        description: "Gain expert proficiency in simple weapons, martial weapons, and unarmed attacks. Critical attacks against off-guard enemies using these weapon types will trigger critical specialization effects for those weapons.",
        icon_url: "./images/feat-icons/weapon-tricks.png",
        source_url: "https://2e.aonprd.com/Classes.aspx?ID=37" },

    { name: "Intimidating Glare",
        id: "intimidating-glare",
        type: "skill", 
        action: "passive",
        level: 1,
        level_acquired: 5,
        manually_chosen: true, 
        description: "You can now intimidate enemies visually with no language penalties.",
        icon_url: "./images/feat-icons/intimidating-glare.webp",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5162" },  

    { name: "Ratspeak",
        id: "ratspeak",
        type: "ancestry", 
        action: "passive",
        level: 1,
        level_acquired: 5,
        manually_chosen: true, 
        description: "You can use Diplomacy to speak to rodents.",
        icon_url: "./images/feat-icons/ratspeak.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5655" },






    // LEVEL 6
    { name: "Terrifying Resistance",
        id: "terrifying-resistance",
        type: "skill", 
        action: "passive",
        level: 2,
        level_acquired: 6,
        manually_chosen: true, 
        description: "After demoralizing an enemy, gain +1 circumstance bonus to saving throws against that enemy's spells for 1 day.",
        icon_url: "./images/feat-icons/terrifying-resistance.webp",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=6509" },

    { name: "Dodge Away",
        id: "dodge-away",
        type: "archetype", 
        action: "reaction",
        level: 6,
        level_acquired: 6,
        manually_chosen: true, 
        description: "If you are targeted by a melee attack and not off-guard, +1 AC. If the attack misses, Step (if master in Acrobatics, you can move 10ft instead of 5ft).",
        icon_url: "./images/feat-icons/dodge-away.webp",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=6242" },

    { name: "Skirmish Strike",
        id: "skirmish-strike",
        type: "class", 
        action: "one",
        level: 6,
        level_acquired: 6,
        manually_chosen: true, 
        description: "Step and Strike, in any order. This move can only be used once per round.",
        icon_url: "./images/feat-icons/skirmish-strike.webp",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=4880" },

    




    // LEVEL 7
    { name: "Weapon Specialization",
        id: "",
        type: "class", 
        action: "passive",
        level: 7,
        level_acquired: 7,
        manually_chosen: false, 
        description: "+2 damage with weapons and unarmed attacks in which you're an expert. +3 if master. +4 if legendary.",
        icon_url: "./images/feat-icons/weapon-specialization.webp",
        source_url: "https://2e.aonprd.com/Classes.aspx?ID=37" },

    { name: "Perception Mastery",
        id: "",
        type: "class", 
        action: "passive",
        level: 7,
        level_acquired: 7,
        manually_chosen: false, 
        description: "Your Perception proficiency rank increases to master.",
        icon_url: "./images/feat-icons/perception-mastery.webp",
        source_url: "https://2e.aonprd.com/Classes.aspx?ID=37" }, 

    { name: "Evasive Reflexes",
        id: "evasive-reflexes",
        type: "class", 
        action: "passive",
        level: 7,
        level_acquired: 7,
        manually_chosen: false, 
        description: "Your Reflex save proficiency increases to master. Successes on Reflex saves turn into critical successes.",
        icon_url: "./images/feat-icons/evasive-reflexes.webp",
        source_url: "https://2e.aonprd.com/Classes.aspx?ID=37" },

    { name: "Toughness",
        id: "toughness",
        type: "general", 
        action: "passive",
        level: 1,
        level_acquired: 7,
        manually_chosen: true, 
        description: "Increase your max HP by your level. -1 DC to recovery checks.",
        icon_url: "./images/feat-icons/toughness.webp",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5227" }, 

    { name: "Kip Up",
        id: "kip-up",
        type: "skill", 
        action: "free",
        level: 7,
        level_acquired: 7,
        manually_chosen: true, 
        description: "Stand up without triggering reactions.",
        icon_url: "./images/feat-icons/kip-up.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5165" },

   




    // LEVEL 8
    { name: "Tumbling Teamwork",
        id: "tumbling-teamwork",
        type: "skill", 
        action: "passive",
        level: 2,
        level_acquired: 8,
        manually_chosen: true, 
        description: "After a successful Tumble Through on an enemy, an ally adjacent to the enemy can Step around them.",
        icon_url: "./images/feat-icons/tumbling-teamwork.webp",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=6512" },

    { name: "Tumbling Strike",
        id: "tumbling-strike",
        type: "archetype", 
        action: "one",
        level: 8,
        level_acquired: 8,
        manually_chosen: true, 
        description: "Tumble Through an enemy. If critical success, the enemy is off-guard to you. Strike the enemy.",
        icon_url: "./images/feat-icons/tumbling-strike.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=6244" },  

    { name: "Opportune Backstab",
        id: "opportune-backstab",
        type: "class", 
        action: "reaction",
        level: 8,
        level_acquired: 8,
        manually_chosen: true, 
        description: "When an ally melee attacks an enemy and you are also in melee range, you can also Strike that enemy.",
        icon_url: "./images/feat-icons/opportune-backstab.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=4954" },

    




    // LEVEL 9
    { name: "Rogue Resilience",
        id: "rogue-resilience",
        type: "class", 
        action: "passive",
        level: 9,
        level_acquired: 9,
        manually_chosen: false, 
        description: "Your Fortitude save proficiency increases to expert. Successes on Fortitude saves turn into critical successes.",
        icon_url: "./images/feat-icons/rogue-resilience.webp",
        source_url: "https://2e.aonprd.com/Classes.aspx?ID=37" },

    { name: "Cat Fall",
        id: "cat-fall",
        type: "skill", 
        action: "passive",
        level: 1,
        level_acquired: 9,
        manually_chosen: true, 
        description: "You treat falls as 10ft shorter. 25ft if expert in Acrobatics. 50ft if master. No fall damage if legendary.",
        icon_url: "./images/feat-icons/cat-fall.gif",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5131" }, 

    { name: "Debilitating Strike",
        id: "debilitating-strike",
        type: "class", 
        action: "free",
        level: 9,
        level_acquired: 9,
        manually_chosen: false, 
        description: "If your Strike hits an off-guard enemy and deals damage, inflict either: -10ft speed or enfeebled 1. Lasts until the end of your next turn.",
        icon_url: "./images/feat-icons/debilitating-strike.webp",
        source_url: "https://2e.aonprd.com/Classes.aspx?ID=37" }, 

    { name: "Rat Form",
        id: "rat-form",
        type: "ancestry", 
        action: "one",
        level: 9,
        level_acquired: 9,
        manually_chosen: true, 
        description: "Turn into a tiny rat.",
        icon_url: "./images/feat-icons/rat-form.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5666" },
    
    

    


    // LEVEL 10
    { name: "Titan Wrestler",
        id: "titan-wrestler",
        type: "skill", 
        action: "passive",
        level: 1,
        level_acquired: 10,
        manually_chosen: true, 
        description: "You can Disarm, Grapple, Shove, or Trip enemies up to 2 sizes larger than you. 3, if legendary in Athletics.",
        icon_url: "./images/feat-icons/titan-wrestler.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5226" },
    
    { name: "Precise Debilitations",
        id: "precise-debilitations",
        type: "class", 
        action: "passive",
        level: 10,
        level_acquired: 10,
        manually_chosen: true, 
        description: "Adds two additional choices to Debilitating Strike: +2d6 precision damage and inflict off-guard.",
        icon_url: "./images/feat-icons/precise-debilitations.webp",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=4963" },

    { name: "Tumbling Opportunist",
        id: "tumbling-opportunist",
        type: "archetype", 
        action: "free",
        level: 10,
        level_acquired: 10,
        manually_chosen: true, 
        description: "After a successful Tumble Through or Tumbling Strike, attempt to Trip the enemy. You can use Acrobatics for this check.",
        icon_url: "./images/feat-icons/tumbling-opportunist.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=6245" },

    
    



    // LEVEL 11
    { name: "Rogue Expertise",
        id: "rogue-expertise",
        type: "class", 
        action: "passive",
        level: 11,
        level_acquired: 11,
        manually_chosen: false, 
        description: "Your rogue class DC increases to expert.",
        icon_url: "./images/feat-icons/rogue-expertise.webp",
        source_url: "https://2e.aonprd.com/Classes.aspx?ID=37" },

    { name: "Quick Jump",
        id: "quick-jump",
        type: "skill", 
        action: "passive",
        level: 1,
        level_acquired: 11,
        manually_chosen: true, 
        description: "You can High Jump and Long Jump as a single action without using Stride first.",
        icon_url: "./images/feat-icons/quick-jump.webp",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5196" },

    { name: "Incredible Initiative",
        id: "incredible-initative",
        type: "general", 
        action: "passive",
        level: 1,
        level_acquired: 11,
        manually_chosen: true, 
        description: "+2 circumstance bonus to initiative rolls.",
        icon_url: "./images/feat-icons/incredible-initiative.webp",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5160" },

    

    

        
    // LEVEL 12
    { name: "Hefty Hauler",
        id: "hefty-hauler",
        type: "skill", 
        action: "passive",
        level: 1,
        level_acquired: 12,
        manually_chosen: true, 
        description: "+2 maximum and encumbered Bulk limits.",
        icon_url: "./images/feat-icons/hefty-hauler.webp",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5156" },

    { name: "Nimble Roll",
        id: "nimble-roll",
        type: "class", 
        action: "passive",
        level: 8,
        level_acquired: 12,
        manually_chosen: true, 
        description: "You can now use Nimble Dodge before a Reflex save.  After using Nimble Dodge, if an attack on you misses or you succeed a saving throw, Stride up to 10 feet.",
        icon_url: "./images/feat-icons/nimble-roll.webp",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=4953" },

    { name: "Show-Off",
        id: "show-off",
        type: "archetype", 
        action: "free",
        level: 8,
        level_acquired: 12,
        manually_chosen: true, 
        description: "When you succeed a challenging Acrobatics or Athletics check, you can choose to reroll it. If successful, gain temporary HP equal to your level for 1 minute. This move can only be used once per minute.",
        icon_url: "./images/feat-icons/show-off.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=4144" },

    

    
        

    // LEVEL 13
    { name: "Perception Legend",
        id: "perception-legend",
        type: "class", 
        action: "passive",
        level: 13,
        level_acquired: 13,
        manually_chosen: false, 
        description: "Your Perception proficiency rank increases to legendary.",
        icon_url: "./images/feat-icons/perception-legend.webp",
        source_url: "https://2e.aonprd.com/Classes.aspx?ID=37" },

    { name: "Master Tricks",
        id: "master-tricks",
        type: "class", 
        action: "passive",
        level: 13,
        level_acquired: 13,
        manually_chosen: false, 
        description: "Gain master proficiency in simple weapons, martial weapons, and unarmed attacks. ",
        icon_url: "./images/feat-icons/master-tricks.png",
        source_url: "https://2e.aonprd.com/Classes.aspx?ID=37" },

    { name: "Light Armor Expertise",
        id: "light-armor-expertise",
        type: "class", 
        action: "passive",
        level: 13,
        level_acquired: 13,
        manually_chosen: false, 
        description: "Your light armor and unarmored proficiency rank increases to expert.",
        icon_url: "./images/feat-icons/light-armor-expertise.webp",
        source_url: "https://2e.aonprd.com/Classes.aspx?ID=37" },

    { name: "Greater Rogue Reflexes",
        id: "greater-rogue-reflexes",
        type: "class", 
        action: "passive",
        level: 13,
        level_acquired: 13,
        manually_chosen: false, 
        description: "Your Reflex save proficiency increases to legendary. Critical failures on Reflex saves turn into failures. If you fail a Reflex save on a damaging effect, take half damage.",
        icon_url: "./images/feat-icons/greater-rogue-reflexes.webp",
        source_url: "https://2e.aonprd.com/Classes.aspx?ID=37" },

    { name: "Swift Sneak",
        id: "swift-sneak",
        type: "skill", 
        action: "passive",
        level: 7,
        level_acquired: 13,
        manually_chosen: true, 
        description: "Move your full Speed when you Sneak.",
        icon_url: "./images/feat-icons/swift-sneak.webp",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5222" },

    { name: "Prescient Consumable",
        id: "prescient-consumable",
        type: "ancestry", 
        action: "passive",
        level: 7,
        level_acquired: 13,
        manually_chosen: false, 
        description: "Same as Prescient Planner, but you can pull out a consumable item (with the same restrictions).",
        icon_url: "./images/feat-icons/prescient-consumable.webp",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5190" },

    { name: "Prescient Planner",
        id: "prescient-planner",
        type: "ancestry", 
        action: "passive",
        level: 3,
        level_acquired: 13,
        manually_chosen: false, 
        description: "Spend 1 minute pulling out any piece of adventuring gear of reasonable size. It must be a common item with a level no higher than half your level and must not encumber you. Pay the price of the chosen item. You can use this ability again when you're able to purchase goods.",
        icon_url: "./images/feat-icons/prescient-planner.webp",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5191" },

    { name: "Uncanny Cheeks",
        id: "uncanny-cheeks",
        type: "ancestry", 
        action: "passive",
        level: 9,
        level_acquired: 13,
        manually_chosen: true, 
        description: "Gain Prescient Planner and Prescient Consumable, but the object must be able to fit in your cheek pouches.",
        icon_url: "./images/feat-icons/uncanny-cheeks.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5667" },

    

    


    // LEVEL 14
    { name: "Quick Spring",
        id: "quick-spring",
        type: "skill", 
        action: "passive",
        level: 13,
        level_acquired: 14,
        manually_chosen: true, 
        description: "After a successful Tumble Through, you can Stride as a free action.",
        icon_url: "./images/feat-icons/quick-spring.gif",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=4151" },

    { name: "Illusory Disguise (7th)",
        id: "illusory-disguise-7",
        type: "archetype", 
        action: "two",
        level: 1,
        level_acquired: 14,
        manually_chosen: false, 
        description: "Target up to 10 willing creatures. Disguise them into any specific individuals, as long as they are roughly the same body shape. You must have seen an individual to disguise as them, and you must have heard their voice to sound like them.",
        icon_url: "./images/feat-icons/illusory-disguise.png",
        source_url: "https://2e.aonprd.com/Spells.aspx?ID=1568" },

    { name: "Fit for the Role",
        id: "fit-for-the-role",
        type: "archetype", 
        action: "passive",
        level: 14,
        level_acquired: 14,
        manually_chosen: true, 
        description: "Gain the ability to cast a 7th-rank illusory disguise spell once per day.",
        icon_url: "./images/feat-icons/fit-for-the-role.png",
        source_url: "./images/feat-source/fit-for-the-role.png" },

    { name: "Nimble Strike",
        id: "nimble-strike",
        type: "class", 
        action: "passive",
        level: 10,
        level_acquired: 14,
        manually_chosen: true, 
        description: "After using Nimble Dodge or Nimble Roll, melee Strike the triggering enemy. This Strike does not count toward your multiple attack penalty, and your multiple attack penalty doesn't apply to this strike.",
        icon_url: "./images/feat-icons/nimble-strike.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=4962" },

    




    // LEVEL 15
    { name: "Greater Weapon Specialization",
        id: "greater-weapon-specialization",
        type: "class", 
        action: "passive",
        level: 15,
        level_acquired: 15,
        manually_chosen: false, 
        description: "+4 damage with weapons and unarmed attacks in which you're an expert. +6 if master. +8 if legendary.",
        icon_url: "./images/feat-icons/greater-weapon-specialization.webp",
        source_url: "https://2e.aonprd.com/Classes.aspx?ID=37" },

    { name: "Canny Acumen (Fortitude)",
        id: "canny-acumen",
        type: "general", 
        action: "passive",
        level: 1,
        level_acquired: 15,
        manually_chosen: true, 
        description: "Your Fortitude save proficiency increases to expert. At level 17, your proficiency increases to master.",
        icon_url: "./images/feat-icons/canny-acumen.webp",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5130" },

    { name: "Double Debilitation",
        id: "double-debilitation",
        type: "class", 
        action: "passive",
        level: 15,
        level_acquired: 15,
        manually_chosen: false, 
        description: "When using Debilitating Strike, you can apply two debilitations at the same time. Removing one removes both.",
        icon_url: "./images/feat-icons/double-debilitation.webp",
        source_url: "https://2e.aonprd.com/Classes.aspx?ID=37" },

    { name: "Legendary Sneak",
        id: "legendary-sneak",
        type: "skill", 
        action: "passive",
        level: 15,
        level_acquired: 15,
        manually_chosen: true, 
        description: "You are always sneaking unless you choose to be seen. You can Hide and Sneak with cover or being concealed. When using any exploration tactic, you also gain the benefit of Avoiding Notice.",
        icon_url: "./images/feat-icons/legendary-sneak.webp",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5173" },

    

    


    // LEVEL 16
    { name: "Legendary Thief",
        id: "legendary-thief",
        type: "skill",
        action: "passive", 
        level: 15,
        level_acquired: 16,
        manually_chosen: false, 
        description: "Spend 1+ minute(s) stealing a wielded, extremely noticeable, or time consuming to remove item. You must have a way to remain hidden during this time.",
        icon_url: "./images/feat-icons/legendary-thief.webp",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5175" },

    { name: "Tempo Shift",
        id: "tempo-shift",
        type: "archetype",
        action: "free", 
        level: 16,
        level_acquired: 16,
        manually_chosen: false, 
        description: "After delaying, all enemies are off-guard to you until the start of your next turn. Gain Quickened for a free Stride or Strike action for the current round. This move can only be used once per hour.",
        icon_url: "./images/feat-icons/tempo-shift.png",
        source_url: "./images/feat-source/tempo-shift.png" },
    
    { name: "Instant Opening",
        id: "instant-opening",
        type: "class",
        action: "one", 
        level: 14,
        level_acquired: 16,
        manually_chosen: false, 
        description: "Choose an enemy within 30ft. It is off-guard to your attacks until the end of your next turn.",
        icon_url: "./images/feat-icons/instant-opening.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=4976" },

    

    
    

    // LEVEL 17
    { name: "Agile Mind",
        id: "agile-mind",
        type: "class", 
        action: "passive",
        level: 17,
        level_acquired: 17,
        manually_chosen: false, 
        description: "Your Will save proficiency increases to master. Successes on Will saves turn into critical successes.",
        icon_url: "./images/feat-icons/agile-mind.webp",
        source_url: "https://2e.aonprd.com/Classes.aspx?ID=37" },

     { name: "Cloud Jump",
        id: "cloud-jump",
        type: "skill", 
        action: "passive",
        level: 15,
        level_acquired: 17,
        manually_chosen: true, 
        description: "Triple the distance of your Long Jump. Increase your High Jump distance by spending actions.",
        icon_url: "./images/feat-icons/cloud-jump.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5133" },

    { name: "Call the Swarm",
        id: "call-the-swarm",
        type: "ancestry", 
        action: "three",
        level: 17,
        level_acquired: 17,
        manually_chosen: true, 
        description: "Summon a 30ft burst rat swarm within 120ft, and deal 6d8 piercing damage to all enemies in the area. The rats remain for 1 minute, dealing 3d8 piercing damage to enemies that end their turn in the area. The area is considered difficult terrain for enemies. This move can only be used once per day.",
        icon_url: "./images/feat-icons/call-the-swarm.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5671" },

   

    
        

    // LEVEL 18
    { name: "Mark for Death",
        id: "mark-for-death",
        type: "archetype", 
        action: "three",
        level: 2,
        level_acquired: 18,
        manually_chosen: false, 
        description: "Observe an enemy and assign them as your mark. +2 to Seek and Feint checks to your mark. -2 to mark's Seek checks to you.",
        icon_url: "./images/feat-icons/mark-for-death.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=6257" },

    { name: "Assassin Dedication",
        id: "assassin-dedication",
        type: "archetype", 
        action: "passive",
        level: 2,
        level_acquired: 18,
        manually_chosen: true, 
        description: "Gain Mark for Death. Marked targets take +1 precision damage to sneak attacks. +2 if level 6.",
        icon_url: "./images/feat-icons/assassin-dedication.webp",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=6257" },

    { name: "Scare to Death",
        id: "scare-to-death",
        type: "skill", 
        action: "one",
        level: 15,
        level_acquired: 18,
        manually_chosen: true, 
        description: "Attempt an Intimidation check against an enemy within 30ft. On critical success, the enemy will either die or become frightened 2 and fleeing 1. Success will inflict frightened 2. Failure will inflict frightened 1.",
        icon_url: "./images/feat-icons/scare-to-death.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=5208" },

    { name: "Implausible Infiltration",
        id: "implausible-infiltration",
        type: "class", 
        action: "two",
        level: 18,
        level_acquired: 18,
        manually_chosen: true, 
        description: "Pass through any wood, plaster, or stone floor or wall. This fails if it's thicker than 10ft or contains even a thin layer of metal. If you have climb Speed, you can move through a ceiling.",
        icon_url: "./images/feat-icons/implausible-infiltration.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=4986" },

    




    // LEVEL 19
    { name: "Light Armor Mastery",
        id: "light-armor-mastery",
        type: "class", 
        action: "passive",
        level: 19,
        level_acquired: 19,
        manually_chosen: false, 
        description: "Your light armor and unarmored proficiency rank increases to master.",
        icon_url: "./images/feat-icons/light-armor-mastery.webp",
        source_url: "https://2e.aonprd.com/Classes.aspx?ID=37" },

    { name: "Truesight",
        id: "truesight",
        type: "general", 
        action: "passive",
        level: 6,
        level_acquired: 19,
        manually_chosen: false, 
        description: "You see things within 60 feet as they actually are.",
        icon_url: "./images/feat-icons/truesight.webp",
        source_url: "https://2e.aonprd.com/Spells.aspx?ID=1727" },

    { name: "True Perception",
        id: "true-perception",
        type: "general", 
        action: "passive",
        level: 19,
        level_acquired: 19,
        manually_chosen: true, 
        description: "You are constantly under the effects of a 6th-rank truesight spell. Your Perception modifier is used for counteract checks.",
        icon_url: "./images/feat-icons/true-perception.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=6511" },

    { name: "Master Strike",
        id: "master-strike",
        type: "class", 
        action: "free",
        level: 19,
        level_acquired: 19,
        manually_chosen: false, 
        description: "After using Strike on an off-guard enemy and dealing damage, the enemy attempts a Fortitude save. If they succeed, they are enfeebled 2 until the end of your next turn. If they fail, they are paralyzed for 4 rounds. If they critically fail, they are paralyzed for 4 rounds, knocked unconscious for 2 hours, or killed (your choice). They are immune to this move for 1 day.",
        icon_url: "./images/feat-icons/master-strike.webp",
        source_url: "https://2e.aonprd.com/Actions.aspx?ID=12" },

    { name: "Reveal Machinations",
        id: "reveal-machinations",
        type: "skill", 
        action: "one",
        level: 15,
        level_acquired: 19,
        manually_chosen: true, 
        description: "Attempt a Deception check against an enemy's Will DC. On success, inflict frightened 2. On critical success, inflict frightened 3. Gain a free Recall Knowledge on the enemy. You cannot use this on the same target until 1 day has passed, and you are disguised as a different person.",
        icon_url: "./images/feat-icons/reveal-machinations.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=924" },






    // LEVEL 20
    { name: "Too Angry to Die",
        id: "too-angry-to-die",
        type: "skill", 
        action: "reaction",
        level: 12,
        level_acquired: 20,
        manually_chosen: true, 
        description: "When you stand up after being unconscious, Demoralize an enemy.",
        icon_url: "./images/feat-icons/too-angry-to-die.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=3899" },

    { name: "Assassinate",
        id: "assassinate",
        type: "archetype", 
        action: "two",
        level: 12,
        level_acquired: 20,
        manually_chosen: true, 
        description: "Strike your mark and do an additional 6d6 precision damage to them. The mark rolls a Fortitude save. If they critically fail, they die unless its level is higher than yours. The mark is immune to this move for 1 day.",
        icon_url: "./images/feat-icons/assassinate.png",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=6261" },

    { name: "Hidden Paragon",
        id: "hidden-paragon",
        type: "class", 
        action: "reaction",
        level: 20,
        level_acquired: 20,
        manually_chosen: true, 
        description: "When you use Stealth to Sneak or Hide from enemies, you become invisible for 1 minute, even if you use a hostile action. You can use this move once per hour.",
        icon_url: "./images/feat-icons/hidden-paragon.gif",
        source_url: "https://2e.aonprd.com/Feats.aspx?ID=4989" },
];




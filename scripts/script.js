const header = document.querySelector(".header");
const abilityContainer = document.querySelector(".ability-container");
const skillContainer = document.querySelector(".skill-container");
const characterImage = document.querySelector("#character-image");

const ancestryElement = document.querySelector(".character-ancestry");
const backgroundElement = document.querySelector(".character-background");
const classElement = document.querySelector(".character-class");
const nameElement = document.querySelector("#name");
const levelElement = document.querySelector(".character-level");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

const toggleAllFeats = document.querySelector("#show-all-feats");
const togglePassives = document.querySelector("#show-passives");
const featContainer = document.querySelector(".feat-container");

const strengthValue = document.querySelector(".strength-value");
const dexterityValue = document.querySelector(".dexterity-value");
const constitutionValue = document.querySelector(".constitution-value");
const intelligenceValue = document.querySelector(".intelligence-value");
const wisdomValue = document.querySelector(".wisdom-value");
const charismaValue = document.querySelector(".charisma-value");

const acrobaticsIcon = document.querySelector(".acrobatics");
const arcanaIcon = document.querySelector(".arcana");
const athleticsIcon = document.querySelector(".athletics");
const craftingIcon = document.querySelector(".crafting");
const deceptionIcon = document.querySelector(".deception");
const diplomacyIcon = document.querySelector(".diplomacy");
const intimidationIcon = document.querySelector(".intimidation");
const medicineIcon = document.querySelector(".medicine");
const natureIcon = document.querySelector(".nature");
const occultismIcon = document.querySelector(".occultism");
const performanceIcon = document.querySelector(".performance");
const religionIcon = document.querySelector(".religion");
const societyIcon = document.querySelector(".society");
const stealthIcon = document.querySelector(".stealth");
const survivalIcon = document.querySelector(".survival");
const thieveryIcon = document.querySelector(".thievery");

const untrainedColor = "invert(4%) sepia(96%) saturate(18%) hue-rotate(283deg) brightness(105%) contrast(102%)"; // #FFFFFF
const trainedColor = "invert(92%) sepia(93%) saturate(2382%) hue-rotate(230deg) brightness(250%) contrast(101%)"; // #171f69
const expertColor = "invert(91%) sepia(42%) saturate(5899%) hue-rotate(273deg) brightness(200%) contrast(123%)"; // #3a005c
const masterColor = "invert(78%) sepia(81%) saturate(1206%) hue-rotate(23deg) brightness(200%) contrast(101%)"; // #664400
const legendaryColor = "invert(93%) sepia(81%) saturate(3421%) hue-rotate(356deg) brightness(200%) contrast(115%)"; // #5c0000

const MIN_LEVEL = 0;
const MAX_LEVEL = 20;

const currentLevel = localStorage['currentLevel'] || 1;

const main = () => {
    header.style.backgroundImage = "url(" + headerBackgroundImageURL + ")";
    characterImage.src = characterImageURL;

    ancestryElement.textContent = characterAncestry;
    backgroundElement.textContent = characterBackground;
    classElement.textContent = characterClass;

    nameElement.textContent = characterName.toUpperCase();
    nameElement.href = pathbuilderURL;
    
    levelElement.textContent = currentLevel;

    generateLevelFeats();
    generateAbilityValues();
    generateSkillValues();
}

/*##############################
||      EVENT LISTENERS       ||
##############################*/
arrowLeft.addEventListener("click", () => {
    if (Number(levelElement.textContent) > MIN_LEVEL) {
        levelElement.textContent = Number(levelElement.textContent) - 1;
        generateLevelFeats();
        generateAbilityValues();
        generateSkillValues();
        localStorage['currentLevel'] = levelElement.textContent;
    }
});

arrowRight.addEventListener("click", () => {
    if (Number(levelElement.textContent) < MAX_LEVEL) {
        levelElement.textContent = Number(levelElement.textContent) + 1;
        generateLevelFeats();
        generateAbilityValues();
        generateSkillValues();
        localStorage['currentLevel'] = levelElement.textContent;
    }
});

toggleAllFeats.addEventListener("click", () => {
    generateLevelFeats();
});

togglePassives.addEventListener("click", () => {
    generateLevelFeats();
});

// Keyboard Controls
document.addEventListener("keyup", e => {
    if (e.key == "ArrowLeft") arrowLeft.click();
    else if (e.key == "ArrowRight") arrowRight.click();
});

/*##############################
||         FUNCTIONS          ||
##############################*/
const generateLevelFeats = () => {
    featContainer.textContent = "";

    let levelFeats;
    if (toggleAllFeats.checked) {
        levelFeats = characterFeats.filter(item => item["level_acquired"] <= Number(levelElement.textContent)).reverse();
    } else {
        levelFeats = characterFeats.filter(item => item["level_acquired"] == Number(levelElement.textContent));
    }

    if (!togglePassives.checked) {
        levelFeats = levelFeats.filter(item => item["action"] != "passive");
    }

    levelFeats.forEach(item => {
        generateFeat(item);
    });
};

const generateFeat = item => {
    let feat = document.createElement("div");
    feat.className = "feat";

    // Feat Theme
    let type = item["type"];
    if (type == "background") {
        feat.style.backgroundColor = "#DFCFE6";
        feat.style.boxShadow = "0px 10px 0px #A760A5";    
    } else if (type == "ancestry") {
        feat.style.backgroundColor = "#D2F0CD";
        feat.style.boxShadow = "0px 10px 0px #5C9F8A";
    } else if (type == "class") {
        feat.style.backgroundColor = "#C6E3FF"; 
        feat.style.boxShadow = "0px 10px 0px #6A6BBA";
    } else if (type == "skill" || type == "general") {
        feat.style.backgroundColor = "hsl(0, 0%, 87%)";
        feat.style.boxShadow = "0px 10px 0px hsl(0, 0%, 50%)";
    } else if (type == "archetype") {
        feat.style.backgroundColor = "#FFE2A9";
        feat.style.boxShadow = "0px 10px 0px #F08528";
    } else { // Basic or Other
        feat.style.backgroundColor = "#F7EAE0";
        feat.style.boxShadow = "0px 10px 0px #AC7A77";
    }
    // feat.style.backgroundColor = "yellow";
    // feat.style.boxShadow = "0px 10px 0px red";

    // Feat Level and Level Acquired
    let feat_level_information = document.createElement("div");
    feat_level_information.className = "feat_level_information";
    let feat_level_acquired = document.createElement("div");
    feat_level_acquired.textContent = item["level_acquired"];
    feat_level_information.appendChild(feat_level_acquired);

    // Feat Icon
    let feat_image = document.createElement("div");
    feat_image.className = "feat-image";
    let feat_image_img = document.createElement("img");
    let icon_url = item["icon_url"];
    if (icon_url == "") {
        feat_image_img.src = "./images/blank.svg"; 
    } else {
        feat_image_img.src = item["icon_url"];
        feat_image_img.style.border = "4px double black";
        feat_image_img.style.borderRadius = "20px";
    }
    feat_image.appendChild(feat_image_img);

    // Feat Title
    let feat_title = document.createElement("div");
    feat_title.className = "feat-title";
    let feat_name = document.createElement("div");
    feat_name.className = "feat-name";
    let feat_name_a = document.createElement("a");
    feat_name_a.textContent = item["name"] 
    feat_name_a.href = item["source_url"]; 
    feat_name_a.target = "_blank"
    let feat_action = document.createElement("div");
    feat_action.className = "feat-action";
    let feat_action_img = document.createElement("img");
    let action = item["action"];
    if (action == "reaction") {
        feat_action_img.src = "./images/pathfinder-icons/reaction.png";
    } else if (action == "free") {
        feat_action_img.src = "./images/pathfinder-icons/free-action.png";
    } else if (action == "one") {
        feat_action_img.src = "./images/pathfinder-icons/one-action.png";
    } else if (action == "two") {
        feat_action_img.src = "./images/pathfinder-icons/two-actions.png";
    } else if (action == "three") {
        feat_action_img.src = "./images/pathfinder-icons/three-actions.png";
    } else {
        feat_action_img.src = "";
    }
    feat_name.appendChild(feat_name_a);
    feat_action.appendChild(feat_action_img);
    feat_title.appendChild(feat_name);
    feat_title.appendChild(feat_action);

    // Feat Description
    let feat_description = document.createElement("div");
    feat_description.className = "feat-description";
    feat_description.textContent = item["description"]; 

    // Feat New Indicator (When Past Feats Are Toggled)
    if (toggleAllFeats.checked && (item["level_acquired"] == Number(levelElement.textContent))) {
        let new_icon = document.createElement("div");
        new_icon.className = "new-icon";
        let new_icon_img = document.createElement("img");
        new_icon_img.className = "new-icon-img";
        new_icon_img.src = "./images/new-box.svg";
        new_icon.appendChild(new_icon_img);
        feat.appendChild(new_icon);
    }

    feat.appendChild(feat_level_information);
    feat.appendChild(feat_image);
    feat.appendChild(feat_title);
    feat.appendChild(feat_description);
    featContainer.appendChild(feat);
};

const generateAbilityValues = () => {
    let strengthSum = 0;
    let dexteritySum = 0;
    let constitutionSum = 0;
    let intelligenceSum = 0;
    let wisdomSum = 0;
    let charismaSum = 0;
    for (let i = 0; i <= Number(levelElement.textContent); i++) {
        strengthSum += characterStats[0]["strength"][i];
        dexteritySum += characterStats[0]["dexterity"][i];
        constitutionSum += characterStats[0]["constitution"][i];
        intelligenceSum += characterStats[0]["intelligence"][i];
        wisdomSum += characterStats[0]["wisdom"][i];
        charismaSum += characterStats[0]["charisma"][i];
    }
    
    updateAbilityValue(strengthSum, strengthValue, "strength");
    updateAbilityValue(dexteritySum, dexterityValue, "dexterity");
    updateAbilityValue(constitutionSum, constitutionValue, "constitution");
    updateAbilityValue(intelligenceSum, intelligenceValue, "intelligence");
    updateAbilityValue(wisdomSum, wisdomValue, "wisdom");
    updateAbilityValue(charismaSum, charismaValue, "charisma");
}

const updateAbilityValue = (sum, element, name) => {
    if (sum >= 0) element.textContent = "+" + sum;
    else element.textContent = sum;
    if (element.textContent.endsWith(".5")) element.textContent = element.textContent.slice(0, -2) + "⇑";
    if (characterStats[0][name][Number(levelElement.textContent)] != 0) element.style.color = "lightgreen";
    else element.style.color = "white";
}

const generateSkillValues = () => {
    let acrobaticsSum = 0;
    let arcanaSum = 0;
    let athleticsSum = 0;
    let craftingSum = 0;
    let deceptionSum = 0;
    let diplomacySum = 0;
    let intimidationSum = 0;
    let medicineSum = 0;
    let natureSum = 0;
    let occultismSum = 0;
    let performanceSum = 0;
    let religionSum = 0;
    let societySum = 0;
    let stealthSum = 0;
    let survivalSum = 0;
    let thieverySum = 0;
    for (let i = 0; i <= Number(levelElement.textContent); i++) {
        acrobaticsSum += characterStats[1]["acrobatics"][i];
        arcanaSum += characterStats[1]["arcana"][i];
        athleticsSum += characterStats[1]["athletics"][i];
        craftingSum += characterStats[1]["crafting"][i];
        deceptionSum += characterStats[1]["deception"][i];
        diplomacySum += characterStats[1]["diplomacy"][i];
        intimidationSum += characterStats[1]["intimidation"][i];
        medicineSum += characterStats[1]["medicine"][i];
        natureSum += characterStats[1]["nature"][i];
        occultismSum += characterStats[1]["occultism"][i];
        performanceSum += characterStats[1]["performance"][i];
        religionSum += characterStats[1]["religion"][i];
        societySum += characterStats[1]["society"][i];
        stealthSum += characterStats[1]["stealth"][i];
        survivalSum += characterStats[1]["survival"][i];
        thieverySum += characterStats[1]["thievery"][i];
    }

    updateSkillValue(acrobaticsSum, acrobaticsIcon, "acrobatics");
    updateSkillValue(arcanaSum, arcanaIcon, "arcana");
    updateSkillValue(athleticsSum, athleticsIcon, "athletics");
    updateSkillValue(craftingSum, craftingIcon, "crafting");
    updateSkillValue(deceptionSum, deceptionIcon, "deception");
    updateSkillValue(diplomacySum, diplomacyIcon, "diplomacy");
    updateSkillValue(intimidationSum, intimidationIcon, "intimidation");
    updateSkillValue(medicineSum, medicineIcon, "medicine");
    updateSkillValue(natureSum, natureIcon, "nature");
    updateSkillValue(occultismSum, occultismIcon, "occultism");
    updateSkillValue(performanceSum, performanceIcon, "performance");
    updateSkillValue(religionSum, religionIcon, "religion");
    updateSkillValue(societySum, societyIcon, "society");
    updateSkillValue(stealthSum, stealthIcon, "stealth");
    updateSkillValue(survivalSum, survivalIcon, "survival");
    updateSkillValue(thieverySum, thieveryIcon, "thievery");
}

const updateSkillValue = (sum, element, name) => {
    if (sum == 0) {
        element.style.filter = untrainedColor;
        element.firstChild.title = name.charAt(0).toUpperCase() + name.slice(1) + " (Untrained)";
    } else if (sum == 1) {
        element.style.filter = trainedColor;
        element.firstChild.title = name.charAt(0).toUpperCase() + name.slice(1) + " (Trained)";
    } else if (sum == 2) {
        element.style.filter = expertColor;
        element.firstChild.title = name.charAt(0).toUpperCase() + name.slice(1) + " (Expert)";
    } else if (sum == 3) {
        element.style.filter = masterColor;
        element.firstChild.title = name.charAt(0).toUpperCase() + name.slice(1) + " (Master)";
    } else if (sum == 4) {
        element.style.filter = legendaryColor;
        element.firstChild.title = name.charAt(0).toUpperCase() + name.slice(1) + " (Legendary)";
    }

    let oldFilter = element.style.filter;
    if (characterStats[1][name][Number(levelElement.textContent)] > 0) {
        element.style.filter = oldFilter + " drop-shadow(0 0 10px rgb(255, 255, 255))";
    } else {
        element.style.filter = oldFilter;
    }
}

main();

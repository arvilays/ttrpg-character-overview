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

const togglePreviousFeats = document.querySelector("#show-all-feats");
const togglePassives = document.querySelector("#show-passives");
const featContainer = document.querySelector(".feat-container");

const untrainedColor = "invert(4%) sepia(96%) saturate(18%) hue-rotate(283deg) brightness(105%) contrast(102%)"; // #FFFFFF
const trainedColor = "invert(92%) sepia(93%) saturate(2382%) hue-rotate(230deg) brightness(250%) contrast(101%)"; // #171f69
const expertColor = "invert(91%) sepia(42%) saturate(5899%) hue-rotate(273deg) brightness(200%) contrast(123%)"; // #3a005c
const masterColor = "invert(78%) sepia(81%) saturate(1206%) hue-rotate(23deg) brightness(200%) contrast(101%)"; // #664400
const legendaryColor = "invert(93%) sepia(81%) saturate(3421%) hue-rotate(356deg) brightness(200%) contrast(115%)"; // #5c0000

const MIN_LEVEL = 0;
const MAX_LEVEL = 20;

let currentLevel = Number(localStorage["currentLevel"]) || 1;

const main = () => {
    if (localStorage["showPreviousFeats"]) {
        if (localStorage["showPreviousFeats"].charAt(0).toLowerCase() == "t") {
            togglePreviousFeats.checked = true;
        } else if (localStorage["showPreviousFeats"].charAt(0).toLowerCase() == "f") {
            togglePreviousFeats.checked = false;
        }
    } else togglePreviousFeats.checked = false;

    if (localStorage["showPassives"]) {
        if (localStorage["showPassives"].charAt(0).toLowerCase() == "t") {
            togglePassives.checked = true;
        } else if (localStorage["showPassives"].charAt(0).toLowerCase() == "f") {
            togglePassives.checked = false;
        }
    } else togglePassives.checked = true;
    
    header.style.backgroundImage = "url(" + headerBackgroundImageURL + ")";
    characterImage.src = characterImageURL;

    ancestryElement.textContent = characterAncestry;
    backgroundElement.textContent = characterBackground;
    classElement.textContent = characterClass;

    nameElement.textContent = characterName.toUpperCase();
    nameElement.href = pathbuilderURL;
    
    levelElement.textContent = currentLevel;

    initializeAbilities();
    initializeSkills();
    initializeFeats();

    updateAbilities();
    updateSkills();
    updateFeats();
};

/*##############################
||      EVENT LISTENERS       ||
##############################*/
arrowLeft.addEventListener("click", () => {
    if (currentLevel > MIN_LEVEL) {
        currentLevel--;
        setTimeout(() => {
            levelElement.style.color = "hsla(0, 0%, 100%, 0)";
            setTimeout(() => {
                levelElement.style.color = "white";
                levelElement.textContent = currentLevel;
            }, "100");
        }, "20");

        updateAbilities();
        updateSkills();
        updateFeats();
    } else currentLevel = MIN_LEVEL;

    localStorage.setItem("currentLevel", currentLevel);
});


arrowRight.addEventListener("click", () => {
    if (currentLevel < MAX_LEVEL) {
        currentLevel++;
        setTimeout(() => {
            levelElement.style.color = "hsla(0, 0%, 100%, 0)";
            setTimeout(() => {
                levelElement.style.color = "white";
                levelElement.textContent = currentLevel;
            }, "100");
        }, "20");

        updateAbilities();
        updateSkills();
        updateFeats();
    } else currentLevel = MAX_LEVEL;

    localStorage.setItem("currentLevel", currentLevel);
});

togglePreviousFeats.addEventListener("click", () => {
    updateFeats();
    localStorage.setItem("showPreviousFeats", togglePreviousFeats.checked);
});

togglePassives.addEventListener("click", () => {
    updateFeats();
    localStorage.setItem("showPassives", togglePassives.checked);
});

// Keyboard Controls
document.addEventListener("keydown", e => {
    if (e.key == "ArrowLeft") arrowLeft.click();
    else if (e.key == "ArrowRight") arrowRight.click();
});

/*##############################
||         FUNCTIONS          ||
##############################*/
const level = (function () {
    let level = 1;

    const levelElement = document.querySelector(".character-level");
    const arrowLeft = document.querySelector(".arrow-left");
    const arrowRight = document.querySelector(".arrow-right");

    arrowLeft.addEventListener("click", () => { decreaseLevel(); });
    arrowRight.addEventListener("click", () => { increaseLevel(); });
    document.addEventListener("keydown", e => {
        if (e.key == "ArrowLeft") decreaseLevel();
        else if (e.key == "ArrowRight") increaseLevel();
    });

    events.subscribe("levelChange", _updateDisplay);

    function getLevel () { return level; };
    function setLevel (newLevel) { //////////////////////////////// TEST THIS
        level = newLevel;
        events.trigger("levelChange", level);
    };
    function increaseLevel () { 
        if (level < MAX_LEVEL) {
            level++;
            events.trigger("levelChange", level); 
        }
        console.log(level);
    };
    function decreaseLevel () { 
        if (level > MIN_LEVEL) {
            level--;
            events.trigger("levelChange", level);
        }
        console.log(level);
    };

    function _updateDisplay() {
        levelElement.textContent = level;
    }

    return { getLevel, setLevel, increaseLevel, decreaseLevel };
})();

const abilities = (function () {
    let names = Object.keys(characterStats[0]);

    const container = document.querySelector(".ability-container");

    events.subscribe("levelChange", _update);
    _init();

    function _init () {
        for (ability in names) {
            let name = names[ability];

            // Create single ability container
            let element = document.createElement("div");
            element.className = "ability";

            // Create ability icon element
            let icon = document.createElement("img");
            icon.className = "ability-icon";
            icon.src = characterStats[0][name][1];
            icon.title = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

            // Create ability value element
            let value = document.createElement("div");
            value.className = "ability-value";
            value.id = name;
            value.textContent = "+0";

            element.appendChild(icon);
            element.appendChild(value);
            container.appendChild(element);
        }
    };
    function _update () {
        const values = container.querySelectorAll(".ability-value");
        values.forEach(value => {
            let sum = 0;
            for (let i = 0; i <= level.getLevel(); i++) {
                sum += characterStats[0][value.id][0][i];
            }

            let string = "";
            // If value is 0 or greater, add a plus sign
            if (sum >= 0) string = "+";
            string += sum;

            // If value has a .5, add arrow symbol to end
            if (string.endsWith(".5")) string = string.slice(0, -2) + "⇑";

            value.textContent = string;

            // If current level is when stat changes, change color
            if (characterStats[0][value.id][0][level.getLevel()] != 0) value.style.color = "lightgreen";
            else value.style.color = "white";
        })
    };
})();

const skills = (function () {
    let names = Object.keys(characterStats[1]);

    const untrainedColor = "invert(4%) sepia(96%) saturate(18%) hue-rotate(283deg) brightness(105%) contrast(102%)"; // #FFFFFF
    const trainedColor = "invert(92%) sepia(93%) saturate(2382%) hue-rotate(230deg) brightness(250%) contrast(101%)"; // #171f69
    const expertColor = "invert(91%) sepia(42%) saturate(5899%) hue-rotate(273deg) brightness(200%) contrast(123%)"; // #3a005c
    const masterColor = "invert(78%) sepia(81%) saturate(1206%) hue-rotate(23deg) brightness(200%) contrast(101%)"; // #664400
    const legendaryColor = "invert(93%) sepia(81%) saturate(3421%) hue-rotate(356deg) brightness(200%) contrast(115%)"; // #5c0000

    const container = document.querySelector(".skill-container");

    events.subscribe("levelChanged", _update);
    _init();

    function _init() {
        for (skill in names) {
            let name = names[skill];

            // Create single skill container
            let element = document.createElement("div");
            element.className = "skill";

            // Create skill icon element
            let icon = document.createElement("img");
            icon.className = "skill-icon";
            icon.id = name;
            icon.src = characterStats[1][name][1];
            icon.title = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

            element.appendChild(icon);
            container.appendChild(element);
        }
    }
    function _update() {
        const skills = container.querySelectorAll(".skill-icon");
        skills.forEach(value => {
            let name = value.id;
            let title = name.charAt(0).toUpperCase() + name.slice(1);
            let sum = 0;
            for (let i = 0; i <= level.getLevel(); i++) {
                sum += characterStats[1][name][0][i];
            }

            // Set color and title depending on skill level
            if (sum == 0) {
                value.style.filter = untrainedColor;
                value.title = title + " (Untrained)";
            } else if (sum == 1) {
                value.style.filter = trainedColor;
                value.title = title + " (Trained)";
            } else if (sum == 2) {
                value.style.filter = expertColor;
                value.title = title + " (Expert)";
            } else if (sum == 3) {
                value.style.filter = masterColor;
                value.title = title + " (Master)";
            } else if (sum == 4) {
                value.style.filter = legendaryColor;
                value.title = title + " (Legendary)";
            }

            // If current level is when skill changes, add glow
            let oldFilter = value.style.filter;
            if (characterStats[1][name][0][level.getLevel()] > 0) {
                value.style.filter = oldFilter + "drop-shadow(0 0 10px rgb(255, 255, 255))";
            }
        })
    }
})();

const feats = (function () {

})();



const initializeFeats = () => {
    for (feat in characterFeats) {
        generateFeat(characterFeats[feat]);
    }
}

const updateFeats = () => {
    let feats = document.querySelectorAll(".feat");
    let filteredFeats = [];
    var interval = 50; // In miliseconds
    var promise = Promise.resolve();

    // Filter for correct feats
    if (togglePreviousFeats.checked) filteredFeats = characterFeats.filter(item => item.level_acquired <= currentLevel);
    else filteredFeats = characterFeats.filter(item => item.level_acquired == currentLevel);

    if (!togglePassives.checked) filteredFeats = filteredFeats.filter(item => item.action != "passive");

    // Push correct feats into array
    let filteredFeatsElements = [];
    feats.forEach(feat => {
        if (filteredFeats.map(x => x.name).includes(feat.querySelector(".feat-name").textContent)) {
            if (feat.querySelector(".level_acquired").textContent == currentLevel && togglePreviousFeats.checked) feat.querySelector(".new-icon").style.display = "revert";
            else feat.querySelector(".new-icon").style.display = "none";

            feat.style.display = "grid";
            feat.style.opacity = "0%";
            filteredFeatsElements.push(feat);
        } else feat.style.display = "none";
    });

    // Fade in each correct individual feats
    filteredFeatsElements.forEach(feat => {
        promise = promise.then(function () {
            return new Promise(function (resolve) {
                feat.style.opacity = "100%";
                setTimeout(resolve, interval);
            });
        });
    })
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

    // Feat Level and Level Acquired
    let feat_level_information = document.createElement("div");
    feat_level_information.className = "feat_level_information";
    let feat_level_acquired = document.createElement("div");
    feat_level_acquired.className = "level_acquired";
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
    feat_action_img.id = item["action"];
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
    } else if (action == "action-dnd") {
        feat_action_img.src = "./images/dnd-icons/action-dnd.png";
    } else if (action == "bonus-dnd") {
        feat_action_img.src = "./images/dnd-icons/bonus-dnd.png";
    } else if (action == "reaction-dnd") {
        feat_action_img.src = "./images/dnd-icons/reaction-dnd.png";
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

    // Feat New Indicator
    let new_icon = document.createElement("div");
    new_icon.className = "new-icon";
    new_icon.style.display = "none";
    let new_icon_img = document.createElement("img");
    new_icon_img.className = "new-icon-img";
    new_icon_img.src = "./images/new-box.svg";
    new_icon.appendChild(new_icon_img);
    feat.appendChild(new_icon);

    // Manually Chosen Indicator
    let manually_chosen = item["manually_chosen"];
    if (manually_chosen) {
        let chosen_icon = document.createElement("div");
        chosen_icon.className = "chosen-icon";
        chosen_icon.style.display = "revert";
        let chosen_icon_img = document.createElement("img");
        chosen_icon_img.className = "chosen-icon-img";
        chosen_icon_img.src = "./images/check-circle-outline.svg";
        chosen_icon.appendChild(chosen_icon_img);
        feat.appendChild(chosen_icon);
    }
    

    feat.appendChild(feat_level_information);
    feat.appendChild(feat_image);
    feat.appendChild(feat_title);
    feat.appendChild(feat_description);
    featContainer.insertBefore(feat, featContainer.firstChild);

    
};

main();

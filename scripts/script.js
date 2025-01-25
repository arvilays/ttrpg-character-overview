const nameElement = document.querySelector("#name");
const ancestryElement = document.querySelector(".character-ancestry");
const backgroundElement = document.querySelector(".character-background");
const classElement = document.querySelector(".character-class");
const levelElement = document.querySelector(".character-level");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const toggleAllFeats = document.querySelector("#toggle-all-feats");
const featContainer = document.querySelector(".feat-container");

const MIN_LEVEL = 0;
const MAX_LEVEL = 20;

const main = () => {
    nameElement.textContent = characterName.toUpperCase();
    nameElement.href = pathbuilderURL;
    ancestryElement.textContent = characterAncestry;
    backgroundElement.textContent = characterBackground;
    classElement.textContent = characterClass;

    generateLevelFeats();
}

arrowLeft.addEventListener("click", () => {
    if (Number(levelElement.textContent) > MIN_LEVEL) {
        levelElement.textContent = Number(levelElement.textContent) - 1;
        generateLevelFeats();
    }
});

arrowRight.addEventListener("click", () => {
    if (Number(levelElement.textContent) < MAX_LEVEL) {
        levelElement.textContent = Number(levelElement.textContent) + 1;
        generateLevelFeats();
    }
});

toggleAllFeats.addEventListener("click", () => {
    generateLevelFeats();
});

const generateLevelFeats = () => {
    featContainer.textContent = "";

    let levelFeats;
    if (toggleAllFeats.checked) {
        levelFeats = characterFeats.filter(item => item["level_acquired"] <= Number(levelElement.textContent)).reverse();
    } else {
        levelFeats = characterFeats.filter(item => item["level_acquired"] == Number(levelElement.textContent));
    }

    levelFeats.forEach(item => {
        generateFeat(item);
    });
};

const generateFeat = item => {
    let feat = document.createElement("div");
    feat.className = "feat";

    let feat_image = document.createElement("div");
    feat_image.className = "feat-image";
    let feat_image_img = document.createElement("img");
    let icon_url = item["icon-url"];
    if (icon_url == undefined) {
        feat_image_img.src = "./images/blank.svg"; 
    } else {
        feat_image_img.src = item["icon-url"]; 
    }
    feat_image.appendChild(feat_image_img);

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

    let feat_description = document.createElement("div");
    feat_description.className = "feat-description";
    feat_description.textContent = item["description"]; 

    if (toggleAllFeats.checked && (item["level_acquired"] == Number(levelElement.textContent))) {
        let new_icon = document.createElement("div");
        new_icon.className = "new-icon";
        let new_icon_img = document.createElement("img");
        new_icon_img.className = "new-icon-img";
        new_icon_img.src = "./images/new-box.svg";
        new_icon.appendChild(new_icon_img);
        feat.appendChild(new_icon);
    }

    feat.appendChild(feat_image);
    feat.appendChild(feat_title);
    feat.appendChild(feat_description);
    featContainer.appendChild(feat);
};

main();

/*
<div class="feat">
    <div class="feat-image"><img src="./images/blank.svg"></div>
    <div class="feat-title">
        <div class="feat-name"><a href="">Nimble Dodge</a></div>
        <div class="feat-action"><img src="./images/pathfinder-icons/reaction.png"></div>
    </div>
    <div class="feat-description">When attacked and can see target, +2 AC.</div>
</div>
*/
'use strict'
import {createHeroAttackData, createEnemyAttackData} from './attack-data.js';

const heroName = "Halk Hogan";
const enemyName = "Nindja";
let winner = null;
let heroState = {
    health: 100,
    chosenAttackTool: 'fist',
    chosenAttackTarget: 'to-head',
    chosenProtection: 'protect-head'
};

let enemyState = {
    health: 100
};

const heroAttackData = createHeroAttackData(heroName);
const enemyAttackData = createEnemyAttackData(enemyName);

const enemyAttackToolsMap = ["head", "fist", "foot"];
const enemyAttackTargetsMap = ["head", "chest", "belly", "eggs", "legs"];
const enemyProtectionMap = ["head", "chest", "belly", "eggs", "legs"];

let currentFighter = 'hero';

const heroIndLine = document.querySelector('#hero.main-panel .health-indicator__ind-line');
const enemyIndLine = document.querySelector('#enemy.main-panel .health-indicator__ind-line');
const heroHealthText = document.querySelector('#hero.main-panel .health-text');
const enemyHealthText = document.querySelector('#enemy.main-panel .health-text');
const attackBtn = document.getElementById('attack-btn');
const messagesWindow = document.querySelector('.messages-window');
const resetBtn = document.getElementById('reset-btn');

document.querySelector('#hero.main-panel .name-text').innerText = heroName;
document.querySelector('#enemy.main-panel .name-text').innerText = enemyName;
attackBtn.onclick = heroAttacks;
resetBtn.onclick = reset;

function heroAttacks() {
    const toolId = document.querySelector('#hero .attack-panel__tool-choice input[name="tool"]:checked').getAttribute('id');
    const targetId = document.querySelector('#hero .attack-panel__target-choice input[name="target"]:checked').getAttribute('id');
    const target = targetId.slice("to-".length);
    const key = toolId+"-"+targetId;
    const randomCoeff = Math.random() * (1 - 0.7) + 0.7;
    const expectedDamage = Math.floor(heroAttackData[key].expectedDamage*randomCoeff); 
    enemyGetsAttack(toolId, target, expectedDamage);
    changeCurrentFighter(); 
}

function heroGetsAttack(attackTool, attackTarget, expectedDamage) {
    const key = attackTool + "-to-" + attackTarget;
    let message = enemyAttackData[key].messageVariants[0].success;
    let protectionCoeff = 1;
    const protectedBodyPart = document.querySelector('#hero .defence-panel input[name="defence"]:checked').getAttribute('id').slice("protect-".length);
    if(protectedBodyPart == attackTarget) {
        message = enemyAttackData[key].messageVariants[0].attackCameToDefence;
        protectionCoeff = 0.3;
    }
    addSpanElementToMessagesWindow(`<span class="message-text message-text_enemy">${message}</span>`);
    changeHeroHealth(-Math.floor(expectedDamage*protectionCoeff));
}

function changeHeroHealth(deltaHealth) {
    heroState.health += deltaHealth;
    if(heroState.health < 0) heroState.health = 0;
    else if(heroState.health > 100) heroState.health = 100;
    heroIndLine.style.width = heroState.health+'%';
    setHealthIndLineColor(heroIndLine, heroState.health);
    heroHealthText.innerText = heroState.health+'%';          
}

function enemyAttacks() {
    const tool = enemyAttackToolsMap[Math.floor(Math.random() * enemyAttackToolsMap.length)];
    const target = enemyAttackTargetsMap[Math.floor(Math.random() * enemyAttackTargetsMap.length)];
    const key = tool+"-to-"+target;
    const randomCoeff = Math.random() * (1 - 0.7) + 0.7;
    const expectedDamage = Math.floor(enemyAttackData[key].expectedDamage*randomCoeff); 
    heroGetsAttack(tool, target, expectedDamage);  
    changeCurrentFighter();      
}

function enemyGetsAttack(attackTool, attackTarget, expectedDamage) {
    const key = attackTool + "-to-" + attackTarget;
    let message = heroAttackData[key].messageVariants[0].success;
    let protectionCoeff = 1;
    const protectedBodyPart = enemyProtectionMap[Math.floor(Math.random() * enemyProtectionMap.length)];
    if(protectedBodyPart == attackTarget) {
        message = heroAttackData[key].messageVariants[0].attackCameToDefence;
        protectionCoeff = 0.3;
    }
    addSpanElementToMessagesWindow(`<span class="message-text message-text_hero">${message}</span>`);
    changeEnemyHealth(-Math.floor(expectedDamage*protectionCoeff));             
}

function changeEnemyHealth(deltaHealth) {
    enemyState.health += deltaHealth;
    if(enemyState.health < 0) enemyState.health = 0;
    else if(enemyState.health > 100) enemyState.health = 100;
    enemyIndLine.style.width = enemyState.health+'%';
    setHealthIndLineColor(enemyIndLine, enemyState.health);
    enemyHealthText.innerText = enemyState.health+'%';          
}

function changeCurrentFighter() {
    if(currentFighter=='hero') {
        currentFighter = 'enemy';
        makeEnemyMove();
    }
    else if(currentFighter=='enemy') {
        currentFighter = 'hero';
        checkHeroState();
    }
}

function makeEnemyMove() {
    enemyAttacks();
}

function checkHeroState() {
    /*
        Первым бьёт hero, вторым - enemy. Даже если enemy был убит, ему всё равно даётся право нанести удар - поэтому заканчивается бой всегда ударом enemy. При ударе вызывается changeCurrentFighter(), и т.к. бой заканчивается ударом enemy, в changeCurrentFighter() срабатывает условие if(currentFighter=='enemy'), а в нём вызывается checkHeroState(). 
        Так что проверку, следует ли заканчивать бой, нужно устраивать внутри checkHeroState().
        Если устроить её и в makeEnemyMove(), и в checkHeroState(), то при ничьей finishFight() вызовется дважды.
    */
    if(heroState.health == 0 || enemyState.health == 0) finishFight();        
}

function finishFight() {
    attackBtn.setAttribute("disabled", true);
    if(heroState.health == 0 && enemyState.health > 0) {
        winner = `${enemyName}`;
        addSpanElementToMessagesWindow(`<span class="message-text message-text_enemy">ПОБЕДА ОДЕРЖАНА ${winner}</span>`);
    }
    else if(enemyState.health == 0 && heroState.health > 0) {
        winner = `${heroName}`;
        addSpanElementToMessagesWindow(`<span class="message-text message-text_hero">ПОБЕДА ОДЕРЖАНА ${winner}</span>`);
    }
    else if(enemyState.health == 0 && heroState.health == 0)
        addSpanElementToMessagesWindow(`<span class="message-text">НИЧЬЯ!</span>`);
}

function addSpanElementToMessagesWindow(spanHTMLString) {
    messagesWindow.innerHTML = messagesWindow.innerHTML + spanHTMLString;
    messagesWindow.scrollTop = messagesWindow.scrollHeight; 
}

function setHealthIndLineColor(indLineHTMLElement, healthPercents) {
    if(healthPercents >= 70) indLineHTMLElement.style.backgroundColor = "rgb(124, 252, 0)";
    else if(healthPercents >= 30 && healthPercents < 70) indLineHTMLElement.style.backgroundColor = "rgb(255, 255, 0)";
    else indLineHTMLElement.style.backgroundColor = "rgb(255, 0, 0)";
}

function reset() {
    attackBtn.removeAttribute("disabled");
    heroState.health = 100;
    heroState.chosenAttackTool = 'fist';
    heroState.chosenAttackTarget = 'to-head';
    heroState.chosenProtection = 'protect-head';
    enemyState.health = 100;
    winner = null;
    currentFighter = 'hero';
    messagesWindow.innerHTML = null;
    changeHeroHealth(100);
    changeEnemyHealth(100);
    document.getElementById('fist').click();
    document.getElementById('to-head').click();
    document.getElementById('protect-head').click();
}
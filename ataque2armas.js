main()

async function main(){
  // Get Selected
  let selected = canvas.tokens.controlled;
  if(selected.length > 1){
    ui.notifications.error("Selecciona un personaje")
    return;
  }
  let selected_actor = selected[0].actor;
  // Get Target
  let targets = Array.from(game.user.targets)
  if(targets.length == 0 || targets.length > 1 ){
    ui.notifications.error("Selecciona un objetivo");
    return;
  }
  let target_actor = targets[0].actor;

  // Select Weapon
  // Why Filter instead of Find?
  let actorWeapons = selected_actor.items.filter(item => item.type == "weapon" && item.data.data.equipped || "armor" && item.data.data.equipped && item.data.data.type == "shield")
  let weaponOptions = ""
  for(let item of actorWeapons){
    weaponOptions += `<option value=${item.id}>${item.data.name} | Clase: ${item.data.data.wc}</option>`
  }

  let dialogTemplate = `
  <h1> Escoge un arma </h1>
  <div style="display:flex">
    <div  style="flex:1"><select id="weapon">${weaponOptions}</select></div>
    <span style="flex:1">Mod <input  id="mod" type="number" style="width:50px;float:right" value=0 /></span>
    </div>
  `
  new Dialog({
    title: "Tirada de ataque", 
    content: dialogTemplate,
    buttons: {
      rollAtkP: {
        label: "Arma principal", 
        callback: (html) => {
          let wepID = html.find("#weapon")[0].value;
          let wep = selected_actor.items.find(item => item.id == wepID)
          let modifier = html.find("#mod")[0].value;
          // Roll Attack
          let malus= selected_actor.data.data.abilities.dex.twoAttacksP
          let meleemod = selected_actor.data.data.thac0.mod.melee;
          let weaponName = wep.data.name;
          let weaponImg = wep.data.img;
          let weaponClass = wep.data.data.wc;
          let crit = wep.data.data.crit;
          let thac0 = selected_actor.data.data.thac0.value;
          let enemy = target_actor.data.name;
          let newRollString = `1d20`;
          let roll = new Roll(newRollString).roll();
            if (roll.total == 1) {
                let fumble = '<span class="failed"><a class="fumble">¡1! Posible pifia <i class="fas fa-dice"></i></a></span> ';
                roll.toMessage({
                    speaker: ChatMessage.getSpeaker({actor: selected_actor}),
                    flavor: fumble,
                  });
            } else if (roll.total >= crit){
                  let critical = `<span class="success critical"><a> ¡${crit}! Golpeas y posible crítico <i class="fas fa-dice"></i></a></span> `;
                roll.toMessage({
                    speaker: ChatMessage.getSpeaker({actor: selected_actor}),
                    flavor: critical,
                  });
            } else {
            let result = roll.total;
            let hitAC = thac0 - result + weaponClass - meleemod - malus - modifier;
          // Print Chat with Button to Roll Damage
            let chatTemplate = ""
            let armor = target_actor.data.data.ac?.value  ? target_actor.data.data.ac?.value : 9;
                if(hitAC <= armor){
                chatTemplate = `
                <p> Atacas con  ${weaponName} a ${enemy}, das a CA:<b class="attack">${hitAC}</b></p>
                <p> Modificador ataque: ${meleemod}</p>
                <p> Modificador de 2 armas: ${malus}</p>
                <p> Clase arma : ${weaponClass}</p> 
                <p> <b>¡Golpeas!</b> </p>
                <p><b> Tira daño</b><a><i class="fas fa-dice" id="rollDamage"></i></a>
                `
                } else {
                chatTemplate = `
                <p> Atacas con  ${weaponName} a ${enemy}, das a CA:<b class="attack">${hitAC}</b></p>
                <p> Modificador ataque: ${meleemod}</p>
                <p> Modificador de 2 armas: ${malus}</p>
                <p> Clase arma : ${weaponClass}</p> 
                <p class="failed"> ¡Fallas! </p>
                `          }
            roll.toMessage({
            speaker: {
              alias: selected_actor.name
            },
            flavor: chatTemplate,
            roll: roll
          })
        }
          // Roll Damage
          Hooks.once('renderChatMessage', (chatItem, html) => {
            html.find("#rollDamage").click(() => {
              let dmg2 = wep.data.data.isDamage2;
              if (dmg2) {
                let wepDmg = wep.data.data.damage2 ? wep.data.data.damage2 : "";
                let rollDmg = new Roll(wepDmg).roll();
                let bdstr = selected_actor.data.data.abilities.str.mod;
                let bdclass = selected_actor.data.data.abilities.str.dmg;
                let dmg = rollDmg.total + bdstr + bdclass;
                rollDmg.toMessage({
                    speaker: {
                    alias: selected_actor.name
                    },
                    flavor:  `
                    <b>${weaponName}</b> hace: <b class="attack">${dmg}</b> <span class="failed">de daño</span>`,
                    roll: roll
                });
              } else {
                let wepDmg = wep.data.data.damage ? wep.data.data.damage : "";
                let rollDmg = new Roll(wepDmg).roll();
                let bdstr = selected_actor.data.data.abilities.str.mod;
                let bdclass = selected_actor.data.data.abilities.str.dmg;
                let dmg = rollDmg.total + bdstr + bdclass;
                rollDmg.toMessage({
                    speaker: {
                    alias: selected_actor.name
                    },
                    flavor: `
                    <b>${weaponName}</b> hace: <b class="attack">${dmg}</b> <span class="failed">de daño</span>`,
                    roll: roll
                });
              }
              
            })
          })         
        }
        }, 
        rollAtkS: {
        label: "Arma secundaria", 
        callback: (html) => {
          let wepID = html.find("#weapon")[0].value;
          let wep = selected_actor.items.find(item => item.id == wepID)
          let modifier = html.find("#mod")[0].value;
          // Roll Attack
          let malus= selected_actor.data.data.abilities.dex.twoAttacksS
          let meleemod = selected_actor.data.data.thac0.mod.melee;
          let weaponName = wep.data.name;
          let weaponImg = wep.data.img;
          let weaponClass = wep.data.data.wc;
          let crit = wep.data.data.crit;
          let thac0 = selected_actor.data.data.thac0.value;
          let enemy = target_actor.data.name;
          let newRollString = `1d20`;
          let roll = new Roll(newRollString).roll();
            if (roll.total == 1) {
                let fumble = '<span class="failed"><a class="fumble">¡1! Posible pifia <i class="fas fa-dice"></i></a></span> ';
                roll.toMessage({
                    speaker: ChatMessage.getSpeaker({actor: selected_actor}),
                    flavor: fumble,
                  });
            } else if (roll.total >= crit){
                  let critical = `<span class="success critical"><a> ¡${crit}! Golpeas y posible crítico <i class="fas fa-dice"></i></a></span> `;
                roll.toMessage({
                    speaker: ChatMessage.getSpeaker({actor: selected_actor}),
                    flavor: critical,
                  });
            } else {
            let result = roll.total;
            let hitAC = thac0 - result + weaponClass - meleemod - malus - modifier;
          // Print Chat with Button to Roll Damage
            let chatTemplate = ""
            let armor = target_actor.data.data.ac?.value  ? target_actor.data.data.ac?.value : 9;
                if(hitAC <= armor){
                chatTemplate = `
                <p> Atacas con  ${weaponName} a ${enemy}, das a CA:<b class="attack">${hitAC}</b></p>
                <p> Modificador ataque: ${meleemod}</p>
                <p> Modificador de 2 armas: ${malus}</p>
                <p> Clase arma : ${weaponClass}</p> 
                <p> <b>¡Golpeas!</b> </p>
                <p><b> Tira daño</b><a><i class="fas fa-dice" id="rollDamage"></i></a>
                `
                } else {
                chatTemplate = `
                <p> Atacas con  ${weaponName} a ${enemy}, das a CA:<b class="attack">${hitAC}</b></p>
                <p> Modificador ataque: ${meleemod}</p>
                <p> Modificador de 2 armas: ${malus}</p>
                <p> Clase arma : ${weaponClass}</p> 
                <p class="failed"> ¡Fallas! </p>
                `          }
            roll.toMessage({
            speaker: {
              alias: selected_actor.name
            },
            flavor: chatTemplate,
            roll: roll
          })
        }
          // Roll Damage
          Hooks.once('renderChatMessage', (chatItem, html) => {
            html.find("#rollDamage").click(() => {
              let dmg2 = wep.data.data.isDamage2;
              if (dmg2) {
                let wepDmg = wep.data.data.damage2 ? wep.data.data.damage2 : "";
                let rollDmg = new Roll(wepDmg).roll();
                let bdstr = selected_actor.data.data.abilities.str.mod;
                let bdclass = selected_actor.data.data.abilities.str.dmg;
                let dmg = rollDmg.total + bdstr + bdclass;
                rollDmg.toMessage({
                    speaker: {
                    alias: selected_actor.name
                    },
                    flavor:  `
                    <b>${weaponName}</b> hace: <b class="attack">${dmg}</b> <span class="failed">de daño</span>`,
                    roll: roll
                });
              } else {
                let wepDmg = wep.data.data.damage ? wep.data.data.damage : "";
                let rollDmg = new Roll(wepDmg).roll();
                let bdstr = selected_actor.data.data.abilities.str.mod;
                let bdclass = selected_actor.data.data.abilities.str.dmg;
                let dmg = rollDmg.total + bdstr + bdclass;
                rollDmg.toMessage({
                    speaker: {
                    alias: selected_actor.name
                    },
                    flavor: `
                    <b>${weaponName}</b> hace: <b class="attack">${dmg}</b> <span class="failed">de daño</span>`,
                    roll: roll
                });
              }
              
            })
          })         
        }
      }, 

      close: {
        label: "Cerrar"
      }
    }
  }).render(true)
}main()

async function main(){
  // Get Selected
  let selected = canvas.tokens.controlled;
  if(selected.length > 1){
    ui.notifications.error("Selecciona un personaje")
    return;
  }
  let selected_actor = selected[0].actor;
  // Get Target
  let targets = Array.from(game.user.targets)
  if(targets.length == 0 || targets.length > 1 ){
    ui.notifications.error("Selecciona un objetivo");
    return;
  }
  let target_actor = targets[0].actor;

  // Select Weapon
  // Why Filter instead of Find?
  let actorWeapons = selected_actor.items.filter(item => item.type == "weapon" && item.data.data.equipped || "armor" && item.data.data.equipped && item.data.data.type == "shield")
  let weaponOptions = ""
  for(let item of actorWeapons){
    weaponOptions += `<option value=${item.id}>${item.data.name} | Clase: ${item.data.data.wc}</option>`
  }

  let dialogTemplate = `
  <h1> Escoge un arma </h1>
  <div style="display:flex">
    <div  style="flex:1"><select id="weapon">${weaponOptions}</select></div>
    <span style="flex:1">Mod <input  id="mod" type="number" style="width:50px;float:right" value=0 /></span>
    </div>
  `
  new Dialog({
    title: "Tirada de ataque", 
    content: dialogTemplate,
    buttons: {
      rollAtkP: {
        label: "Arma principal", 
        callback: (html) => {
          let wepID = html.find("#weapon")[0].value;
          let wep = selected_actor.items.find(item => item.id == wepID)
          let modifier = html.find("#mod")[0].value;
          // Roll Attack
          let malus= selected_actor.data.data.abilities.dex.twoAttacksP
          let meleemod = selected_actor.data.data.thac0.mod.melee;
          let weaponName = wep.data.name;
          let weaponImg = wep.data.img;
          let weaponClass = wep.data.data.wc;
          let crit = wep.data.data.crit;
          let thac0 = selected_actor.data.data.thac0.value;
          let enemy = target_actor.data.name;
          let newRollString = `1d20`;
          let roll = new Roll(newRollString).roll();
            if (roll.total == 1) {
                let fumble = '<span class="failed"><a class="fumble">¡1! Posible pifia <i class="fas fa-dice"></i></a></span> ';
                roll.toMessage({
                    speaker: ChatMessage.getSpeaker({actor: selected_actor}),
                    flavor: fumble,
                  });
            } else if (roll.total >= crit){
                  let critical = `<span class="success critical"><a> ¡${crit}! Golpeas y posible crítico <i class="fas fa-dice"></i></a></span> `;
                roll.toMessage({
                    speaker: ChatMessage.getSpeaker({actor: selected_actor}),
                    flavor: critical,
                  });
            } else {
            let result = roll.total;
            let hitAC = thac0 - result + weaponClass - meleemod - malus - modifier;
          // Print Chat with Button to Roll Damage
            let chatTemplate = ""
            let armor = target_actor.data.data.ac?.value  ? target_actor.data.data.ac?.value : 9;
                if(hitAC <= armor){
                chatTemplate = `
                <p> Atacas con  ${weaponName} a ${enemy}, das a CA:<b class="attack">${hitAC}</b></p>
                <p> Modificador ataque: ${meleemod}</p>
                <p> Modificador de 2 armas: ${malus}</p>
                <p> Clase arma : ${weaponClass}</p> 
                <p> <b>¡Golpeas!</b> </p>
                <p><b> Tira daño</b><a><i class="fas fa-dice" id="rollDamage"></i></a>
                `
                } else {
                chatTemplate = `
                <p> Atacas con  ${weaponName} a ${enemy}, das a CA:<b class="attack">${hitAC}</b></p>
                <p> Modificador ataque: ${meleemod}</p>
                <p> Modificador de 2 armas: ${malus}</p>
                <p> Clase arma : ${weaponClass}</p> 
                <p class="failed"> ¡Fallas! </p>
                `          }
            roll.toMessage({
            speaker: {
              alias: selected_actor.name
            },
            flavor: chatTemplate,
            roll: roll
          })
        }
          // Roll Damage
          Hooks.once('renderChatMessage', (chatItem, html) => {
            html.find("#rollDamage").click(() => {
              let dmg2 = wep.data.data.isDamage2;
              if (dmg2) {
                let wepDmg = wep.data.data.damage2 ? wep.data.data.damage2 : "";
                let rollDmg = new Roll(wepDmg).roll();
                let bdstr = selected_actor.data.data.abilities.str.mod;
                let bdclass = selected_actor.data.data.abilities.str.dmg;
                let dmg = rollDmg.total + bdstr + bdclass;
                rollDmg.toMessage({
                    speaker: {
                    alias: selected_actor.name
                    },
                    flavor:  `
                    <b>${weaponName}</b> hace: <b class="attack">${dmg}</b> <span class="failed">de daño</span>`,
                    roll: roll
                });
              } else {
                let wepDmg = wep.data.data.damage ? wep.data.data.damage : "";
                let rollDmg = new Roll(wepDmg).roll();
                let bdstr = selected_actor.data.data.abilities.str.mod;
                let bdclass = selected_actor.data.data.abilities.str.dmg;
                let dmg = rollDmg.total + bdstr + bdclass;
                rollDmg.toMessage({
                    speaker: {
                    alias: selected_actor.name
                    },
                    flavor: `
                    <b>${weaponName}</b> hace: <b class="attack">${dmg}</b> <span class="failed">de daño</span>`,
                    roll: roll
                });
              }
              
            })
          })         
        }
        }, 
        rollAtkS: {
        label: "Arma secundaria", 
        callback: (html) => {
          let wepID = html.find("#weapon")[0].value;
          let wep = selected_actor.items.find(item => item.id == wepID)
          let modifier = html.find("#mod")[0].value;
          // Roll Attack
          let malus= selected_actor.data.data.abilities.dex.twoAttacksS
          let meleemod = selected_actor.data.data.thac0.mod.melee;
          let weaponName = wep.data.name;
          let weaponImg = wep.data.img;
          let weaponClass = wep.data.data.wc;
          let crit = wep.data.data.crit;
          let thac0 = selected_actor.data.data.thac0.value;
          let enemy = target_actor.data.name;
          let newRollString = `1d20`;
          let roll = new Roll(newRollString).roll();
            if (roll.total == 1) {
                let fumble = '<span class="failed"><a class="fumble">¡1! Posible pifia <i class="fas fa-dice"></i></a></span> ';
                roll.toMessage({
                    speaker: ChatMessage.getSpeaker({actor: selected_actor}),
                    flavor: fumble,
                  });
            } else if (roll.total >= crit){
                  let critical = `<span class="success critical"><a> ¡${crit}! Golpeas y posible crítico <i class="fas fa-dice"></i></a></span> `;
                roll.toMessage({
                    speaker: ChatMessage.getSpeaker({actor: selected_actor}),
                    flavor: critical,
                  });
            } else {
            let result = roll.total;
            let hitAC = thac0 - result + weaponClass - meleemod - malus - modifier;
          // Print Chat with Button to Roll Damage
            let chatTemplate = ""
            let armor = target_actor.data.data.ac?.value  ? target_actor.data.data.ac?.value : 9;
                if(hitAC <= armor){
                chatTemplate = `
                <p> Atacas con  ${weaponName} a ${enemy}, das a CA:<b class="attack">${hitAC}</b></p>
                <p> Modificador ataque: ${meleemod}</p>
                <p> Modificador de 2 armas: ${malus}</p>
                <p> Clase arma : ${weaponClass}</p> 
                <p> <b>¡Golpeas!</b> </p>
                <p><b> Tira daño</b><a><i class="fas fa-dice" id="rollDamage"></i></a>
                `
                } else {
                chatTemplate = `
                <p> Atacas con  ${weaponName} a ${enemy}, das a CA:<b class="attack">${hitAC}</b></p>
                <p> Modificador ataque: ${meleemod}</p>
                <p> Modificador de 2 armas: ${malus}</p>
                <p> Clase arma : ${weaponClass}</p> 
                <p class="failed"> ¡Fallas! </p>
                `          }
            roll.toMessage({
            speaker: {
              alias: selected_actor.name
            },
            flavor: chatTemplate,
            roll: roll
          })
        }
          // Roll Damage
          Hooks.once('renderChatMessage', (chatItem, html) => {
            html.find("#rollDamage").click(() => {
              let dmg2 = wep.data.data.isDamage2;
              if (dmg2) {
                let wepDmg = wep.data.data.damage2 ? wep.data.data.damage2 : "";
                let rollDmg = new Roll(wepDmg).roll();
                let bdstr = selected_actor.data.data.abilities.str.mod;
                let bdclass = selected_actor.data.data.abilities.str.dmg;
                let dmg = rollDmg.total + bdstr + bdclass;
                rollDmg.toMessage({
                    speaker: {
                    alias: selected_actor.name
                    },
                    flavor:  `
                    <b>${weaponName}</b> hace: <b class="attack">${dmg}</b> <span class="failed">de daño</span>`,
                    roll: roll
                });
              } else {
                let wepDmg = wep.data.data.damage ? wep.data.data.damage : "";
                let rollDmg = new Roll(wepDmg).roll();
                let bdstr = selected_actor.data.data.abilities.str.mod;
                let bdclass = selected_actor.data.data.abilities.str.dmg;
                let dmg = rollDmg.total + bdstr + bdclass;
                rollDmg.toMessage({
                    speaker: {
                    alias: selected_actor.name
                    },
                    flavor: `
                    <b>${weaponName}</b> hace: <b class="attack">${dmg}</b> <span class="failed">de daño</span>`,
                    roll: roll
                });
              }
              
            })
          })         
        }
      }, 

      close: {
        label: "Cerrar"
      }
    }
  }).render(true)
}
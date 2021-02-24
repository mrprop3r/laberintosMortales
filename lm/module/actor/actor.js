/**
 * Extend the base Actor entity by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class LmActor extends Actor {

  /**
   * Augment the basic actor data with additional dynamic data.
   */
  prepareData() {
    super.prepareData();

    const actorData = this.data;
    const data = actorData.data;
    const flags = actorData.flags;

    

    // Make separate methods for each Actor type (character, npc, etc.) to keep
    // things organized.
    if (actorData.type === 'character') this._prepareCharacterData(actorData);
    if (actorData.type === 'monster') this._prepareMonsterData(actorData);
    if (actorData.type === 'container') this._prepareContainerData(actorData);
  }

  /**
   * Prepare Character type specific data
   */
  static _valueFromTable(table, val) {
    let output;
    for (let i = 0; i <= val; i++) {
      if (table[i] != undefined) {
        output = table[i];
      }
    }
    return output;
  }

  _prepareCharacterData(actorData) {
    const data = actorData.data;

    // Select class
    data.class.label = CONFIG.LM.actorClass[data.class.value];
    const classInfo = CONFIG.LM.classDetails[data.class.value];
    data.class.img = classInfo.img;
    // Set occupation
    let occupations = actorData.items.filter(i => i.type == "occupation");
    if (occupations.length>0) data.retainer.occupation = occupations[0].name;
    // Set Hit Die from class
    data.hp.hd = classInfo.hd;
    // Set Title from level
    data.description.title = classInfo.title[data.description.level.value];
    // Set xp next level
    data.description.level.xpnext = classInfo.xpn[data.description.level.value];
    // Set class requeriments
    data.abilities.requeriment = game.i18n.localize(`${classInfo.requeriment}`);
    // Set class principal abilities
    data.abilities.principal = game.i18n.localize(`${classInfo.principalAbility}`);
    // Set class weapons use
    if ( data.class.value === "cl") {
      switch (data.description.aligment) {
        case "legal":
          data.skills.weapons = game.i18n.localize(`${classInfo.weaponsUse.legal}`);
          break;
        case "chaotic":
          data.skills.weapons = game.i18n.localize(`${classInfo.weaponsUse.chaotic}`);
          break;
        default:
          data.skills.weapons = game.i18n.localize(`${classInfo.weaponsUse.neutral}`);
      }
    } else {
      data.skills.weapons = game.i18n.localize(`${classInfo.weaponsUse}`);
    }
    data.skills.styles = game.i18n.localize(`${classInfo.weaponStyle}`);
    // Set class armors use
    data.skills.armors = game.i18n.localize(`${classInfo.armorUse}`);
    // Compute modifiers 
    const standard = {
      0: -3,
      3: -3,
      4: -2,
      6: -1,
      9: 0,
      13: 1,
      16: 2,
      18: 3,
    };
    data.abilities.str.mod = LmActor._valueFromTable(
      standard,
      data.abilities.str.value
    );
    data.abilities.int.mod = LmActor._valueFromTable(
      standard,
      data.abilities.int.value
    );
    data.abilities.dex.mod = LmActor._valueFromTable(
      standard,
      data.abilities.dex.value
    );
    data.abilities.cha.mod = LmActor._valueFromTable(
      standard,
      data.abilities.cha.value
    );
    data.abilities.wis.mod = LmActor._valueFromTable(
      standard,
      data.abilities.wis.value
    );
    data.abilities.wis.save = LmActor._valueFromTable(
      standard,
      data.abilities.wis.value
    );
    data.abilities.con.mod = LmActor._valueFromTable(
      standard,
      data.abilities.con.value
    );

    // Compute modifiers capped
    const capped = {
      0: -2,
      3: -2,
      4: -1,
      6: -1,
      9: 0,
      13: 1,
      16: 1,
      18: 2,
    };
    data.abilities.dex.init = LmActor._valueFromTable(
      capped,
      data.abilities.dex.value
    );
    data.abilities.con.venom = LmActor._valueFromTable(
      capped,
      data.abilities.con.value
    );
    data.abilities.cha.retain = data.abilities.cha.mod + 4;
    data.abilities.cha.loyalty = data.abilities.cha.mod +7;

    // Compute Ability test
    const test = {
      0: 1,
      3: 1,
      4: 1,
      6: 1,
      7: 2,
      13: 3,
      17: 4,
      18: 5,
    }
    data.abilities.str.check = LmActor._valueFromTable(
      test,
      data.abilities.str.value
    );
    data.abilities.int.check = LmActor._valueFromTable(
      test,
      data.abilities.int.value
    );
    data.abilities.wis.check = LmActor._valueFromTable(
      test,
      data.abilities.wis.value
    );
    data.abilities.dex.check = LmActor._valueFromTable(
      test,
      data.abilities.dex.value
    );
    data.abilities.con.check = LmActor._valueFromTable(
      test,
      data.abilities.con.value
    );
    data.abilities.cha.check = LmActor._valueFromTable(
      test,
      data.abilities.cha.value
    );

    // Compute fast 
    const itemFast = {
      0: 0,
      3: 1,
      4: 2,
      5: 2,
      6: 3,
      7: 3,
      8: 4,
      9: 4,
      10: 5,
      11: 5,
      12: 6,
      13: 6,
      14: 7,
      15: 7,
      16: 8,
      17: 8,
      18: 9,
    }
    data.abilities.dex.itemFast = LmActor._valueFromTable(
      itemFast,
      data.abilities.dex.value
    );

    /* Calculate skills */

    /* Acrobatics */
    data.skills.acr.mod1 = LmActor._valueFromTable(
      capped,      
      data.abilities.str.value
    );
    data.skills.acr.mod2 = LmActor._valueFromTable(
      capped,      
      data.abilities.dex.value
    );
    if (data.skills.acr.mod1 >= data.skills.acr.mod2) {
      data.skills.acr.mod = data.skills.acr.mod1 + data.skills.acr.value
    };
    if (data.skills.acr.mod2 > data.skills.acr.mod1) {
      data.skills.acr.mod = data.skills.acr.mod2 + data.skills.acr.value
    };
    /* Architecture skill */
    data.skills.arch.mod1 = LmActor._valueFromTable(
      capped,      
      data.abilities.int.value
    );
    data.skills.arch.mod = data.skills.arch.mod1 + data.skills.arch.value;
    /* Search skill */
    data.skills.sea.mod1 = LmActor._valueFromTable(
      capped,      
      data.abilities.wis.value
    );
    data.skills.sea.mod = data.skills.sea.mod1 + data.skills.sea.value;
    /* Hear skill */
    data.skills.he.mod1 = LmActor._valueFromTable(
      capped,      
      data.abilities.wis.value
    );
    data.skills.he.mod = data.skills.he.mod1 + data.skills.he.value;
    /* Bash Doors skill */
    data.skills.bd.mod1 = LmActor._valueFromTable(
      capped,      
      data.abilities.str.value
    );
    data.skills.bd.mod = data.skills.bd.mod1 + data.skills.bd.value;
    /* Sleight of Hands skill */
    data.skills.gh.mod1 = LmActor._valueFromTable(
      capped,      
      data.abilities.dex.value
    );
    data.skills.gh.mod = data.skills.gh.mod1 + data.skills.gh.value;
    /* Languages skill */
    data.skills.lan.mod1 = LmActor._valueFromTable(
      capped,      
      data.abilities.int.value
    );
    data.skills.lan.mod = data.skills.lan.mod1 + data.skills.lan.value;
    /* Manipulate skill */
    data.skills.man.mod1 = LmActor._valueFromTable(
      capped,      
      data.abilities.dex.value
    );
    data.skills.man.mod = data.skills.man.mod1 + data.skills.man.value;
    /* Stealth skill */
    data.skills.st.mod1 = LmActor._valueFromTable(
      capped,      
      data.abilities.dex.value
    );
    data.skills.st.mod = data.skills.st.mod1 + data.skills.st.value;
    /* Survival skill */
    data.skills.sur.mod1 = LmActor._valueFromTable(
      capped,      
      data.abilities.int.value
    );
    data.skills.sur.mod2 = LmActor._valueFromTable(
      capped,      
      data.abilities.wis.value
    );
    if (data.skills.sur.mod1 >= data.skills.sur.mod2) {
      data.skills.sur.mod = data.skills.sur.mod1 + data.skills.sur.value
    };
    if (data.skills.sur.mod2 > data.skills.sur.mod1) {
      data.skills.sur.mod = data.skills.sur.mod2 + data.skills.sur.value
    };
    // Compute combat movement
    data.movement.encounter = data.movement.base / 3;
    
    // compute Max Weight
    data.encumbrance.weight = (data.abilities.str.value)*100;

    // Compute initiative value 
    data.initiative.value += data.abilities.dex.init;

    // Compute thac0  and modifiers
    data.thac0.value = classInfo.thac0[data.description.level.value];
    data.thac0.mod.melee = data.abilities.str.mod;
    data.thac0.mod.missile = data.abilities.dex.mod;
    data.thac0.v1 = (data.thac0.value) - 1;
    data.thac0.v2 = (data.thac0.value) - 2;
    data.thac0.v3 = (data.thac0.value) - 3;
    data.thac0.v4 = (data.thac0.value) - 4;
    data.thac0.v5 = (data.thac0.value) - 5;
    data.thac0.v6 = (data.thac0.value) - 6;
    data.thac0.v7 = (data.thac0.value) - 7;
    data.thac0.v8 = (data.thac0.value) - 8;
    data.thac0.v9 = (data.thac0.value) - 9;

    // Compute saves
    data.saves.death.value = classInfo.saves.death[data.description.level.value];
    data.saves.wand.value = classInfo.saves.wand[data.description.level.value];
    data.saves.paralysis.value = classInfo.saves.paralysis[data.description.level.value];
    data.saves.breath.value = classInfo.saves.breath[data.description.level.value];
    data.saves.spell.value = classInfo.saves.spell[data.description.level.value];

    // Compute magicUser
    data.magicUser = classInfo.magic.yes;
    
    /* Compute freeHands */    
    let total = 0;
    let hands = this.data.items.filter(
      (i) => i.type == "weapon" && i.data.equipped
    );
    hands.forEach((item) => {
      total += 1;
    });
    data.hands = total;
    if ( data.hands == 3) {
      ui.notifications.error(game.i18n.localize("LM.toomuchhands"));
    }

    // Compute AC

    let baseAc = 9;
    let AcShield = 0;
    let AcHelm = 0;
    data.ac.naked = baseAc - data.abilities.dex.mod;
    const armors = this.data.items.filter((i) => i.type == "armor");
    armors.forEach((a) => {
      if (a.data.equipped && a.data.type == "unarmored") {
        baseAc = a.data.ac;
      } else if (a.data.equipped && a.data.type == "light") {
        baseAc = a.data.ac;
      } else if (a.data.equipped && a.data.type == "heavy") {
        baseAc = a.data.ac;
      } else if (a.data.equipped && a.data.type == "shield") {
        AcShield = a.data.ac;
      } else if (a.data.equipped && a.data.type == "helm") {
        AcHelm = a.data.ac;
      }
    });
    data.ac.value = baseAc - data.abilities.dex.mod - AcShield - AcHelm;
    data.ac.shield = AcShield;
    data.ac.helm = AcHelm;


  }
  
  _prepareMonsterData(actorData){
    const data = actorData.data;

    // Compute combat movement
    data.movement.encounter = data.movement.base / 3;


  }

  _prepareContainerData(actorData){
    const data = actorData.data;
  }

}
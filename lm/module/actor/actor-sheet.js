/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export class LmActorSheet extends ActorSheet {

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["lm", "sheet", "actor"],
      template: "systems/lm/templates/actor/actor-sheet.html",
      width: 500,
      height: 662,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "attributtes" }]
    });
  }

  /* -------------------------------------------- */

  /** @override */
  getData() {
    const data = super.getData();
    data.config = CONFIG.LM;
    data.dtypes = ["String", "Number", "Boolean"];
    /*for (let attr of Object.values(data.data.attributes)) {
      attr.isCheckbox = attr.dtype === "Boolean";
    } */

    // Prepare items.
    if (this.actor.data.type == 'character') {
      this._prepareCharacterItems(data);
    }

    return data;
  }

  /**
   * Organize and classify Items for Character sheets.
   *
   * @param {Object} actorData The actor to prepare.
   *
   * @return {undefined}
   */
  _prepareCharacterItems(sheetData) {
    const actorData = sheetData.actor;

    // Initialize containers.
    const gear = [];
    const weapons = [];
    const containers = [];
    const armors = [];
    const consumables = [];
    const features = [];
    const occupations = [];
    const spells = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: []
    };

    

    // Iterate through items, allocating to containers
    // let totalWeight = 0;
    for (let i of sheetData.items) {
      let item = i.data;
      i.img = i.img || DEFAULT_TOKEN;
      // Append to gear.
      if (i.type === 'item') {
        gear.push(i);
      }
      if (i.type === 'weapon') {
        weapons.push(i);
      }
      if (i.type === 'armor') {
        armors.push(i);
      }
      if (i.type === 'consumable') {
        consumables.push(i);
      }
      if (i.type === "container") {
        containers.push(i);
      }
      if (i.type === "occupation") {
        occupations.push(i);
      }
      // Append to features.
      else if (i.type === 'feature') {
        features.push(i);
      }
      // Append to spells.
      else if (i.type === 'spell') {
        if (i.data.spellLevel != undefined) {
          spells[i.data.spellLevel].push(i);
        }
      }
    }

    // Assign and return
    actorData.gear = gear;
    actorData.weapons = weapons;
    actorData.armors = armors;
    actorData.consumables = consumables;
    actorData.containers = containers;
    actorData.features = features;
    actorData.occupations = occupations;
    actorData.spells = spells;
  }

  

  /* -------------------------------------------- */

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;

    function itemForClickEvent(clickEvent) {
      return $(clickEvent.currentTarget).parents(".item");
    }

    // Add Inventory Item
    html.find('.item-create').click(this._onItemCreate.bind(this));

    // Update Inventory Item
    html.find('.item-edit').click(ev => {
      const li = $(ev.currentTarget).parents(".item");
      const item = this.actor.getOwnedItem(li.data("itemId"));
      item.sheet.render(true);
    });

    // Delete Inventory Item
    html.find('.item-delete').click(ev => {
      const li = $(ev.currentTarget).parents(".item");
      this.actor.deleteOwnedItem(li.data("itemId"));
      li.slideUp(200, () => this.render(false));
    });

    // Delete Container Item
    html.find('.container-delete').click(ev => {
      const li = $(ev.currentTarget).parents(".item-titles");
      this.actor.deleteOwnedItem(li.data("itemId"));
      li.slideUp(200, () => this.render(false));
    });

    // Toggle inventory Item
    html.find(".item-toggle").click(async (ev) => {
      const li = $(ev.currentTarget).parents(".item");
      const weapons = this.actor.getOwnedItem(li.data("itemId"));
      await this.actor.updateOwnedItem({
        _id: li.data("itemId"),
        data: {
          equipped: !weapons.data.data.equipped,
        },
      });
    });
    html.find(".item-dmg").click(async (ev) => {
      const li = $(ev.currentTarget).parents(".item");
      const weapons = this.actor.getOwnedItem(li.data("itemId"));
      await this.actor.updateOwnedItem({
        _id: li.data("itemId"),
        data: {
          isDamage2: !weapons.data.data.isDamage2,
        },
      });
    });

    // Add 1 to Quantity
    html.find('.plus').click(clickEvent => {
      const shownItem = itemForClickEvent(clickEvent);
      const item = duplicate(this.actor.getEmbeddedEntity("OwnedItem", shownItem.data("itemId")));
      let amount = (event.ctrlKey || event.metaKey) ? 10 : 1;
      item.data.quantity = item.data.quantity + amount;
      this.actor.updateEmbeddedEntity('OwnedItem', item);
    });
    
    // Subtract 1 from Quantity
    html.find('.minus').click(clickEvent => {
      const shownItem = itemForClickEvent(clickEvent);
      const item = duplicate(this.actor.getEmbeddedEntity("OwnedItem", shownItem.data("itemId")));
      let amount = (event.ctrlKey || event.metaKey) ? 10 : 1;
      item.data.quantity = item.data.quantity - amount;
      this.actor.updateEmbeddedEntity('OwnedItem', item);
    });

    // Subtract 1 from Anmunition
    html.find('.spendAnmo').click(clickEvent => {
      const shownItem = itemForClickEvent(clickEvent);
      const item = duplicate(this.actor.getEmbeddedEntity("OwnedItem", shownItem.data("itemId")));
      let amount = (event.ctrlKey || event.metaKey) ? 10 : 1;
      item.data.range.anmunition.quantity = item.data.range.anmunition.quantity - amount;
      this.actor.updateEmbeddedEntity('OwnedItem', item);
    });

    // Toggle retainer
    html.find(".retainer").click(async (ev) => {
      const retainerValue = this.actor.data.data.retainer.enabled;
      this.actor.update({ "data.retainer.enabled": !retainerValue });
      this._render();
    });

    // Expand inventory.
    html.find(".item-titles .item-caret").click((ev) => {
      let items = $(ev.currentTarget.parentElement.parentElement).children(
        ".item-list"
      );
      if (items.css("display") == "none") {
        let el = $(ev.currentTarget).find(".fas.fa-caret-right");
        el.removeClass("fa-caret-right");
        el.addClass("fa-caret-down");
        items.slideDown(200);
      } else {
        let el = $(ev.currentTarget).find(".fas.fa-caret-down");
        el.removeClass("fa-caret-down");
        el.addClass("fa-caret-right");
        items.slideUp(200);
      }
    });

    // Rollable abilities.
    html.find('.rollable').click(this._onRoll.bind(this));
    html.find('.moral-check').click(this._onMoralCheck.bind(this));
    html.find('.attribute-name').click(this._onAbilityCheck.bind(this));
    html.find('.skills-pack').click(this._onSkillsCheck.bind(this));
    html.find('.hd-roll').click(this._onHdRoll.bind(this));
    html.find('.saving-throw').click(this._onSavingThrow.bind(this));
    html.find('.thac0-roll').click(this._onThac0Roll.bind(this));
   
    //inventory weapon rolls
    html.find('.dmg.roll').click(ev =>
      {
        const li = $(ev.currentTarget).parents(".item");
        const item = this.actor.getOwnedItem(li.data("itemId"));
        this._onDmgRoll(item, ev.currentTarget);
    });

    // Occupation show.
    html.find('.occupation').click( ev => {
      const occupations = this.actor.data.items.find(i => i.type == "occupation");
      if(occupations){
          const item = this.actor.getOwnedItem(occupations._id);
          item.sheet.render(true);
      }
     });
    // Drag events for macros.
    if (this.actor.owner) {
      let handler = ev => this._onDragItemStart(ev);
      html.find('li.item').each((i, li) => {
        if (li.classList.contains("inventory-header")) return;
        li.setAttribute("draggable", true);
        li.addEventListener("dragstart", handler, false);
      });
    }
  }

  /**
   * Handle creating a new Owned Item for the actor using initial data defined in the HTML dataset
   * @param {Event} event   The originating click event
   * @private
   */
  _onItemCreate(event) {
    event.preventDefault();
    const header = event.currentTarget;
    // Get the type of item to create.
    const type = header.dataset.type;
    // Grab any data associated with this control.
    const data = duplicate(header.dataset);
    // Initialize a default name.
    const name = `New ${type.capitalize()}`;
    // Prepare the item object.
    const itemData = {
      name: name,
      type: type,
      data: data
    };
    // Remove the type from the dataset since it's in the itemData.type prop.
    delete itemData.data["type"];

    // Finally, create the item!
    return this.actor.createOwnedItem(itemData);
  }

  /**
   * Handle clickable rolls.
   * @param {Event} event   The originating click event
   * @private
   */
  _onRoll(event) {
    event.preventDefault();
    const element = event.currentTarget;
    const dataset = element.dataset;

    if (dataset.roll) {
      let roll = new Roll(dataset.roll, this.actor.data.data);
      let label = dataset.label ? `Rolling ${dataset.label}` : '';
      roll.roll().toMessage({
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: label
      });
    }
  }

  _onMoralCheck(event) {
    event.preventDefault();
    const element = event.currentTarget;
    const dataset = element.dataset;

    let data = this.actor.data.data;
    let result = new Roll("2d6", data).roll();
    let needed = this.actor.data.data.retainer.moral;
    let flavor = (result.total <= needed ? '<span class="success">Éxito</span> ' : '<span class="failed">Fallo</span> ');
    let text = game.i18n.localize('LM.retainer.moralcheck') + ": ";
    result.toMessage({
      speaker: ChatMessage.getSpeaker({actor: this.actor},{text : text}),
      flavor: text + flavor,
    }, {rollMode: DICE_ROLL_MODES.BLIND});
  }

  _onAbilityCheck(event) {
    event.preventDefault();
    const element = event.currentTarget;
    const dataset = element.dataset;
    let roll = new Roll("1d6", this.actor.data.data);
    let result = roll.roll();
    let needed = this.actor.data.data.abilities[dataset.abilities].check
    let flavor = (result.total <= this.actor.data.data.abilities[dataset.abilities].check ? '<span class="success">Éxito</span> ' : '<span class="failed">Fallo</span> ');
    result.toMessage({
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor:  (dataset.label ? `${dataset.label} ` : '') + '<span class="objetive">(</span>' + needed + '<span class="objetive"> en 1d6)</span>'+ ": " + flavor
    });
    
  }

  _onSkillsCheck(event) {
    event.preventDefault();
    const element = event.currentTarget;
    const dataset = element.dataset;
    let bonus = this.actor.data.data.skills[dataset.skills].mod;
    let skb = "+" + bonus;
    let roll = new Roll("2d6" + skb, this.actor.data.data);
    let result = roll.roll();
    let needed = "9+"
    let flavor = ((result.total + bonus) >= 9  ? '<span class="success">Éxito</span> ' : '<span class="failed">Fallo</span> ');
    result.toMessage({
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor:  (dataset.label ? `${dataset.label} ` : '') + '<span class="objetive">(</span>' + needed + '<span class="objetive">)</span>' + ": " + flavor
    });
  }

  _onHdRoll(event) {
    event.preventDefault();
    const element = event.currentTarget;
    const dataset = element.dataset;
    let text = game.i18n.localize('LM.roll.hd');
    let data = this.actor.data.data;
    let hdb = "+" + data.abilities.con.mod;
    let result = new Roll(data.hp.hd + hdb, data).roll();
    result.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: text
    });
  }
  _onDmgRoll(item, eventTarget)
  {
    let data = this.actor.data.data;
    let bdmg = "";
    let text = game.i18n.localize('LM.items.damage2');
    if (item.data.data.melee || item.data.data.throw) 
    {
      bdmg = "+" + data.abilities.str.mod;
    }
    else {
      bdmg = "+" + 0;
    }
    if(eventTarget.title === text)
    {
      let r = new Roll(item.data.data.damage2 + bdmg);
      r.roll();
      let messageHeader = "<b>" + item.name + "</b> damage";
      r.toMessage({ speaker: ChatMessage.getSpeaker({ actor: this.actor }), flavor: messageHeader});
    }
    else {
      let r = new Roll(item.data.data.damage + bdmg);
      r.roll();
      let messageHeader = "<b>" + item.name + "</b> damage";
      r.toMessage({ speaker: ChatMessage.getSpeaker({ actor: this.actor }), flavor: messageHeader});
    }
  }


  _onSavingThrow(event) {
    event.preventDefault();
    const element = event.currentTarget;
    const dataset = element.dataset;
    if (! dataset.save) return;
    let bonus = 0;
    let data = this.actor.data.data;
    let result = new Roll(bonus ? `d20+${bonus}` : "d20", data).roll();
    let success = (result.total >= data.saves[dataset.save].value ? '<span class="success">Pasado</span> ' : '<span class="failed">Fallado</span> ');
    let saveName = game.i18n.localize(`${CONFIG.LM.savesCheck[dataset.save]}`);
    result.toMessage({
      speaker: ChatMessage.getSpeaker({actor: this.actor}),
      flavor: `${saveName} >= ${data.saves[dataset.save].value} ${success} `
    });
  }

  _onThac0Roll(event) {
    event.preventDefault();
    const element = event.currentTarget;
    const dataset = element.dataset;
    let data = this.actor.data.data;
    const meleemod = data.thac0.mod.melee;
    const missilemod = data.thac0.mod.missile;
    const thac0 = data.thac0.value;
    return new Promise(resolve => {
      new Dialog({
         title: game.i18n.localize('LM.attack'),
         content: `<form>
         <div class="form-group">
           <label>Modificador ataque</label>
           <input type='text' name='inputField'></input>
         </div>
        </form>`,
         buttons: {
            melee: {
              icon: '<i class="fas fa-dice-d20"></i>',
              label: game.i18n.localize('LM.melee.attack'),
              callback: (html) => {
                let attackmod = html.find('input[name=\'inputField\']');
                let mod = "+" + attackmod.val();
                let melee = "+" + meleemod;
                let result = new Roll("d20" + mod + melee, data).roll();
                let hitac = thac0 - result.total;
                result.toMessage({
                  speaker: ChatMessage.getSpeaker({actor: this.actor}),
                  flavor: `Ataque de melé da a CA:` + hitac,
                });
             }
            },
            missile: {
              icon: '<i class="fas fa-dice-d20"></i>',
              label: game.i18n.localize('LM.missile.attack'),
              callback: (html) => {
                let attackmod = html.find('input[name=\'inputField\']');
                let mod = "+" + attackmod.val();
                let missile = "+" + missilemod
                let result = new Roll("d20" + mod + missile, data).roll();
                let hitac = thac0 - result.total;
                result.toMessage({
                  speaker: ChatMessage.getSpeaker({actor: this.actor}),
                  flavor: `Ataque de distancia da a CA:` + hitac,
                });
              }
            }
         },
         default: "roll",
         close: () => resolve(null)
        }).render(true);
    });
  }
}

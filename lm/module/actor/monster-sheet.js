/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export class LmMonsterSheet extends ActorSheet {

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["lm", "sheet", "monster"],
      template: "systems/lm/templates/actor/monster-sheet.html",
      width: 460,
      height: 580,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }]
    });
  }

  /* -------------------------------------------- */

  /**
   * Monster creation helpers
   */
   async generateSave() {
    let choices = CONFIG.LM.monster_saves;

    let templateData = { choices: choices },
      dlg = await renderTemplate(
        "/systems/lm/templates/dialog/monster-saves.html",
        templateData
      );
    //Create Dialog window
    new Dialog({
      title: game.i18n.localize("LM.generateSaves"),
      content: dlg,
      buttons: {
        ok: {
          label: game.i18n.localize("LM.Ok"),
          icon: '<i class="fas fa-check"></i>',
          callback: (html) => {
            let hd = html.find('input[name="hd"]').val();
            this.actor.generateSave(hd);
          },
        },
        cancel: {
          icon: '<i class="fas fa-times"></i>',
          label: game.i18n.localize("LM.Cancel"),
        },
      },
      default: "ok",
    }, {
      width: 250
    }).render(true);
  }

  /** @override */
  getData() {
    const data = super.getData();
    data.dtypes = ["String", "Number", "Boolean"];

    // Prepare items.
    if (this.actor.data.type == 'monster') {
      this._prepareMonsterItems(data);
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
  _prepareMonsterItems(sheetData) {
    const actorData = sheetData.actor;

    // Initialize containers.
    const gear = [];
    const weapons = [];
    const containers = [];
    const armors = [];
    const consumables = [];
    const features = [];
    const spells = {
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
      // Append to features.
      else if (i.type === 'feature') {
        features.push(i);
      }
      // Append to spells.
      else if (i.type === 'spell') {
        if (i.data.lvl != undefined) {
          spells[i.data.lvl].push(i);
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
    actorData.spells = spells;

    this.actor.items.forEach(it => {
      if (it.type === 'container') {
          actorData.containers[it._id] = it;
      }
   });
  }

  /* -------------------------------------------- */
  async _chooseItemType(choices = ["weapon", "armor", "shield", "consumable","gear"]) {
    let templateData = { types: choices },
      dlg = await renderTemplate(
        "systems/lm/templates/item/entity-create.html",
        templateData
      );
    //Create Dialog window
    return new Promise((resolve) => {
      new Dialog({
        title: game.i18n.localize("LM.dialog.createItem"),
        content: dlg,
        buttons: {
          ok: {
            label: game.i18n.localize("LM.Ok"),
            icon: '<i class="fas fa-check"></i>',
            callback: (html) => {
              resolve({
                type: html.find('select[name="type"]').val(),
                name: html.find('input[name="name"]').val(),
              });
            },
          },
          cancel: {
            icon: '<i class="fas fa-times"></i>',
            label: game.i18n.localize("LM.Cancel"),
          },
        },
        default: "ok",
      }).render(true);
    });
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;

    // Roll monster hp
    html.find(".hd-roll").click((ev) => {
      let actorObject = this.actor;
      actorObject.rollHP({ event: ev });
    });

    html.find('.moral-check').click(this._onMoralCheck.bind(this));
    html.find('.surprise-check').click(this._onSurpriseRoll.bind(this));
    html.find('.reaction-check').click(this._onReactionRoll.bind(this));

    html.find(".appearing-check").click((ev) => {
      let actorObject = this.actor;
      let check = $(ev.currentTarget).closest('.check-field').data('check');
      actorObject.rollAppearing({ event: event, check: check });
    });

    // Add Inventory Item
    html.find(".item-create").click((event) => {
      event.preventDefault();
      const header = event.currentTarget;
      const type = header.dataset.type;

      // item creation helper func
      let createItem = function (type, name = `New ${type.capitalize()}`) {
        const itemData = {
          name: name ? name : `New ${type.capitalize()}`,
          type: type,
          data: duplicate(header.dataset),
        };
        delete itemData.data["type"];
        return itemData;
      };

      // Getting back to main logic
      if (type == "choice") {
        const choices = header.dataset.choices.split(",");
        this._chooseItemType(choices).then((dialogInput) => {
          const itemData = createItem(dialogInput.type, dialogInput.name);
          this.actor.createOwnedItem(itemData, {});
        });
        return;
      }
      const itemData = createItem(type);
      return this.actor.createOwnedItem(itemData, {});
    });

    html.find(".item-reset").click((ev) => {
      this._resetCounters(ev);
    });

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

    // Rollable abilities.
    html.find('.rollable').click(this._onRoll.bind(this));

    // Drag events for macros.
    if (this.actor.owner) {
      let handler = ev => this._onDragItemStart(ev);
      html.find('li.item').each((i, li) => {
        if (li.classList.contains("inventory-header")) return;
        li.setAttribute("draggable", true);
        li.addEventListener("dragstart", handler, false);
      });
    }

    // Generate Saves
    html.find('.monsterSaves').click(() => this.generateSave());
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

  _onSurpriseRoll(event) {
    event.preventDefault();
    const element = event.currentTarget;
    const dataset = element.dataset;
    let data = this.actor.data.data;
    const surpriseMod = data.surprise.mod;
    const surprise = data.surprise.value;
    return new Promise(resolve => {
      new Dialog({
         title: game.i18n.localize('LM.surprisename'),
         content: `<form>
         <div class="form-group">
           <label>Modificador sorpresa</label>
           <input type='text' name='inputField'></input>
         </div>
        </form>`,
         buttons: {
            normal: {
              icon: '<i class="fas fa-dice-d6"></i>',
              label: game.i18n.localize('LM.roll.normal'),
              callback: (html) => {
                let surpriseMod2 = html.find('input[name=\'inputField\']');
                let mod2 = "+" + surpriseMod2.val();
                let mod = "+" + surpriseMod;
                let result = new Roll("d6" + mod + mod2, data).roll();
                let surprised = (result.total <= surprise ? '<span class="failed">¡Sorprendido!</span> ' : '<span class="success">No sorprendido</span> ');
                result.toMessage({
                  speaker: ChatMessage.getSpeaker({actor: this.actor}),
                  flavor: surprised,
                });
             }
            },
            disadvantage: {
              icon: '<i class="fas fa-dice"></i>',
              label: game.i18n.localize('LM.roll.disadvantage'),
              callback: (html) => {
                let surpriseMod2 = html.find('input[name=\'inputField\']');
                let mod2 = "+" + surpriseMod2.val();
                let mod = "+" + surpriseMod;
                let result = new Roll("2d6dh" + mod + mod2, data).roll();
                let surprised = (result.total <= surprise ? '<span class="failed">¡Sorprendido!</span> ' : '<span class="success">No sorprendido</span> ');
                result.toMessage({
                  speaker: ChatMessage.getSpeaker({actor: this.actor}),
                  flavor: surprised,
                });
              }
            }
         },
         default: "roll",
         close: () => resolve(null)
        }).render(true);
    });
  }

  _onReactionRoll(event) {
    event.preventDefault();
    const element = event.currentTarget;
    const dataset = element.dataset;
    let data = this.actor.data.data;
    return new Promise(resolve => {
      new Dialog({
         title: game.i18n.localize('LM.reactionRoll'),
         content: `<form>
         <div class="form-group">
           <label>Modificador reacción</label>
           <input type='text' name='inputField'></input>
         </div>
        </form>`,
         buttons: {
            contract: {
              icon: '<i class="fas fa-dice"></i>',
              label: game.i18n.localize('LM.contract'),
              callback: (html) => {
                let reactionMod2 = html.find('input[name=\'inputField\']');
                let mod2 = "+" + reactionMod2.val();
                let result = new Roll("2d6" + mod2, data).roll();
                let reaction = "";
                let control = result.total;
                if (control <= 2) {
                  control = 2;
                }
                switch (control) {
                  case 2:
                    reaction = game.i18n.localize('LM.refusedPlus');
                    break;
                  case 3:
                  case 4:
                  case 5:
                    reaction = game.i18n.localize('LM.refused');
                    break;
                  case 6:
                  case 7:
                  case 8:
                    reaction = game.i18n.localize('LM.undecided');
                    break;
                  case 9:
                  case 10:
                  case 11:
                    reaction = game.i18n.localize('LM.accepted');
                    break;
                  default:
                    reaction = game.i18n.localize('LM.acceptedPlus');
                }
                result.toMessage({
                  speaker: ChatMessage.getSpeaker({actor: this.actor}),
                  flavor: reaction,
                });
             }
            },
            reaction: {
              icon: '<i class="fas fa-dice"></i>',
              label: game.i18n.localize('LM.reaction'),
              callback: (html) => {
                let reactionMod2 = html.find('input[name=\'inputField\']');
                let mod2 = "+" + reactionMod2.val();
                let result = new Roll("2d6" + mod2, data).roll();
                let reaction = "";
                let control = result.total;
                if (control <= 2) {
                  control = 2;
                }
                switch (control) {
                  case 2:
                    reaction = game.i18n.localize('LM.hostilePlus');
                    break;
                  case 3:
                  case 4:
                  case 5:
                    reaction = game.i18n.localize('LM.hostile');
                    break;
                  case 6:
                  case 7:
                  case 8:
                    reaction = game.i18n.localize('LM.undecidedNormal');
                    break;
                  case 9:
                  case 10:
                  case 11:
                    reaction = game.i18n.localize('LM.indiferent');
                    break;
                  default:
                    reaction = game.i18n.localize('LM.friendly');
                }
                result.toMessage({
                  speaker: ChatMessage.getSpeaker({actor: this.actor}),
                  flavor: reaction,
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

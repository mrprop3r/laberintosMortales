/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export class LmContainerSheet extends ActorSheet {

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["lm", "sheet", "actor"],
      template: "systems/lm/templates/actor/container-sheet.html",
      width: 500,
      height: 600,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }]
    });
  }

  /* -------------------------------------------- */

  /** @override */
  getData() {
    const data = super.getData();
    data.dtypes = ["String", "Number", "Boolean"];

    // Prepare items.
    if (this.actor.data.type == 'container') {
      this._prepareContainerItems(data);
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
  _prepareContainerItems(sheetData) {
    const actorData = sheetData.actor;

    // Initialize containers.
    const gear = [];
    const features = [];
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
    actorData.features = features;
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

    // Add turn hour
    html.find(".turnplus").click(async (ev) => {
      let newValue = this.actor.data.data.time.turn + 1;
      if ( newValue == 2) {
        ui.notifications.error(game.i18n.localize("LM.encounterCheck"));
      }
      if ( newValue == 4) {
        ui.notifications.error(game.i18n.localize("LM.encounterCheck"));
      }
      if ( newValue == 6) {
        ui.notifications.error(game.i18n.localize("LM.encounterCheck"));
      }
      if  (newValue == 7) {
        newValue = 1;
        ui.notifications.error(game.i18n.localize("LM.torch"));
        this.actor.update({ 
          data: {
            time: {
              turn: newValue,
              hour : this.actor.data.data.time.hour + newValue,
            },
          },
        })
      }
      this.actor.update({ 
          data: {
            time: {
              turn: newValue,
            },
          },
        })
      this._render();
    });

    html.find(".hourplus").click(async (ev) => {
      let hourValue = this.actor.data.data.time.hour + 1;
      if  (hourValue == 24) {
        hourValue = 0;
        ui.notifications.error(game.i18n.localize("LM.eat"));
      }
      this.actor.update({ 
          data: {
            time: {
              hour: hourValue,
            },
          },
        })
      this._render();
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

    // Toggle gm
    html.find(".gm-toggle").click(async (ev) => {
    const gmValue = this.actor.data.data.gm;
    this.actor.update({ 
      "data.gm": !gmValue,
      "data.group": gmValue,
      "data.object": gmValue,
      "data.shop": gmValue,
     });
    this._render();
    });

    // Toggle group
    html.find(".group-toggle").click(async (ev) => {
    const groupValue = this.actor.data.data.group;
    this.actor.update({ 
      "data.group": !groupValue,
      "data.gm": groupValue,
      "data.object": groupValue,
      "data.shop": groupValue,
     });
    this._render();
    });

    // Toggle object
    html.find(".object-toggle").click(async (ev) => {
      const objectValue = this.actor.data.data.object;
      this.actor.update({ 
        "data.object": !objectValue,
        "data.group": objectValue,
        "data.gm": objectValue,
        "data.shop": objectValue,
     });
      this._render();
      });

    // Toggle shop
    html.find(".shop-toggle").click(async (ev) => {
      const shopValue = this.actor.data.data.shop;
      this.actor.update({ 
        "data.shop": !shopValue,
        "data.group": shopValue,
        "data.gm": shopValue,
        "data.object": shopValue,
       });
      this._render();
      });

    // Toggle magicUser
    html.find(".magic-toggle").click(async (ev) => {
      const magicValue = this.actor.data.data.magicUser;
      this.actor.update({ "data.magicUser": !magicValue });
      this._render();
      });
      
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

}

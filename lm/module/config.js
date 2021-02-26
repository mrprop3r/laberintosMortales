export const LM = {
    actorClass : {
        lvl0: "Level0",
        ass: "Assasin",
        bar: "Bard",
        bld: "Bladedancer",
        cl: "Cleric",
        elfn: "ElfNightblade",
        elf: "Elf",
        dw: "Dwarf",
        dwp: "DwarfPriest",
        ran: "Ranger",
        ftr: "Fighter",
        hal: "Halfling",
        th: "Thief",
        mag: "Mage",
    },
    classDetails : {
        lvl0: {
            img: "/systems/lm/assets/class/swordman.svg",
            requeriment: "LM.requeriment.level0",
            principalAbility: "LM.principalAbility.level0",
            hd: "1d4",
            weaponsUse: "LM.weaponUse.level0",
            weaponStyle: "LM.weaponStyle.level0",
            armorUse: "LM.armorUse.level0",
            languagesKnow: [ "LM.lan.common" ],
            skillsPoints : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            backstab: {
                value: false,
                level: 0
            },
            title: [ "Aspirante", "Hombre de Armas", "Luchador", "Maestro de Espadas", "Héroe", "Bravucón", "Mirmidón", "Campeón", "Héroe Épico", "Señor de la Guerra", "Señor de la Guerra", "Señor de la Guerra", "Señor de la Guerra", "Señor de la Guerra", "Jefe Supremo" ],
            thac0: [ 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6 ],
            dmgBonusm: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            dmgBonusp: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            xpn: [ 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100 ],
            saves: {
                death: [ 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7, 7, 6, 5 ],
                wand: [17, 16, 15, 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7 ],
                paralysis: [16, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 9, 8, 7, 6 ],
                breath: [17, 16, 15, 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7 ],
                spell: [18, 17, 16, 16, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 8 ]
            },
            god: {
                yes: false,
                worship: "",
                turnUndead: {
                    "1": [ 20, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1 ],
                    "2": [ 20, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1 ],
                    "3": [ 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1 ],
                    "4": [ 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1 ],
                    "5": [ 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1 ],
                    "6": [ 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1 ],
                    "7": [ 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1 ],
                    "8": [ 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1 ],
                    "9": [ 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2 ],
                    "10+": [ 20, 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2 ],
                }
            },
            magic: {
                yes: false,
            }
        },
        ass: {
            img: "/systems/lm/assets/class/bloody-sword.svg",
            requeriment: "LM.requeriment.level0",
            principalAbility: "LM.principalAbility.assasin",
            hd: "1d6",
            weaponsUse: "LM.weaponUse.level0",
            weaponStyle: "LM.weaponStyle.assasin",
            armorUse: "LM.armorUse.level0",
            skillsPoints : [ 0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ],
            languagesKnow: [ "LM.lan.common" ],
            backstab: {
                value: true,
                level: 1,
                hitBonus: [ 0, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
                dmgBonusback: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
            },
            title: [ "Aspirante", "Thug", "Ejecutor", "Torturador", "Exterminador", "Destructor", "Verdugo", "Canalla", "Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Padrino de Asesinos" ],
            thac0: [ 20, 19, 18, 18, 17, 16, 16, 15, 14, 14, 13, 12, 12, 11, 10 ],
            dmgBonusm: [ 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5 ],
            dmgBonusp: [ 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5 ],
            xpn: [ 100, 1701, 3401, 6801, 14001, 28001, 55001, 110001, 230001, 3500001, 470001, 590001, 710001, 830001, 830001 ],
            saves: {
                death: [ 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7, 7, 6, 5 ],
                wand: [17, 16, 15, 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7 ],
                paralysis: [16, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 9, 8, 7, 6 ],
                breath: [17, 16, 15, 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7 ],
                spell: [18, 17, 16, 16, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 8 ]
            },
            god: {
                yes: false,
                worship: "",
                turnUndead: {
                    "1": [ 20, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1 ],
                    "2": [ 20, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1 ],
                    "3": [ 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1 ],
                    "4": [ 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1 ],
                    "5": [ 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1 ],
                    "6": [ 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1 ],
                    "7": [ 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1 ],
                    "8": [ 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1 ],
                    "9": [ 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2 ],
                    "10+": [ 20, 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2 ],
                }
            },
            magic: {
                yes: false,
            }
        },
        bar: {
            img: "/systems/lm/assets/class/shouting.svg",
            hd: "1d6",
            requeriment: "LM.requeriment.level0",
            principalAbility: "LM.principalAbility.bard",
            hd: "1d6",
            weaponsUse: "LM.weaponUse.level0",
            weaponStyle: "LM.weaponStyle.bard",
            armorUse: "LM.armorUse.bard",
            skillsPoints : [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
            languagesKnow: [ "LM.lan.common" ],
            backstab: {
                value: false,
                level: 0
            },
            title: [ "Recitador", "Versificador", "Archivista", "Analista", "Cronista", "Panegirista", "Poeta", "Rapsodista", "Bardo", "Bardo", "Bardo", "Bardo", "Bardo", "Bardo", "Maestro Bardo" ],
            thac0: [ 20, 19, 19, 18, 18, 17, 17, 16, 16, 15, 15, 14, 14, 13, 13 ],
            dmgBonusm: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            dmgBonusp: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            xpn: [ 100, 1401, 2801, 5601, 11201, 22401, 45001, 90001, 190001, 2900001, 390001, 490001, 590001, 690001, 690001 ],
            saves: {
                death: [ 15, 13, 13, 12, 12, 11, 11, 10, 10, 9, 9, 8, 8, 7, 7 ],
                wand: [17, 14, 14, 13, 13, 12, 12, 11, 11, 10, 10, 9, 9, 8, 8 ],
                paralysis: [16, 13, 13, 12, 12, 11, 11, 10, 10, 9, 9, 8, 8, 7, 7 ],
                breath: [17, 16, 16, 15, 15, 14, 14, 13, 13, 12, 12, 11, 11, 10, 10 ],
                spell: [18, 15, 15, 14, 14, 13, 13, 12, 12, 11, 11, 10, 10, 9, 9 ]
            },
            god: {
                yes: false,
                worship: "",
                turnUndead: {
                    "1": [ 20, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1 ],
                    "2": [ 20, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1 ],
                    "3": [ 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1 ],
                    "4": [ 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1 ],
                    "5": [ 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1 ],
                    "6": [ 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1 ],
                    "7": [ 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1 ],
                    "8": [ 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1 ],
                    "9": [ 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2 ],
                    "10+": [ 20, 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2 ],
                }
            },
            magic: {
                yes: false,
            }
        },
        bld: {
            img: "/systems/lm/assets/class/dervish-swords.svg",
            requeriment: "LM.requeriment.level0",
            principalAbility: "LM.principalAbility.bladedancer",
            hd: "1d6",
            weaponsUse: "LM.weaponUse.bladedancer",
            weaponStyle: "LM.weaponStyle.bladedancer",
            armorUse: "LM.armorUse.bladedancer",
            skillsPoints : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            languagesKnow: [ "LM.lan.common" ],
            backstab: {
                value: false,
                level: 0
            },
            title: [ "Iniciada-filo", "Hija-filo", "Cantarina-filo", "Tejedora-filo", "Hermana-filo", "Adepta-filo", "Danzarina-filo", "Sacerdotisa-filo", "Dama-filo", "Dama-filo", "Dama-filo", "Dama-filo", "Dama-filo", "Dama-filo", "Dama-todo filo" ],
            thac0: [ 20, 19, 19, 18, 18, 17, 17, 16, 16, 15, 15, 14, 14, 13, 13 ],
            dmgBonusm: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            dmgBonusp: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            iniBonus: {
                yes: true,
                value: 1
            },
            acBonus: {
                yes: true,
                value: [ 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3 ]
            },
            xpn: [ 100, 1565, 3125, 6251, 12501, 25001, 50001, 100001, 200001, 3000001, 400001, 500001, 600001, 700001, 700001 ],
            saves: {
                death: [ 15, 10, 10, 9, 9, 8, 8, 7, 7, 6, 6, 5, 5, 4, 4 ],
                wand: [17, 13, 13, 12, 12, 11, 11, 10, 10, 9, 9, 8, 8, 7, 7 ],
                paralysis: [16, 13, 13, 12, 12, 11, 11, 10, 10, 9, 9, 8, 8, 7, 7 ],
                breath: [17, 16, 16, 15, 15, 14, 14, 13, 13, 12, 12, 11, 11, 10, 10 ],
                spell: [18, 15, 15, 14, 14, 13, 13, 12, 12, 11, 11, 10, 10, 9, 9 ]
            },
            god: {
                yes: true,
                worship: "",
                turnUndead: {
                    "1": [ 20, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1 ],
                    "2": [ 20, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1 ],
                    "3": [ 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1 ],
                    "4": [ 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1 ],
                    "5": [ 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1 ],
                    "6": [ 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1 ],
                    "7": [ 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1 ],
                    "8": [ 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1 ],
                    "9": [ 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2 ],
                    "10+": [ 20, 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2 ],
                }
            },
            magic: {
                yes: true,
                spellsLevel: {
                    1: [ 0, 2, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6 ],
                    2: [ 0, 0, 0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5 ],
                    3: [ 0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5 ],
                    4: [ 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 3, 4, 5 ],
                    5: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 4 ],
                }
            }
        },
        cl: {
            img: "/systems/lm/assets/class/holy-symbol.svg",
            requeriment: "LM.requeriment.level0",
            principalAbility: "LM.principalAbility.cleric",
            hd: "1d6",
            weaponsUse: {
                legal: "LM.weaponUse.clericL",
                neutral: "LM.weaponUse.clericN",
                chaotic: "LM.weaponUse.clericC",
            },
            weaponStyle: "LM.weaponStyle.level0",
            armorUse: "LM.armorUse.level0",
            skillsPoints : [ 0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ],
            languagesKnow: [ "LM.lan.common" ],
            backstab: {
                value: false,
                level: 0,
                hitbonus: [ 0, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
                dmgbonusback: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
            },
            title: [ "Aspirante", "Acólito", "Adepto", "Sacerdote", "Curandero", "Vicario", "Rector", "Prelado", "Obispo", "Patriarca", "Patriarca 10º", "Patriarca 11º", "Patriarca 12º", "Patriarca 13º", "Teócrata" ],
            thac0: [ 20, 19, 19, 18, 18, 17, 17, 16, 16, 15, 15, 14, 14, 13, 13 ],
            xpn: [ 100, 1565, 3125, 6251, 12501, 25001, 50001, 100001, 200001, 300001, 400001, 500001, 600001, 700001, 700001 ],
            saves: {
                death: [ 15, 10, 10, 9, 9, 8, 8, 7, 7, 6, 6, 5, 5, 4, 4 ],
                wand: [17, 13, 13, 12, 12, 11, 11, 10, 10, 9, 9, 8, 8, 7, 7 ],
                paralysis: [16, 13, 13, 12, 12, 11, 11, 10, 10, 9, 9, 8, 8, 7, 7 ],
                breath: [17, 16, 16, 15, 15, 14, 14, 13, 13, 12, 12, 11, 11, 10, 10 ],
                spell: [18, 15, 15, 14, 14, 13, 13, 12, 12, 11, 11, 10, 10, 9, 9 ]
            },
            god: {
                yes: true,
                worship: "",
                turnUndead: {
                    "1": [ 20, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1 ],
                    "2": [ 20, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1 ],
                    "3": [ 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1 ],
                    "4": [ 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1 ],
                    "5": [ 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1 ],
                    "6": [ 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1 ],
                    "7": [ 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1 ],
                    "8": [ 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1 ],
                    "9": [ 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2 ],
                    "10+": [ 20, 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2 ],
                }
            },
            magic: {
                yes: true,
                spellsLevel: {
                    1: [ 0, 2, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6 ],
                    2: [ 0, 0, 0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5 ],
                    3: [ 0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5 ],
                    4: [ 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 3, 4, 5 ],
                    5: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 4 ],
                }
            }
        },
        elfn: {
            img: "/systems/lm/assets/class/elf-helmet.svg",
            requeriment: "LM.requeriment.level0",
            principalAbility: "LM.principalAbility.nightblade",
            hd: "1d6",
            weaponsUse: "LM.weaponUse.nightblade",
            weaponStyle: "LM.weaponStyle.nightblade",
            armorUse: "LM.armorUse.nightblade",
            skillsPoints : [ 0, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ],
            languagesKnow: [ "LM.lan.common", "LM.lan.elfish", "LM.lan.gnoll", "LM.lan.hobgoblin", "LM.lan.orc" ],
            backstab: {
                value: false,
                level: 0,
                hitbonus: [ 0, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
                dmgbonusback: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
            },
            title: [ "Aspirante", "Thug", "Ejecutor", "Torturador", "Exterminador", "Destructor", "Verdugo", "Canalla", "Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Padrino de Asesinos" ],
            thac0: [ 20, 19, 18, 18, 17, 16, 16, 15, 14, 14, 13, 12, 12, 11, 10 ],
            dmgbonusm: [ 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
            dmgbonusp: [ 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
            xpn: [ 100, 1701, 3401, 6801, 14001, 28001, 55001, 110001, 230001, 3500001, 470001, 590001, 710001, 830001, 830001 ],
            saves: {
                death: [ 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7, 7, 6, 5 ],
                wand: [17, 16, 15, 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7 ],
                paralysis: [16, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 9, 8, 7, 6 ],
                breath: [17, 16, 15, 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7 ],
                spell: [18, 17, 16, 16, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 8 ]
            },
            god: {
                yes: false,
                worship: "",
                turnUndead: {
                    "1": [ 20, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1 ],
                    "2": [ 20, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1 ],
                    "3": [ 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1 ],
                    "4": [ 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1 ],
                    "5": [ 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1 ],
                    "6": [ 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1 ],
                    "7": [ 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1 ],
                    "8": [ 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1 ],
                    "9": [ 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2 ],
                    "10+": [ 20, 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2 ],
                }
            },
            magic: {
                yes: true,
                spellsLevel: {
                    1: [ 0, 2, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6 ],
                    2: [ 0, 0, 0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5 ],
                    3: [ 0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5 ],
                    4: [ 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 3, 4, 5 ],
                    5: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 4 ],
                }
            }
        },
        elf: {
            img: "/systems/lm/assets/class/elf-ear.svg",
            requeriment: "LM.requeriment.elf",
            principalAbility: "LM.principalAbility.elf",
            hd: "1d6",
            weaponsUse: "LM.weaponUse.level0",
            weaponStyle: "LM.weaponStyle.elf",
            armorUse: "LM.armorUse.level0",
            skillsPoints : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            languagesKnow: [ "LM.lan.common", "LM.lan.elfish", "LM.lan.gnoll", "LM.lan.hobgoblin", "LM.lan.orc" ],           languagesKnow: [ "LM.lan.common" ],
            backstab: {
                value: false,
                level: 0,
                hitbonus: [ 0, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
                dmgbonusback: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
            },
            title: [ "Aspirante", "Thug", "Ejecutor", "Torturador", "Exterminador", "Destructor", "Verdugo", "Canalla", "Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Padrino de Asesinos" ],
            thac0: [ 20, 19, 18, 18, 17, 16, 16, 15, 14, 14, 13, 12, 12, 11, 10 ],
            dmgbonusm: [ 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
            dmgbonusp: [ 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
            xpn: [ 100, 1701, 3401, 6801, 14001, 28001, 55001, 110001, 230001, 3500001, 470001, 590001, 710001, 830001, 830001 ],
            saves: {
                death: [ 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7, 7, 6, 5 ],
                wand: [17, 16, 15, 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7 ],
                paralysis: [16, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 9, 8, 7, 6 ],
                breath: [17, 16, 15, 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7 ],
                spell: [18, 17, 16, 16, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 8 ]
            },
            god: {
                yes: false,
                worship: "",
                turnUndead: {
                    "1": [ 20, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1 ],
                    "2": [ 20, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1 ],
                    "3": [ 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1 ],
                    "4": [ 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1 ],
                    "5": [ 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1 ],
                    "6": [ 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1 ],
                    "7": [ 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1 ],
                    "8": [ 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1 ],
                    "9": [ 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2 ],
                    "10+": [ 20, 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2 ],
                }
            },
            magic: {
                yes: true,
                spellsLevel: {
                    1: [ 0, 2, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6 ],
                    2: [ 0, 0, 0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5 ],
                    3: [ 0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5 ],
                    4: [ 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 3, 4, 5 ],
                    5: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 4 ],
                }
            }
        },
        dw: {
            img: "/systems/lm/assets/class/dwarf-helmet.svg",
            requeriment: "LM.requeriment.dwarf",
            principalAbility: "LM.principalAbility.dwarf",
            hd: "1d8",
            weaponsUse: "LM.weaponUse.dwarf",
            weaponStyle: "LM.weaponStyle.dwarf",
            armorUse: "LM.armorUse.level0",
            skillsPoints : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            languagesKnow: [ "LM.lan.common", "LM.lan.dwarf", "LM.lan.goblin", "LM.lan.gnome", "LM.lan.kobold" ],
            backstab: {
                value: false,
                level: 0,
                hitbonus: [ 0, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
                dmgbonusback: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
            },
            title: [ "Aspirante", "Thug", "Ejecutor", "Torturador", "Exterminador", "Destructor", "Verdugo", "Canalla", "Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Padrino de Asesinos" ],
            thac0: [ 20, 19, 18, 18, 17, 16, 16, 15, 14, 14, 13, 12, 12, 11, 10 ],
            dmgbonusm: [ 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
            dmgbonusp: [ 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
            xpn: [ 100, 1701, 3401, 6801, 14001, 28001, 55001, 110001, 230001, 3500001, 470001, 590001, 710001, 830001, 830001 ],
            saves: {
                death: [ 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7, 7, 6, 5 ],
                wand: [17, 16, 15, 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7 ],
                paralysis: [16, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 9, 8, 7, 6 ],
                breath: [17, 16, 15, 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7 ],
                spell: [18, 17, 16, 16, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 8 ]
            },
            god: {
                yes: false,
                worship: "",
                turnUndead: {
                    "1": [ 20, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1 ],
                    "2": [ 20, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1 ],
                    "3": [ 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1 ],
                    "4": [ 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1 ],
                    "5": [ 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1 ],
                    "6": [ 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1 ],
                    "7": [ 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1 ],
                    "8": [ 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1 ],
                    "9": [ 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2 ],
                    "10+": [ 20, 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2 ],
                }
            },
            magic: {
                yes: false,
            }
        },
        dwp: {
            img: "/systems/lm/assets/class/dwarf-face.svg",
            requeriment: "LM.requeriment.dwarf",
            principalAbility: "LM.principalAbility.dwarfpriest",
            hd: "1d6",
            weaponsUse: "LM.weaponUse.dwarfpriest",
            weaponStyle: "LM.weaponStyle.dwarfpriest",
            armorUse: "LM.armorUse.level0",
            skillsPoints : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            languagesKnow: [ "LM.lan.common", "LM.lan.dwarf", "LM.lan.goblin", "LM.lan.gnome", "LM.lan.kobold" ],           languagesKnow: [ "LM.lan.common" ],
            backstab: {
                value: false,
                level: 0,
                hitbonus: [ 0, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
                dmgbonusback: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
            },
            title: [ "Aspirante", "Thug", "Ejecutor", "Torturador", "Exterminador", "Destructor", "Verdugo", "Canalla", "Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Padrino de Asesinos" ],
            thac0: [ 20, 19, 18, 18, 17, 16, 16, 15, 14, 14, 13, 12, 12, 11, 10 ],
            dmgbonusm: [ 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
            dmgbonusp: [ 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
            xpn: [ 100, 1701, 3401, 6801, 14001, 28001, 55001, 110001, 230001, 3500001, 470001, 590001, 710001, 830001, 830001 ],
            saves: {
                death: [ 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7, 7, 6, 5 ],
                wand: [17, 16, 15, 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7 ],
                paralysis: [16, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 9, 8, 7, 6 ],
                breath: [17, 16, 15, 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7 ],
                spell: [18, 17, 16, 16, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 8 ]
            },
            god: {
                yes: true,
                worship: "",
                turnUndead: {
                    "1": [ 20, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1 ],
                    "2": [ 20, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1 ],
                    "3": [ 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1 ],
                    "4": [ 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1 ],
                    "5": [ 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1 ],
                    "6": [ 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1 ],
                    "7": [ 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1 ],
                    "8": [ 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1 ],
                    "9": [ 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2 ],
                    "10+": [ 20, 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2 ],
                }
            },
            magic: {
                yes: true,
                spellsLevel: {
                    1: [ 0, 2, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6 ],
                    2: [ 0, 0, 0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5 ],
                    3: [ 0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5 ],
                    4: [ 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 3, 4, 5 ],
                    5: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 4 ],
                }
            }
        },
        ran: {
            img: "/systems/lm/assets/class/maple-leaf.svg",
            requeriment: "LM.requeriment.level0",
            principalAbility: "LM.principalAbility.ranger",
            hd: "1d6",
            weaponsUse: "LM.weaponUse.ranger",
            weaponStyle: "LM.weaponStyle.ranger",
            armorUse: "LM.armorUse.ranger",
            skillsPoints : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            languagesKnow: [ "LM.lan.common" ],
            backstab: {
                value: false,
                level: 0,
                hitbonus: [ 0, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
                dmgbonusback: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
            },
            title: [ "Aspirante", "Thug", "Ejecutor", "Torturador", "Exterminador", "Destructor", "Verdugo", "Canalla", "Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Padrino de Asesinos" ],
            thac0: [ 20, 19, 18, 18, 17, 16, 16, 15, 14, 14, 13, 12, 12, 11, 10 ],
            dmgbonusm: [ 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
            dmgbonusp: [ 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
            xpn: [ 100, 1701, 3401, 6801, 14001, 28001, 55001, 110001, 230001, 3500001, 470001, 590001, 710001, 830001, 830001 ],
            saves: {
                death: [ 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7, 7, 6, 5 ],
                wand: [17, 16, 15, 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7 ],
                paralysis: [16, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 9, 8, 7, 6 ],
                breath: [17, 16, 15, 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7 ],
                spell: [18, 17, 16, 16, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 8 ]
            },
            god: {
                yes: false,
                worship: "",
                turnUndead: {
                    "1": [ 20, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1 ],
                    "2": [ 20, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1 ],
                    "3": [ 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1 ],
                    "4": [ 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1 ],
                    "5": [ 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1 ],
                    "6": [ 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1 ],
                    "7": [ 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1 ],
                    "8": [ 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1 ],
                    "9": [ 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2 ],
                    "10+": [ 20, 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2 ],
                }
            },
            magic: {
                yes:false,
            }
        },
        ftr: {
            img: "/systems/lm/assets/class/brutal-helm.svg",
            requeriment: "LM.requeriment.level0",
            principalAbility: "LM.principalAbility.fighter",
            hd: "1d8",
            weaponsUse: "LM.weaponUse.level0",
            weaponStyle: "LM.weaponStyle.level0",
            armorUse: "LM.armorUse.level0",
            skillsPoints : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            languagesKnow: [ "LM.lan.common" ],
            backstab: {
                value: false,
                level: 0,
                hitbonus: [ 0, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
                dmgbonusback: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
            },
            title: [ "Aspirante", "Hombre de Armas", "Luchador", "Maestro de Espadas", "Héroe", "Bravucón", "Mirmidón", "Campeón", "Héroe Épico", "Señor de la Guerra", "Señor de la Guerra", "Señor de la Guerra", "Señor de la Guerra", "Señor de la Guerra", "Jefe Supremo" ],
            thac0: [ 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6 ],
            xpn: [ 100, 2035, 4065, 8125, 16251, 32501, 65001, 130001, 250001, 370001, 490001, 610001, 730001, 850001, 850001 ],
            saves: {
                death: [ 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7, 7, 6, 5 ],
                wand: [17, 16, 15, 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7 ],
                paralysis: [16, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 9, 8, 7, 6 ],
                breath: [17, 16, 15, 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7 ],
                spell: [18, 17, 16, 16, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 8 ]
            },
            god: {
                yes: false,
                worship: "",
                turnUndead: {
                    "1": [ 20, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1 ],
                    "2": [ 20, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1 ],
                    "3": [ 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1 ],
                    "4": [ 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1 ],
                    "5": [ 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1 ],
                    "6": [ 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1 ],
                    "7": [ 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1 ],
                    "8": [ 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1 ],
                    "9": [ 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2 ],
                    "10+": [ 20, 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2 ],
                }
            },
            magic: {
                yes: false,
            }
        },
        hal: {
            img: "/systems/lm/assets/class/hobbit-door.svg",
            requeriment: "LM.requeriment.level0",
            principalAbility: "LM.principalAbility.halfling",
            hd: "1d6",
            weaponsUse: "LM.weaponUse.halfling",
            weaponStyle: "LM.weaponStyle.halfling",
            armorUse: "LM.armorUse.level0",
            skillsPoints : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            languagesKnow: [ "LM.lan.common", "LM.lan.halfling" ],
            backstab: {
                value: false,
                level: 0,
                hitbonus: [ 0, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
                dmgbonusback: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
            },
            title: [ "Aspirante", "Thug", "Ejecutor", "Torturador", "Exterminador", "Destructor", "Verdugo", "Canalla", "Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Padrino de Asesinos" ],
            thac0: [ 20, 19, 18, 18, 17, 16, 16, 15, 14, 14, 13, 12, 12, 11, 10 ],
            dmgbonusm: [ 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
            dmgbonusp: [ 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
            xpn: [ 100, 1701, 3401, 6801, 14001, 28001, 55001, 110001, 230001, 3500001, 470001, 590001, 710001, 830001, 830001 ],
            saves: {
                death: [ 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7, 7, 6, 5 ],
                wand: [17, 16, 15, 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7 ],
                paralysis: [16, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 9, 8, 7, 6 ],
                breath: [17, 16, 15, 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7 ],
                spell: [18, 17, 16, 16, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 8 ]
            },
            god: {
                yes: false,
                worship: "",
                turnUndead: {
                    "1": [ 20, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1 ],
                    "2": [ 20, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1 ],
                    "3": [ 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1 ],
                    "4": [ 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1 ],
                    "5": [ 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1 ],
                    "6": [ 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1 ],
                    "7": [ 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1 ],
                    "8": [ 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1 ],
                    "9": [ 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2 ],
                    "10+": [ 20, 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2 ],
                }
            },
            magic: {
                yes: false,
            }
        },
        th: {
            img: "/systems/lm/assets/class/key-lock.svg",
            requeriment: "LM.requeriment.level0",
            principalAbility: "LM.principalAbility.thieft",
            hd: "1d6",
            weaponsUse: "LM.weaponUse.thieft",
            weaponStyle: "LM.weaponStyle.thieft",
            armorUse: "LM.armorUse.thieft",
            skillsPoints : [ 0, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30 ],
            languagesKnow: [ "LM.lan.common" ],
            backstab: {
                value: true,
                level: 1,
                hitbonus: [ 0, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
                dmgbonusback: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
            },
            title: [ "Aspirante", "Thug", "Ejecutor", "Torturador", "Exterminador", "Destructor", "Verdugo", "Canalla", "Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Padrino de Asesinos" ],
            thac0: [ 20, 19, 18, 18, 17, 16, 16, 15, 14, 14, 13, 12, 12, 11, 10 ],
            dmgbonusm: [ 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
            dmgbonusp: [ 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
            xpn: [ 100, 1701, 3401, 6801, 14001, 28001, 55001, 110001, 230001, 3500001, 470001, 590001, 710001, 830001, 830001 ],
            saves: {
                death: [ 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7, 7, 6, 5 ],
                wand: [17, 16, 15, 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7 ],
                paralysis: [16, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 9, 8, 7, 6 ],
                breath: [17, 16, 15, 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7 ],
                spell: [18, 17, 16, 16, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 8 ]
            },
            god: {
                yes: false,
                worship: "",
                turnUndead: {
                    "1": [ 20, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1 ],
                    "2": [ 20, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1 ],
                    "3": [ 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1 ],
                    "4": [ 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1 ],
                    "5": [ 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1 ],
                    "6": [ 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1 ],
                    "7": [ 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1 ],
                    "8": [ 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1 ],
                    "9": [ 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2 ],
                    "10+": [ 20, 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2 ],
                }
            },
            magic: {
                yes: false,
            }
        },
        mag: {
            img: "/systems/lm/assets/class/magic-palm.svg",
            requeriment: "LM.requeriment.level0",
            principalAbility: "LM.principalAbility.mage",
            hd: "1d6",
            weaponsUse: "LM.weaponUse.mage",
            weaponStyle: "LM.weaponStyle.mage",
            armorUse: "LM.armorUse.mage",
            skillsPoints : [ 0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ],
            languagesKnow: [ "LM.lan.common" ],
            backstab: {
                value: false,
                level: 0,
                hitbonus: [ 0, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
                dmgbonusback: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
            },
            title: [ "Aspirante", "Thug", "Ejecutor", "Torturador", "Exterminador", "Destructor", "Verdugo", "Canalla", "Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Maestro Asesino", "Padrino de Asesinos" ],
            thac0: [ 20, 19, 18, 18, 17, 16, 16, 15, 14, 14, 13, 12, 12, 11, 10 ],
            dmgbonusm: [ 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
            dmgbonusp: [ 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
            xpn: [ 100, 1701, 3401, 6801, 14001, 28001, 55001, 110001, 230001, 3500001, 470001, 590001, 710001, 830001, 830001 ],
            saves: {
                death: [ 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7, 7, 6, 5 ],
                wand: [17, 16, 15, 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7 ],
                paralysis: [16, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 9, 8, 7, 6 ],
                breath: [17, 16, 15, 15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8, 7 ],
                spell: [18, 17, 16, 16, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 8 ]
            },
            god: {
                yes: false,
                worship: "",
                turnUndead: {
                    "1": [ 20, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1 ],
                    "2": [ 20, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1 ],
                    "3": [ 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1, 1 ],
                    "4": [ 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1, 1 ],
                    "5": [ 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1, 1 ],
                    "6": [ 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1, 1 ],
                    "7": [ 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1, 1 ],
                    "8": [ 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2, 1 ],
                    "9": [ 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2, 2 ],
                    "10+": [ 20, 20, 20, 20, 20, 20, 20, 20, 12, 11, 9, 7, 5, 3, 2 ],
                }
            },
            magic: {
                yes: true,
                spellsLevel: {
                    1: [ 0, 2, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6 ],
                    2: [ 0, 0, 0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5 ],
                    3: [ 0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5 ],
                    4: [ 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 3, 4, 5 ],
                    5: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 4 ],
                }
            }
        },
    },
    abilities: {
        str: "LM.abilities.str.long",
        int: "LM.abilities.int.long",
        dex: "LM.abilities.dex.long",
        wis: "LM.abilities.wis.long",
        con: "LM.abilities.con.long",
        cha: "LM.abilities.cha.long",
    },
    maxhands : 2,
    savesCheck: {
        death: "LM.saves.death.check",
        wand: "LM.saves.wand.check",
        paralysis: "LM.saves.paralysis.check",
        breath: "LM.saves.breath.check",
        spell: "LM.saves.spell.check",
    },
    savesShort: {
        death: "MU",
        wand: "VA",
        paralysis: "PA",
        breath: "AL",
        spell: "CO",
    },
    saves_long: {
        death: "LM.saves.death.long",
        wand: "LM.saves.wand.long",
        paralysis: "LM.saves.paralysis.long",
        breath: "LM.saves.breath.long",
        spell: "LM.saves.spell.long",
    },
    armor : {
        unarmored: "Unarmored",
        light: "Light",
        medium: "Medium",
        heavy: "Heavy",
        shield: "Shield",
        helm: "Helm",
    },
    magicUser : {
        magicUser: "LM.user.magicUser",
        divineUser: "LM.user.divineUser",
        bladeUser: "LM.user.bladeUser",
        elfUser: "LM.user.elfUser",
    },
    languages: [
        "LM.lan.common",
        "LM.lan.lawful",
        "LM.lan.neutral",
        "LM.lan.chaotic",
        "Bugbear",
        "Doplegänger",
        "Dragón",
        "LM.lan.dwarf",
        "LM.lan.elfish",
        "Gárgola",
        "LM.lan.gnoll",
        "LM.lan.gnome",
        "LM.lan.goblin",
        "LM.lan.halfling",
        "Arpía",
        "LM.lan.hobgoblin",
        "LM.lan.kobold",
        "Hombre lagarto",
        "Medusa",
        "Minotauro",
        "Ogro",
        "LM.lan.orc",
        "Pixie",
        "Norse",
        "Britanio",
        "Bretonio",
        "Lieberuno"
        ],
    tags: {
        melee: "LM.items.melee",
        missile: "LM.items.missile",
        throw: "Arrojadiza",
        slow: "LM.items.slow",
        twoHanded: "LM.items.twoHanded",
        blunt: "LM.items.blunt",
        brace: "LM.items.brace",
        splash: "LM.items.splash",
        reload: "LM.items.reload",
        charge: "LM.items.charge",
    },
    tag_images: {
        melee: "/systems/lm/assets/melee.png",
        missile: "/systems/lm/assets/missile.png",
        slow: "/systems/lm/assets/slow.png",
        twoHanded: "/systems/lm/assets/twohanded.png",
        blunt: "/systems/lm/assets/blunt.png",
        brace: "/systems/lm/assets/brace.png",
        splash: "/systems/lm/assets/splash.png",
        reload: "/systems/lm/assets/reload.png",
        charge: "/systems/lm/assets/charge.png",
    },
    monster_saves: {
        0: {
            label: "Normal Human",
            d: 15,
            w: 17,
            p: 16,
            b: 17,
            s: 18
        },
        1: {
            label: "1",
            d: 14,
            w: 16,
            p: 15,
            b: 16,
            s: 17
        },
        3: {
            label: "2-3",
            d: 13,
            w: 15,
            p: 14,
            b: 15,
            s: 16
        },
        4: {
            label: "4",
            d: 12,
            w: 14,
            p: 13,
            b: 14,
            s: 15
        },
        6: {
            label: "5-6",
            d: 11,
            w: 13,
            p: 12,
            b: 13,
            s: 14
        },
        7: {
            label: "7",
            d: 10,
            w: 12,
            p: 11,
            b: 12,
            s: 13
        },
        9: {
            label: "8-9",
            d: 9,
            w: 11,
            p: 10,
            b: 11,
            s: 12
        },
        10: {
            label: "10",
            d: 8,
            w: 10,
            p: 9,
            b: 10,
            s: 11
        },
        12: {
            label: "11-12",
            d: 7,
            w: 9,
            p: 8,
            b: 9,
            s: 10
        },
        13: {
            label: "13",
            d: 6,
            w: 8,
            p: 7,
            b: 8,
            s: 9
        },
        14: {
            label: "14+",
            d: 5,
            w: 7,
            p: 6,
            b: 7,
            s: 8
        }
    }
}
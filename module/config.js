export const LM = {
    actorClass : {
        lvl0: "Level0",
        ftr: "Fighter",
        cl: "Cleric"
    },
    classDetails : {
        lvl0: {
            img: "/systems/lm/assets/class/swordman.svg",
            hd: "1d4",
            title: [ "Aspirante", "Hombre de Armas", "Luchador", "Maestro de Espadas", "Héroe", "Bravucón", "Mirmidón", "Campeón", "Héroe Épico", "Señor de la Guerra", "Señor de la Guerra", "Señor de la Guerra", "Señor de la Guerra", "Señor de la Guerra", "Jefe Supremo" ],
            thac0: [ 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6 ],
            xpn: [ 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100 ],
        },
        ftr: {
            img: "/systems/lm/assets/class/brutal-helm.svg",
            hd: "1d8",
            title: [ "Aspirante", "Hombre de Armas", "Luchador", "Maestro de Espadas", "Héroe", "Bravucón", "Mirmidón", "Campeón", "Héroe Épico", "Señor de la Guerra", "Señor de la Guerra", "Señor de la Guerra", "Señor de la Guerra", "Señor de la Guerra", "Jefe Supremo" ],
            thac0: [ 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6 ],
            xpn: [ 100, 2035, 4065, 8125, 16251, 32501, 65001, 130001, 250001, 370001, 490001, 610001, 730001, 850001, 850001 ],
        },
        cl: {
            img: "/systems/lm/assets/class/holy-symbol.svg",
            hd: "1d6",
            title: [ "Aspirante", "Acólito", "Adepto", "Sacerdote", "Curandero", "Vicario", "Rector", "Prelado", "Obispo", "Patriarca", "Patriarca 10º", "Patriarca 11º", "Patriarca 12º", "Patriarca 13º", "Teócrata" ],
            thac0: [ 20, 19, 19, 18, 18, 17, 17, 16, 16, 15, 15, 14, 14, 13, 13 ],
            xpn: [ 100, 1565, 3125, 6251, 12501, 25001, 50001, 100001, 200001, 300001, 400001, 500001, 600001, 700001, 700001 ],
        }
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
    saves_short: {
        death: "LM.saves.death.short",
        wand: "LM.saves.wand.short",
        paralysis: "LM.saves.paralysis.short",
        breath: "LM.saves.breath.short",
        spell: "LM.saves.spell.short",
    },
    saves_long: {
        death: "LM.saves.death.long",
        wand: "LM.saves.wand.long",
        paralysis: "LM.saves.paralysis.long",
        breath: "LM.saves.breath.long",
        spell: "LM.saves.spell.long",
    },
    armor : {
        unarmored: "LM.armor.unarmored",
        light: "LM.armor.light",
        medium: "LM.armor.medium",
        heavy: "LM.armor.heavy",
        shield: "LM.armor.shield",
        helm: "LM.armor.helm",
    },
    magicUser : {
        magicUser: "LM.user.magicUser",
        divineUser: "LM.user.divineUser",
        bladeUser: "LM.user.bladeUser",
        elfUser: "LM.user.elfUser",
    },
    languages: [
        "Común",
        "Legal",
        "Caótico",
        "Neutral",
        "Bugbear",
        "Doplegänger",
        "Dragón",
        "Enano",
        "Élfico",
        "Gárgola",
        "Gnoll",
        "Gnomo",
        "Trasgo",
        "Halfling",
        "Arpía",
        "Grantrasgo",
        "Kobold",
        "Hombre lagarto",
        "Medusa",
        "Minotauro",
        "Ogro",
        "Orco",
        "Pixie",
        "Norse",
        "Britanio",
        "Bretonio",
        "Lieberuno"
        ],
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
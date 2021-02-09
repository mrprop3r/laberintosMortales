export const LM = {
    actorClass : {
        lvl0: "Level0",
        ftr: "Fighter",
        cl: "Cleric"
    },
    classDetails : {
        lvl0: {
            hd: "1d4"
        },
        ftr: {
            hd: "1d8"
        },
        cl: {
            hd: "1d6"
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
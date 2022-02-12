import commonStyle from './common.js';

export default {
  moldName: "jp-notation",
  moldUrl: "./mold/",
  fonts: {
    "jp-notation": {
      name: "jp_notation.otf",
      type: "relative",
    },
    number: {
      name: "number.ttf",
      type: "relative",
    },
    link: {
      name: "link.ttf",
      type: "relative",
    },
    password: {
      name: "password.ttf",
      type: "relative",
    },
    copyright: {
      name: "copyright.ttf",
      type: "relative",
    },
  },
  style: Object.assign(JSON.parse(commonStyle), {
    fontMap: {
      name: "jp-notation",
      desc: "jp-notation",
      race: "jp-notation",
      attack: "number",
      link: "link",
      password: "password",
      type: "jp-notation",
      lbNum: "number",
      copyright: "copyright, 微软雅黑",
    },
    race: {
      font: "race",
      fontSize: 26,
      position: [64, 915],
      maxWidth: 610,
    },
    type: {
      font: "type",
      fontSize: 48,
      position: [738, 187],
      icon: [667, 147],
      iconSize: [46, 46],
    },
  }),
  translate: {
    attribute: {
      light: "光",
      dark: "闇",
      wind: "風",
      water: "水",
      fire: "炎",
      earth: "地",
      divine: "神",
    },
    type: {
      tc: "通常",
      xg: "效果",
      ys: "儀式",
      rh: "融合",
      tk: "衍生物",
      tt: "シンクロ",
      cl: "エクシーズ",
      lb: "ペンデュラム",
      lj: "リンク",
      ec: "デュアル",
      tz: "チューナー",
      tm: "ユニオン",
      lh: "スピリット",
      fz: "リバース",
      kt: "トゥーン",
      ts: "特殊召喚",
      zb: "装备",
      sg: "速攻",
      cd: "场地",
      fj: "反击",
      yx: "永续",
    },
    race: {
      dragon: "ドラゴン族",
      warrior: "戦士族",
      fiend: "悪魔族",
      spellcaster: "魔法使い族",
      fairy: "天使族",
      zombie: "アンデット族",
      rock: "岩石族",
      plant: "植物族",
      insect: "昆虫族",
      aqua: "水族",
      pyro: "炎族",
      thunder: "雷族",
      fish: "魚族",
      seaserpent: "海竜族",
      wyrm: "幻竜族",
      dinosaur: "恐竜族",
      reptile: "爬虫類族",
      machine: "機械族",
      beast: "獣族",
      wingedbeast: "鳥獣族",
      beastwarrior: "獣戰士族",
      psychic: "サイキック族",
      cyberse: "サイバース族",
      divinebeast: "幻神獣族",
      divine: "創造神族",
    },
    spell: "魔法カード",
    trap: "罠カード",
    brackets: ["【", "】"],
  },
};

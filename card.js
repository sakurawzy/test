import {CardDrawer} from "./cardDrawer.js";
import {CardData} from "./cardData.js";
import {FileManage} from "./fileManage.js";
import {Cloud} from "./lib/ajax.js";
import defaultConfig from "./config/defaultConfig.js";

let defaultEvent = function (e) {
  return e;
};

export const Card = function ({
  dbData, canvas,
  size = [813, 1185],
  lang = 'cn',
  config = defaultConfig,
  fastFont = true,
  fontLoaded = defaultEvent,
  imageLoaded = defaultEvent,
  fontsLoaded = defaultEvent,
  imagesLoaded = defaultEvent,
  loaded = defaultEvent,
  recover = false,
  holo = true,
  cardbagSwitch = false,
  translate = false
}) {
  this.recover = recover;

  if (recover) {
    var tempConfig = Object.create(config);
    for (let key in config) {
      if (localStorage.getItem(key)) {
        tempConfig[key] = JSON.parse(localStorage.getItem(key))
      }
    }
  }

  this.config = tempConfig || config;
  this.key = dbData._id;
  this.fastFont = fastFont;

  this.fontLoaded = fontLoaded;
  this.imageLoaded = imageLoaded;
  this.fontsLoaded = fontsLoaded;
  this.imagesLoaded = imagesLoaded;
  this.loaded = loaded;

  size = [size[0]*2, size[1]*2];
  this.cardData = new CardData(dbData, this);

  if (canvas) {
    canvas.width = size[0];
    canvas.height = size[1];
    this.canvas = canvas;
    this.cardDrawer = new CardDrawer(canvas, this);
    this.fileManage = new FileManage(this.cardData, this.cardDrawer, this);
  }

  this.size = size;
  this.lang = lang;

  this.imgStatus = false;

  this.db_id = null;

  this.flashImg = null;
  this.holo = holo;
  this.cardbagSwitch = cardbagSwitch;
  this.translate = translate;
};

Card.prototype = {
  bind(canvas) {
    this.canvas = canvas;
    canvas.width = this.size[0];
    canvas.height = this.size[1];
    this.cardDrawer = new CardDrawer(canvas, this);
    this.fileManage = new FileManage(this.cardData, this.cardDrawer, this);
  },
  feed(img, imgStatus = false) {
    this.fileManage.fileContent.pic = img;
    this.imgStatus = imgStatus;
    this.draw();
  },
  changeConfig(config) {
    this.config = config;
    this.draw();
  },
  draw() {
    this.cardDrawer.draw(this.cardData, this.fileManage.fileContent);
  },
  save(saveName) {
    let [w ,h] = [this.canvas.width, this.canvas.height];
    this.canvas.width = 1626;
    this.canvas.height = 2370;
    this.cardDrawer.draw(this.cardData, this.fileManage.fileContent, [1626, 2370]);

    let dataURI = this.canvas.toDataURL('image/png');

    var binStr = atob(dataURI.split(',')[1]),
    len = binStr.length,
    arr = new Uint8Array(len);

    for (var i = 0; i < len; i++) {
      arr[i] = binStr.charCodeAt(i);
    }

    let blob = new Blob([arr]);

    var objurl = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.download = saveName || this.cardData.name + '.png';
    link.href = objurl;
    link.click();


    this.canvas.width = w;
    this.canvas.height = h;
    this.draw();
  },
  autoDraw() {
    setInterval(() => {
      this.draw();
    },200)
  },
  feedData(data) {
    for (let key in data) {
      this.cardData[key] = data[key];
    }
  },
  get data() {
    return this.cardData.getData();
  },
  saveToCache() {
    this.cardData.saveToCache();

    for (let key in this.config) {
      let json = JSON.stringify(this.config[key]);
      localStorage.setItem(key, json);
    }

    localStorage.setItem('lang', this.lang);
  },
  feedFlash(img) {
    this.flashImg = img;
    this.cardData.flash = 0;
  }
};

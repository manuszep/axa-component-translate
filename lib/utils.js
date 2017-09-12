import axios from "axios";

let translationMaps;

export function loadTranslationData(address, cb) {
  axios
    .get(address)

    .then((resp) => {
      translationMaps = resp.data;
      translationMaps = translationMaps.replace(/`/gm, '"');
      translationMaps = translationMaps.replace(/,([^,]*)$/, '$1');
      translationMaps = JSON.parse(translationMaps);

      if (typeof cb !== 'undefined') {
        cb();
      }
    });
}


export function getTranslation(key) {
  if (typeof translationMaps === "undefined" || translationMaps.length <= 0 || typeof translationMaps[key] === "undefined") return key;

  return translationMaps[key];
}

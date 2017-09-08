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
  const translation = translationMaps[key];

  return (typeof translation !== "undefined") ? translation : key;
}

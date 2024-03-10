// let languageIndex = 11;
const language = [
  "en_US",
  "cs_CZ",
  "de_DE",
  "el_GR",
  "en_AU",
  "en_GB",
  "en_PH",
  "en_SG",
  "es_AR",
  "es_ES",
  "es_MX",
  "fr_FR",
  "hu_HU",
  "it_IT",
  "ja_JP",
  "ko_KR",
  "pl_PL",
  "pt_BR",
  "ro_RO",
  "ru_RU",
  "th_TH",
  "tr_TR",
  "vi_VN",
  "zh_CN",
  "zh_MY",
  "zh_TW",
];

let myLanguage = language[11];
let gameVersion = "14.5.1";
////////////////////////////
const displayContent = document.querySelector(".main");

async function getAllCharacters() {
  let getChampionsInfo = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${gameVersion}/data/${myLanguage}/champion.json`
  );
  let everyChampionsInfo = await getChampionsInfo.json();
  // let everyChampionsName = [];
  Object.keys(everyChampionsInfo.data).forEach(function (key, index) {
    const championCard = document.createElement("div");
    const championCardName = document.createElement("h3");
    const championImage = document.createElement("img");
    const championLore = document.createElement("p");

    displayContent.appendChild(championCard);
    championCard.appendChild(championImage);
    championCard.appendChild(championCardName);
    championCard.appendChild(championLore);

    championCard.classList.add("card");

    championImage.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${everyChampionsInfo.data[key].name}_0.jpg`;

    championCardName.innerText = everyChampionsInfo.data[key].name;
    championCardName.classList.add("card-title");

    championLore.innerText = everyChampionsInfo.data[key].blurb;
    championLore.classList.add("card-content-hidden", "card-content");

    championCard.addEventListener("click", () => {
      championLore.classList.toggle("card-content-hidden");
    });
    // return (everyChampionsName = everyChampionsInfo.data[key].name);
  });
  // everyChampionsName.forEach(async (element) => {
  //   let getChampionCard = await fetch(
  //     `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${fd}_0.jpg`
  //   );
  // });
}
getAllCharacters();
// let getEverythingOnChampion = await fetch(
//   `https://ddragon.leagueoflegends.com/cdn/${gameVersion}/data/${myLanguage}/champion/${championName}.json`
// );
// let ChampionInfo = await getEverythingOnChampion.json();

// function createCard() {
//   const card = document.createElement("div");

//   card.classList.add("card");
// }

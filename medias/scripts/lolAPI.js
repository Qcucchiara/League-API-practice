async function getLanguageApi(params) {
  let response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/languages.json`
  )
}

async function getAllCharacters() {
  let getChampionsInfo = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${gameVersion}/data/${language}/champion.json`
  )
  //
  //
  let getEverythingOnChampion = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${gameVersion}/data/${language}/champion/${championName}.json`
  )
}

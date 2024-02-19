const api = {
  key: "6WKC728948SAETVDAPGSVNYMS",
  base: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
};

async function checkWeather(city) {
  const response = await fetch(
    api.base + city + `?unitGroup=metric&include=days&key=${api.key}`
  );
  const data = await response.json();

  return data;
}

export { checkWeather };

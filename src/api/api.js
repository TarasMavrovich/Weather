const api = {
  key: "6WKC728948SAETVDAPGSVNYMS",
  base: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
};

async function checkWeather(city, firstDate, lastDate) {
  const response = await fetch(
    api.base + city + "/" + firstDate + "/" + lastDate + `?key=${api.key}`
  );
  const data = await response.json();

  return data;
}

async function checkOneDayWeather(city, day) {
  const response = await fetch(api.base + city + `/today?key=${api.key}`);
  const data = await response.json();

  return data;
}

export { checkWeather, checkOneDayWeather };

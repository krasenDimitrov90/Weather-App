import { api } from "./api";

const host = 'https://dataservice.accuweather.com';

// const key = 'B8TpAcY2UouDSUxA6Ax2R6kz0027Bj54';

const key = 'xBTHLdxLB8awyb9VzCboIAaSwOY0U6dH';



export const getTown = (city) => api(`${host}/locations/v1/cities/search?apikey=${key}&q=${city}`);


export const getCurrentConditionWeatherInfo = (townKey) => api(`${host}/currentconditions/v1/${townKey}?apikey=${key}`);


export const getFiveDayWeatherInfo = (townKey) => api(`${host}/forecasts/v1/daily/5day/${townKey}?apikey=${key}`);

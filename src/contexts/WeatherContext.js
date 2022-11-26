import React, { useState, createContext } from "react";
import {getCurrentConditionWeatherInfo, getFiveDayWeatherInfo, getTown} from "../servicies/requests";
import Header from '../components/Header/Header';
import moment from 'moment'

export const WeatherContext = createContext();

const initialState = {
  time: '',
  town: '',
  currentWeather: {},
  fiveDayWeather: {},
  currentFoundCity: '',
  isLoading: true
}


export const WeatherProvider = ({ children }) => {
    const [appState, setAppState] = useState(initialState)

    const updateState = (update) => {
      const newState = {...appState}
      Object.keys(update).forEach(key => {
        newState[key] = update[key]
      })

      setAppState(newState)
    }

    const handleFetchWeather = async (e) => {
      e.preventDefault()
      updateState({isLoading: true})
      const data = await getTown(appState?.town)
      const [foundCity, ...rest] = data
      const {Key: townKey} = foundCity

      const currentConditionWeatherInfo = await getCurrentConditionWeatherInfo(townKey);
      const fiveDayWeather = await getFiveDayWeatherInfo(townKey);

      const time = moment().format('HH:mm')

      updateState({
        time,
        currentWeather: currentConditionWeatherInfo[0],
        fiveDayWeather,
        isLoading: false,
        currentFoundCity: foundCity.LocalizedName
      })
    }


    React.useEffect(() => {
      console.log({appState})
    }, [appState])

    return (
        <WeatherContext.Provider value={{
            appState,
            updateState,
            handleFetchWeather
        }} >
          <Header />
          {appState.isLoading && (<span className="loader"></span>)}
          {!appState.isLoading && children}
        </WeatherContext.Provider>
    );
}

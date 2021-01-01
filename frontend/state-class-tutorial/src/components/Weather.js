import ReactWeather, { useOpenWeather } from 'react-open-weather';
import Offer from "./Offer";

const Weather = () => {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '231dc74f9fe418f3672ff507b1c6bf1b',
        lat: '51.75',
        lon: '19.4667',
        lang: 'pl',
        unit: 'metric', // values are (metric, standard, imperial)
    });
    return (
        <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="pl"
            locationLabel="Łódź"
            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
            showForecast
        />
    );
};
export default Weather;
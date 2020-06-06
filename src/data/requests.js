import axios from 'axios';
import parsers from './parsers';

async function usStats(){
    const response = await axios.get('https://covidtracking.com/api/v1/us/current.json');
    return parsers.usStats(response.data);
}

async function statesData(state) {
    const response = await axios.get("https://covidtracking.com/api/v1/states/current.json");
    return parsers.stateTable(response.data);
}

async function stateStats(state){
    const response = await axios.get('https://covidtracking.com/api/v1/states/current.json');
    return parsers.stateStats(response.data, state);
}

async function historicUS() {
    const response = await axios.get('https://covidtracking.com/api/v1/us/daily.json');
    return parsers.historicUS(response.data);
}

async function historicState(state) {
    const response = await axios.get("https://covidtracking.com/api/v1/states/daily.json");
    return parsers.historicState(state, response.data);
}

export default {
    usStats,
    stateStats,
    historicUS,
    historicState,
    statesData
}
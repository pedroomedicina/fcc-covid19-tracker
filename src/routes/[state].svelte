<script context="module">
    import stateNames from '../data/stateNames.js';
    import requests from '../data/requests.js';

    export async function preload(page){
        const state = page.params["state"];
        if (stateNames.find(s => s.abbreviation === state) === undefined){
            this.error(404, 'State not found');
            return;
        }

        try {
            const stats = await requests.stateStats(state);
            return { state, stats};   
        } catch (error) {
            this.error(500, 'Sorry, API is not available')
        }
    }
</script>

<script>
    import CovidStat from '../components/CovidStat.svelte';
    import CovidChart from '../components/CovidChart.svelte';
    export let state;
    export let stats;
</script>

<svelte:head>
    <title>Covid 19 Tracker - {state} </title>
</svelte:head>

<div class="section header">
    <div class="container">
        <h1>Covid 19 - {state}</h1>
    </div>
</div>

<CovidStat {...stats}/>
<CovidChart />
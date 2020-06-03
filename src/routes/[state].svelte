<script context="module">
    import stateNames from '../data/stateNames.js';

    export async function preload(page){
        const state = page.params["state"];
        if (stateNames.find(s => s.abbreviation === state) === undefined){
            this.error(404, 'State not found');
            return;
        }

        try {
            return { state: page.params['state'] };   
        } catch (error) {
            this.error(500, 'Sorry, API is not available')
        }
    }
</script>

<script>
    import CovidStat from '../components/CovidStat.svelte';
    import CovidChart from '../components/CovidChart.svelte';
    export let state;
</script>

<svelte:head>
    <title>Covid 19 Tracker - {state} </title>
</svelte:head>

<div class="section header">
    <div class="container">
        <h1>Covid 19 - {state}</h1>
    </div>
</div>

<CovidStat />
<CovidChart />
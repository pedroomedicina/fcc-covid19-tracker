<script>
    import TableFilter from "./TableFilter.svelte";
    import Table from "./Table.svelte";

    export let data;
    let sortBy = 'name';
    let stateName = '';
    console.log(data);
    $: states = filterAndSort(data, stateName, sortBy);

    function filterAndSort(states, stateName, sortBy) {
        const filteredStates = states.filter(state => {
            return stateName === '' || state.fullStateName.name.toLowerCase().indexOf(stateName.toLowerCase()) > -1;
        })

        if(sortBy !== 'name'){
            return filteredStates.sort((a, b) => {
                return b[sortBy].replace('.', '').replace(',', '') - a[sortBy].replace('.', '').replace(',', '');
            })
        }

        return filteredStates;
    }
</script>

<h1>{stateName} /|\ {sortBy}</h1>
<TableFilter bind:stateName bind:sortBy />
<Table {states} />
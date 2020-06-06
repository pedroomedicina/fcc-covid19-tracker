<script>
    export let stateName = "";
    export let sortBy = "name";
</script>

<style>
    input, .select, select {
        width: 100%;
    }
    
    .column {
        padding-left: 0;
    }
</style>

<div class="section">
    <div class="container">
        <div class="columns">
            <div class="column is-6">
                <input bind:value={stateName} type="text" name="states" placeholder="Filtrar Estados" class="input" />
            </div>
            <div class="column is-6">
                <div class="select">
                    <select name="statesSelector" bind:value={sortBy}>
                        <option value="name">
                            Por Nombre
                        </option>
                        <option value="cases">
                            Por Casos
                        </option>
                        <option value="deaths">
                            Por Muertes
                        </option>
                        <option value="tested">
                            Por Total Testeados
                        </option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</div>
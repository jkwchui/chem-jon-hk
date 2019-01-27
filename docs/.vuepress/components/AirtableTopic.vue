<template>
    <div class="content">
        <p>{{ record }}</p>
    </div>
</template>
<script>

const Airtable = require('airtable')

export default {
    async beforeMount() {
        console.log(Airtable);
        console.log("Airtable loaded")

        var base = new Airtable({apiKey: 'keyPPq6kE5fJsdmgY'}).base('apppgOYJZWwI0MCOk');

        base('My Study Cards').find('rec2er3uEiCl8Hfiw', function(err, record) {
            if (err) { console.error(err); return; }
            console.log(record);

            this.record=record
        })
    },
    mounted () {
    },
    data () {
        return {
            record: {}
        }
    }
}
</script>

<style scoped>
</style>
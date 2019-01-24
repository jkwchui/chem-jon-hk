<template>
    <div class="content">
        <p>{{ record }}</p>
    </div>
</template>
<script>

    export default {
        mounted () {
            
            var Airtable = require('airtable');
            var base = new Airtable({apiKey: 'keyPPq6kE5fJsdmgY'}).base('apppgOYJZWwI0MCOk');

            base('My Study Cards').find('rec2er3uEiCl8Hfiw', function(err, record) {
                if (err) { console.error(err); return; }
                console.log(record);
            });
        },
        data () {
            return {
                
            }
        }
    }
</script>

<style scoped>

</style>
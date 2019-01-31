<template>
    <div class="content">
        <vue-csv-import url="https://sample-videos.com/csv/Sample-Spreadsheet-10-rows.csv" :map-fields="[field1, field2, field3]"></vue-csv-import>
        {{ field1 }}
        {{ field2 }}
        {{ field3 }}
    </div>
</template>
<script>
import { VueCsvImport } from 'vue-csv-import'

    export default {
        components: { VueCsvImport },
        data () {
            return {
                field1,
                field2,
                field3
            }
        }
    }
</script>

<style scoped>

</style>
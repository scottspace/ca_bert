
<template>
  <div id="app">
    <div class="app-phone">
      <div class="phone-header">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/vue_gram_logo_cp.png" />
      </div>
      <phone-body 
        :posts="posts"
        :filters="filters" />
      <div class="phone-footer">
       <div class="home-cta">
        <i class="fas fa-home fa-lg"></i>
       </div>
       <div class="upload-cta">
        <i class="far fa-plus-square fa-lg"></i>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneBody from "./components/PhoneBody";
import posts from "./data/posts";
import filters from "./data/filters";
import Bigquery from "./js/bigquery.min"

function doit() {
    // [START bigquery_get_table]
    // Import the Google Cloud client library
    console.log("inside doit()");

    //const {BigQuery} = require('@google-cloud/bigquery');
    //const { bigquery, auth } = Bigquery;
    //const bigquery = new BigQuery();
  
    async function getTable() {
  
      const datasetId = "gdelt_sa";
      const tableId = "daily_feed";
  
      // Retrieve table reference
      const dataset = Bigquery.dataset(datasetId);
      const [table] = await dataset.table(tableId).get();
  
      console.log('Table:');
      console.log(table.metadata.tableReference);
    }
    getTable();
    // [END bigquery_get_table]
}

console.log("...code executed during app.vue...");

export default {
  name: "App",
  data() {
    doit();
    return {
      posts,
      filters,
    };
  },
  components: {
    "phone-body": PhoneBody
  }
};
</script>

<style lang="scss" src="./styles/app.scss">
// Styles from stylesheet
</style>

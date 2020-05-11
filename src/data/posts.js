function main() {
    // [START bigquery_get_table]
    // Import the Google Cloud client library
    const {BigQuery} = require('@google-cloud/bigquery');
    const bigquery = new BigQuery();
  
    async function getTable() {
  
      const datasetId = "gdelt_sa";
      const tableId = "daily_feed";
  
      // Retrieve table reference
      const dataset = bigquery.dataset(datasetId);
      const [table] = await dataset.table(tableId).get();
  
      console.log('Table:');
      console.log(table.metadata.tableReference);
    }
    getTable();
    // [END bigquery_get_table]
}

console.log("...code executed during import of posts.js...");
main();

export default [
    {
      username: "socleansofreshh",
      userImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",
      postImage:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/tropical_beach.jpg",
      likes: 36,
      hasBeenLiked: false,
      caption: "When you're ready for summer '18 ☀️",
      filter: "perpetua"
    },
    {
      username: "djirdehh",
      userImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me2.png",
      postImage:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/downtown.jpg",
      likes: 20,
      hasBeenLiked: false,
      caption: "Views from the six...",
      filter: "clarendon"
    },
    {
      username: "puppers",
      userImage:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/pug_personal.jpg",
      postImage:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/puppers.jpg",
      likes: 49,
      hasBeenLiked: false,
      caption: "Current mood 🐶",
      filter: "lofi"
    }
  ];
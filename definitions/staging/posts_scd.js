const scd = require("dataform-scd");

scd("posts_scd", {
  // A unique identifier for rows in the table.
  uniqueKey: "id",
  // A field that stores a timestamp or date of when the row was last changed.
  timestamp: "last_edit_date",
  // The source table to build slowly changing dimensions from.
  source: {
    schema: "static_source",
    name: "posts",
  },
  // Any configuration parameters to apply to the incremental table that will be created.
  incrementalConfig: {
    bigquery: {
      partitionBy: "DATE(last_edit_date)",
    },
  },
});
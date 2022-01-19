const scd = require("dataform-scd");

scd("source_data_scd", {
  // A unique identifier for rows in the table.
  uniqueKey: "gameId",
  // A field that stores a timestamp or date of when the row was last changed.
  timestamp: "startTime",
  // The source table to build slowly changing dimensions from.
  source: {
    schema: "baseball",
    name: "schedules",
  },
  // Any configuration parameters to apply to the incremental table that will be created.
  incrementalConfig: {
    bigquery: {
      partitionBy: "startTime",
    },
  },
});
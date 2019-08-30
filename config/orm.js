// Import MySQL connection.
var connection = require("../config/connection.js");


// Object for all our SQL statement functions.
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, column, value, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += column.toString();
    queryString += ") ";
    queryString += "VALUES (";
    for (var i = 0; i < value.length-1; i++) {
      queryString += " ? ,";
    }
    queryString += "? ) ";

    console.log(queryString);

    connection.query(queryString, value, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

  updateOne: function(table, objColvalue, condition, cb) {
    var queryStr = "UPDATE " + table + " SET " + objColvalue + " WHERE " + condition;

 //   console.log(queryString);
    connection.query(queryString, function(err, res) {
      if (err) {
        throw err;
      }

      cb(res);
    });
  }
};

// Export the orm object for the model
module.exports = orm;

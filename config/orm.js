var connection = require("../config/connection.js");


function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}


function objToSql(ob) {
  var arr = [];


  for (var key in ob) {
    var value = ob[key];

    if (Object.hasOwnProperty.call(ob, key)) {

      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }

      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
};

// Object for all our SQL statement functions.
var orm = {
  all: function (table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create: function (table, cols, vals, cb) {
    // console.log(table);
    // console.log(cols);
    // console.log(vals);
    // console.log(result);
    var queryString = "INSERT INTO " + table;

    queryString += " (";

    queryString += cols.toString();

    queryString += ") ";

    queryString += "VALUES (";

    queryString += printQuestionMarks(vals.length);

    queryString += ") ";


    // console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }
      // console.log("result");
      cb(result);
    });
  },

  //   updateOne: function(burgerID, callback){
  //     connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function (err, result) {
  //         if (err) throw err;
  //         callback(result);
  //  });}};
  //   updateOne: function(table, cols ,vals, condition, cb) {
  //      console.log(table);
  //   console.log(cols);
  //   console.log(vals);
  //   console.log(cb);
  //   var queryString = "Update " + table;

  //   queryString += " SET ";
  //   queryString += cols.toString();
  //   queryString += " WHERE ";
  //   queryString += condition;

  //   console.log(queryString);

  //   connection.query(queryString, vals, function(err, result) {
  //     if (err) {
  //       throw err;
  //     }

  //     cb(result);
  //   });
  // },

  updateOne: function (tableInput,condtion,cb) {
// console.log(id);
    // Run MySQL Query
    connection.query('UPDATE  '+tableInput+'  SET devoured=true Where id=' +condtion+';',  function (err, result) {
      if (err){
         throw err;
      };
      cb(result);
    });
  },

  // };

  // objColVals
  //   updateOne: function(table, column ,value, condition, cb) {
  //     var queryString = "UPDATE " + table;

  //     queryString += " SET ";
  //     queryString += objToSql(objColVals);
  //     queryString += " WHERE ";
  //     queryString += condition;
  // // var queryString ="update ?? SET ?? =? Where ?";
  // // ex: Set Column
  //     console.log(queryString);
  //     connection.query(queryString, [table], [column],[value],[condition]  function(err, result) {
  //       if (err) {
  //         throw err;
  //       }

  //       cb(result);
  //     });
  //   },
    delete: function(tableInput, condition, cb) {
      var queryString = "DELETE FROM " + tableInput;
      queryString += " WHERE ";
      queryString += condition;
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }

        cb(result);
      });
    }
};

module.exports = orm;
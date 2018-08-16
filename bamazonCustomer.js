var mysql = require("mysql");
var inquirer = require("inquirer");
//terminal: npm install inquirer
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon"
});

// one way:
// connection.connect(function(err) {
//     if (err) {
//         throw err;
//     } else {
//         console.log("connected as id " + connection.threadId + "\n");
//         readProducts();
//     }
// });

// function readProducts() {
//   // console.log("Selecting all products...\n");
//   connection.query("SELECT item_id, product_name FROM products", function(err, res, fields) {
//     if (err) throw err;
//     console.log(res);
//     runApp();
//   });
// }

//another way:
connection.connect(function(err) {
  if (err) throw err;
  //Select only "name" and "address" from "customers":
  connection.query("SELECT item_id, product_name FROM products", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    runApp();
  });
});



function runApp() {
    // prompt users with two messages
    // The first should ask them the ID of the product they would like to buy.
    // The second message should ask how many units of the product they would like to buy.
	inquirer.prompt([{
              type: "list",
              name: "action",
              message: "What item would you like to buy? Choose product 1-10",
              choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9','10']
          },
          {
              type: "input",
              name: "quantity",
              message: "How many items would you like to buy?"
          }

      ]).then(function(data) {


        //check if our store has enough of the product to meet the customer's request.
        // we retrieve item's information including item quantity


            var query = connection.query(
              "SELECT item_id, product_name, price, stock_quantity FROM products WHERE ?", {
                item_id: data.action
              },
              function(err, res) {
                console.log(" product #:"+ data.action  + ", quantity: " + data.quantity + " are chosen!\n");
                // show the query result:
                console.log(res);
                //console.log(res[0].stock_quantity);
                updateProduct(data, res);
              }
            );


          })
}


        

function updateProduct(data, res) {

    
        var currentQuantity = res[0].stock_quantity;
        var orderQuantity = data.quantity;
        var leftQuantity = currentQuantity - orderQuantity;
        console.log(leftQuantity);

    if (leftQuantity >= 0 && orderQuantity != 0) {
        
        // process the order
        console.log('your order has been placed');
        // update products table
        var query = connection.query(

              // this way does not work ?
              // "UPDATE products SET ? WHERE ?", {
              //   stock_quantity: '30',
              //   item_id: '1'
              // },

              // cannot define leftQuantity
              "UPDATE products SET stock_quantity = leftQuantity WHERE item_id = '1';",
              function(err, result) {
                console.log(result);
                // console.log(result.affectedRows + " product updated!\n"); 
              }
            );


    }else {
            // prevent the order from going through
            console.log("Insufficient quantity!");
            }

    connection.end();

}












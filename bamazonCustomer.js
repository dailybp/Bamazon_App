var mysql = require('mysql');
var inquirer = require('require');
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon"
})

function start(){
  connection.query('SELECT * FROM products', function(err, res){
    if(err) throw err;
    console.log("*-*-*-*-*-*-*-*-*-*-*-*-Welcome to BAMazon!-*-*-*-*-*-*-*-*-*-*-*-*" +
  '\n' + "----------------------------------------------------");
    for(var i = 0; i < res.length; i++){
      console.log("ID: " + res[i].item_id + "\n" + "Product: " + res[i].product_name + "\n" +
    "Department: " + res[i].department_name + "\n" + "Price: " + res[i].price + "\n" +
    "Stock: " + res[i].stock_quantity + "\n" + "----------------------------------------------------");
    }
  });
}

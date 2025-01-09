import { Given, When, Then } from "@cucumber/cucumber";
//import Calculator from "../../src/calculator";
//import { expect } from "chai";

Given('Below are the students', function (table) {
    // Write code here that turns the phrase above into concrete actions
   // console.log(table.raw());
   // console.log(table.rowsHash());
    console.log(table.rows());
    console.log(table.rows()[1][0]);
    console.log(table.rows()[1][1]);
    console.log(table.rows()[1][2]);
    console.log(table.hashes()[2].Name);
   //console.log(table);
});
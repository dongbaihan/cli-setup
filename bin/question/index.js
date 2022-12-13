

import inquirer from "inquirer";

import packageName from "./packageName.js";
import prot from "./prot.js";
import middleware from "./middleware.js";

export default () => {
    return inquirer.prompt([packageName(), prot(), middleware()])
}

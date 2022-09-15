// const bcrypt = require("bcryptjs")
// let birthdayInfo = []

const { toNamespacedPath } = require("path");


module.exports = {

 
    
    getCompliment: (req, res) => {
        const compliments = ["We have a winner!"];
      
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

//     postWinner: (req, res) => {

//         let {nameofwinner} = req.body 
//         listofallwinners.push({nameofwinner: names})
//         res.send(listofallwinners)

//     }
// }
 
// const listofallwinners = [
//     {
//         nameofwinner: "steven"
//     },
//     {
//         nameofwinner: "billy"
//     },
//     {
//         nameofwinner: "butch"
//     },



}
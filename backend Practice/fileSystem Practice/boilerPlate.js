const fs  = require("fs");
const folderName =  process.argv[2] || "Project";

//asynchronus version

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("In the Callback!");
//     if (err) throw err;
//   }); 



//synchronus version
try{


fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`,"")
fs.writeFileSync(`${folderName}/app.js`,"")
fs.writeFileSync(`${folderName}/app.css`,"")

} catch (e){
    console.log("Something went wrong");
}
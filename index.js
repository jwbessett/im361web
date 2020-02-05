
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Would you like a cookie?`, (response) => {
  if(response == "yes" || response == "y") {
    console.log("Too bad");
    console.log("I tried to get it to open Rick Astleys Never Gonna Give You Up but couldnt figure it out. Pretend you got Rick Rolled")
  }
  else if(response == "no" || response == "n") {
    console.log("I didnt have one anyway");
  }
  else {
    console.log("Thats not an answer");
  }
  readline.close();
})

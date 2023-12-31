const { default: { stream } } = require("got");
const { createWriteStream } = require("fs");
const { execSync } = require("child_process");
const url = "https://github.com/lavalink-devs/Lavalink/releases/download/3.7.10/Lavalink.jar"; // This will always pull the latest with soundcloud fix ect ect
const start = () => {
  const download = stream(url).pipe(createWriteStream('Lavalink.jar'));
  download.on("finish", () => {
    execSync("java -jar Lavalink.jar", { stdio: "inherit" });
  });
};

start();

import { fork } from "node:child_process";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const childProcess = fork(__dirname + "/files/script.js", args.split(" "));
};

spawnChildProcess("--test1 --test2 --test3");

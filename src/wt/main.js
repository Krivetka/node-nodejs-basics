import { cpus } from "node:os";
import { Worker } from "node:worker_threads";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const performCalculations = async () => {
  const numberOfCores = cpus();
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const arrPromises = numberOfCores.map((_, index) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(__dirname + "/worker.js", {
        workerData: index + 10,
      });
      worker.on("message", resolve);
      worker.on("error", reject);
    });
  });

  const resultsPromises = await Promise.allSettled(arrPromises);

  const results = resultsPromises.map(({ status, value }) => ({
    status: status === "fulfilled" ? "resolved" : "error",
    value: value ? value : null,
  }));

  console.log(results);
};

await performCalculations();

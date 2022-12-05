const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = args
    .map((arg) => {
      if (arg.includes("--")) {
        return `${arg.replace("--", "")} is`;
      }
      return `${arg},`;
    })
    .join(" ")
    .slice(0, -1);
  console.log(result);
};

parseArgs();

import fs from "fs";
import * as fsPromises from "fs/promises";

function readFilePromise(fileName: string): Promise<string> {
  const file = fsPromises.readFile(fileName, "utf-8");

  return file;
}

async function asyncPromise() {
  const file = await readFilePromise("file.txt");
  console.log("Read File Promise");
  console.log("시작");
  console.log("asyncPromise", file);
  console.log("끝");
}

function syncFile() {
  console.log("Sync File");
  console.log("시작");

  const data = fs.readFileSync("file.txt", { encoding: "utf-8" });

  console.log("sync File", data);

  console.log("끝");
}

function asyncFile() {
  console.log("Async File");
  console.log("시작");

  fs.readFile(
    "file.txt",
    {
      encoding: "utf-8",
    },
    (err: NodeJS.ErrnoException | null, data: string) => {
      if (err) throw err;
      console.log("async File", data);
    }
  );
  console.log("끝");
}

asyncPromise(); // 1
syncFile(); // 2
asyncFile(); // 3

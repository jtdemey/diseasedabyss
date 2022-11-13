import fs from "fs";
import path from "path";
import { stdout } from "process";
import createDb from "./createdb.js";
import { executeTransaction } from "./db.js";

stdout.write(`~Diseased Abyss~\n~~~~\n~~~~\n~~~~\nBuilding docs...`);

createDb();

const docDir = path.join(process.cwd(), "../docs/");

fs.readdirSync(docDir).forEach(docName => {
  const docText = fs.readFileSync(`${docDir}${docName}`, { encoding: "utf8" });
  executeTransaction(
    `INSERT INTO gamedocs (doctitle, doctext) VALUES (@title, @text)`,
    { title: docName, text: docText }
  );
});

stdout.write(`Complete!\n~~~~\n~~~~\n~~~~\nRun start.sh or 'npm run start' to view the docs!`);

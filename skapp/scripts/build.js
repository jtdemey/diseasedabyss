import fs from "fs";
import { marked } from "marked";
import path from "path";
import { stdout } from "process";
import createDb from "./createdb.js";
import { executeTransaction } from "./db.js";

const BREAK = `~~~~~~~~~~~~~~~~~~~\n`;

stdout.write(`~Diseased Abyss~\n${BREAK}${BREAK}Building docs...\n`);

createDb();
executeTransaction("DELETE FROM gamedocs");

const docDir = path.join(process.cwd(), "../docs/");

fs.readdirSync(docDir).forEach(docName => {
  const docText = fs.readFileSync(`${docDir}${docName}`, { encoding: "utf8" });
  console.log(docText);
  const html = marked.parse(docText);
  executeTransaction(
    `INSERT INTO gamedocs (doctitle, doctext) VALUES (@title, @text)`,
    { title: docName, text: html }
  );
});

stdout.write(`Complete!\n${BREAK}Run start.sh or 'npm run start' to view the docs!\n`);

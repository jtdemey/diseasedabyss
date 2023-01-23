import { executeTransaction } from "./db.js";

const createdb = () => executeTransaction(`CREATE TABLE IF NOT EXISTS gamedocs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  doctext TEXT NULL,
  doctitle TEXT NULL
)`);

export default createdb;

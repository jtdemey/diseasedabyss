import { error, json } from "@sveltejs/kit";
import db from "../../../scripts/db.js";
 
/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
  const docs = db.prepare("SELECT * FROM gamedocs").all();
  return new json({ docs });
}

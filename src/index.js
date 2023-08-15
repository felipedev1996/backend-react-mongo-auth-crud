import app from "./app.js";
import { FRONTEND_URL, PORT } from "./config.js";
import { connectDB } from "./db.js";

async function main() {
  try {
    await connectDB();
    app.listen(PORT);
    console.log(`Listening on FRONTEND_URL: ${FRONTEND_URL}`);
    console.log(`Environm: ${process.env.NODE_ENV}`)
  } catch (error) {
    console.error(error);
  }
}

main();

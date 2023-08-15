

import { config } from 'dotenv';
config();
export const PORT = process.env.PORT || 4000;


export const MONGODB_URI = "mongodb+srv://userimgur:pilipe123@imgur.l6fhfql.mongodb.net/react-task-auth?retryWrites=true&w=majority";
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "secret";



// export const FRONTEND_URL = process.env.FRONTEND_URL || "https://white-ground-077ba4d0f.3.azurestaticapps.net"; 
export const FRONTEND_URL ="http://127.0.0.1:5174"; 

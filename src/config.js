

import { config } from 'dotenv';
config();
export const PORT = process.env.PORT || 4000;


export const MONGODB_URI = process.env.MONGODB_URI ;
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "secret";



export const FRONTEND_URL = process.env.FRONTEND_URL || "https://white-ground-077ba4d0f.3.azurestaticapps.net"; 

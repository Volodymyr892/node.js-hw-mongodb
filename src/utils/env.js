import dotenv from "dotenv";

dotenv.config();
console.log(process.env.SMTP_HOST); 

export function env(name, defaultValue) {
    const value = process.env[name];
    if (value) return value;
    if (defaultValue) return defaultValue;
    throw new Error(`Missing: process.env['${name}'].`);
  }
import dotenv from 'dotenv';
dotenv.config();

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  brcypt_salt_rounds: process.env.BCRYPT_SALT_ROUND,
  access_token_secret: process.env.JWT_ACCESS_SECRET,
  access_token_expires: process.env.ACCESS_TOKEN_EXPIRES_IN,
  refresh_token_expires: process.env.REFRESH_TOKEN_EXPIRES_IN,
};

export const database = {
    host: process.env.APP_DB_HOST,
    username: process.env.APP_DB_USERNAME,
    password: process.env.APP_DB_PASSWORD,
    name: process.env.APP_DB_NAME,
    port: Number(process.env.APP_DB_PORT),
    nodeEnv: process.env.NODE_ENV,
    secretKey: process.env.APP_SECRET_KEY,
    portApp: Number(process.env.APP_PORT),
}
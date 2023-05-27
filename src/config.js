import { config } from "dotenv";
config();

export default {
  port: process.env.PORT || 4000,
  dbUser: process.env.DB_USER || "root",
  dbPassword: process.env.DB_PASSWORD || "",
  dbServer: process.env.DB_SERVER || "localhost",
  dbDatabase: process.env.DB_DATABASE || "rivera",
  dbPort: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  dbDialect: process.env.DB_DIALECT || "mssql"
};

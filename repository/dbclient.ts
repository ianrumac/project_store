import { Client } from "https://deno.land/x/postgres/mod.ts";
import { Env } from "../env.ts"
class Database {
    client: Client;
    constructor() {
      this.client = new Client({
        user: Env.DB_UNAME,
        database: Env.DB_NAME,
        hostname: "localhost",
        password: Env.DB_PWD,
        port: 5432
      });
      this.connect()
      
    }
  
    async connect() {
      await this.client.connect();

    }
  }
  
  export default new Database().client;
  
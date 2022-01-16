export interface Configuration {
  server: {
    port: number;
  };

  db: {
    user: string;
    password: string;
    database: string;
    port: number;
  };
}

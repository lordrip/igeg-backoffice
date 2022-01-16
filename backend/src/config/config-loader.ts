import { Configuration } from './config.model';

export const configLoader = (): { config: Configuration } => ({
  config: {
    server: {
      port: Number.parseInt(process.env.PORT, 10) || 3_000,
    },

    db: {
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      port: Number.parseInt(process.env.POSTGRES_PORT, 10) || 5_432,
    },
  },
});

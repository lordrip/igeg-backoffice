import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configLoader } from './config';
import { CustomersModule } from './customers/customers.module';
import { DatabaseModule } from './database.module';
import { InterventionsModule } from './services/interventions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: process.env.NODE_ENV === 'production',
      envFilePath: ['../.env'],
      load: [configLoader],
      isGlobal: true,
    }),
    DatabaseModule.forRoot(),
    CustomersModule,
    InterventionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

require('dotenv').config();
import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatesModule } from './rates/rates.module';
import { dataSourceOptions } from 'db/data-source';
import { PassengersModule } from './passengers/passengers.module';
import { BookingsModule } from './bookings/bookings.module';
import { PassengerExtrasModule } from './passenger-extras/passenger-extras.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { LocationsModule } from './locations/locations.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { smtpConfig } from './utls/smtp.config';
import { UsersCommand } from './utls/seed-commands/users.command';
import { UsersModule } from './users/users.module';

/**
 * Usage and Description - This file will act as the main
 * app wrapper combining the controller functions and the
 * service functions
 *
 **/
@Module({
  imports: [
    CommandModule,
    RatesModule,
    PassengersModule,
    BookingsModule,
    PassengerExtrasModule,
    LocationsModule,
    UsersModule,
    TypeOrmModule.forRoot(dataSourceOptions),
    MailerModule.forRootAsync(smtpConfig),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client', 'build'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, UsersCommand],
})
export class AppModule {}

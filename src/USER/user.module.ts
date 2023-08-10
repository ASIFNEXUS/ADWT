import { Module } from '@nestjs/common';
import { AppController } from './user.controller';
import { AppService } from './user.service';
import { RegistrationModule } from './registration/registration.module';
import { ProductModule } from './product/product.module';
import { PaymentModule } from './payment/payment.module';
import { InventoryModule } from './inventory/inventory.module';
import { FeedbackModule } from './feedback/feedback.module';
import { CartModule } from './cart/cart.module';
import { SolditemModule } from './solditem/solditem.module';
import { customerModule } from './customer/customer.module';
import { ReviewModule } from './review/review.module';


@Module({
  imports: [RegistrationModule, ProductModule, PaymentModule, InventoryModule, FeedbackModule, CartModule, SolditemModule, customerModule, ReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class UserModule {}

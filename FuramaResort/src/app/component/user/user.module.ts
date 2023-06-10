import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { KindRoomComponent } from './kind-room/kind-room.component';
import { DetailsRoomComponent } from './details-room/details-room.component';
import { BookRoomComponent } from './book-room/book-room.component';



@NgModule({
  declarations: [ KindRoomComponent, DetailsRoomComponent, BookRoomComponent, ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

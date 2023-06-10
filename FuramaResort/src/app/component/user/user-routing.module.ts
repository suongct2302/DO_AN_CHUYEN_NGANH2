import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityListComponent} from '../facility-management/facility-list/facility-list.component';
import {KindRoomComponent} from './kind-room/kind-room.component';
import { DetailsRoomComponent } from './details-room/details-room.component';
import { BookRoomComponent } from './book-room/book-room.component';


const routes: Routes = [
  {path: 'kind-room', component: KindRoomComponent},
  {path: 'details-room', component: DetailsRoomComponent},
  {path: 'book-room', component: BookRoomComponent},

//  ví dụ thêm 1 componet thì {path: 'link', component: Têncomponet}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

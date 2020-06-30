import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { app_routing } from './app-routing.module';
//rutas


//component
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { FooterComponent } from './footer/footer.component';
import { ActionMenuComponent } from './action-menu/action-menu.component';
import { WorldComponent } from './world/world.component';
import { CombatComponent } from './combat/combat.component';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderMenuComponent,
    FooterComponent,
    ActionMenuComponent,
    WorldComponent,
    CombatComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

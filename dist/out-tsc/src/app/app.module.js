import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SocketIoModule } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
const config = {
    url: environment.wsUrl, options: {}
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            LoginComponent,
            DashboardComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            SocketIoModule.forRoot(config)
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
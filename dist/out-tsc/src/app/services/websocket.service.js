import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let WebsocketService = class WebsocketService {
    constructor(socket) {
        this.socket = socket;
        this.socketStatus = false;
        this.checkStatus();
    }
    checkStatus() {
        this.socket.on('connect', () => {
            console.log('Conectado al servidor');
            this.socketStatus = true;
        });
        this.socket.on('disconnect', () => {
            console.log('Desconectado del servidor');
            this.socketStatus = false;
        });
    }
};
WebsocketService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], WebsocketService);
export { WebsocketService };
//# sourceMappingURL=websocket.service.js.map
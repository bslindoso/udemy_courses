"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
class Server {
    bootstrap() {
        return this.initRoutes().then(() => this);
    }
}
exports.Server = Server;

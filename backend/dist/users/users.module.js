"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entity/user.entity");
const jwt_strategy_1 = require("./jwt.strategy");
const users_controller_1 = require("./users.controller");
const users_repository_1 = require("./users.repository");
const users_service_1 = require("./users.service");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [jwt_1.JwtModule.register({
                secret: 'secret',
                signOptions: {
                    expiresIn: 3600,
                }
            }),
            passport_1.PassportModule.register({
                defaultStrategy: 'jwt',
            }),
            typeorm_1.TypeOrmModule.forFeature([users_repository_1.UserRepository, user_entity_1.UserEntity])],
        controllers: [users_controller_1.UserController],
        providers: [users_service_1.UserServices, jwt_strategy_1.JwtStrategy],
        exports: [jwt_strategy_1.JwtStrategy, passport_1.PassportModule],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=users.module.js.map
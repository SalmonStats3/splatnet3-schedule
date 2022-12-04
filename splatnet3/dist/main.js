"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const path = require("path");
const fs_1 = require("fs");
const child_process_1 = require("child_process");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
async function bootstrap() {
    dayjs.extend(utc);
    dayjs.extend(timezone);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        transformOptions: {
            excludeExtraneousValues: true,
        },
    }));
    const build = path.resolve(process.cwd(), 'docs');
    const options = new swagger_1.DocumentBuilder().setTitle('SplatNet3').build();
    const documents = swagger_1.SwaggerModule.createDocument(app, options);
    const output = path.resolve(build, 'index');
    (0, fs_1.mkdir)(build, { recursive: true }, (_) => { });
    (0, fs_1.writeFileSync)(`${output}.json`, JSON.stringify(documents), {
        encoding: 'utf8',
    });
    (0, child_process_1.exec)(`npx redoc-cli build ${output}.json -o ${output}.html`);
    if (process.env.NODE_ENV == 'production') {
        return;
    }
    swagger_1.SwaggerModule.setup('documents', app, documents);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
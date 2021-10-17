interface DBConfig {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
}
interface Auth {
    auth0Domain: string;
    auth0Audience: string;
}
interface Config {
    port: number;
    db: DBConfig;
    auth: Auth;
}
export declare const config: Config;
export {};

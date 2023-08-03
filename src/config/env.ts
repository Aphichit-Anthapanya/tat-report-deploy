// add all dotenv value here
export default class EnvConfig {
  static isDevEnv: boolean = process.env.NODE_ENV === "development";

  static apiUrl: string = process.env.NEXT_PUBLIC_API_JS_URL ?? "";

  static isNoAuth: boolean = process.env.NEXT_PUBLIC_NO_AUTH === "true";
}

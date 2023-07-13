export default class Config {
  static isDevEnv: boolean = process.env.NODE_ENV === "development";
}

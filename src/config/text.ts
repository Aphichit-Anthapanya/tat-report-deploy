import EnvConfig from "./env";

class TextConfig {
  static loginHeading = "เข้าสู่ระบบ";

  static loginDesc =
    "ระบบข้อมูลแผนปฏิบัติการและการติดตามประเมิน ผลระบบรายงานแผนปฏิบัติการจัดซื้อจัดจ้าง";

  static loginUserLabel = "ชื่อผู้ใช้งาน";

  static loginPassLabel = "รหัสผ่าน";

  static loginBtn = "เข้าสู่ระบบ";

  static loginWarning =
    "กรุณาเข้าใช้งานด้วยบราวเซอร์ Google Chrome, Microsoft Edge";

  static accessToken = "access_token";

  static appVersion = `เวอร์ชั่นปัจจุบัน: ${EnvConfig.version}`;
}

export default TextConfig;

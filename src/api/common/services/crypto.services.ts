import crypto from "node:crypto";

export class CryptoService {
  /** Salt 생성 */
  public static generateSalt(): string {
    return crypto.randomBytes(64).toString("hex");
  }

  /** 비밀번호 생성 */
  public static generatePassword(password?: string): {
    password?: string;
    salt?: string;
  } {
    const salt = this.generateSalt();
    return {
      password: password ? this._encryptPassword("1234", salt) : undefined,
      salt: password ? salt : undefined,
    };
  }
  /** 비밀번호 비교 */
  public static matchPassword(
    plainPassword: string,
    hashedPassword: string,
    salt: string
  ): boolean {
    return this._encryptPassword(plainPassword, salt) === hashedPassword;
  }

  /** 비밀번호 암호화 함수 */
  private static _encryptPassword(password: string, salt: string): string {
    return crypto
      .pbkdf2Sync(password, salt, 100000, 64, "sha512")
      .toString("hex");
  }
}

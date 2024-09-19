import crypto from "node:crypto";

export class CryptoService {
  /** 솔트 생성 */
  public static generateSalt(): string {
    return crypto.randomBytes(64).toString("hex");
  }

  /** 비밀번호 암호화 */
  public static encryptPassword(password?: string): {
    hashedPassword?: string;
    salt?: string;
  } {
    const salt = this.generateSalt();

    return {
      hashedPassword: password
        ? this._encryptPassword(password, salt)
        : undefined,
      salt: password ? salt : undefined,
    };
  }

  /** 비밀번호 일치 확인 */
  public static matchPassword(
    plainPassword: string,
    hashedPassword: string,
    salt: string
  ): boolean {
    return hashedPassword === this._encryptPassword(plainPassword, salt);
  }

  private static _encryptPassword(password: string, salt: string): string {
    return crypto
      .pbkdf2Sync(password, salt, 100000, 64, "sha512")
      .toString("hex");
  }
}

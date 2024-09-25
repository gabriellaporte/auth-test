export class TokenPayload {
  constructor(
    private readonly userId: number,
    private readonly username: string,
    private readonly email: string,
    private readonly expirationDate: Date,
  ) {}

  static create(
    userId: number,
    username: string,
    email: string,
    expirationDate: number,
  ): TokenPayload {
    const formattedExpirationDate = new Date(expirationDate * 1000);
    return new TokenPayload(userId, username, email, formattedExpirationDate);
  }

  static fromObject(obj: any): TokenPayload {
    return TokenPayload.create(obj.user_id, obj.username, obj.email, obj.exp);
  }

  getUserId(): number {
    return this.userId;
  }

  getUsername(): string {
    return this.username;
  }

  getEmail(): string {
    return this.email;
  }

  getExpirationDate(): Date {
    return this.expirationDate;
  }
}

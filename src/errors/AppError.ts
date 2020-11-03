export default class AppError {
  // readonly = não consegue alterar o erro
  public readonly message: string;

  public readonly statusCode: number; // Código http do erro

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

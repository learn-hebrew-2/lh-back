export default class NotFoundMediaException extends Error {
  constructor(message: string) {
    super(message);
  }
}
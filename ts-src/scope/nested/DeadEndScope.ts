export class DeadEndScope {
  resolve(name: string) {
    throw "Unknown symbol: #{name}";
  }
}

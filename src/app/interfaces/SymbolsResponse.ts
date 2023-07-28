import Symbol from '../classes/Symbol';

export default interface SymbolsResponse {
  motd: { msg: string; url: string };
  success: boolean;
  symbols: { [key: string]: { code: string; description: string } };
}

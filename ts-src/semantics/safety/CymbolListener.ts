export interface CymbolListener {
  info: (msg: string) => void;
  error: (msg: string) => void;
}

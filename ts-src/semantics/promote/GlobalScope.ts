import { BaseScope } from "./BaseScope";

export class GlobalScope extends BaseScope {
  constructor() {
    super(null);
  }

  getScopeName(): string {
    return "global";
  }
}

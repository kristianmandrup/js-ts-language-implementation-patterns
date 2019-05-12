import { BaseScope } from "./BaseScope";
import { Scope } from "./Scope";

export class LocalScope extends BaseScope {
  constructor(parent: Scope) {
    super(parent);
  }
  public getScopeName(): string {
    return "local";
  }
}

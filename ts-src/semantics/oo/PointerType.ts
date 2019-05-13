import { CodeSymbol } from "./CodeSymbol";
import { Type } from "./Type";
import { SymbolTable } from "./SymbolTable";
import { ClassSymbol } from "./ClassSymbol";

export class PointerType extends CodeSymbol implements Type {
  targetType: Type;
  constructor(targetType: Type) {
    super(targetType + "*");
    this.targetType = targetType;
  }
  getTypeIndex(): number {
    return SymbolTable.tPTR;
  }

  /** Can we assign this type to destination type?  destType must be
   *  pointer and to same type unless object ptr.  Then, we have to do a
   *  polymorphic check. [Ha! This method is a perfect example of
   *  static typing getting in the way. Look at all those type casts!]
   */
  canAssignTo(destType: Type): boolean {
    // if not a pointer, return false
    if (!(destType instanceof PointerType)) return false;
    // What type is the target pointing at?
    const destTargetType = destType.targetType;
    const srcTargetType = this.targetType;
    // if this and target are object pointers, check polymorphism
    if (
      destTargetType instanceof ClassSymbol &&
      this.targetType instanceof ClassSymbol
    ) {
      const thisClass: any = srcTargetType;
      const targetClass: any = destTargetType;
      // Finally!  Here it is: the polymorphic type check :)
      return thisClass instanceof targetClass;
    }
    // not comparing object pointers; types we point at must be the same
    // For example: int *p; int *q; p = q;
    return srcTargetType == destTargetType;
  }
}

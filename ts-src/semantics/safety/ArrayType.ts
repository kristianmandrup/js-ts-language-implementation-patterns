import { CodeSymbol } from "./CodeSymbol";

export public class ArrayType extends CodeSymbol implements Type {
	Type elementType;
    public ArrayType(Type elementType) {
        super(elementType+"[]");
        this.elementType = elementType;
    }
    public int getTypeIndex() { return 0; }
}

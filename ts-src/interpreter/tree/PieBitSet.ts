import { BitSet } from "./BitSet";

class PieBitSet {
  public static FOLLOW_functionDefinition_in_program124 = new BitSet(
    0x0000000000c83d00
  );
  public static FOLLOW_statement_in_program128 = new BitSet(0x0000000000c83d00);
  public static FOLLOW_EOF_in_program133 = new BitSet(0x0000000000000002);
  public static FOLLOW_STRUCT_in_structDefinition162 = new BitSet(
    0x0000000000400000
  );
  public static FOLLOW_ID_in_structDefinition166 = new BitSet(
    0x0000000080000000
  );
  public static FOLLOW_31_in_structDefinition168 = new BitSet(
    0x0000000000400000
  );
  public static FOLLOW_vardef_in_structDefinition180 = new BitSet(
    0x0000000300000000
  );
  public static FOLLOW_32_in_structDefinition183 = new BitSet(
    0x0000000000400000
  );
  public static FOLLOW_vardef_in_structDefinition185 = new BitSet(
    0x0000000300000000
  );
  public static FOLLOW_33_in_structDefinition189 = new BitSet(
    0x0000000000800000
  );
  public static FOLLOW_NL_in_structDefinition191 = new BitSet(
    0x0000000000000002
  );
  public static FOLLOW_DEF_in_functionDefinition214 = new BitSet(
    0x0000000000400000
  );
  public static FOLLOW_ID_in_functionDefinition216 = new BitSet(
    0x0000000400000000
  );
  public static FOLLOW_34_in_functionDefinition231 = new BitSet(
    0x0000000800400000
  );
  public static FOLLOW_vardef_in_functionDefinition234 = new BitSet(
    0x0000000900000000
  );
  public static FOLLOW_32_in_functionDefinition237 = new BitSet(
    0x0000000000400000
  );
  public static FOLLOW_vardef_in_functionDefinition239 = new BitSet(
    0x0000000900000000
  );
  public static FOLLOW_35_in_functionDefinition246 = new BitSet(
    0x0000001000c83d00
  );
  public static FOLLOW_slist_in_functionDefinition254 = new BitSet(
    0x0000000000000002
  );
  public static FOLLOW_36_in_slist274 = new BitSet(0x0000000000800000);
  public static FOLLOW_NL_in_slist276 = new BitSet(0x0000000000c83d00);
  public static FOLLOW_statement_in_slist278 = new BitSet(0x0000000000d83d00);
  public static FOLLOW_DOT_in_slist281 = new BitSet(0x0000000000800000);
  public static FOLLOW_NL_in_slist283 = new BitSet(0x0000000000000002);
  public static FOLLOW_statement_in_slist297 = new BitSet(0x0000000000000002);
  public static FOLLOW_structDefinition_in_statement320 = new BitSet(
    0x0000000000000002
  );
  public static FOLLOW_qid_in_statement325 = new BitSet(0x0000000000000200);
  public static FOLLOW_ASSIGN_in_statement327 = new BitSet(0x000000040f600000);
  public static FOLLOW_expr_in_statement329 = new BitSet(0x0000000000800000);
  public static FOLLOW_NL_in_statement331 = new BitSet(0x0000000000000002);
  public static FOLLOW_RETURN_in_statement349 = new BitSet(0x000000040f600000);
  public static FOLLOW_expr_in_statement351 = new BitSet(0x0000000000800000);
  public static FOLLOW_NL_in_statement353 = new BitSet(0x0000000000000002);
  public static FOLLOW_PRINT_in_statement370 = new BitSet(0x000000040f600000);
  public static FOLLOW_expr_in_statement372 = new BitSet(0x0000000000800000);
  public static FOLLOW_NL_in_statement374 = new BitSet(0x0000000000000002);
  public static FOLLOW_IF_in_statement391 = new BitSet(0x000000040f600000);
  public static FOLLOW_expr_in_statement393 = new BitSet(0x0000001000c83d00);
  public static FOLLOW_slist_in_statement397 = new BitSet(0x0000002000000002);
  public static FOLLOW_37_in_statement400 = new BitSet(0x0000001000c83d00);
  public static FOLLOW_slist_in_statement404 = new BitSet(0x0000000000000002);
  public static FOLLOW_WHILE_in_statement426 = new BitSet(0x000000040f600000);
  public static FOLLOW_expr_in_statement428 = new BitSet(0x0000001000c83d00);
  public static FOLLOW_slist_in_statement430 = new BitSet(0x0000000000000002);
  public static FOLLOW_call_in_statement447 = new BitSet(0x0000000000800000);
  public static FOLLOW_NL_in_statement449 = new BitSet(0x0000000000000002);
  public static FOLLOW_NL_in_statement463 = new BitSet(0x0000000000000002);
  public static FOLLOW_ID_in_call489 = new BitSet(0x0000000400000000);
  public static FOLLOW_34_in_call491 = new BitSet(0x0000000c0f600000);
  public static FOLLOW_expr_in_call494 = new BitSet(0x0000000900000000);
  public static FOLLOW_32_in_call497 = new BitSet(0x000000040f600000);
  public static FOLLOW_expr_in_call499 = new BitSet(0x0000000900000000);
  public static FOLLOW_35_in_call506 = new BitSet(0x0000000000000002);
  public static FOLLOW_addexpr_in_expr525 = new BitSet(0x0000000000060002);
  public static FOLLOW_set_in_expr528 = new BitSet(0x000000040f600000);
  public static FOLLOW_addexpr_in_expr535 = new BitSet(0x0000000000000002);
  public static FOLLOW_mulexpr_in_addexpr547 = new BitSet(0x000000000000c002);
  public static FOLLOW_set_in_addexpr550 = new BitSet(0x000000040f600000);
  public static FOLLOW_mulexpr_in_addexpr557 = new BitSet(0x000000000000c002);
  public static FOLLOW_atom_in_mulexpr571 = new BitSet(0x0000000000010002);
  public static FOLLOW_MUL_in_mulexpr574 = new BitSet(0x000000040f600000);
  public static FOLLOW_atom_in_mulexpr577 = new BitSet(0x0000000000010002);
  public static FOLLOW_INT_in_atom591 = new BitSet(0x0000000000000002);
  public static FOLLOW_CHAR_in_atom602 = new BitSet(0x0000000000000002);
  public static FOLLOW_FLOAT_in_atom612 = new BitSet(0x0000000000000002);
  public static FOLLOW_STRING_in_atom622 = new BitSet(0x0000000000000002);
  public static FOLLOW_qid_in_atom632 = new BitSet(0x0000000000000002);
  public static FOLLOW_call_in_atom643 = new BitSet(0x0000000000000002);
  public static FOLLOW_instance_in_atom648 = new BitSet(0x0000000000000002);
  public static FOLLOW_34_in_atom653 = new BitSet(0x000000040f600000);
  public static FOLLOW_expr_in_atom655 = new BitSet(0x0000000800000000);
  public static FOLLOW_35_in_atom657 = new BitSet(0x0000000000000002);
  public static FOLLOW_NEW_in_instance677 = new BitSet(0x0000000000400000);
  public static FOLLOW_ID_in_instance681 = new BitSet(0x0000000000000002);
  public static FOLLOW_ID_in_qid701 = new BitSet(0x0000000000100002);
  public static FOLLOW_DOT_in_qid704 = new BitSet(0x0000000000400000);
  public static FOLLOW_ID_in_qid707 = new BitSet(0x0000000000100002);
  public static FOLLOW_ID_in_vardef721 = new BitSet(0x0000000000000002);
}

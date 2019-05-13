class StructSpace {
  fields: any[];

  constructor(nfields: number) {
    this.fields = [nfields];
  }
  toString(): string {
    return `${this.fields}`;
  }
}

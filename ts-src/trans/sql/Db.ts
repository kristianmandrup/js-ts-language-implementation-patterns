export class ResultSet {
  next() {
    return {};
  }
  getInt(id: any): number {
    return 1;
  }
  getString(id: any): string {
    return "0";
  }
  getDate(id: any): Date {
    return new Date();
  }
  close() {}
}

export class Statement {
  executeQuery(query: string): ResultSet {
    return new ResultSet();
  }
  close() {}
}

export class Prep {
  setInt(index: number, value: number | null | undefined) {}
  setString(index: number, value: string | null | undefined) {}
  setDate(index: number, value: Date | null | undefined) {}
  close() {}
  executeUpdate(): number {
    return 0;
  }
}

export class Connection {
  createStatement(): Statement {
    return new Statement();
  }

  prepareStatement(statement: string): Prep {
    return new Prep();
  }

  close() {}
}

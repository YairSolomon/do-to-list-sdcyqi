export class Mission {
  public name: string;
  public completed: boolean;
  public created_date: Date;


  constructor(name: string, completed: boolean,created_date:Date) {
    this.name = name;
    this.completed = completed;
    this.created_date=created_date;

  }
}

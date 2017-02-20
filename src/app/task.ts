export class Task {
  title: string;
  description: string;
  priority: number;
  date: Date;


  constructor(title : string, date : Date);

  constructor(title : string, date : Date, priority: number=0, desc? : string ) {
    this.title = title;
    this.date = date;
    this.description = desc;
    this.priority = priority;
  }

}


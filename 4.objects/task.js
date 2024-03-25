function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  }
  
    let student1 = new Student("Илья", "мужской", 24);
    let student2 = new Student("Анастасия", "женский", 23);
    let student3 = new Student("Евгений", "мужской", 20); 
  
  Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  }
  
  Student.prototype.addMarks = function (...marksToAdd) {
    if (this.hasOwnProperty('marks')) {
      this.marks.push(...marksToAdd);
    }
  }
   
  Student.prototype.getAverage = function () {
   if (this.hasOwnProperty('marks') && this.marks.length !== 0) {
    return this.marks.reduce((a, b) => (a + b)) / this.marks.length;
   } else {
    return 0;
   }
  }
  
  Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
  
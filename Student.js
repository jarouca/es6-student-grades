// define your student class, here

class Student {
  constructor(name, grades) {
    this.name = name;
    this.grades = grades;
  }

  averageGrade() {
    let total = 0;
    for (let grade of this.grades) {
      total += grade;
    }
    return total / this.grades.length
  }

  toString() {
    return this.name + " has an average grade of " + this.averageGrade
  }

}

// create a new student object
let james = new Student("James", [80, 75.3, 90, 88, 70]);

// print the average grade to the console
console.log(james.averageGrade());

// print the string representation of the student object
console.log(james.toString());

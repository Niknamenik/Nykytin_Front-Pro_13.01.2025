class Student {
  constructor(name, secondName, yearOfBirth, scores = []) {
    this.name = name;
    this.secondName = secondName;
    this.yearOfBirth = yearOfBirth;
    this.scores = scores;
    this.attendance = [];
  }

  getAge() {
    const date = new Date();
    return date.getFullYear() - this.yearOfBirth;
  }

  getAverageScore() {
    return (
      this.scores.reduce((acc, score) => acc + score, 0) / this.scores.length
    );
  }

  present() {
    if (this.attendance.length < 25) {
      this.attendance.push(true);
    } else {
      alert("The student has already received 25 attendance marks");
    }
  }
  absent() {
    if (this.attendance.length <= 25) {
      this.attendance.push(false);
    } else {
      alert("The student has already received 25 attendance marks");
    }
  }
  getAverageAttendance() {
    return this.attendance.filter((mark) => mark == true).length / 25;
  }

  summary() {
    const avarageScore = student.getAverageScore();
    const avarageAttendance =
      this.attendance.filter((mark) => mark == true).length / 25;

    if ((avarageScore >= 90) & (avarageAttendance >= 0.9)) {
      console.log("Молодець!");
      return;
    }
    if (avarageScore >= 90 || avarageAttendance >= 0.9) {
      console.log("Добре, але можна краще");
    } else {
      console.log("Редиска!");
    }
  }
}

//Exempel 1

const student = new Student(
  "nik",
  "nik",
  2000,
  [90, 90, 90, 90, 90, 90, 90, 90, 90, 90]
);

student.attendance = [
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
];

student.present();
student.absent();
student.present();

console.log(student.summary()); //Молодець

// Exemple 2
// const student = new Student(
//   "nik",
//   "nik",
//   2000,
//   [90, 90, 50, 90, 90, 50, 50, 50, 90, 90]
// );

// student.attendance = [
//   true,
//   true,
//   true,
//   true,
//   true,
//   true,
//   true,
//   true,
//   true,
//   true,
//   true,
//   true,
//   true,
//   true,
//   true,
//   true,
//   true,
//   true,
//   true,
//   true,
//   true,
//   true,
//   true,
// ];

// student.present();
// student.absent();
// student.present();

// console.log(student.summary()); //Добре, але можна краще

// Exemple 3
// const student = new Student(
//   "nik",
//   "nik",
//   2000,
//   [90, 90, 50, 90, 90, 50, 50, 50, 90, 90]
// );

// student.attendance = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   true,
// ];

// student.present();
// student.absent();
// student.present();

// console.log(student.summary()); //Редиска!

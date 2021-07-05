// School Catalogue
// Catalogue to hold quick reference material for each school in the city

// To create classes for primary junior and secondary schools. Because these classes share properties and methods, each will inherit from a parent School class. 

// To create a parent class named School with three subclasses: PrimarySchool, JuniorSchool, and SecondarySchool. Each subclass has properties and methods. The methods are .quickFacts() and .pickSubstituteTeacher() (this is a static method).  All properties have a getter but only numberOfStudents property has a setter.

// PrimarySchool has one additional property: pickUpPolicy (string)

// SecondarySchool has one additional property: sportsPlayed (array of strings)


// Heading
console.log('SCHOOL CATALOGUE\n');

//  parent class: School
class School{
// subclasses: PrimarySchool, JuniorSchool and SecondarySchool
// each subclass has properties for name, level and number of students.  
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

// getters for the name, level, and numberOfStudents properties
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }

// setter for numberOfStudents
  set numberOfStudents(value) {
    if(value.isNaN()) {
      console.log('Invalid input: numberOfStudents must be set to a number.')
      }
    else {
      this.numberOfStudents = value;
      }
}

  quickFacts() {
    console.log(`QUICK FACTS:\n${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`); 
  }

// randomly generate a whole number between 0 and one less than the length of the substituteTeachers array. Use this number to access and return the substitute teacher at that randomly generated index

// create a static method named pickSubstituteTeacher. This method will receive one parameter, named substituteTeachers. The substituteTeachers parameter will take an array of strings

// as a static method, substitute teachers will not belong to any particular school. A static method can be called without an object that owns it, so, can be called directly from School
  static pickSubstituteTeacher(substituteTeachers) {
    const randInt = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randInt];
  }
}

// build a PrimarySchool class that extends School
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickUpPolicy) {
    super(name, 'primary', numberOfStudents);
      this._pickUpPolicy = pickUpPolicy;
    }

    get pickUpPolicy(){
      return this._pickUpPolicy;
    }
  }

// build a JuniorSchool class that extends School
 class JuniorSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'junior', numberOfStudents);
    }
 }

// build a SecondarySchool class that extends School
 class SecondarySchool extends School {
    constructor(name, numberOfStudents, sportsPlayed) {
      super(name, 'secondary', numberOfStudents);
      this._sportsPlayed = sportsPlayed;
    }

    get sportsPlayed(){
      return this._sportsPlayed;
    }
 }


// call .pickSubstituteTeacher() on School, and pass the following array as an argument
const sub = School.pickSubstituteTeacher(['Jim McAllister', 'Jean Brody', 'Albus Dumbledore', 'Sherman Klump', 'Charles Francis Xavier', 'John Keating', 'John Kimble', 'Veronica Vaughn', 'Louanne Johnson', 'Dewey Finn', 'Katherine Ann Watson']);


// create PrimarySchool instances
const stGeorgesSchool = new PrimarySchool(`St Georges' School`, 210, `Students must be picked up by a parent, guardian, or a family member over the age of 13.`);

// log .quickFacts() 
stGeorgesSchool.quickFacts();

// log pick-up policy
console.log ("\nPICK-UP POLICY: \n" + stGeorgesSchool.pickUpPolicy + "\n");


// create JuniorSchool instances
const Montgomery = new JuniorSchool(`Montgomery Academy`, 300);

// log .quickFacts() 
Montgomery.quickFacts();


// create SecondarySchool instances
const kingEdwards = new SecondarySchool('King Edwards School', 700, ['Rounders', 'Netball', 'Hockey', 'Track and Field']);

// call quick facts
kingEdwards.quickFacts();

// log sports played
console.log ("\nSPORTS PLAYED: \n" + kingEdwards.sportsPlayed);

// call substitute teacher 
console.log("\nSUBSTITUTE TEACHER: \n" +  sub);

// Output
// SCHOOL CATALOGUE

// QUICK FACTS:
// St Georges' School educates 210 students at the primary school level.

// PICK-UP POLICY: 
// Students must be picked up by a parent, guardian, or a family member over the age of 13.

// QUICK FACTS:
// Montgomery Academy educates 300 students at the junior school level.
// QUICK FACTS:
// King Edwards School educates 700 students at the secondary school level.

// SPORTS PLAYED: 
// Rounders,Netball,Hockey,Track and Field

// SUBSTITUTE TEACHER: 
// Jean Brody



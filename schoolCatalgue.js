// School Catalogue
// want catalog to hold quick reference material for each school in the city

// create classes for primary and secondary schools. Because these classes share properties and methods, each will inherit from a parent School class. 

class School{
    constructor(name, level, numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  }
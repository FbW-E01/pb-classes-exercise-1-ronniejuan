
//Create the instance properties `fullname` and `email` in the `Employee` class. Given a person's first and last names:
//Form the `fullname` by simply joining the first and last name together, separated by a space.
class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname;
		this.fullname = firstname + ` `+ lastname;
		this.email = this.lastname + "."+ "@juanito.perez";
		// Complete the code!
	}


// setNewData(k){
// 	this.email =k;
// }

printInfo(){
	console.log("Employee " + this.firstname+ " " + this.lastname)
}

}

const emp1 = new Employee("Tom","York")
console.log(emp1.fullname)
console.log(emp1.email)
console.log(emp1.firstname)
console.log(emp1)

//emp1.printInfo();
// emp1.fullname

// emp1 = Employee("John", "Smith")
// emp1.fullname ➞ "John Smith"

// emp2 = Employee("Mary",  "Sue")
// emp2.email ➞ "mary.sue@company.com"

// emp3 = Employee("Antony", "Walker")
// emp3.firstname ➞ "Antony"

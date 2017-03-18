var School = function(){
	this.database = {};
}

School.prototype.roster = function() {
	return this.database;
}

School.prototype.add = function(student,grade) {
	if (this.database[grade]){
		this.database[grade] = this.database[grade].concat([student]).sort();
	} else {
		this.database[grade] = [student];
	}
}

School.prototype.grade = function(grade){
	return (this.database[grade]) ? this.database[grade] : [];
}

module.exports = School;
var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];
var shortNames = longNames.map(function(fullname){ 
    return fullname
});

console.log(shortNames);
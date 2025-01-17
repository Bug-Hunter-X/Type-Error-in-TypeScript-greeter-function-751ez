function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];

// Solution 1: Iterate through the array
user.forEach(name => console.log(greeter(name)));

// Solution 2: Modify the greeter function to accept an array
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(', ');
}
console.log(greeterArray(user));
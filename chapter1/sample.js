function greet() {
  console.log('Hello ' + this.name);
  console.log(this);
}

greet();
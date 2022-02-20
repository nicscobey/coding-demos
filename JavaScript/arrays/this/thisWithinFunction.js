const testThis = {
  property: "foo",
  logProp: function() {
    const logProp = "bar"
    console.log(this.logProp)
  }
}

testThis.logProp()


// a. this.logProp
// b. undefined
// c. Error: Infinite loop
// d. function() {const logProp = "bar"; console.log(this.logProp);}
// e. "bar"
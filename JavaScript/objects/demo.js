let pizza = {
    sauce: "tomato",
    cheese: "Mozzarella",
    toppings: ["mushrooms"]
}
let pizzaCopy = pizza
pizza["sauce"] = "pesto"
console.log(pizzaCopy)

// console.log(duplicate==pizza)
// console.log(duplicate===pizza)

let a = 1

let b = a
a = 2
console.log(b)
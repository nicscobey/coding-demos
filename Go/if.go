package main

import "fmt"

func main() {
	var a = 0
	if a > 0 {
		fmt.Println("a > 0")
	} else if a < 0 {
		fmt.Println("a < 0")
	} else {
		fmt.Println("a = 0")
	}

}

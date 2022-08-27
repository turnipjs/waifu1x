package main

import (
	"fmt"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("./static"))
	http.Handle("/", fs)

	// http.HandleFunc("/", indexHandler)

	http.ListenAndServe(":8080", nil)
}

func indexHandler(responseWriter http.ResponseWriter, request *http.Request) {
	fmt.Fprintf(responseWriter, "Hello!")
}

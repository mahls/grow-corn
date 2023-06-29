package main

import (
	"fmt"
	"time"
	"github.com/gin-gonic/gin"
  "github.com/gin-contrib/cors"
)

var corns = 0

// function to count corns
func cornCore(c *gin.Context) {
	fmt.Println("Hello, world!")
	c.JSON(200, gin.H{"corn": corns})
	var i = 0
	for i < 2000000 {
		time.Sleep(2 * time.Second)
		corns++
	}
}

func main() {
	// create router
	router := gin.Default()

  // Enable CORS with default configuration
	router.Use(cors.Default())

	// start corn route
	router.GET("/startcorn", func(c *gin.Context) {
    fmt.Println("corns started growing")
		cornCore(c)
	})

  // get corns route
	router.GET("/corns", func(c *gin.Context) { 
	  fmt.Println("delivering corns")
	  c.JSON(200, gin.H{"corns": corns})
  })

  // run router
	router.Run(":8080")
}



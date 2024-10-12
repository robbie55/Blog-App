package main

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

// Blog post type
type BlogPost struct {
	ID         string    `json:"id"`
	Author     string    `json:"author"`
	Title      string    `json:"title"`
	Content    string    `json:"content"`
	DatePosted time.Time `json:"datePosted"`
}

var posts = []BlogPost{
	{ID: "1", Author: "John Doe", Title: "My first blog post", Content: "This is my first blog post", DatePosted: time.Now()},
	{ID: "2", Author: "Jane Doe", Title: "My First blog post", Content: "This is my First blog post", DatePosted: time.Now()},
	{ID: "3", Author: "John Doe", Title: "My second blog post", Content: "This is my second blog post", DatePosted: time.Now()},
}

func main() {
	router := gin.Default()
	router.GET("/posts", getPosts)
	router.GET("/posts/:id", getPostById)
	router.POST("/posts", putPosts)

	router.Run("localhost:8080")
}

func getPosts(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, posts)
}

func getPostById(c *gin.Context) {
	id := c.Param("id")

	// Loop over array of posts to find the post with the given ID
	for _, post := range posts {
		if post.ID == id {
			c.IndentedJSON(http.StatusOK, post)
			return
		}
	}

	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Post not found"})
}

func putPosts(c *gin.Context) {
	var newPost BlogPost

	// Call bindJSON to bind the received JSON to newPost
	if err := c.BindJSON(&newPost); err != nil {
		return
	}

	// Add the new post
	posts = append(posts, newPost)
	c.IndentedJSON(http.StatusCreated, newPost)
}
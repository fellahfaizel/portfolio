package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetProfile(c *gin.Context) {
	profile := gin.H{
		"name": "Fellah Faizel",
		"role": "Backend Developer | AI/ML Enthusiast",
		"bio": `I’m a final-year Computer Science Engineering student (graduating in 2026) at Government College of Engineering, Kannur.
Currently working as a backend developer, I specialize in building intelligent systems and APIs using Python, Go, and modern databases like Neo4j and MongoDB.
With a strong foundation in Computer Science, I’m now exploring Machine Learning and Deep Learning to create systems that learn, adapt, and solve real-world problems.`,
		"imageUrl": "http://localhost:8080/static/profile.jpg", // later this can come from static hosting or DB
	}

	c.JSON(http.StatusOK, profile)
}

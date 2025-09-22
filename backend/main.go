package main

import (
	"portfolio/routes"

	"os"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	_ = godotenv.Load()
	r := gin.Default()

	// ✅ Serve static files (profile.jpg inside ./static folder)
	r.Static("/static", "./static")

	// ✅ CORS middleware
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"}, // React frontend
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	// ✅ Routes
	r.GET("/api/projects", routes.GetProjects)
	r.POST("/api/contact", routes.ContactHandler)
	r.GET("/api/profile", routes.GetProfile)
	r.GET("/api/skills", routes.GetSkills)
	r.GET("/api/education", routes.GetEducation)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080" // local default
	}
	r.Run(":" + port)
}

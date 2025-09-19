package routes

import (
	"net/http"
	"portfolio/models"

	"github.com/gin-gonic/gin"
)

func GetProjects(c *gin.Context) {
	projects := []models.Project{
		{
			ID:          1,
			Name:        "WikiGraph",
			Description: "A graph-based search engine using Go, Neo4j, and NLP that answers natural language queries.",
			URL:         "https://github.com/fellahfaizel/wikigraph",
			Language:    "Go",
		},
		{
			ID:          2,
			Name:        "DomSev",
			Description: "A household services web application built using the MERN stack. It allows users to filter and book electricians, plumbers, and other service providers based on location.",
			URL:         "https://github.com/fellahfaizel/dom_sev",
			Language:    "MERN Stack",
		},
		{
			ID:          3,
			Name:        "Movie Recommendation System",
			Description: "A recommendation engine using collaborative filtering and content-based techniques.",
			URL:         "https://github.com/fellahfaizel/movie-recommendation-system",
			Language:    "Python",
		},
	}

	c.JSON(http.StatusOK, projects)
}

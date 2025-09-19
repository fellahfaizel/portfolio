package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Education model
type Education struct {
	Degree      string `json:"degree"`
	Institution string `json:"institution"`
	Year        string `json:"year"`
	Description string `json:"description"`
}

// GetEducation handles /api/education
func GetEducation(c *gin.Context) {
	education := []Education{
		{
			Degree:      "B.Tech in Computer Science and Engineering",
			Institution: "Government College of Engineering, Kannur",
			Year:        "2022 - 2026",
			Description: "CGPA 8.86 | SheCoders Lead, SHE GCEK | Mentored juniors in C, Python, CSS",
		},
		{
			Degree:      "High Secondary(Computer Science Stream)",
			Institution: "Ursuline Senior Secondary School",
			Year:        "2020 - 2022",
			Description: "Passed with 92.4%",
		},
	}

	c.JSON(http.StatusOK, education)
}

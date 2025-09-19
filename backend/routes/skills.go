package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetSkills(c *gin.Context) {
	skills := []gin.H{
		{
			"title": "Programming & Scripting",
			"icon":  "💻",
			"skills": []string{
				"Python", "Go (Golang)", "JavaScript (ES6+)", "C (Basics)", "Java (Basics)",
			},
		},
		{
			"title": "Backend Development",
			"icon":  "⚙️",
			"skills": []string{
				"Node.js", "Express.js", "Python", "Flask", "REST APIs", "Database Design", "JWT Authentication",
			},
		},
		{
			"title": "Databases & Storage",
			"icon":  "🗄️",
			"skills": []string{
				"Neo4j", "MongoDB", "MySQL", "FAISS",
			},
		},
		{
			"title": "Tools & Technologies",
			"icon":  "🛠️",
			"skills": []string{
				"Git", "GitHub", "VS Code", "MongoDB", "MySQL", "Postman",
			},
		},
		{
			"title": "Frontend Development",
			"icon":  "🎨",
			"skills": []string{
				"React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Responsive Design",
			},
		},
	}

	c.JSON(http.StatusOK, skills)
}

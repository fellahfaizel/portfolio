package routes

import (
	"fmt"
	"net/http"
	"portfolio/utils"

	"github.com/gin-gonic/gin"
)

type ContactRequest struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

func ContactHandler(c *gin.Context) {
	var req ContactRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid request"})
		return
	}

	// ✅ Validate input
	if err := utils.ValidateContactInput(req.Name, req.Email, req.Message); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// ✅ Send email
	if err := utils.SendEmail(req.Name, req.Email, req.Message); err != nil {
		fmt.Println("SendEmail error:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to send email"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "contact form submitted successfully"})
}

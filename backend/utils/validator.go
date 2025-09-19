package utils

import (
	"fmt"
	"net/mail"
	"strings"
)

func ValidateContactInput(name, email, message string) error {
	if strings.TrimSpace(name) == "" {
		return fmt.Errorf("name is required")
	}
	if strings.TrimSpace(message) == "" {
		return fmt.Errorf("message is required")
	}
	_, err := mail.ParseAddress(email)
	if err != nil {
		return fmt.Errorf("invalid email address")
	}
	return nil
}

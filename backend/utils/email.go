package utils

import (
	"fmt"
	"net/smtp"
	"os"

	"github.com/joho/godotenv"
)

func SendEmail(fromName, fromEmail, message string) error {
	// ✅ Load .env (safe: if already loaded, it won’t reload)
	_ = godotenv.Load()

	smtpHost := os.Getenv("SMTP_HOST")      // e.g., "smtp.gmail.com"
	smtpPort := os.Getenv("SMTP_PORT")      // e.g., "587"
	smtpUser := os.Getenv("SMTP_USER")      // your email
	smtpPass := os.Getenv("SMTP_PASS")      // app password or SMTP password
	recipient := os.Getenv("CONTACT_EMAIL") // where to send contact form messages

	if smtpHost == "" || smtpPort == "" || smtpUser == "" || smtpPass == "" || recipient == "" {
		return fmt.Errorf("❌ SMTP environment variables not set")
	}

	auth := smtp.PlainAuth("", smtpUser, smtpPass, smtpHost)

	subject := "New Portfolio Contact"
	body := fmt.Sprintf("From: %s <%s>\n\n%s", fromName, fromEmail, message)

	msg := []byte("To: " + recipient + "\r\n" +
		"Subject: " + subject + "\r\n" +
		"\r\n" + body + "\r\n")

	// ✅ Use smtpHost:smtpPort
	err := smtp.SendMail(smtpHost+":"+smtpPort, auth, smtpUser, []string{recipient}, msg)
	if err != nil {
		return fmt.Errorf("failed to send email: %v", err)
	}
	return nil
}

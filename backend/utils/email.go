package utils

import (
	"fmt"
	"net/smtp"
	"os"
)

func SendEmail(fromName, fromEmail, message string) error {
	smtpHost := os.Getenv("SMTP_HOST")      // e.g., "smtp.gmail.com"
	smtpPort := os.Getenv("SMTP_PORT")      // e.g., "587"
	smtpUser := os.Getenv("SMTP_USER")      // your email
	smtpPass := os.Getenv("SMTP_PASS")      // app password or SMTP password
	recipient := os.Getenv("CONTACT_EMAIL") // where to send contact form messages

	if smtpHost == "" || smtpPort == "" || smtpUser == "" || smtpPass == "" || recipient == "" {
		return fmt.Errorf("SMTP env vars not set")
	}

	auth := smtp.PlainAuth("", smtpUser, smtpPass, smtpHost)

	subject := "New Portfolio Contact"

	body := fmt.Sprintf("From: %s <%s>\n\n%s", fromName, fromEmail, message)

	msg := []byte("To: " + recipient + "\r\n" +
		"Subject: " + subject + "\r\n" +
		"\r\n" + body + "\r\n")

	err := smtp.SendMail(smtpHost+":"+smtpPort, auth, smtpUser, []string{recipient}, msg)
	if err != nil {
		return err
	}
	return nil
}

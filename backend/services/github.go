package services

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"portfolio/models"
)

func FetchProjects() ([]models.Project, error) {
	token := os.Getenv("GITHUB_TOKEN")
	username := os.Getenv("GITHUB_USERNAME")

	// GraphQL endpoint
	url := "https://api.github.com/graphql"

	// GraphQL query for pinned repos
	query := fmt.Sprintf(`
		{
			user(login: "%s") {
				pinnedItems(first: 6, types: REPOSITORY) {
					nodes {
						... on Repository {
							id
							name
							description
							url
							primaryLanguage {
								name
							}
							stargazerCount
							updatedAt
						}
					}
				}
			}
		}
	`, username)

	reqBody := map[string]string{"query": query}
	jsonData, _ := json.Marshal(reqBody)

	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
	if err != nil {
		return nil, err
	}

	req.Header.Set("Authorization", "Bearer "+token)
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("GitHub GraphQL error: %s", resp.Status)
	}

	var result struct {
		Data struct {
			User struct {
				PinnedItems struct {
					Nodes []struct {
						ID          string `json:"id"`
						Name        string `json:"name"`
						Description string `json:"description"`
						URL         string `json:"url"`
						Language    struct {
							Name string `json:"name"`
						} `json:"primaryLanguage"`
						Stars     int    `json:"stargazerCount"`
						UpdatedAt string `json:"updatedAt"`
					} `json:"nodes"`
				} `json:"pinnedItems"`
			} `json:"user"`
		} `json:"data"`
	}

	if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
		return nil, err
	}

	var projects []models.Project
	for _, repo := range result.Data.User.PinnedItems.Nodes {
		projects = append(projects, models.Project{
			ID:          0, // GraphQL IDs are strings, ignore for now
			Name:        repo.Name,
			Description: repo.Description,
			URL:         repo.URL,
			Language:    repo.Language.Name,
			Stars:       repo.Stars,
		})
	}

	return projects, nil
}

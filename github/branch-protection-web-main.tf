# Opened by Arcturel Assay: every change to web/main needs a review (CC8.1, A.8.32).
resource "github_branch_protection" "web_main" {
  repository_id  = "web"
  pattern        = "main"
  enforce_admins = true

  required_pull_request_reviews {
    required_approving_review_count = 1
    dismiss_stale_reviews           = true
  }

  required_status_checks {
    strict   = true
    contexts = ["build"]
  }
}

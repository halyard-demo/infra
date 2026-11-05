# halyard-infra

Terraform for Halyard. Each directory is its own root module with its own state.

- `aws/`: the AWS account (network, the app's buckets).
- `github/`: the GitHub org's repository settings (integrations/github provider).

Run `terraform init && terraform plan` inside a directory.


The `cdk/` app (the `cdk init` layout: the stack class is in `cdk/lib/halyard-stack.ts`, made once in `cdk/bin/halyard.ts`) and its two workflows (`cdk-changeset.yml`, `cdk-deploy.yml`) make the stack `halyard-cdk-data` (proof 784-cdk).

# halyard-infra

Terraform for Halyard. Each directory is its own root module with its own state.

- `aws/`: the AWS account (network, the app's buckets).
- `github/`: the GitHub org's repository settings (integrations/github provider).

Run `terraform init && terraform plan` inside a directory.


The `cdk/` app (the `cdk init` layout: stack class in `cdk/lib/halyard-stack.ts`) and its two workflows (`cdk-changeset.yml`, `cdk-deploy.yml`) are kept for later proofs. Their stack `halyard-cdk-data` is torn down: a change under `cdk/` needs the stack recreated first, or its deploy fails.

The `pulumi/` program (Pulumi YAML, stack `proof`) and its two workflows (`pulumi-preview.yml`, `pulumi-deploy.yml`) are kept for later proofs and run only for changes under `pulumi/`. Their state bucket, both CI roles and the program's bucket are torn down, so they are dormant: a change under `pulumi/` needs those recreated first, or its preview and deploy fail.

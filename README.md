# halyard-infra

Terraform for Halyard. Each directory is its own root module with its own state.

- `aws/`: the AWS account (network, the app's buckets).
- `github/`: the GitHub org's repository settings (integrations/github provider).

Run `terraform init && terraform plan` inside a directory.


The `cdk/` app (the `cdk init` layout: stack class in `cdk/lib/halyard-stack.ts`) and its two workflows (`cdk-changeset.yml`, `cdk-deploy.yml`) are kept for later proofs. Their stack `halyard-cdk-data` is torn down: a change under `cdk/` needs the stack recreated first, or its deploy fails.

The `pulumi/` folder is a dormant Pulumi TypeScript program (the `aws-typescript` template, project `halyard-cloud`, stack `dev` on the Pulumi Cloud backend) with its two workflows (`pulumi-preview.yml`, `pulumi-deploy.yml`), kept for later proofs. The two workflows are the S3-backend ones (stack `proof`, state bucket `halyard-pulumi-state-363776342490`), restored after the Pulumi Cloud proof, so they do not match the program in the folder until the next proof replaces it. They run only for changes under `pulumi/`. The proofs are torn down: the state bucket, the CI roles, the program's bucket, the Pulumi Cloud stack and token, and the repository secrets are gone, so a change under `pulumi/` needs them recreated first, or its preview and deploy fail.

The `aws-follow/` Terraform root (its own state key, with `terraform-follow-plan.yml` and `terraform-follow-apply.yml`) was a proof for the watch following a Terraform change. It is removed: the bucket `halyard-follow-363776342490`, its state versions and the apply role `halyard-follow-apply-role` are gone, and the two workflows are deleted with it. The `aws/` root was never changed by it.

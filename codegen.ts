import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    "src/gql/__types__.ts": {
      schema: "src/gql/schema.graphql",
      documents: "src/gql/**/*.gql",
      plugins: ["typescript"],
    },
  },
  config: {
    enumsAsTypes: true,
  },
  hooks: {
    afterOneFileWrite: ["prettier --write"],
  },
};

export default config;

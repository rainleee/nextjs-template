import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/gql/schema.graphql",
  documents: "src/gql/**/*.gql",
  generates: {
    "src/gql/__types__.ts": {
      plugins: ["typescript"],
    },
    "src/gql/generates.ts": {
      preset: "near-operation-file",
      presetConfig: {
        baseTypesPath: `~@/gql/__types__`,
        extension: ".graphql.ts",
      },
      plugins: ["typescript-operations", "typescript-react-apollo"],
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

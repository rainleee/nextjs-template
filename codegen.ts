import type { CodegenConfig } from "@graphql-codegen/cli";

import { MockFieldGeneration, MockScalars } from "@/types/codegen";

const scalars = {
  Date: "string",
  DateTime: "string",
};

/**
 * * __mockScalars__
 *
 * mock data의 Scalars 값을 세부적으로 설정하려면 아래의 object에 Scalars값과 매칭될 정보를 넣어주세요.
 *
 * @example Scalar name이 Datetime이고 faker lib 중 date 값을 넣고 싶은경우
 *
 * const options = {
 *  DateTime: {
 *     generator: 'date.future',
 *     arguments: [10],
 *     extra: {
 *       function: 'toISOString',
 *       arguments: [],
 *   },
 * }
 */
const mockScalars: MockScalars = {
  DateTime: {
    generator: "date.future",
    arguments: [10],
    extra: {
      function: "toISOString",
      arguments: [],
    },
  },
  date: {
    generator: "date.future",
    arguments: [10],
    extra: {
      function: "toISOString",
      arguments: [],
    },
  },
  ID: {
    generator: "datatype.uuid",
  },
};

/**
 * * __mockFieldGeneration__
 *
 * mock data의 field 값을 세부적으로 설정하려면 아래의 object에 필드값과 매칭될 정보를 넣어주세요.
 * "@faker-js/faker": "^7.5.0" 버전으로  https://fakerjs.dev/guide/ 링크의 문법을 사용해서 넣어주시면 됩니다.
 *
 * @example field name이 etc고, faker lib 중 lorem 값을 넣고 싶은경우
 *
 * const options = {
 *  fieldGeneration : {
 *    etc: {
 *       generator: 'lorem.paragraphs',
 *       arguments: [3, '<br/>\\n'],
 *      }
 *    }
 *  }
 */
const mockFieldGeneration: MockFieldGeneration = {
  //add filed gen
};

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    "src/gql/__types__.ts": {
      schema: "src/gql/schema.graphql",
      documents: "src/gql/**/*.gql",
      plugins: ["typescript"],
    },
    "src/gql/generates.ts": {
      schema: "src/gql/schema.graphql",
      documents: "src/gql/**/*.gql",
      preset: "near-operation-file",
      presetConfig: {
        baseTypesPath: `~@/gql/__types__`,
        extension: ".graphql.ts",
      },
      plugins: ["typescript-operations", "typescript-react-apollo"],
    },

    // mocking type
    "src/mocks/gql/__types__.ts": {
      schema: "src/mocks/gql/mock.schema.graphql",
      config: { scalars },
      plugins: ["typescript"],
    },
    // msw
    "src/mocks/": {
      schema: "src/mocks/gql/mock.schema.graphql",
      documents: "src/mocks/**/*.gql",
      preset: "near-operation-file",
      presetConfig: {
        baseTypesPath: `~@/mocks/gql/__types__`,
        extension: ".graphql.ts",
      },
      plugins: [
        "typescript-operations",
        "typescript-msw",
        "typescript-react-apollo",
      ],
    },
    // mock data
    "src/mocks/mockData/_index.ts": {
      schema: "src/mocks/gql/mock.schema.graphql",
      config: {
        prefix: "mock",
        typesFile: `@/mocks/gql/__types__`,
        generateLibrary: "faker",
        locale: "ko",
        scalars: mockScalars,
        fieldGeneration: mockFieldGeneration,
      },
      plugins: ["typescript-operations", "typescript-mock-data"],
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

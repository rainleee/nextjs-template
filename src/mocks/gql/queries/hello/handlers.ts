import { mockHelloWorld } from "@/mocks/mockData/_index";

import { mockHelloWorldQuery } from "./helloWorld.graphql";

export const helloHandlers = [
  mockHelloWorldQuery((req, res, ctx) => {
    const { input } = req.variables;

    if (!input) {
      return res(
        ctx.errors([
          {
            message: "input is null",
            errorType: "InputVariablesError",
          },
        ])
      );
    }

    return res(
      ctx.data({
        helloWorld: mockHelloWorld({ hello: "hello", world: "world" }),
      })
    );
  }),
];

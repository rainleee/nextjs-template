import { useHelloWorldQuery } from "@/mocks/gql/queries/hello/helloWorld.graphql";

export default function Home() {
  const { data, loading } = useHelloWorldQuery({
    variables: { input: { id: "hello" } },
  });

  if (loading) return <div>loading...</div>;

  return (
    <>
      <div>{data?.helloWorld.hello}</div>
      <div>{data?.helloWorld.world}</div>
    </>
  );
}

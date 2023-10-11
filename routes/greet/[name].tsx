import { PageProps } from "$fresh/server.ts";

// http://localhost:8000/greet/{string}
export default function Greet(props: PageProps) {
  return <div>Hello {props.params.name}</div>;
}

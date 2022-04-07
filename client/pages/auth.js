import { useRouter } from "next/router";

export default function Items(props) {
  const { query } = useRouter();

  return (
    <div>
      <h1>Items page</h1>
      <p>{query.publicKey}</p>
    </div>
  );
}
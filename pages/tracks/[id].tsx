import { useRouter } from "next/dist/client/router";

export default function Track() {
  const router = useRouter();
  const { id } = router.query;
  return <div>Track: {id}</div>;
}

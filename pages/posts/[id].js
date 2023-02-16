import Link from "next/link";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();

  //http://localhost:3000/posts/123?abc=456
  const { id,abc } = router.query;


  
  return <div>
            Post: {id} {abc}
            <li>
            <Link legacyBehavior
              href={{
                pathname: "/posts/[postId]",
                query: { postId: "123" },
              }}
            >
              <a>切換至 pages/posts/[postId].tsx</a>
            </Link>
            </li>
            <li>
            <Link legacyBehavior
              href={{
                pathname: "/posts/[...date]",
                query: { date: ["2021", "12", "31"] },
              }}
            >
              <a>切換至 pages/posts/[...date].tsx</a>
            </Link>
            </li>
         </div>;
};

export default Post;
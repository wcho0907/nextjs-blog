import Link from "next/link";

function Home() {
  return (
    <ul>
      <li>
        <Link legacyBehavior href="/post">
          <a>切換至 pages/posts/index.tsx</a>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/posts/123">
          <a>切換至 pages/posts/[postId].js</a>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/posts/2023/02/16">
          <a>切換至 pages/posts/[...date].js</a>
        </Link>
      </li>
    </ul>
  );
}

export default Home;

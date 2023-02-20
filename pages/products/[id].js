import { useRouter } from "next/router";
import Link from "next/link";
import { getProductById } from "../fake-data";
import styles from '../../components/layout.module.css'

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  /* Really??
     因為 Next.js 有 pre-rendering 這個階段，導致 router.query 第一次渲染時是空物件 {} 
     所以用解構賦值 (Destructuring assignment) 拿到的 id 會是 undefined. 
  */   
  // if (!id) return <>wtf</>;

  const product = getProductById(id);

  return (
    <>
      <h2>商品詳細頁面</h2>
      <div> {product.title} </div>
      <div className={styles.backToHome}>
          <Link href="/products">👈 回產品列表</Link>
      </div>
    </>
  );
};

export default Product;
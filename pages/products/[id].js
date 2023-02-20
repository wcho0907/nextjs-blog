import { useRouter } from "next/router";
import Link from "next/link";
import { getProductById } from "../fake-data";
import styles from '../../components/layout.module.css'

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <></>;

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
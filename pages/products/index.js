import Image from "next/image";
import Link from "next/link";
import { getAllProduct } from "../fake-data";

const Home = () => {
  const products = getAllProduct();

  const style = {
    width: 120,
    height: 167,
    position: 'relative',
  };
  
  return (
    <>
      <div>商品列表</div>
      <div>
        {products.map((product) => (
          <>
          <div style={style}> 
            <Image src={product.image} alt="product" layout="fill" objectFit="cover" />
                <Link legacyBehavior href={`/product/${product.id}`} passHref>
                    <a>{product.title}</a>
                </Link>
          </div>
          <span>{product.price}</span><br/>
          </>
        ))}
      </div>
    </>
  );
};

export default Home;
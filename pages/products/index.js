import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { sortByPrice, getAllProduct } from "../fake-data";

const Home = () => {
  const [direction, setDirection] = useState("ASC");
  const products = sortByPrice(direction);
  const router = useRouter();
  
  const handleSortingDirectionChange = (e) => {
    const dir = e.target.value;
    router.push(`${router.pathname}?direction=${dir}`, undefined, {
      shallow: true,
    });
  };  
  
  useEffect(() => {
    if (router.query.direction) {
      setDirection(router.query.direction);
    }
  }, [router.query.direction]);

  const style = {
    width: 120,
    height: 170,
    position: 'relative',
  };
  
  return (
    <>
      <div>商品列表</div>
      <div>
        Price:
            <select value={direction} onChange={handleSortingDirectionChange}>
            <option value="ASC">價格由低到高</option>
            <option value="DES">價格由高到低</option>
            </select>
      </div>
      <div>
        {products.map((product) => (
          <>
          <div> 
            <div style={style}>
                <Image src={product.image} alt="product" layout="fill" objectFit="cover" />
            </div>
            <div>
                <Link legacyBehavior href={`/products/${product.id}`} passHref>
                    <a>{product.title}</a>
                </Link>
            </div>
          </div>
          <span>{product.price}</span><br/>
          </>
        ))}
      </div>
    </>
  );
};

export default Home;
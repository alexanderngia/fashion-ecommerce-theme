import LayoutStore from 'components/container/layout/store';
import { ButtonSub } from 'components/ui/button';
import { CardProduct } from 'components/ui/card';
import Filter from 'components/ui/filter';
import { getProducts } from 'lib/productService';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { data } from 'pages/data/store';
import { Product } from 'types/product';

import { headerLayouts } from '@/components/container/header';
import { AngleDown } from '@styled-icons/fa-solid/AngleDown';

import styles from './index.module.scss';

interface StoreProps {
  product: Product[];
}
const Store: NextPage<StoreProps> = ({ product }) => {
  const router = useRouter();
  const layout = "store";
  const HeaderLayout = headerLayouts[layout] || headerLayouts.default;
  return (
    <>
      <HeaderLayout data={data.nav} layout={layout}></HeaderLayout>
      <LayoutStore>
        <div className={styles["function"]}>
          <div className={styles["column"]}>
            <h1>{data.title}</h1>
            <p>
              {router.asPath}/<span>{data.title}</span>
            </p>
          </div>
          <div className={styles["column"]}>
            <Filter title="Price" iconFilter={<AngleDown />} />
            <Filter title="Color" iconFilter={<AngleDown />} />
            <Filter title="Size" iconFilter={<AngleDown />} />
          </div>
        </div>
        <div className={styles["container"]}>
          {product &&
            product.map(
              ({ nameItem, urlItem, imgItem, priceItem }, index: number) => {
                return (
                  <CardProduct
                    className={styles["card"]}
                    key={nameItem + urlItem + index}
                    href={`/store/${urlItem}`}
                    title={nameItem}
                    image={imgItem}
                    price={priceItem}
                  />
                );
              }
            )}
        </div>
        <div className={styles["btn-load"]}>
          <ButtonSub type="button">LOAD MORE</ButtonSub>
        </div>
      </LayoutStore>
    </>
  );
};
export default Store;

export const getStaticProps: GetStaticProps = async () => {
  const product = await getProducts();
  return {
    props: {
      product,
    },
  };
};

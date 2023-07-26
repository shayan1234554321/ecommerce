import React from "react";
import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components/";

const Index = ({ products, bannerData }) => {

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Our products</h2>
        <p>Top technologies to find here</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product" ]';
  const products = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner" ]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Index;

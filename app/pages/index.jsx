import React from "react";
import { client } from "../lib/client"
import { Product, FooterBanner, HeroBanner } from "../components/";

const Index = ({ products , bannerData }) => {

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best selling product</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => product.name)}
      </div>

      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product" ]'
  const products = await client.fetch(productQuery)

  const bannerQuery = '*[_type == "banner" ]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: { products , bannerData }
  }
}

export default Index;

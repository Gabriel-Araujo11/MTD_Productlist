import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { Product } from "@/utils/types";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/data/data.json");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <Flex wrap="wrap" gap={6} justify={{ base: "center", md: "flex-start" }}>
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </Flex>
  );
};

export default ProductList;

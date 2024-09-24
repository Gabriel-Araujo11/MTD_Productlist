import { useEffect, useState } from "react";
import { Heading, SimpleGrid, Box, Flex } from "@chakra-ui/react";
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
    <Box paddingX={{ base: 4, md: 8 }} mt={5}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h2" size="lg" color="#28130b">
          Desserts
        </Heading>
      </Flex>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={20}>
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductList;

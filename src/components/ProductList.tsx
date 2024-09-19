import { Box, Flex, Heading } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

export default function ProductList() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      p={4}
      justify="space-between"
    >
      <Box flex="3">
        <Heading mb={6} fontSize={{ base: "2xl", md: "3xl" }}>
          Desserts
        </Heading>
        <ProductCard />
        <Cart />
      </Box>
    </Flex>
  );
}

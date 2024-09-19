import { Box, Flex, Heading } from "@chakra-ui/react";
import ProductCart from "./ProductCart";
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
        <ProductCart />
        <Cart />
      </Box>
    </Flex>
  );
}

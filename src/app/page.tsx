"use client";

import Cart from "@/components/Cart";
import ProductList from "@/components/ProductList";
import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      p={5}
      justify="space-between"
      maxWidth="1200px"
      mx="auto"
      width="100%"
    >
      <Box flex="3">
        <ProductList />
      </Box>
      <Box flex="1" ml={{ base: 0, md: 16 }} mt={{ base: 8, md: 10 }}>
        <Cart />
      </Box>
    </Flex>
  );
}

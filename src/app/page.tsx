"use client";

import Cart from "@/components/Cart";
import ProductList from "@/components/ProductList";
import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      p={4}
      justify="space-between"
    >
      <Box flex="3">
        <ProductList />
      </Box>
      <Box flex="1" ml={{ base: 0, md: 8 }} mt={{ base: 8, md: 0 }}>
        <Cart />
      </Box>
    </Flex>
  );
}

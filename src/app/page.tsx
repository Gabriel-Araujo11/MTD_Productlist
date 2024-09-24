"use client";

import Cart from "@/components/Cart";
import ProductList from "@/components/ProductList";
import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      p={{ base: 0, md: 20 }}
      mx="auto"
      width="100%"
      mb={20}
    >
      <Box flex="3" mr={{ base: 0, md: 5 }}>
        <ProductList />
      </Box>
      <Box flex="1" mt={{ base: 20, md: 10 }}>
        <Cart />
      </Box>
    </Flex>
  );
}

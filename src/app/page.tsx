"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Home() {
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
        <Text>Lista de produtos</Text>
      </Box>
    </Flex>
  );
}

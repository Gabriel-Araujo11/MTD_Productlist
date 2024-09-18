import { Box, Heading } from "@chakra-ui/react";

export default function ProductList() {
  return (
    <>
      <Box flex="3">
        <Heading mb={6} fontSize={{ base: "2xl", md: "3xl" }}>
          Desserts
        </Heading>
      </Box>
    </>
  );
}

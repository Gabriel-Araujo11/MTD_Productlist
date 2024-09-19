import { Box, Button, Flex, Text } from "@chakra-ui/react";

export default function ProductCard() {
  return (
    <Flex wrap="wrap" gap={6} justify={{ base: "center", md: "flex-start" }}>
      <Box
        p={4}
        borderWidth="1px"
        borderRadius="lg"
        width={{ base: "100%", sm: "48%", md: "250px" }}
        textAlign="center"
        backgroundColor="white"
      >
        <Text>Image</Text>
        <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
          Product Name
        </Text>
        <Text mb={4} fontSize={{ base: "sm", md: "md" }}>
          Product Price
        </Text>
        <Button colorScheme="orange" size={{ base: "sm", md: "md" }}>
          Add to Cart
        </Button>
      </Box>
    </Flex>
  );
}

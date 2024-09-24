import {
  Box,
  Image as ChakraImage,
  Text,
  Button,
  Flex,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { ProductCardProps } from "@/utils/types";
import Image from "next/image";

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, isItemSelected } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity };
    addToCart(productWithQuantity);
  };

  const handleQuantityIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    const productWithUpdatedQuantity = { ...product, quantity: newQuantity };
    addToCart(productWithUpdatedQuantity);
  };

  const handleQuantityDecrease = () => {
    const newQuantity = Math.max(quantity - 1, 1);
    setQuantity(newQuantity);
    const productWithUpdatedQuantity = { ...product, quantity: newQuantity };
    addToCart(productWithUpdatedQuantity);
  };

  return (
    <Flex
      direction="column"
      mt={{ base: 3, md: 5 }}
      mb={-20}
      textAlign="center"
      width={{ base: "100%", md: "260px" }}
      mx="auto"
    >
      <Box
        p={{ base: 0, md: 4 }}
        borderWidth="1px"
        borderRadius="lg"
        backgroundColor="white"
        borderColor={isItemSelected(product.name) ? "#c83b0e" : "gray.200"}
        borderStyle="solid"
        position="relative"
        boxShadow="md"
      >
        <ChakraImage
          srcSet={`${product.image.mobile} 300w, 
                   ${product.image.tablet} 768w, 
                   ${product.image.desktop} 1280w`}
          sizes="(max-width: 768px) 300px, (min-width: 768px) 768px, 1280px"
          alt={product.name}
          borderRadius="md"
          boxSize="100%"
          objectFit="cover"
          mb={4}
        />
        <Box
          height="50px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={{ base: -10, md: -6 }}
        >
          {!isItemSelected(product.name) ? (
            <Button
              leftIcon={
                <Image
                  src="/assets/images/icon-add-to-cart.svg"
                  alt="Add to Cart Icon"
                  width={20}
                  height={20}
                />
              }
              colorScheme="white"
              size={{ base: "sm", md: "md" }}
              onClick={handleAddToCart}
              color="#28130b"
              borderRadius="25px"
              background="white"
              border="2px solid #cbbcba"
              width="70%"
            >
              Add to Cart
            </Button>
          ) : (
            <HStack
              width="70%"
              justifyContent="center"
              backgroundColor="#c83b0e"
              borderRadius="25px"
            >
              <IconButton
                aria-label="Decrease quantity"
                icon={
                  <Image
                    src="/assets/images/icon-decrement-quantity.svg"
                    alt="Decrease Quantity Icon"
                    width={10}
                    height={10}
                  />
                }
                colorScheme="#c83b0e"
                onClick={handleQuantityDecrease}
              />
              <Text fontSize="lg" color="white">
                {quantity}
              </Text>
              <IconButton
                aria-label="Increase quantity"
                icon={
                  <Image
                    src="/assets/images/icon-increment-quantity.svg"
                    alt="Increase Quantity Icon"
                    width={10}
                    height={10}
                  />
                }
                colorScheme="#c83b0e"
                onClick={handleQuantityIncrease}
              />
            </HStack>
          )}
        </Box>
      </Box>
      <Box textAlign="left">
        <Text
          color="#c4b8b4"
          fontSize={{ base: "sm", md: "lg" }}
          mt={4}
          paddingTop="20px"
        >
          {product.category}
        </Text>
        <Text
          color="#28130b"
          fontWeight="bold"
          fontSize={{ base: "md", md: "lg" }}
        >
          {product.name}
        </Text>
        <Text mb={4} fontSize={{ base: "sm", md: "md" }} color="orange.600">
          ${product.price.toFixed(2)}
        </Text>
      </Box>
    </Flex>
  );
}

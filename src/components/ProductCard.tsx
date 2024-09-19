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
import { Product } from "@/utils/types";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [isSelected, setIsSelected] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product);
    setIsSelected(true);
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + delta, 1));
  };

  return (
    <Flex
      direction="column"
      mt={5}
      mb={5}
      textAlign="center"
      width={{ base: "100%", md: "280px" }}
      mx={{ base: 2, md: 2 }}
    >
      <Box
        p={4}
        borderWidth="1px"
        borderRadius="lg"
        backgroundColor="white"
        borderColor={isSelected ? "#c83b0e" : "gray.200"}
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
        {!isSelected ? (
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
            color="black"
            borderRadius="25px"
            bottom="10px"
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
            position="absolute"
            style={{ borderRadius: "25px" }}
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
              onClick={() => handleQuantityChange(-1)}
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
              onClick={() => handleQuantityChange(1)}
            />
          </HStack>
        )}
      </Box>
      <Text
        color="gray.600"
        fontSize={{ base: "md", md: "lg" }}
        mt={4}
        paddingTop="20px"
      >
        {product.category}
      </Text>
      <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
        {product.name}
      </Text>
      <Text mb={4} fontSize={{ base: "sm", md: "md" }} color="orange.600">
        ${product.price.toFixed(2)}
      </Text>
    </Flex>
  );
};

export default ProductCard;

import { Box, Heading, Text, Flex, IconButton } from "@chakra-ui/react";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <Box p={4} bg="gray.50" borderRadius="lg">
      <Heading size="lg" mb={4} color="#c83b0e">
        Your Cart ({cartItems.length})
      </Heading>
      {cartItems.length === 0 ? (
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          mb={4}
        >
          <Image
            src="/assets/images/illustration-empty-cart.svg"
            alt="Your cart"
            width={150}
            height={150}
          />
          <Text mt={4}>Your added items will appear here</Text>
        </Flex>
      ) : (
        cartItems.map((item, index) => (
          <Flex key={index} justify="space-between" mb={2}>
            <Text>{item.name}</Text>
            <Flex align="center">
              <Text mr={4}>${item.price.toFixed(2)}</Text>
              <IconButton
                aria-label="Remove item"
                isRound
                border="2px solid"
                icon={
                  <Image
                    src="/assets/images/icon-remove-item.svg"
                    alt="Remove item"
                    width={10}
                    height={10}
                  />
                }
                size="sm"
                onClick={() => removeFromCart(item.name)}
              />
            </Flex>
          </Flex>
        ))
      )}
    </Box>
  );
};

export default Cart;

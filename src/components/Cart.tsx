import { Box, Heading, Text, Flex, IconButton } from "@chakra-ui/react";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";

export default function Cart() {
  const { cartItems, removeFromCart, totalPrice } = useCart();

  return (
    <Box
      p={10}
      bg="gray.50"
      borderRadius="lg"
      mx="auto"
      width="100%"
      maxWidth="500px"
    >
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
        <>
          {cartItems.map((item, index) => (
            <Flex key={index} justify="space-between" mb={2}>
              <Text fontSize="14px">
                {item.name} x {item.quantity}
              </Text>
              <Flex align="center">
                <Text mr={4}>${(item.price * item.quantity).toFixed(2)}</Text>
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
          ))}
          <Heading size="md" mt={4}>
            Total: ${totalPrice.toFixed(2)}
          </Heading>
        </>
      )}
    </Box>
  );
}

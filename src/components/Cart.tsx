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
            <Flex
              key={index}
              justify="space-between"
              align="center"
              mb={5}
              borderBottom="1px solid #e2e2e2"
              pb={4}
            >
              <Flex direction="column">
                <Text fontSize="md" fontWeight="bold">
                  {item.name}
                </Text>
                <Flex align="center">
                  <Text fontSize="sm" color="red.500" fontWeight="bold" mr={1}>
                    {item.quantity}x
                  </Text>
                  <Text fontSize="sm" color="gray.500" mr={1}>
                    @ ${item.price.toFixed(2)}
                  </Text>
                  <Text fontSize="sm" fontWeight="bold">
                    ${item.price * item.quantity}
                  </Text>
                </Flex>
              </Flex>
              <IconButton
                aria-label="Remove item"
                isRound
                icon={
                  <Image
                    src="/assets/images/icon-remove-item.svg"
                    alt="Remove item"
                    width={16}
                    height={16}
                  />
                }
                size="md"
                onClick={() => removeFromCart(item.name)}
              />
            </Flex>
          ))}
          <Heading size="md" mt={4} textAlign="right" color="gray.800">
            Total: ${totalPrice.toFixed(2)}
          </Heading>
        </>
      )}
    </Box>
  );
}

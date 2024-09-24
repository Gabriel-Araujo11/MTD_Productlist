import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Box,
  Text,
  Image,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { useCart } from "@/hooks/useCart";
import { OrderConfirmationModalProps } from "@/utils/types";

export default function OrderConfirmationModal({
  isOpen,
  onClose,
}: OrderConfirmationModalProps) {
  const { cartItems, totalPrice, resetCart } = useCart();

  const handleStartNewOrder = () => {
    resetCart();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius="10px" display="flex">
        <ModalHeader>
          <Image
            src="/assets/images/icon-order-confirmed.svg"
            alt="Order Confirmed"
            boxSize="40px"
            mt={5}
            mb={5}
          />
          <HStack>
            <Text fontSize="2xl" fontWeight="bold">
              Order Confirmed
            </Text>
          </HStack>
          <Text fontSize="sm" color="gray.500">
            We hope you enjoy your food!
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack align="stretch" spacing={4}>
            {cartItems.map((item) => (
              <HStack key={item.name} spacing={4} align="center">
                <Image
                  src={item.image.thumbnail}
                  alt={item.name}
                  boxSize="60px"
                  borderRadius="md"
                />
                <Box flex="1">
                  <Text fontWeight="bold">{item.name}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {item.quantity}x @ ${item.price.toFixed(2)}
                  </Text>
                </Box>
                <Text fontWeight="bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </Text>
              </HStack>
            ))}
            <Divider />
            <HStack justify="space-between">
              <Text fontSize="lg" fontWeight="bold">
                Order Total
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                ${totalPrice.toFixed(2)}
              </Text>
            </HStack>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button
            backgroundColor="#c83b0e"
            color="white"
            width="100%"
            borderRadius="50px"
            onClick={handleStartNewOrder}
            _hover="black"
          >
            Start New Order
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

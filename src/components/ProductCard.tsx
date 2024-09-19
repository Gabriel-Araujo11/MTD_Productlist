import { Box, Image, Text, Button } from "@chakra-ui/react";
import { useCart } from "@/hooks/useCart";
import { Product } from "@/utils/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      width={{ base: "100%", sm: "48%", md: "250px" }}
      textAlign="center"
      backgroundColor="white"
    >
      <Image
        srcSet={`${product.image.mobile} 300w, 
                 ${product.image.tablet} 768w, 
                 ${product.image.desktop} 1280w`}
        sizes="(max-width: 768px) 300px, (min-width: 768px) 768px, 1280px"
        alt={product.name}
        mb={4}
        borderRadius="md"
        boxSize={{ base: "100%", sm: "100px", md: "150px" }}
        objectFit="cover"
      />
      <Text color="" fontSize={{ base: "md", md: "lg" }}>
        {product.category}
      </Text>
      <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
        {product.name}
      </Text>
      <Text mb={4} fontSize={{ base: "sm", md: "md" }}>
        ${product.price.toFixed(2)}
      </Text>
      <Button
        colorScheme="orange"
        size={{ base: "sm", md: "md" }}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductCard;

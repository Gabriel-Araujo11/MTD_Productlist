"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "@/context/useContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#fcf8f5" }}>
        <ChakraProvider>
          <CartProvider>{children}</CartProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}

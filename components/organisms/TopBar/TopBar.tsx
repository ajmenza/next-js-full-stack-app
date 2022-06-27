import { Text, Flex, HStack, Button } from "@chakra-ui/react";
import { MenuItem } from "../../molecules/MenuItem/MenuItem";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react"

export const TopBar = () => {
  return (
    <Flex
      w="100%"
      flexDirection="row"
      alignContent="center"
      p="8px 16px"
      justifyContent="center"
    >
      <Flex
        w={["100%", "100%", "100%", "90ch"]}
        flexDirection="row"
        alignContent="center"
      >
        <Text
          fontSize="36px"
          fontWeight="bold"
          lineHeight="42px"
          color="#1F79BA"
          flexGrow={1}
        >
          SuperApp
        </Text>
        <HStack spacing="16px" alignContent="center" marginLeft='32px'>
          <MenuItem text="Blog" href="/blog" />
          <MenuItem text="Product" href="/product" />
          <MenuItem text="Pricing" href="/pricing" />
        </HStack>
        <Flex marginLeft="32px">
          <Button variant="solid" colorScheme="blue" onClick={() => signIn()}>
            Get started
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

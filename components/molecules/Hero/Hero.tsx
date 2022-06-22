import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const Hero = () => {
  return (
    <Flex w="100%" background="linear-gradient(93.73deg, #FEAC5E 2.17%, #C779D0 47.86%)">
      <Container py="64px">
        <Heading>
          Increase your productivity
          <br />
          Make your app in minutes
        </Heading>
        <Text mt="16" fontSize="26px" color='gray.600'>
          Your Fullstack React app
        </Text>
      </Container>
    </Flex>
  );
};

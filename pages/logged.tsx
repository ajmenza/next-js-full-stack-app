import { Text, Button, Center, Container, Flex } from "@chakra-ui/react";
import { getSession, signOut } from "next-auth/react";
import React from "react";

function LoggedPage({ session }) {
  console.log(">>> session", session);

  return (
    <Container py="64px">
      <Center>
        <Flex flexDirection="column">
          <Text mb='64px'>Welcome back {session.user.name}!</Text>
          <Button onClick={() => signOut()}>Log out</Button>
        </Flex>
      </Center>
    </Container>
  );
}

export default LoggedPage;

export async function getServerSideProps({ req, res }) {
  // is the current user logged in or not?
  const session = await getSession({ req });
  console.log(session);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

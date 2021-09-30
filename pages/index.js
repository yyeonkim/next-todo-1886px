import Head from "next/head";

import { Container } from "@chakra-ui/layout";

import Header from "../components/Header";
import Todo from "../components/todo/Todo";

export default function Home() {
  return (
    <Container maxW="container.lg" centerContent>
      <Head>
        <title>Next Todo List</title>
      </Head>
      <Header />
      <Todo />
    </Container>
  );
}

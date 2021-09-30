import { Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <header style={styles.header}>
      <Heading size="2xl">NEXT TODO LIST</Heading>
    </header>
  );
}

const styles = {
  header: {
    margin: "4rem 0",
  },
};

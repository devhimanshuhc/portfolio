import React from "react"
import { Box, Container, Heading } from "@chakra-ui/react"
import Link from "next/link"

const AboutPage = () => {
  return (
    <Container maxW={"3xl"}>
      <h1>/about</h1>
      <Heading
        as="h2"
        _hover={{
          color: "brand",
          textDecoration: "none",
        }}
        size="h2"
      >
        Hello there!
      </Heading>
      <Box fontSize="md" my={3} pr={4} py={2}>
        <p leading-7>
          My name is Himanshu Chauhan and I am an aspiring Frontend Engineer.
          <br /> <br />
          I&apos;m a self-taught developer with a passion for computer science
          and programming. I&apos;ve been fascinated by computers and their
          nitty-gritty details about how they work since an early age, I got my
          first computer at the early age of 15 and I&apos;ve been coding ever
          since then. In the past, I started with HTML5 & CSS and learned
          JavaScript and I&apos;ve worked extensively in the Web Development
          space with my personal projects. Currently, I am most interested in
          working with the stack of ReactJS and NextJS with Redux ToolKit.
          <br /> <br />
          Apart from programming, I am passionate about gaming. One of my
          favorite PC games is{" "}
          <Link href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/">
            CSGO: Counter-Strike Global Offensive
          </Link>{" "}
          and I sometimes read non-fiction books with philosophy. I also have a
          deep interest in poetries and dark academic literature. If I ever get
          a chance, I want to become a writer as I love writing poetries and
          have been writing since the age of 14.
        </p>
      </Box>
    </Container>
  )
}

export default AboutPage

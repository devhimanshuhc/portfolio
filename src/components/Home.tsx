/* eslint-disable react/no-unescaped-entities */
import React from "react"
import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import languages from "../lib/languages"
import DETAILS from "../lib/personalDetails"
import NextLink from "next/link"

const HomePage = () => {
  const mediumText = useColorModeValue("textMediumLight", "textMediumDark")
  return (
    <Container maxW={"3xl"}>
      <h1>
        Hey, I&apos;m {DETAILS.firstName} {DETAILS.lastName}!
      </h1>
      <p>
        I&apos;m a self-taught frontend engineer. I&apos;m currently working on
        my projects and looking for new opportunities. I&apos;m passionate about
        learning new technologies.
      </p>
      <hr />
      <Heading as="h2" size="lg">
        Here's a couple of other things that I love working with:
      </Heading>
      {languages.map((posts, index) => (
        <Box key={index}>
          <Box my={3} pr={4} py={2} borderRadius={4}>
            <NextLink href={posts.link} passHref>
              <Heading
                as="h3"
                size="md"
                cursor="pointer"
                mb={0}
                _hover={{
                  color: "brand",
                  textDecoration: "none",
                }}
              >
                {posts.name}
              </Heading>
            </NextLink>
            <Text fontSize="md" color={mediumText}>
              {posts.description}
            </Text>
          </Box>
        </Box>
      ))}
    </Container>
  )
}

export default HomePage

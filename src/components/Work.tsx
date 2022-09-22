/* eslint-disable react-hooks/rules-of-hooks */
import React from "react"
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Spacer,
  Stack,
  Button,
  SimpleGrid,
  Badge,
  Center,
  useColorModeValue,
} from "@chakra-ui/react"
import projects from "src/lib/projects"
import Image from "next/image"
import Link from "next/link"

const WorkPage = () => {
  return (
    <Container maxW={"3xl"}>
      <h1>/work</h1>
      <Heading as="h2" mb={20} fontSize="3xl">
        My projects-
      </Heading>
      <Center ml={{ lg: -36 }}>
        <SimpleGrid
          maxW={"2xl"}
          mx={{ lg: 0, md: "auto", sm: "auto" }}
          columns={{ lg: 3, sm: 1, md: 2 }}
          spacing={{ lg: "200px", md: "20px" }}
          mb="-18"
        >
          {projects.map((items, index) => (
            <Box
              key={index}
              w="250px"
              rounded="10px"
              overflow="hidden"
              mb={{ base: 14, lg: 1, sm: 20 }}
              mx={{ md: 10 }}
              transition="all .4s ease"
              border="1px"
              borderColor={useColorModeValue("gray.400", "gray.800")}
              _hover={{
                transform: "scale(1.03)",
                cursor: "pointer",
                boxShadow: "md",
                borderColor: useColorModeValue("gray.600", "gray.400"),
              }}
            >
              <Image
                src={items.image}
                alt="Card Image"
                height="150px"
                width="250px"
              />
              <Box p={5}>
                <Stack align="center">
                  <Text as="h2" fontWeight="normal" fontSize="md" my={2}>
                    {items.title}
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    {items.description}
                  </Text>
                </Stack>
                <Spacer />
                <Badge
                  rounded="10px"
                  px={2}
                  py={1}
                  mt={4}
                  mr={4}
                  mb={-2}
                  bg={"gray.800"}
                  fontWeight={"400"}
                  color="white"
                >
                  {items.technologies[0]}
                </Badge>
                <Badge
                  rounded="10px"
                  px={2}
                  py={1}
                  mt={4}
                  mr={4}
                  mb={-2}
                  bg={"gray.800"}
                  fontWeight={"400"}
                  color="white"
                >
                  {items.technologies[1]}
                </Badge>
                <Badge
                  rounded="10px"
                  px={2}
                  py={1}
                  mt={4}
                  mr={4}
                  mb={-2}
                  bg={"gray.800"}
                  fontWeight={"400"}
                  color="white"
                >
                  {items.technologies[2]}
                </Badge>
                <Badge
                  rounded="10px"
                  px={2}
                  py={1}
                  mt={4}
                  mr={4}
                  mb={-2}
                  bg={"gray.800"}
                  fontWeight={"400"}
                  color="white"
                >
                  {items.technologies[3]}
                </Badge>
                <Badge
                  rounded="10px"
                  px={2}
                  py={1}
                  mt={4}
                  mr={4}
                  mb={-2}
                  bg={"gray.800"}
                  fontWeight={"400"}
                  color="white"
                >
                  {items.technologies[4]}
                </Badge>
                <Flex alignItems="center" justifyContent="flex-start">
                  <Link href={items.link}>
                    <a>
                      <Button
                        variant="solid"
                        mt={8}
                        colorScheme="red"
                        size="sm"
                        _hover={{
                          as: "u",
                        }}
                      >
                        Check out
                      </Button>{" "}
                    </a>
                  </Link>
                </Flex>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Center>
    </Container>
  )
}

export default WorkPage

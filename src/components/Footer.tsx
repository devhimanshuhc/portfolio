import {
  ButtonGroup,
  IconButton,
  Flex,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react"
import * as React from "react"
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaSpotify,
  FaDiscord,
} from "react-icons/fa"

const Links = [
  {
    name: "Github",
    link: "https://github.com/devhimanshuhc",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/himanshu-chauhan-06baaa234/",
    icon: <FaLinkedin />,
  },
  {
    name: "Spotify",
    link: "https://sptfy.com/Lykp",
    icon: <FaSpotify />,
  },
  {
    name: "Discord",
    link: "https://discord.com/users/738138831852929093",
    icon: <FaDiscord />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/19.hiimanshu/",
    icon: <FaInstagram />,
  },
]

const Footer = () => (
  <Box as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
    <Flex justify="center" direction="row" align="center">
      <ButtonGroup variant="ghost">
        {Links.map((link) => (
          <IconButton
            key={link.name}
            as="a"
            href={link.link}
            _hover={{
              bg: "transparent",
              color: "brand",
            }}
            aria-label={link.name}
            icon={link.icon}
          />
        ))}
      </ButtonGroup>
    </Flex>
    <Text
      fontSize={["xs", "sm"]}
      align="center"
      color={useColorModeValue("textMediumLight", "textMediumDark")}
    >
      Made with{" "}
      <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
        NextJS
      </a>{" "}
      and{" "}
      <a href="https://chakra-ui.com/" target="_blank" rel="noreferrer">
        Chakra UI
      </a>
      . Forked from{" "}
      <a
        href="https://github.com/amankrx/portfolio"
        target="_blank"
        rel="noreferrer"
      >
        Aman Kumar
      </a>
    </Text>
  </Box>
)

export default Footer

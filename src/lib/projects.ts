import pic1 from "public/projects/pic1.jpg"
import pic2 from "public/projects/pic2.jpg"
import pic3 from "public/projects/pic3.jpg"
import pic4 from "public/projects/pic4.jpg"
import pic5 from "public/projects/pic5.jpg"

const projects = [
  {
    image: pic1,
    title: "ReVio",
    description:
      "A real estate website where you can find properties as per your choice.",
    technologies: ["JavaScript", "NextJS", "Redux ToolKit", "API", "Chakra UI"],
    link: "https://revio.vercel.app",
  },
  {
    image: pic2,
    title: "CryptoRealms",
    description:
      "It is a crypto-dashboard and here you can get all the details of top 100 crypto coins.",
    technologies: ["JavaScript", "ReactJS", "Redux ToolKit", "API", "Tailwind"],
    link: "https://cryptorealms.vercel.app",
  },
  {
    image: pic3,
    title: "Google Clone",
    description:
      "It is the clone of the Google where you can search for anything and it will show the exactly same result as Google Search.",
    technologies: ["JavaScript", "ReactJS", "Redux ToolKit", "API", "Tailwind"],
    link: "https://gcloneapp.vercel.app",
  },
  {
    image: pic4,
    title: "Amazon Clone",
    description:
      "This is a Amazon Shopping Site's clone version created using ReactJs. Here we can able to add or remove your items to the cart and also able to purchase the products using your card via stripe payment method ",
    technologies: ["JavaScript", "ReactJS", "Redux", "API", "CSS"],
    link: "https://cloneamazon.vercel.app",
  },
  {
    image: pic5,
    title: "Photo Editor",
    description: "It is simple online photo editor.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://editor-image.vercel.app",
  },
]

export default projects

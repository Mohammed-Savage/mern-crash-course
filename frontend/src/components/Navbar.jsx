// import { PlusSquareIcon } from "@chakra-ui/icons";
import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { GiMoon } from "react-icons/gi";
import { PiSunDimFill } from "react-icons/pi";

const Navbar = () => {
    // This is the Navbar component. It uses Chakra UI for styling and React Router for navigation.
    // The Navbar contains a title and a button to create a new product.
    // The title is a link to the home page, and the button is a link to the create page.
    // The Navbar is responsive and adjusts its layout based on the screen size.
    // The title has a gradient effect and a text shadow for better visibility.
        const { colorMode, toggleColorMode } = useColorMode();
    return <Container maxW={"1140px"} px={4}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base: "column",
                sm: "row",
            }}
        >
            <Text
                fontSize={{ base: "22", sm: "28" }}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                bgGradient={"linear(to-r, cyan.400, blue.500)"}
                bgClip={"text"}
                letterSpacing={"wider"}
                // This is optional styling. If it breaks the app remove it.
                textShadow={"0 0 10px rgba(0, 0, 0, 0.5)"}
                _hover={{
                    textShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                    transition: "text-shadow 0.3s ease-in-out",
                }}
                _focus={{
                    outline: "none",
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
                }}
                _active={{
                    transform: "scale(0.95)",
                    transition: "transform 0.1s ease-in-out",
                }}
            >
                <Link to={"/"}>Product Store 🛍️</Link>

            </Text>

            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                    <Button>
                        {/* <PlusSquareIcon fontSize={20} /> */}
                        <FaCartPlus fontSize={20} />
                    </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <GiMoon size='20' /> : <PiSunDimFill size='20' />}
                </Button>

            </HStack>
        </Flex>
    </Container>;
};
export default Navbar;
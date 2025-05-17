import { useProductStore } from "../store/product"
import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
    const { fetchProducts, products } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
    console.log("products", products);

    return (
        <Container maxW={"container.xl"} py={12} centerContent>
            {/* I added centerContent to the container styling above. If it looks bad, remove it. */}
            <VStack spacing={8}>
                <Text
                    fontSize={"30"}
                    fontWeight={"bold"}
                    bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    bgClip={"text"}
                    textAlign={"center"}
                    // textTransform={"uppercase"}
                    letterSpacing={"wide"}
                    // lineHeight={"shorter"}
                    // fontFamily={"sans-serif"}
                    textShadow={"2px 2px 4px rgba(0, 0, 0, 0.3)"}
                // textDecoration={"underline"}
                // textDecorationColor={"blue.500"}
                // textDecorationThickness={"2px"}
                // textDecorationStyle={"wavy"}
                >
                    Current Inventory 🎁
                </Text>

                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={10}
                    width={"full"}
                    // padding={4}
                    // borderWidth={1}
                    // borderRadius={"lg"}
                    // boxShadow={"lg"}
                    // bg={"white"}
                    // _hover={{ boxShadow: "xl" }}
                    // transition={"all 0.2s"}
                >
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                            // key={product._id}
                            // id={product._id}
                            // name={product.name}
                            // description={product.description}
                            // price={product.price}
                            // image={product.image}
                    ))}
                </SimpleGrid>
                <Text fontSize={"xl"} textAlign={"center"} fontWeight={"bold"} color={"gray.500"}>
                    No products in the inventory yet.😟{" "}
                    <Link to={"/create"}>
                        <Text as={"span"} color={"blue.500"} _hover={{ textDecoration: "underline" }}>
                            Add a product
                        </Text>
                    </Link>
                </Text>
            </VStack>
            {/* This is all sample, boiler plate text that I can change up to reflect the apps messages. */}
            {/* <h1>Welcome to the Home Page</h1>
            <p>This is the home page of our application.</p>
            <p>Feel free to explore the features and functionalities.</p>
            <p>We hope you enjoy your experience!</p>
            <p>If you have any questions, don't hesitate to reach out.</p>
            <p>Happy browsing!</p>
            <p>Check out the latest updates and news on our blog.</p>
            <p>Stay tuned for more exciting features coming soon!</p> */}
        </Container>
    )
};
export default HomePage;
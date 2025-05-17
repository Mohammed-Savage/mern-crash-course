import { FcDeleteRow } from "react-icons/fc";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { Box, Heading, Image, Text, useColorModeValue, HStack, IconButton } from "@chakra-ui/react";

const ProductCard = ({ product }) => {

    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");

    return (
        <Box
            shadow='lg'
            rounded='lg'
            overflow='hidden'
            transition={"all 0.3s"}
            _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
            bg={bg}
            >
            <Image src={product.image} alt={product.name} h={48} w="full" objectFit={"cover"} />

            <Box p={4}>
                <Heading as='h3' size={"md"} mb={2}>
                    {product.name}
                </Heading>
                {/* <Heading as='h3' size={"md"} mb={2} fontWeight={"thin"}>
                {product.description}
            </Heading> */}
                <Text fontSize={"md"} color={textColor} mb={4}>
                    {product.description}
                </Text>
                <Text fontWeight={"bold"} fontSize={"xl"} color={textColor} mb={4}>
                    ${product.price}
                </Text>
                <HStack spacing={2} justifyContent={"space-between"}>
                    <IconButton icon={<FaEdit />} colorScheme='blue' aria-label='Edit Product' />
                    <IconButton icon={<FcDeleteRow />} colorScheme='red' aria-label='Delete Product' />
                </HStack>
            </Box>
        </Box>
    );
};
export default ProductCard;

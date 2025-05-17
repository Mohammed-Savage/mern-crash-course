import { FcDeleteRow } from "react-icons/fc";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { Box, Heading, Image, Text, useColorModeValue, HStack, IconButton, Tooltip, useToast } from "@chakra-ui/react";
import { useProductStore } from "../store/product";

const ProductCard = ({ product }) => {

    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");

    const { deleteProduct } = useProductStore();
    const toast = useToast();

    const handleDeleteProduct = async (pid) => {
        const { success, message } = await deleteProduct(pid);
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
    };
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
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(product.price)}
                </Text>
                <HStack spacing={2} justifyContent={"space-between"}>
                    <Tooltip label='Edit Product' aria-label='Edit Product' fontSize='md'>
                        <IconButton icon={<FaEdit />} colorScheme='blue' aria-label='Edit Product' />
                    </Tooltip>
                    <Tooltip label='Delete Product' aria-label='Delete Product' fontSize='md'>
                        <IconButton icon={<FcDeleteRow />} onClick={() => handleDeleteProduct(product._id)} colorScheme='red' aria-label='Delete Product' />
                    </Tooltip>
                </HStack>
            </Box>
        </Box>
    );
};
export default ProductCard;

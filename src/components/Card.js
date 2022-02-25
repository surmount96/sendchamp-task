import { Box,Flex,Text,GridItem  } from '@chakra-ui/react'
import { FiMessageSquare,FiArrowRight } from 'react-icons/fi';

const Card = ({type,msg,msg_2,currency,amount,unit,children}) => {
    return (
        <GridItem w="100%" d="flex" mb="6" flexDirection="column" justifyContent="space-between"  h="280px" borderRadius="10px" background="white" borderWidth="2px" borderColor="blue.700" pt="5" pb="1" px="5">
            <Box>
                <Flex>
                    <Box background="blue.100" d="flex" align="center" justifyItems="center" p="2" borderRadius="5px">
                        {children}
                    </Box>
                    <Text fontWeight="bold" fontSize="19px" ml="3">
                        {type}
                    </Text>
                </Flex>
                <Flex my="4">
                    <Text flex="1" fontWeight="bold">
                        {msg}
                    </Text>
                    <Box>
                        <Text>
                            Starts at
                        </Text>
                        <Text fontWeight="bold">
                            {currency} {amount}
                        </Text>
                        <Text fontWeight="bold">
                            /{unit}
                        </Text>
                    </Box>
                </Flex>
                {
                    type !== 'Email' ? 
                    <Flex mt="4">
                        <Text flex="1" fontWeight="bold" mr="3">
                            {msg_2}
                        </Text>
                        <Box>
                            <Text color="gray.400" fontWeight="bold">
                                Not Available
                            </Text>
                        </Box>
                    </Flex>
                    : ''
                }
                
            </Box>
            
            <Flex justifyContent="flex-end" align="center" cursor="pointer" _hover={{textDecoration: 'underline',color: '#0980FC'}}>
                <Text color="blue.700" mr="1" fontWeight="bold">See more Details</Text>
                <FiArrowRight style={{ color: '#0980FC'}} />
            </Flex>
        </GridItem>
    );
}

export default Card;
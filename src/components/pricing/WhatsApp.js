import { Button } from "@chakra-ui/button";
import { Box,Flex,Text } from "@chakra-ui/layout";
import { MdOutlineVerified } from 'react-icons/md';

const WhatsApp = ({currency,unit,amount}) => {
    return (
        <Box mx="6" my="4">
            <Box color="green.400" py="6">
                <Flex alignItems="center" justifyContent="space-between">
                    <Flex w="60%" alignItems="start">
                        <Text color="success" mt="1"><MdOutlineVerified size="20" /></Text>
                        <Box ml="2">
                            <Text fontSize="19px" fontWeight="bold" mb="4">Pay Per Use</Text>
                            <Text fontSize="sm" color="gray.500">These are messages recieved by the business from the customers.</Text>
                        </Box>
                        
                    </Flex>
                    <Box w="30%">
                        <Text fontWeight="bold" fontSize="24px">
                            {currency} 
                        </Text>
                        <Text fontWeight="bold" fontSize="24px">
                            {amount}/{unit}
                        </Text>
                    </Box>
                    
                </Flex>
                    
            </Box>
            
            <Box color="green.400">
                <Flex alignItems="center" justifyContent="space-between">
                    <Flex w="60%" alignItems="start">
                        <Text color="success" mt="1"><MdOutlineVerified size="20" /></Text>
                        <Box ml="2">
                            <Text fontSize="19px" fontWeight="bold" mb="4">Subscription </Text>
                            <Text fontSize="sm" color="gray.500">Subscriptions are NEED BASED.</Text>
                            <Text fontSize="14px" fontWeight="bold" color="gray.500">AVALABLE AT MOBILE NUMBER ACTIVATION</Text>
                        </Box>
                        
                    </Flex>
                    <Box w="30%">
                        <Text fontWeight="bold" fontSize="24px">
                            {currency} 
                        </Text>
                        <Text fontWeight="bold" fontSize="24px">
                            {amount}/{unit}
                        </Text>
                    </Box>
                    
                </Flex>
                    
            </Box>
        </Box>
    );
}

export default WhatsApp;
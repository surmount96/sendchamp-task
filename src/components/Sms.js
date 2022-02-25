import { Box,Flex,Text } from "@chakra-ui/layout";
import { MdOutlineVerified } from 'react-icons/md';

const Sms = ({currency,unit,amount}) => {
    return (
        <Box mx="10">
            <Box color="green.400" py="6">
                <Flex alignItems="center" justifyContent="space-between">
                    <Flex w="60%" alignItems="start">
                        <Text color="success" mt="1"><MdOutlineVerified size="20" /></Text>
                        <Box ml="2">
                            <Text fontSize="19px" fontWeight="bold" mb="4">Domestic Route (Non DND) </Text>
                            <Text fontSize="14px" fontWeight="bold" color="gray.500">ADVISABLE ROUTE FOR PROMOTIONAL MESSAGES </Text>
                            <Text fontSize="sm" color="gray.500">For Mobile Numbers without DO-NOT-DISTURB settings.</Text>
                        </Box>
                        
                    </Flex>
                    <Box>
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
                    <Flex alignItems="start">
                        <Text color="success" mt="1"><MdOutlineVerified size="20" /></Text>
                        <Box ml="2">
                            <Text fontSize="19px" fontWeight="bold" mb="4">Domestic Route (DND) </Text>
                            <Text fontSize="sm" color="gray.500">For Mobile Numbers with or without DO-NOT-DISTURB settings.</Text>
                        </Box>
                        
                    </Flex>
                    <Box>
                        <Text fontWeight="bold" fontSize="24px">
                            {currency} 
                        </Text>
                        <Text fontWeight="bold" fontSize="24px">
                            {amount}/{unit}
                        </Text>
                    </Box>
                    
                </Flex>
                    
            </Box>
            <Box color="green.400" pt="3" pb="6">
                <Flex alignItems="center" justifyContent="space-between">
                    <Flex alignItems="start">
                        <Text color="success" mt="1"><MdOutlineVerified size="20" /></Text>
                        <Box ml="2">
                            <Text fontSize="19px" fontWeight="bold" mb="4">International Route </Text>
                            <Text fontSize="14px" fontWeight="bold" color="gray.500">ADVISABLE ROUTE FOR DOMESTIC AND NON_DOMESTIC PROMOTIONAL MESSAGES</Text>
                            <Text fontSize="sm" color="gray.500">For Mobile Numbers with or without DO-NOT-DISTURB settings.</Text>
                        </Box>
                        
                    </Flex>
                    <Box>
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

export default Sms;
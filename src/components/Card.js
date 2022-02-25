import { Box,Flex,Text,Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure  } from '@chakra-ui/react'
import { FiArrowRight } from 'react-icons/fi';

import Sms from './pricing/Sms';
import Voice from './pricing/Voice';
import Email from './pricing/Email';
import Verification from './pricing/Verification';
import WhatsApp from './pricing/WhatsApp';

const Card = ({type,msg,msg_2,currency,amount,unit,receive,children}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box w="100%" d="flex" mb="6" flexDirection="column" justifyContent="space-between"  h="280px" borderRadius="10px" background="white" borderWidth="1px" borderColor="blue.700" pt="5" pb="1" px="5">
            <Box>
                <Flex>
                    <Box background="blue.100" d="flex" align="center" justifyItems="center" p="2" borderRadius="5px" _hover={{ bg: 'gray.50'}}>
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
                    <Box w="45%">
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
                        <Box w="45%">
                            { receive ? 
                                <Box>
                                    <Text>
                                        Starts at
                                    </Text>
                                    <Text fontWeight="bold">
                                        {currency} {receive}
                                    </Text>
                                    <Text fontWeight="bold">
                                        /{unit}
                                    </Text>
                                </Box>
                                : 
                                <Text color="gray.400" fontWeight="bold">
                                    Not Available
                                </Text>
                            }
                            
                        </Box>
                    </Flex>
                    : ''
                }
                
            </Box>
            
            <Flex justifyContent="flex-end" align="center">
                <Text onClick={onOpen} color="blue.700" mr="1" fontWeight="bold" cursor="pointer" _hover={{textDecoration: 'underline',color: '#0980FC'}}>See more Details</Text>
                <FiArrowRight style={{ color: '#0980FC'}} />
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose} size="2xl" h="50vh">
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <Flex alignItems="center" w="inherit" justifyContent="space-between" py="6" px="4" borderBottomWidth="1px" borderColor="#000" >
                            <Flex>
                                <Box background="blue.100" d="flex" align="center" justifyItems="center" p="2" borderRadius="5px" _hover={{ bg: 'gray.50'}}>
                                    {children}
                                </Box>
                                <Text fontWeight="900" fontSize="19px" ml="3">
                                    {type}
                                </Text>
                            </Flex>
                            <Box w="60%">
                                <Flex >
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
                        </Flex>
                        {
                            type === 'SMS' ?
                            <Sms currency={currency} unit={unit} amount={amount}/> :' '
                        }

                        {
                            type === 'Email' ?
                            <Email currency={currency} unit={unit} amount={amount}/> :' '
                        }

                        {
                            type === 'Voice' ?
                            <Voice currency={currency} unit={unit} amount={amount}/> :' '
                        }

                        {
                            type === 'Verification' ?
                            <Verification currency={currency} unit={unit} amount={amount}/> :' '
                        }
                        {
                            type === 'WhatsApp' ?
                            <WhatsApp currency={currency} unit={unit} amount={amount}/> :' '
                        }
                        
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
}

export default Card;
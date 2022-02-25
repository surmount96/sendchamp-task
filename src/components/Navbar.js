import { HiOutlineCursorClick } from 'react-icons/hi';
import { RiUserLine } from 'react-icons/ri';
import { FormLabel,Flex,Text,Image,FormControl,Switch,Button,Box,HStack, Menu,
    MenuButton,
    MenuList,
    MenuItem
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { wave } from '../assets/img';

const Navbar = () => {
    return (
        <Box w="82%" pos="relative">
            <HStack maxW="inherit" w="inherit" px="3" h="60px" alignItems="center" justifyContent="space-between" shadow="sm" pos="fixed" bg="#fff" zIndex="99">
                <Flex>
                    <Flex>
                        <Text> Welcome back, </Text>
                        <Text fontWeight="bold" pl="1"> Ayodeji </Text>
                    </Flex>
                    
                    <Image src={wave} alt="wave" w="30px"/>
                </Flex>
                <Flex w="48%">
                    <Button fontSize="14px" px="8" py="2" _hover={{bg: '#0F19A6'}} leftIcon={<HiOutlineCursorClick />} bg='blue.700' color="#fff" variant='solid'>
                        Take Tour
                    </Button>
                    <FormControl w="25%" display='flex' alignItems='center' mx="4">
                        <FormLabel htmlFor='email-alerts' mb='0'>
                            Live mode
                        </FormLabel>
                        <Switch isChecked="true" id='email-alerts'/>
                    </FormControl>
                    <Menu>
                        <MenuButton pl="1" as={Button} rightIcon={<ChevronDownIcon />}>
                            <Flex alignItems="center">
                                <Box d="flex" alignItems="center" mr="2" justifyContent="center" color="#fff" p="2" bg="blue.700" borderRadius="6px">
                                    <RiUserLine />
                                </Box>
                                Ayodeji Aya...
                            </Flex>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
                
            </HStack>
        </Box>
        
    );
}

export default Navbar;
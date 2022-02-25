import { Box,Flex,Text,Container,Image } from '@chakra-ui/react'
import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { FiGrid,FiUsers,FiCheckCircle,FiMessageSquare,FiVoicemail,FiMail,FiSettings,FiDollarSign,FiCode,FiBook } from 'react-icons/fi'

const Sidebar = () => {
    return(
        <Box w="20%" pos="relative">
          <Flex w="inherit" direction="column" overflow="scroll" h="90vh" pos="fixed">
            <Box p="4" width="180px">
              <Image src="https://my.sendchamp.com/static/media/logo.c9f83ab2.png" alt="logo" />
            </Box>
            <Container >
              <Text mt="3" px="4" color="blue.700" fontWeight="900" fontSize="10px">
                MAIN
              </Text>
              <Box>
                <Flex align="center" my="2" py="2" px="4" borderRadius="6px" cursor="pointer">
                  <FiGrid />
                  <Text ml="2" fontSize="14px">
                    Dashboard
                  </Text>
                </Flex>
                <Flex align="center" my="2" py="2" px="4" borderRadius="6px" cursor="pointer">
                  <FiUsers />
                  <Text ml="2" fontSize="14px">
                    Customers
                  </Text>
                </Flex>
              </Box>
              <Text mt="5" px="4" color="blue.700" fontWeight="900" fontSize="10px">
                CHANNELS
              </Text>
              <Box>
                <Flex align="center" my="2" py="2" px="4" borderRadius="6px" cursor="pointer">
                  <FiMessageSquare />
                  <Text ml="2" fontSize="14px">
                    SMS
                  </Text>
                </Flex>
                <Flex align="center" my="2" py="2" px="4" borderRadius="6px" cursor="pointer">
                  <FiVoicemail />
                  <Text ml="2" fontSize="14px">
                    Voice
                  </Text>
                </Flex>
                <Flex align="center" my="2" py="2" px="4" borderRadius="6px" cursor="pointer">
                  <FaWhatsapp />
                  <Text ml="2" fontSize="14px">
                    WhatsApp
                  </Text>
                </Flex>
                <Flex align="center" my="2" py="2" px="4" borderRadius="6px" cursor="pointer">
                  <FiMail />
                  <Text ml="2" fontSize="14px">
                    Email
                  </Text>
                </Flex>
                <Flex align="center" my="2" py="2" px="4" borderRadius="6px" cursor="pointer">
                  <FiCheckCircle />
                  <Text ml="2" fontSize="14px">
                    Verification
                  </Text>
                </Flex>
              </Box>
              <Text mt="5" px="4" color="blue.700" fontWeight="900" fontSize="10px">
                SETTINGS
              </Text>
              <Box>
                <Flex align="center" my="2" py="2" px="4" borderRadius="6px" cursor="pointer">
                  <FiSettings />
                  <Text ml="2" fontSize="14px">
                    Account Settings
                  </Text>
                </Flex>
                <Flex align="center" my="2" py="2" px="4" borderRadius="6px" cursor="pointer">
                  <HiOutlineUserGroup />
                  <Text ml="2" fontSize="14px">
                    Teammates
                  </Text>
                </Flex>
                <Flex align="center" my="2" py="2" px="4" borderRadius="6px" cursor="pointer" fontWeight="900" color="blue.700" bg="blue.50">
                  <FiDollarSign />
                  <Text ml="2" fontSize="14px">
                    Pricing
                  </Text>
                </Flex>
              </Box>
              <Text mt="5" px="4" color="blue.700" fontWeight="900" fontSize="10px">
                DEVELOPERS
              </Text>
              <Box>
                <Flex align="center" my="2" py="2" px="4" borderRadius="6px" cursor="pointer">
                  <FiBook />
                  <Text ml="2" fontSize="14px">
                    Documentation
                  </Text>
                </Flex>
                <Flex align="center" my="2" py="2" px="4" borderRadius="6px" cursor="pointer">
                  <FiCode />
                  <Text ml="2" fontSize="14px">
                    Developer Community
                  </Text>
                </Flex>
              </Box>
            </Container>
          </Flex>
          <Flex h="50px" bg="#fff" align="center" mx="3" position="fixed" bottom="20px" left="15px">
            <RiLogoutBoxLine />
            <Text ml="2" fontSize="16px">
            Logout
            </Text>
          </Flex>
        </Box>
    );
}

export default Sidebar;
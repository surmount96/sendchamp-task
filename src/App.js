import './App.css';
import { useState } from 'react';
import { useRecoilState } from "recoil";
import { availablePricing } from './recoils/atom';
import { Box,Flex,Text,FormControl,HStack,Spacer,Grid } from '@chakra-ui/react'
import Sidebar from './components/Sidebar';
import Select from 'react-select';
import Card from './components/Card';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineCursorClick } from 'react-icons/hi';
import { FiMessageSquare,FiVoicemail,FiMail,FiCheckCircle } from 'react-icons/fi';
import Navbar from './components/Navbar';

const options = [
  { value: 'anodara', label: 'Anodara' },
  { value: 'united-arab-emirate', label: 'United Arab Emirate' },
  { value: 'angola', label: 'Angola' },
  { value: 'austrie', label: 'Austria' },
  { value: 'aruba', label: 'Aruba' },
  { value: 'belgium', label: 'Belgium' },
  { value: 'nigeria', label: 'Nigeria' },
]

const currencies = [
  { value: 'usd', label: 'USD' },
  { value: 'eur', label: 'EUR' },
  { value: 'aed', label: 'AED' },
  { value: 'afn', label: 'AFN' },
  { value: 'all', label: 'ALL' },
  { value: 'aoa', label: 'AOA' },
  { value: 'amd', label: 'AMD' },
]

function App() {
  const [pricing]= useRecoilState(availablePricing);

  const [country, setCountry] = useState('');
  const [currency, setCurrency] = useState('');
  const [singlePricing, setSinglePricing] = useState('');

  const handleCountry = (e) => {
    setCountry(e.value)
  }

  const handleCurrency = (e) => {
    setCurrency(e.value)
    if(validateOption) {

      setSinglePricing(pricing.find(item => {
        if (item.country === country && item.currency === currency){
          return item;
        }
      }))
    }
  }
  console.log(singlePricing)

  const validateOption = () => {
    return country && currency;
  }
  
  return (
    <div>
      <Flex>
        <Sidebar />
        <Box w="82%" bg="gray.50" pos="relative" minH="100vh">
          <Navbar />
          <Box pt="24" pb="10" w="35%" mx="auto" align="center">
            <Text fontSize="30px" fontWeight="700">Sendchamp Pricing</Text>
            <Text color="gray.400" fontWeight="600" mt="5">Start with our competitive pay-as-you-go pricing.</Text>
            <Text color="gray.400" fontWeight="600">For deeper discounts on committed spend as you scale, talk with our sales team.</Text>
          </Box>
          <HStack spacing="20px" w="45%" mx="auto" mb="5">
            <FormControl>
              <Select options={options} onChange={handleCountry} placeholder="Select Country"/>
            </FormControl>
            <FormControl>
              <Select options={currencies} onChange={handleCurrency} placeholder="Select Currency"/>
            </FormControl>
          </HStack>
          { country && currency ? 
            <Grid templateColumns='repeat(3, 1fr)' templateAreas="1 1 " gap={6} my="6" mx="12">
              <Card type="SMS" msg="To Send SMS" msg_2="To Receive SMS" currency="EUR" amount="0.00044" unit="sms"> <FiMessageSquare size="20"/> </Card>
              <Card type="Voice" msg="To make Calls" msg_2="To Receive Calls" currency="EUR" amount="0.00044" unit="sec"> <FiVoicemail size="20"/> </Card>
              <Card type="Email" msg="Price Per Mail" currency="EUR" amount="0.00044" unit="mail"> <FiMail size="20"/> </Card>
              <Card type="WhatsApp" msg="To Send Message" msg_2="To Receive Message" currency="EUR" amount="0.00044" unit="msg"> <FaWhatsapp size="20"/> </Card>
              <Card type="Verification" msg="To Send OTP" msg_2="To Confirm OTP" currency="EUR" amount="0.00044" unit="token"> <FiCheckCircle size="20"/> </Card>
            </Grid>
            : <Text align="center"> Select Country and Currency to get Pricing </Text>
          } 
          
          {/* <HStack wrap="wrap" mx="12" spacing="32px" my="6">
            <Card />
            <Card />
          </HStack> */}
        </Box>
      </Flex>
      {/* <input type="text" onChange={check} />
      age = {test}
      <Box bg='tomato' w='100%' p={4} color='white'>
      
      </Box> */}
    </div>
  );
}

export default App;

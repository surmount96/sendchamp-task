import './App.css';
import { useState,useEffect } from 'react';
import { useRecoilState } from "recoil";
import { availablePricing } from './recoils/atom';
import { Box,Flex,Text,FormControl,HStack,Grid } from '@chakra-ui/react'
import Sidebar from './components/Sidebar';
import Select from 'react-select';
import Card from './components/Card';
import { FaWhatsapp } from 'react-icons/fa';
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
  const [singlePricing, setSinglePricing] = useState({});
  useEffect(()=>{
    console.log(currency,'currency')
    if((country && currency) ) {
      setSinglePricing(pricing.find(item => {
        if (item.country === country && item.currency === currency){
          return item;
        }
        
      }))
    }
  },[country,currency])
  const handleCountry = (e) => {
    setCountry(e.value)
    
  }

  const handleCurrency = (e) => {
    setCurrency(e.value)
    // if(country && currency) {

    //   setSinglePricing(pricing.find(item => {
    //     console.log(country)
    //     console.log(currency)
    //     if (item.country == country && item.currency == currency){
    //       return item;
    //     }
        
    //   }))
    // }
  }

  console.log(singlePricing)

  
  return (
    <div>
      <Flex>
        <Sidebar />
        <Box w="82%" bg="gray.50" pos="relative" minH="100vh">
          <Navbar />
          <Box pt="24" pb="10" w="35%" mx="auto" align="center">
            <Text fontSize="30px" fontWeight="700">Sendchamp Pricing {currency}</Text>
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
              <Card type="SMS" msg="To Send SMS" msg_2="To Receive SMS" currency={singlePricing?.currency} amount={singlePricing?.category?.sms} unit="sms"> <FiMessageSquare size="20"/> </Card>
              <Card type="Voice" msg="To make Calls" msg_2="To Receive Calls" currency={singlePricing?.currency} amount={singlePricing?.category?.call} unit="sec"> <FiVoicemail size="20"/> </Card>
              <Card type="Email" msg="Price Per Mail" currency={singlePricing?.currency} amount={singlePricing?.category?.email} unit="mail"> <FiMail size="20"/> </Card>
              <Card type="WhatsApp" msg="To Send Message" msg_2="To Receive Message" currency={singlePricing?.currency} amount={singlePricing?.category?.message} unit="msg" receive="55"> <FaWhatsapp size="20"/> </Card>
              <Card type="Verification" msg="To Send OTP" msg_2="To Confirm OTP" currency={singlePricing?.currency} amount={singlePricing?.category?.otp} unit="token" receive="65"> <FiCheckCircle size="20"/> </Card>
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

import { Box, Flex, Stack } from "@mantine/core";
import "@mantine/core/styles.css";

import BusinessAdvantages from "./BusinessAdvantages";
import ContactForm from "./ContactForm";
import PricingSection from "./PricingSection";
import Header from "./Header";

const AgencyPricingPage = () => {
 return (
  <>
   <Header />
   <Flex bg="white" mih="100vh" justify="center" align="flex-start" p={20}>
    <Stack maw={1140} w="100%">
     <PricingSection />
     <Flex
      gap="xl"
      wrap="wrap"
      justify="center"
      align="flex-start"
      bg="#0A192F"
      p="calc(2rem)"
      bdrs={10}
      w="100%"
     >
      <Box flex={1} miw={350}>
       <BusinessAdvantages />
      </Box>
      <Box flex={1} miw={350}>
       <ContactForm />
      </Box>
     </Flex>
    </Stack>
   </Flex>
  </>
 );
};

export default AgencyPricingPage;

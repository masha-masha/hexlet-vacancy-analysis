import { Provider } from "react-redux";
import { useMemo } from "react";
import { Alert, Text, Button } from "@mantine/core";
import { Link } from "@inertiajs/react";

import { setupStore } from "../../store/store";

import AgencyPricingPage from "./agency-pricing-page/ui/AgencyPricingPage";

type Features = {
 name: string;
};

type Plan = {
 id: string;
 name: string;
 description: string;
 price: string;
 currency: string;
 period: string;
 features: Features[];
};

type Props = {
 plans: Plan[];
};

const AgencyPricingPageWrapper = ({ plans }: Props) => {
 const store = useMemo(() => {
  return setupStore({
   plans: {
    items: plans,
   },
  });
 }, [plans]);

 if (!plans) {
  return (
   <Alert bg="red" c="white">
    <Text pl="18px">Что-то пошло не так.</Text>
    <Button
     component={Link}
     href="/foragencies"
     variant="transparent"
     c="white"
    >
     Пожалуйста, перезагрузите страницу.
    </Button>
   </Alert>
  );
 }

 return (
  <Provider store={store}>
   <AgencyPricingPage />
  </Provider>
 );
};

export default AgencyPricingPageWrapper;

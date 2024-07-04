import { onGetPaymentConnected } from '@/actions/settings';
import { InfoBar } from '@/components/infobar';
import IntegrationsList from '@/components/integrations';

const IntegrationsPage = async () => {
  const payment = await onGetPaymentConnected();
  //WIP:Remove stripe
  const connections = {
    stripe: payment ? true : false,
  };

  return (
    <>
      <InfoBar />
      <IntegrationsList connections={connections} />
    </>
  );
};

export default IntegrationsPage;

import makeBadRequestErrorHandler from '@api-lib/errors/handlers/makeBadRequestErrorHandler';
import OpenTokVideoService from '@api-lib/providers/OpenTokVideoService';
import VonageVideoService from '@api-lib/providers/VonageVideoService';
import type { VonageHandler } from '@api-lib/types/VonageHandler';

function getProvider(this: VonageHandler) {
  const { providerConfig } = this;

  if (providerConfig.provider === 'vonage') {
    return new VonageVideoService({
      applicationId: providerConfig.applicationId,
      privateKey: providerConfig.privateKey,
      provider: providerConfig.provider,
    });
  }

  if (providerConfig.provider === 'opentok') {
    return new OpenTokVideoService({
      apiKey: providerConfig.apiKey,
      apiSecret: providerConfig.apiSecret,
      provider: providerConfig.provider,
    });
  }

  throw makeBadRequestErrorHandler('Unsupported provider type')(null);
}

export default getProvider;

import getProvider from './methods/getProvider';
import getHandler from './methods/getHandler';
import { ProviderConfig, assertProviderConfig } from '@api-lib/schemas';
import { IVideoProvider } from '@api-lib/types';

class VonageHandler {
  public videoProvider: IVideoProvider;

  public providerConfig: ProviderConfig;

  constructor(args: ProviderConfig) {
    assertProviderConfig(args);

    this.providerConfig = args;
    this.videoProvider = this.getProvider();
  }

  protected getProvider = getProvider;

  public getHandler = getHandler;
}

export default VonageHandler;

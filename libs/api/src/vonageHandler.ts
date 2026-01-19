import VonageHandler from './core/VonageHandler';

/**
 * Creates a VonageHandler with everything required to respond to a VeraApp request
 */
const createVonageHandler = (...[config]: ConstructorParameters<typeof VonageHandler>) => {
  return new VonageHandler(config).getHandler();
};

export default createVonageHandler;

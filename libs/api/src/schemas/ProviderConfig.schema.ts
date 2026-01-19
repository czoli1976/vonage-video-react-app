import z from 'zod';

import { opentokProviderConfigSchema } from './OpentokProviderConfig.schema';
import { vonageProviderConfigSchema } from './VonageProviderConfig.schema';

export const ProviderConfigSchema = z.discriminatedUnion('provider', [
  vonageProviderConfigSchema,
  opentokProviderConfigSchema,
]);

export type ProviderConfig = z.infer<typeof ProviderConfigSchema>;

export function assertProviderConfig(config: unknown): asserts config is ProviderConfig {
  ProviderConfigSchema.parse(config);
}

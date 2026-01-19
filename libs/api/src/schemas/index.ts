// Action schemas
export { ActionBaseSchema } from './ActionBase';
export { ActionResultSchema, type ActionResult } from './ActionResult';
export { EnableCaptionsSchema, type EnableCaptions } from './EnableCaptions';
export { GetOrCreateSessionSchema, type GetOrCreateSession } from './GetOrCreateSession';
export { ListArchivesSchema, type ListArchives } from './ListArchives';
export { StartArchiveSchema, type StartArchive } from './StartArchive';
export { StopArchiveSchema, type StopArchive } from './StopArchive';
export { VeraActionSchema, type VeraAction } from './VeraAction';
export { VeraActionRequestSchema, type VeraActionRequest } from './VeraActionRequest';

// Provider schemas
export {
  opentokProviderConfigSchema,
  assertOpentokProviderConfig,
  type OpentokProviderConfig,
} from './OpentokProviderConfig.schema';

export {
  vonageProviderConfigSchema,
  assertVonageProviderConfig,
  type VonageProviderConfig,
} from './VonageProviderConfig.schema';

export {
  ProviderConfigSchema,
  assertProviderConfig,
  type ProviderConfig,
} from './ProviderConfig.schema';

export { providerTypeSchema, assertProviderType, type ProviderType } from './ProviderType.schema';

export { videoProviderActionSchema, type VideoProviderAction } from './VideoProviderAction.schema';

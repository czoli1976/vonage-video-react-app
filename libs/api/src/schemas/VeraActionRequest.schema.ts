import z from 'zod';
import GetOrCreateSessionSchema from './GetOrCreateSession.schema';
import StartArchiveSchema from './StartArchive.schema';
import StopArchiveSchema from './StopArchive.schema';
import ListArchivesSchema from './ListArchives.schema';
import EnableCaptionsSchema from './EnableCaptions.schema';

export const VeraActionRequestSchema = z.discriminatedUnion('action', [
  GetOrCreateSessionSchema,
  StartArchiveSchema,
  StopArchiveSchema,
  ListArchivesSchema,
  EnableCaptionsSchema,
]);

export type VeraActionRequest = z.infer<typeof VeraActionRequestSchema>;

export default VeraActionRequestSchema;

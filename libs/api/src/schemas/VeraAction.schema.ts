import z from 'zod';

/**
 * All known Vera actions
 */
export const VeraActionSchema = z.enum([
  'getOrCreateSession',
  'startArchive',
  'stopArchive',
  'listArchives',
  'enableCaptions',
]);

export type VeraAction = z.infer<typeof VeraActionSchema>;

export default VeraActionSchema;

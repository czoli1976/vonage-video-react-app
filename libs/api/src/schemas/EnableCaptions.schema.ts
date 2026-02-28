import z from 'zod';
import ActionBaseSchema from './ActionBase.schema';

export const EnableCaptionsSchema = ActionBaseSchema.extend({});

export type EnableCaptions = z.infer<typeof EnableCaptionsSchema>;

export default EnableCaptionsSchema;

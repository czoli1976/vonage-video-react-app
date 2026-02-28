import z from 'zod';

export const ActionBaseSchema = z.object({
  sessionId: z.string().refine((val) => val.trim() !== '', { message: 'not a valid sessionId' }),
});

export default ActionBaseSchema;

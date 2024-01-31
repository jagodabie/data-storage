import * as z from 'zod';
import { db } from '../../db';
import { WithId } from 'mongodb';

export const formConfig = z.object({
  id: z.string(),
  title: z.string(),
  saveButtonLabel: z.string().optional(),
  config: z.array(
    z.object({
      type: z.string(),
      label: z.string(),
      variant: z.string().optional(),
      name: z.string(),
      required: z.boolean().optional(),
      multiline: z.boolean().optional(),
    }),
  ),
});
export type FormConfig = z.infer<typeof formConfig>;

export type FormConfigWithId = WithId<FormConfig>;

export const FormConfigs = db.collection<FormConfig>('formConfigs');
import * as z from 'zod';
import { db } from '../../db';
import { WithId } from 'mongodb';

export const formConfig = z.object({
  id: z.string(),
  title: z.string(),
  saveButtonLabel: z.string(),
  config: z.array(
    z.object({
      type: z.string(),
      label: z.string(),
      variant: z.string(),
      name: z.string(),
      required: z.boolean(),
      multiline: z.boolean(),
    }),
  ),
});
export type FormConfig = z.infer<typeof formConfig>;

export type TodoWithId = WithId<FormConfig>;

export const FormConfigs = db.collection<FormConfig>('formConfigs');


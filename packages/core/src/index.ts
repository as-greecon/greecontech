import { z } from "zod";

export const tenantIdSchema = z.string().min(3);

export const siteSchema = z.object({
  tenantId: tenantIdSchema,
  siteId: z.string(),
  name: z.string(),
  region: z.string()
});

export type Site = z.infer<typeof siteSchema>;

import { createClient } from "@sanity/client";

export const projectId = import.meta.env?.PUBLIC_SANITY_PROJECT_ID || "ppkytbjt";
export const dataset = import.meta.env?.PUBLIC_SANITY_DATASET || "production";
export const apiVersion = import.meta.env?.PUBLIC_SANITY_API_VERSION || "2026-07-01";
export const useCdn = import.meta.env?.PROD ?? false;

/**
 * Public tokenless Sanity client for fetching published content from the public dataset.
 * The production site queries tokenlessly.
 */
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

/**
 * Server-side preview fetch helper (tokenless for public, preview token only if server explicitly requests draft)
 */
export async function sanityFetch<T>({
  query,
  params = {},
  previewToken,
}: {
  query: string;
  params?: Record<string, unknown>;
  previewToken?: string;
}): Promise<T> {
  if (previewToken) {
    const previewClient = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token: previewToken,
    });
    return previewClient.fetch<T>(query, params);
  }
  return sanityClient.fetch<T>(query, params);
}

import { 
    createClient,
    createCurrentUserHook
} from "next-sanity";

import createImageUrlBuilder from '@sanity/image-url';

export const config = {
    /**
     * Find you project ID amd dataset in `sanity.json` in your studio project
     * These are considered "public" but you can use env file
     * if you want differ between local dev and production
     */
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2022-03-25",

    /**
     * Set useCdn = to false if your configuration require the freshest possible
     * data always ( potentially slightly slower and a bit more expensive).
     * Authenticate request(like preview) will always bypass the CDN
     */
    useCdn: process.env.NEXT_PUBLIC_NODE_ENV === "production"
}

/**
 * set up the client for fetching data in the getProps page function
 */
export const sanityClient = createClient(config);

/**
 * Set up a helper function for generating Image URLs with only the asset
 * reference data in your Document.
 */

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);
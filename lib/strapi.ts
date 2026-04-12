const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function fetchStrapi(path: string, urlParamsObject?: Record<string, any>) {
  try {
    const queryString = urlParamsObject 
      ? `?${new URLSearchParams(urlParamsObject).toString()}`
      : "";
    
    // Strapi 5 might require different handling for certain query types, 
    // but for simple populate=* it works with URLSearchParams.
    // For nested population, strings are often easier.
    
    const requestUrl = `${STRAPI_URL}/api/${path}${queryString}`;
    
    const response = await fetch(requestUrl, {
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
      console.error(`Strapi fetch error: ${response.statusText} for ${requestUrl}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Strapi fetch failed:", error);
    return null;
  }
}

export function getStrapiMedia(url: string | null) {
  if (!url) return null;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${STRAPI_URL}${url}`;
}

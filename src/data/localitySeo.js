import { getAreaBySlug } from "./chennaiAreaPages";
import { getCityBySlug } from "./citySeoPages";

export const getLocalityBySlug = (slug) => {
  const area = getAreaBySlug(slug);
  if (area) return { kind: "area", ...area };
  const city = getCityBySlug(slug);
  if (city) return { kind: "city", ...city };
  return null;
};

export const isKnownLocalitySlug = (slug) => Boolean(getLocalityBySlug(slug));

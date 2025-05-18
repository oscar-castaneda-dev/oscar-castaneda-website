import { cache } from "react";
import { getPexelsPhoto } from "./pexels";

export const getPexelsPhotoCached = cache(getPexelsPhoto);

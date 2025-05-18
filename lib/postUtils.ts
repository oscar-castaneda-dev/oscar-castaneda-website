import { cache } from "react";
import { getPost } from "./postLoader";

export const getPostCached = cache(getPost);

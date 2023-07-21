import { createContext } from "react";
import _blurhashMap from "@/public/blurhash_map.json";

const BlurhashContext = createContext<{ [key: string]: string | undefined }>(_blurhashMap);

export default BlurhashContext;

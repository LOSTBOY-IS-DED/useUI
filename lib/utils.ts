import { clsx } from "clsx";
export const cn = (...inputs: Parameters<typeof clsx>) => clsx(...inputs);

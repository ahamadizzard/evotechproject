// import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "@/lib/authold";

export const { POST, GET } = toNextJsHandler(auth);

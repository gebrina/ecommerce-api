import { SetMetadata } from "@nestjs/common";

export const PUBLIC_KEY = "true";

export const Public = () => SetMetadata(PUBLIC_KEY, true);

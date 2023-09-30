import { SetMetadata } from "@nestjs/common";

export const PUBLIC_KEY = "true";

export const PUBLIAPI = () => SetMetadata(PUBLIC_KEY, true);

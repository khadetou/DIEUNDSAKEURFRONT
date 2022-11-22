import { IncomingMessage } from "http";

export interface Data {
  req?: IncomingMessage & {
    cookies: Partial<{
      [key: string]: string;
    }>;
  };
  pageSize?: string | string[] | undefined;
  pageNumber?: string | string[] | undefined;
  keyword: string | string[] | undefined;
  status?: string | string[] | undefined;
  min?: string | string[] | undefined;
  max?: string | string[] | undefined;
  mina?: string | string[] | undefined;
  maxa?: string | string[] | undefined;
  type?: string | string[] | undefined;
  beds?: string | string[] | undefined;
  rooms?: string | string[] | undefined;
  bath: string | string[] | undefined;
  location?: string | string[] | undefined;
  region?: string | string[] | undefined;
}

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const initials = (firstname: string, lastname: string) => {
  let f, l;
  f = firstname.split("");
  l = lastname.split("");
  return `${f[0]}${l[0]}`;
};

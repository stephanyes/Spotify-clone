import fetcher from "./fetcher";

export const auth = async (
  action: "signup" | "signin",
  body: { email: string; password: string }
) => {
  return fetcher(`/${action}`, body);
};

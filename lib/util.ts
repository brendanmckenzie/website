export const shortDate = (input: string) =>
  new Date(input).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
  });

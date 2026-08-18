/** Minimal className joiner — avoids pulling in clsx/tailwind-merge for a small demo app. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export const shortName = (str: string): string => {
  if (!str.trim()) {
    return "UN";
  }

  const parts = str.trim().split(/\s+/);

  if (parts.length > 1) {
    return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
  }

  return parts[0].substring(0, 2).toUpperCase();
};

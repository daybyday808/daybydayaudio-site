export type VariantProps<T> = any;

export function cva(base: string, config?: any) {
  return function (options?: any) {
    const classes = [base];
    if (config && config.variants && options) {
      for (const key of Object.keys(config.variants)) {
        const value = options[key] ?? config.defaultVariants?.[key];
        if (value) {
          classes.push(config.variants[key][value]);
        }
      }
    }
    return classes.filter(Boolean).join(" ");
  };
}
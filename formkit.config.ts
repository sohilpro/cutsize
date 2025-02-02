import type { DefaultConfigOptions } from "@formkit/vue";
import { createAutoAnimatePlugin } from "@formkit/addons";
import { generateClasses } from "@formkit/themes";

const config: DefaultConfigOptions = {
  config: {
    classes: generateClasses({
      global: {
        input: "formkit-invalid:text-red-500",
      },
    }),
  },
  plugins: [createAutoAnimatePlugin() as VoidFunction],
};

export default config;

import type { DefaultConfigOptions } from "@formkit/vue";
import { createAutoAnimatePlugin } from "@formkit/addons";

const config: DefaultConfigOptions = {
  plugins: [createAutoAnimatePlugin() as VoidFunction],
};

export default config;

import { defineFormKitConfig } from "@formkit/vue";
import { rootClasses } from "./formkit.theme";
import { createAutoAnimatePlugin } from "@formkit/addons";
import { createProPlugin, inputs } from "@formkit/pro";
import { genesisIcons } from "@formkit/icons"

const pro = createProPlugin("fk-89c50aee5d", inputs);

export default defineFormKitConfig(() => ({
  plugins: [pro, createAutoAnimatePlugin() as VoidFunction],
  icons: { ...genesisIcons },
  config: { rootClasses },
}));

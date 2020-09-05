import * as components from "@/components";

const plugin = {
  install: (app, options) => {
    if (options) {
      // TODO - handle options
    }
    // register all the components
    for (const k in components) {
      console.log(`Registering component: ${k} ...`);
      app.component(k, components[k]);
    }
  },
};

// Allow component use individually
export * from "./components";

export default plugin;

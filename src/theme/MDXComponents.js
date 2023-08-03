// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";

import Button from "../components/Button";
import Section from "../components/Section";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map tags to our custom components
  Button,
  Section,
};

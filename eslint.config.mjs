import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

const config = [
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    ignores: [
      ".next/**",
      ".next-runtime/**",
      "assets/vendor/**",
      "assets/js/**",
      "components/FloatingUIElements.tsx",
      "components/SectionTransition.tsx",
      "forms/**",
      "hooks/useTypewriter.tsx",
      "index.html",
      "temp.txt",
      "IMPLEMENTATION_SUMMARY.md",
    ],
  },
];

export default config;

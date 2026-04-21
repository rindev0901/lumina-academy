import type { CodegenConfig } from "@graphql-codegen/cli";
import { addTypenameSelectionDocumentTransform } from "@graphql-codegen/client-preset";
import { config as dotenvConfig } from "dotenv";

dotenvConfig({ path: [".env.local"] });

const config: CodegenConfig = {
  schema: [
    {
      "https://ntvruksvzexsboutkjoa.supabase.co/graphql/v1": {
        headers: {
          apiKey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY}`,
        },
      },
    },
  ],
  documents: ["app/**/*.{ts,tsx}"],
  overwrite: true,
  ignoreNoDocuments: true,
  generates: {
    "gql/": {
      preset: "client",
      documentTransforms: [addTypenameSelectionDocumentTransform],
      plugins: [],
      config: {
        scalars: {
          UUID: "string",
          Date: "string",
          Time: "string",
          Datetime: "string",
          JSON: "string",
          BigInt: "string",
          BigFloat: "string",
          Opaque: "any",
        },
      },
    },
  },
};

export default config;

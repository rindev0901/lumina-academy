import type { CodegenConfig } from "@graphql-codegen/cli";
import { addTypenameSelectionDocumentTransform } from "@graphql-codegen/client-preset";

const config: CodegenConfig = {
  schema: "https://ntvruksvzexsboutkjoa.supabase.co/graphql/v1", // Using the local endpoint, update if needed
  documents: "app/**/*.tsx",
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

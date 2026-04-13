import { MergeDeep } from "type-fest";
import { Database as DatabaseGenerated } from "./database.types";
export { type Json } from "./database.types";

export type Database = MergeDeep<DatabaseGenerated, {}>;

import { RowDescription } from "https://deno.land/x/postgres/connection.ts";
import { Column } from "https://deno.land/x/postgres/connection.ts";

export namespace DatabaseMapper {
    export function rowToProject(row: any, rowDescription : RowDescription) {

        var obj = new Object()
        rowDescription.columns.map((el: Column, i: any) => {
                (obj as any)[el.name] = row[i];
        });
        return (obj as Project);

    }
}
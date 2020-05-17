import client from "./dbclient.ts";
import { Column } from "https://deno.land/x/postgres/connection.ts";
import Project from "../models/Project.ts";
import { DatabaseMapper } from "./mappers.ts";

export namespace ProjectRepository {
  export function create(project: Project) {
    console.log(project);
    return client.query(
      "INSERT INTO projects (name, icon, description) VALUES ($1, $2, $3)",
      project.name,
      project.icon,
      project.description,
    );
  }

  export async function all() {
    let result = new Array();

    await client.query("SELECT * FROM projects")
      .then((res) =>
        res.rows.map((row: any) => {
          return DatabaseMapper.rowToProject(row, res.rowDescription);
        })
      )
      .then((it) => result.push(it));
    console.log(result);
    return result;
  }

  export async function forId(id: number) {
    return await client.query("SELECT * FROM projects WHERE id = $1", id)
      .then((res) =>
        DatabaseMapper.rowToProject(res.rows[0], res.rowDescription)
      );
  }

  export async function remove(id: number) {
    await client.query("DELETE FROM projects WHERE id = $1", id)
      .then((res) => console.log(res));
    return true;
  }

  export async function update(
    id: number,
    name: String,
    icon: String,
    description: String,
  ) {
    return await client.query(
      "UPDATE projects SET name = $2, icon = $3, description = $4 WHERE id = $1",
      id,
      name,
      icon,
      description,
    )
      .then((res) =>
        DatabaseMapper.rowToProject(res.rows[0], res.rowDescription)
      );
  }
}

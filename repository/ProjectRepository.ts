import client from "./dbclient.ts";
import { Column } from "https://deno.land/x/postgres/connection.ts"
import Project from "../models/Project.ts"
import { DatabaseMapper } from "./mappers.ts";
export namespace ProjectRepository {

    export function create(project: Project){
        console.log(project)
        return client.query(
            "INSERT INTO projects (name, icon, description) VALUES ($1, $2, $3)",
            project.name,project.icon,project.description
        )
    }

    export async function all(){
        let result = new Array() 

         await client.query("SELECT * FROM projects")
        .then((res)=> res.rows.map((row: any) => {
            DatabaseMapper.rowToProject(row,res.rowDescription)}))
        return result
    }


    export async function forId(id: number){
        let result = new Array() 

         await client.query("SELECT * FROM projects WHERE id IS $1", id)
        .then((res)=> res.rows.map((row: any) => {
            DatabaseMapper.rowToProject(row,res.rowDescription)}))
        return result
    }

}
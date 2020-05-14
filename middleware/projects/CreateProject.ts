import { Project } from "../../models/Project.ts";
import { ProjectRepository } from "../../repository/ProjectRepository.ts"
import { Env } from "../../env.ts"
export const validateAndCreateProject = async (
  project: Project,
): Promise<Boolean> => {

  
  const data = new FormData()
  data.append("file",project.icon)
  data.append("fileName", project.name)
  console.log(data)

  return await fetch("https://upload.imagekit.io/api/v1/files/upload" , {
    method: "POST",
    headers: [
        ['Authorization','Basic '+Env.IMG_KEY ]
    ],
    body: data})
    .then(response => response.json())
    .then((data) =>
      {
         project.icon = data.url
         ProjectRepository.create(project)
          true   
        })
        .then((it) => true)
};

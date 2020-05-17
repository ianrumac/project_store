import { ProjectRepository } from "../../repository/ProjectRepository.ts";
import { ProjectById } from "./ProjectByIdRoute.ts";
export const GetProjectLinks = async ({ params, response }: {
  params: {
    id: number;
  };
  response: any;
}) => {
  response.body = await ProjectRepository.forId(params.id);
  response.status = 200;
};

export namespace Projects {
  export const findById = ProjectById;
}

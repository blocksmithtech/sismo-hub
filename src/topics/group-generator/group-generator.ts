import { injectable, inject } from "tsyringe";
import { GenerationFrequency } from "./group-generator.types";
import { GenerationContext } from "../generation-context";
import { GroupType } from "../group";
import GroupStore from "../group/group.store";

@injectable()
export class GroupGenerator {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public generate(context: GenerationContext): Promise<GroupType[]> {
    throw Error("generate function must be implemented");
  }
  public generationFrequency: GenerationFrequency;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(@inject("GroupStore") protected groupStore: GroupStore) {}
}

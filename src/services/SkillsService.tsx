import axios from "axios";
import {properties} from "./Environment";
import {ActionCreator, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {ISkillsState} from "../state/Store";
import {SkillsActions, SkillsActionTypes} from "../state/skills/Actions";
import {ISkillGroup} from "../model/Skill";

export const getAllSkills: ActionCreator<
    ThunkAction<Promise<any>, ISkillsState, null, SkillsActions>
    > = () => {
  return async (dispatch: Dispatch) => {
    dispatch({type : SkillsActionTypes.LOADING});
    const response = await axios.get<ISkillGroup[]>(
        `${properties.apiUrl}/skills-groups?_sort=order:asc`
    );
    const skillsGroupsFromApi : ISkillGroup[] = response.data
    skillsGroupsFromApi.forEach(skillGroup => {
      skillGroup.skills = skillGroup.skills.sort((a,b) => a.order - b.order);
    });
    dispatch({
      skillsGroups: skillsGroupsFromApi,
      type: SkillsActionTypes.GETALL
    });
  };
};


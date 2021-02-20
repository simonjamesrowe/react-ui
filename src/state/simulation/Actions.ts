export enum SimulationActionTypes {
    SEARCH = "SIMULATE/SEARCH",
    FINISHED = "SIMULATE/FINISHED"
}

export interface ISimulateSearchAction {
    type: SimulationActionTypes.SEARCH,
    query: string
}

export interface ISimulationFinishedAction {
    type: SimulationActionTypes.FINISHED
}

export type SimulateActions = ISimulateSearchAction | ISimulationFinishedAction
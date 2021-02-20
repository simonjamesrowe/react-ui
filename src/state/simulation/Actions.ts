export enum SimulationActionTypes {
    SEARCH = "SIMULATE/SEARCH",
    FINISHED = "SIMULATE/FINISHED",
    STARTED = "SIMULATE/STARTED"
}

export interface ISimulateSearchAction {
    type: SimulationActionTypes.SEARCH,
    query: string
}

export interface ISimulationFinishedAction {
    type: SimulationActionTypes.FINISHED
}

export interface ISimulationStartedAction {
    type: SimulationActionTypes.STARTED
}

export type SimulateActions = ISimulateSearchAction | ISimulationFinishedAction | ISimulationStartedAction
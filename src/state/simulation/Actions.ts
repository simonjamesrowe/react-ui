export enum SimulationActionTypes {
    SEARCH = "SIMULATE/SEARCH"
}

export interface ISimulateSearchAction {
    type: SimulationActionTypes.SEARCH,
    query: string
}

export type SimulateActions = ISimulateSearchAction
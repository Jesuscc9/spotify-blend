export interface ActionType {
  type: string;
  payload?: any;
}

export interface ResponseType {
  data?: any,  
}

export interface iCommonUsersData {
  tracks: Array<string>,
  artists: Array<string>,
  genres: Array<string>
}
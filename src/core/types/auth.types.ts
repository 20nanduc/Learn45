export type TApiResult<T> =
  | { success: true; data: T }
  | { success: false; error: string, status: number };

export interface IGetMagicLinkResponse {
  action_url: string;
  attempt_token: string;
}

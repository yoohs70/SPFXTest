import { SPHttpClient } from "@microsoft/sp-http";

export interface IYhsTestAppProps {
  listName: string;
  spHttpClient: SPHttpClient;
  siteUrl: string;
}

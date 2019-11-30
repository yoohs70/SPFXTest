import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'YhsTestAppWebPartStrings';
import YhsTestApp from './components/YhsTestApp';
import { IYhsTestAppProps } from './components/IYhsTestAppProps';
import { string } from 'prop-types';

export interface IYhsTestAppWebPartProps {
  //added for 
  listName: string;
}

export default class YhsTestAppWebPart extends BaseClientSideWebPart<IYhsTestAppWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IYhsTestAppProps > = React.createElement(
      YhsTestApp,
      {
        //added
        listName: this.properties.listName,
        spHttpClient: this.context.spHttpClient,
        siteUrl: this.context.pageContext.web.absoluteUrl
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('listName',{
                  label: strings.ListNameFieldLabel
                })

              ]
            }
          ]
        }
      ]
    };
  }
}

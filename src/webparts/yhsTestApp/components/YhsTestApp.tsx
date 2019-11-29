import * as React from 'react';
import styles from './YhsTestApp.module.scss';
import { IYhsTestAppProps } from './IYhsTestAppProps';
import { IReactCrudState } from './IReactCrudState';
import { escape } from '@microsoft/sp-lodash-subset';
/* added */
import { IListItem } from './IListItem';
import {SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

export default class YhsTestApp extends React.Component<IYhsTestAppProps, IReactCrudState> {
  /* added */
  constructor(props: IYhsTestAppProps, state: IReactCrudState){
    super(props);

    this.state = {
      status: 'Ready',
      items: []
    };
  }

  public render(): React.ReactElement<IYhsTestAppProps> {
    /* added */
    const items: JSX.Element[] = this.state.items.map((item: IListItem, i: number): JSX.Element => {
      return (
        <li>{item.Title} ({item.Id}) </li>
      );
    });


    return (
      <div className={ styles.yhsTestApp }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              {/* <p className={ styles.description }>{escape(this.props.listName)}</p> */}

              {/* added */}
              <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
                <div className='ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1'>  
                  <a href="#" className={`${styles.button}`} onClick={() => this.createItem()}>  
                    <span className={styles.label}>Create item</span>  
                  </a>   
                  <a href="#" className={`${styles.button}`} onClick={() => this.readItem()}>  
                    <span className={styles.label}>Read item</span>  
                  </a>  
                </div>
              </div>

              <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>  
                <div className='ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1'>  
                  <a href="#" className={`${styles.button}`} onClick={() => this.updateItem()}>  
                    <span className={styles.label}>Update item</span>  
                  </a>   
                  <a href="#" className={`${styles.button}`} onClick={() => this.deleteItem()}>  
                    <span className={styles.label}>Delete item</span>  
                  </a>  
                </div>  
              </div> 

              <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>  
                <div className='ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1'>  
                  {this.state.status}  
                  <ul>  
                    {items}  
                  </ul>  
                </div>  
              </div>             
            </div>
          
          </div>
        </div>
      </div>
    );
  }

  private createItem(): void{

  }
  private readItem(): void{

  }
  private updateItem(): void{

  }
  private deleteItem(): void{

  }
}

import * as React from 'react';

export interface IFlowButtonState{

}

export interface IFlowButtonProps{

}

export default class FlowButton extends React.Component<IFlowButtonProps, IFlowButtonState>{
  constructor(props: IFlowButtonProps){
    super(props);
  }

  public render(){
    return(
      <div>
        <span>Test</span>
      </div>
    )
  }
}
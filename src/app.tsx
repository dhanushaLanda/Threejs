import * as React from 'react';
interface AppState {
    status : string;
}
export default class App extends React.Component<any, AppState> {
    constructor(props){
        super(props);
        this.state = {
            status : "Start",
        }
    }
    public render() {
       return  <div className="app">
            {this.state.status}
        </div>
    }
}
import { ReduxElement } from 'c/lwcRedux';
import {entry, mid, expert} from 'c/jobActions';

export default class job extends ReduxElement {
    mapStateToProps(state){
        return {counter: state.counter, joblevel: state.joblevel};
    }
    mapDispatchToProps(){
        return { entry, mid, expert};
    }
}
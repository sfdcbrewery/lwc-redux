import {ENTRY_ACTION, MID_ACTION, EXPERT_ACTION} from 'c/jobConstant';
const reducer = (counter = -1, action) => {
    switch (action.type) {
       default: return counter + 1;
    }
}
const optionreducer = (joblevel = '', action) => {
    switch (action.type) {
       case ENTRY_ACTION: return 'Entry Level';
       case MID_ACTION: return 'Mid Level';
       case EXPERT_ACTION : return 'Expert Level';
       default: return joblevel;
    }
}
export default {
    counter: reducer,
    joblevel: optionreducer
}
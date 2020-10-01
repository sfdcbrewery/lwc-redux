import {ENTRY_ACTION, MID_ACTION, EXPERT_ACTION} from 'c/jobConstant';
 export const entry = () => {
   return { type: ENTRY_ACTION }
}
export const mid = () => {
   return { type: MID_ACTION }
}
export const expert = () => {
   return { type: EXPERT_ACTION }
}
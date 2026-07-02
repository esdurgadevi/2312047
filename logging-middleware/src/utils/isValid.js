import { CONSTANTS } from "../log_constants.js";

export const isValidParameters = (stack,level,packageName)=>{
    if(!CONSTANTS.stack.includes(stack) || !CONSTANTS.level.includes(level)) return false;
    if(CONSTANTS.package.shared.includes(packageName)) return true;
    return (stack === 'backend' && CONSTANTS.package.backend.includes(packageName)) || (stack === 'frontend' && CONSTANTS.package.frontend.includes(packageName));
}
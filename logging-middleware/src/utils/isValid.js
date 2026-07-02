import { CONSTANTS } from "../log_constants.js";

export const isValidParameters = (stack,level,package)=>{
    if(!CONSTANTS.stack.includes(stack) || !CONSTANTS.level.includes(level)) return false;
    if(CONSTANTS.package.shared.includes(package)) return true;
    return (stack === 'backend' && CONSTANTS.package.backend.includes(package)) || (stack === 'frontend' && CONSTANTS.package.frontend.includes(package));
}
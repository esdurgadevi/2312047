import { loggerService } from "../services/loggerService.js";
import { isValidParameters } from "../utils/isValid.js";

export const loggerController = async ({
    stack,
    level,
    package: packageName,
    message
}) => {

    if (!stack || !level || !packageName || !message) {
        throw new Error("Provide all the parameters.");
    }

    if (!isValidParameters(stack, level, packageName)) {
        throw new Error("Invalid stack, level or package.");
    }

    return await loggerService({
        stack,
        level,
        package: packageName,
        message
    });
};
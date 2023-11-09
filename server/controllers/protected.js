import logger from "../setup/logger.js";

const createWarehouse = (req,res,next) => {
    try {
        
    } catch (error) {
        logger.error(error)
        next(error);
    }
}

export {
    createWarehouse
}
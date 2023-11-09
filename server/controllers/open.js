import logger from "../setup/logger.js";
import { createProduct, createWarehouse, createZone, deleteProductById, getProductById, getWarehouse, getWarehouseById, getZoneById } from "../models/helpers/index.js";
import { sendResponse } from "../utils/api.js";

const CreateWarehouse = async (req, res, next) => {
    try {
        const { name } = req.body;

        logger.debug(`Creating warehouse in database`);
        const warehouse = await createWarehouse(name);
        logger.debug(`Warehouse created successfully`);

        sendResponse(res, 200, 'Warehouse created successfully', [warehouse]);
    } catch (error) {
        logger.error(error);
        logger.debug(`Error in creating warehouse`);
        next(error);
    }
}

const GetWarehouses = async (req, res, next) => {
    try {
        logger.debug(`Fetching warehouse`);
        const warehouses = await getWarehouse();
        logger.debug(`Warehouses fetched successfully`);

        sendResponse(res, 200, 'Warehouse fetched successfully', [warehouses]);
    } catch (error) {
        logger.error(error);
        logger.debug(`Error in fetching warehouse`);
        next(error);
    }
}

const CreateProducts = async (req, res, next) => {
    try {
        const { zoneId } = req.params;
        const { name, price } = req.body;

        logger.debug(`Fetching zone by zoneId: ${zoneId}`);
        const zone = await getZoneById(zoneId);
        if (!zone) {
            return sendResponse(res, 404, 'Zone not found');
        }

        logger.debug(`Creating new product for zoneId: ${zoneId}`);
        const product = await createProduct(name, price, zone?._id);
        logger.debug(`Product created successfully`);

        sendResponse(res, 200, 'Product created successfully', [product]);
    } catch (error) {
        logger.error(error);
        logger.debug(`Error in creating product`);
        next(error);
    }
}

const DeleteProduct = async (req, res, next) => {
    try {
        const { zoneId, productId } = req.params;

        logger.debug(`Fetching zone by zoneId: ${zoneId}`);
        const zone = await getZoneById(zoneId);
        if (!zone) {
            return sendResponse(res, 404, 'Zone not found');
        }

        logger.debug(`Fetching product of productId: ${productId}`);
        const product = await getProductById(productId);
        if (!product) {
            return sendResponse(res, 404, 'Product not found');
        }

        logger.debug(`Deleting product for productId: ${productId}`);
        await deleteProductById(productId);
        logger.debug(`Product deleted successfully`)

        sendResponse(res, 200, 'Product deleted successfully');
    } catch (error) {
        logger.error(error);
        logger.debug(`Error in deleting product`);
        next(error);
    }
}

const GetZone = async (req, res, next) => {
    try {
        const { warehouseId } = req.params;

        logger.debug(`Fetching zone`);
        const zones = await getZoneByWarehouseId(warehouseId);
        if (!zones) {
            return sendResponse(res, 404, 'Zone not found');
        }
        logger.debug(`Zones fetched successfully`);

        sendResponse(res, 200, 'Zones fetched successfully', [zones]);
    } catch (error) {
        logger.error(error);
        logger.debug(`Error in fetching zone`);
        next(error);
    }
}

const CreateZone = async (req, res, next) => {
    try {
        const { warehouseId } = req.params;
        const { name } = req.body;

        logger.debug(`Fetching warehouse by warehouseId: ${warehouseId}`);
        const warehouse = await getWarehouseById(warehouseId);
        if (!warehouse) {
            return sendResponse(res, 404, 'Warehouse not found');
        }

        logger.debug(`Creating zone`);
        const zone = await createZone(name, warehouse?._id);
        logger.debug(`Zone created successfully`);

        sendResponse(res, 200, 'Zone created successfully', [zone]);
    } catch (error) {
        logger.error(error);
        logger.debug(`Error in creating zone`);
        next(error);
    }
}

export {
    CreateWarehouse,
    GetWarehouses,
    CreateProducts,
    DeleteProduct,
    GetZone,
    CreateZone
}
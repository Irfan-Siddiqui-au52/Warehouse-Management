import Product from "../Products.js";
import Warehouse from "../Warehouse.js"
import Zone from "../Zone.js";

const createWarehouse = async name => {
    const warehouse = new Warehouse({ name });
    const savedWarehouse = await warehouse.save();

    return savedWarehouse;
}

const getWarehouse = async () => {
    const warehouses = await Warehouse.find();
    return warehouses;
}

const getZoneById = async zoneId => {
    const zone = await Zone.findById(zoneId);
    return zone;
}

const createProduct = async (name, price, zoneId) => {
    const product = new Product({ name, price, zone: zoneId });
    const savedProduct = await product.save();
    return savedProduct;
}

const getProductById = async productId => {
    const product = await Product.findById(productId);
    return product;
}

const deleteProductById = async productId => {
    const product = await getProductById(productId);
    await product.remove();
}

const getZoneByWarehouseId = async warehouseId => {
    const zone = await Zone.find({
        warehouse: warehouseId
    });
    return zone;
}

const getWarehouseById = async (warehouseId) => {
    const warehouse = await Warehouse.findById(warehouseId);
    return warehouse;
}

const createZone = async (name, warehouseId) => {
    const zone = new Zone({ name, warehouse: warehouseId });
    const newZone = zone.save();
    return newZone;
}
export {
    createWarehouse,
    getWarehouse,
    getZoneById,
    createProduct,
    getProductById,
    deleteProductById,
    getZoneByWarehouseId,
    getWarehouseById,
    createZone
}
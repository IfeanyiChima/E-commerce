const Product = require("../models/Product")
const appData = require("../config/constants");



const getAllProducts = async (req, res) => {

    let filter = {};
    let {page, limit, sort, asc} = req.query;

    
    if (req.query.name) {
        filter = { name: req.query.name };
    }
    
    // page = req.query.page
    // limit = req.query.limit
    
    if (!page) page = 1;
    if (!limit) limit = 10;

    let skip = (page - 1) * 10;

    if (req.query.sort) {
        sort = {[sort]: asc}
    }

    if(!req.query.sort) sort = {}

    try {
        const result = await Product.find(filter).sort(sort).skip(skip).limit(limit);
        if (!result) return res.status(400).json({ "message": "No products found" });
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).json({"msg": `${error.message}`})
    }
}


// function
const createManyDocuments = async () => {
    try {
        await Product.deleteMany({});    
        let result = await Product.create(appData)
        return result
    }
    catch (error) {
        throw error
    }
}


const createManyProducts = async (req, res) => {
    let results = await createManyDocuments();
    res.json({documents: results});
}


// const getProduct = async (req, res) => {

//     let findBy = {};


//     if (req.query.name) {
//         findBy = { name: req.query.name };
//     }

//     if (!page) page = 1;

//     try {
//         const result = await Product.findOne(findBy)
//         if (!result) return res.status(400).json({ "message": "No products found" });
//         return res.status(200).send(result)
//     } catch (error) {
//         return res.status(500).json({"msg": `${error.message}`})
//     }
// }




// const { name, price, quantity, category } = req.body

// try {
//     const result = await Product.create({ name, price, quantity, category });
//     if (!result) return res.status(400).json({ "message": `error creating prduct` });
//     return res.status(200).json(result)
// } catch (error) {
//     return res.status(500).json({ "msg": `${error.message}` });
// }



const filterProducts = async (req, res) => {

    let filter = {};

    
    if (req.params.category) {
        filter = { category: req.params.category };
    }
    

    try {
        const result = await Product.find(filter);
        if (!result) return res.status(400).json({ "message": "No products found" });
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({"msg": `${error.message}`})
    }
}



// const sortByCategory = async (req, res) => {

//     const { sort, asc } = req.query;

//     try {
//         const result = await Product.find().sort({[sort]: asc});
//         if (!result) return res.status(400).json({ "message": "No products found" });
//         return res.status(200).json(result);
//     } catch (error) {
//         return res.status(500).json({ "msg": `${error.message}` });
//     }
// }

module.exports = { getAllProducts, createManyProducts, filterProducts }


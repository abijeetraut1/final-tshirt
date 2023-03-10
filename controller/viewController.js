const product = require('../model/product');
const sendedProduct = require('../model/sendedDesign');
const user = require('../model/signup');
const order = require('./../model/orderModel');
const jwt = require('jsonwebtoken');
const {
    promisify
} = require('util');


exports.homepage = async (req, res, next) => {
    const adminDesign = await product.find({
        role: 'admin'
    }).sort({
        uploadDate: -1
    }).limit(4);
    // const productData = await product.find(-1).limit(4);
    const productData = await product.find().sort({
        uploadDate: -1
    });
    const totalUsers = await user.find().limit(4);
    res.status(200).render('landing.pug', {
        productData,
        adminDesign,
        totalUsers
    });
}

exports.buypage = async (req, res, next) => {
    const slug = req.params.slug;
    const products = await product.findOne({
        slug
    });
    console.log(products)
    res.status(200).render('slugView.pug', {
        products
    });
}

exports.login = async (req, res, next) => {
    res.status(200).render('loginFrom.pug');
}

exports.orderPage = async (req, res, next) => {
    const item = await product.findOne({
        slug: req.params.slug
    })
    console.log(item)
    res.status(200).render('orderPage.pug', {
        item
    });
}

exports.addToCart = async (req, res, next) => {

    const token = req.cookies.jwt;
    const cookiesId = await promisify(jwt.verify)(token, process.env.jwtPassword);

    const items = await product.find({
        userId: cookiesId.id
    })

    const fromSendItem = await sendedProduct.find();
    console.log(fromSendItem)

    res.status(200).render('add-to-cart.pug', {
        items
    });
}


exports.designPage = async (req, res, next) => {
    res.status(200).render('design.pug');
}



// admin only
exports.products = async (req, res, next) => {
    const ordereditem = await order.find();
    console.log(ordereditem)
    res.status(200).render('dash_product.pug', {
        ordereditem
    });
}


exports.order = async (req, res, next) => {
    const fromSendItem = await order.find();
    console.log(fromSendItem)
    res.status(200).render('dashWidget.pug', {
        fromSendItem
    })
}
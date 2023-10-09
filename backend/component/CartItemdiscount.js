
const validDiscountCodes = {
    'CANDY10': 0.1
};
const discountCart = async(req,res) => {
    const discountcode = req.body.code

    if(validDiscountCodes.hasOwnProperty(discountcode)){
        const persentage = validDiscountCodes[discountcode]
        res.status(200).json({vaild : true, persentage, message : 'Discount applied'})
    }
    else {
        res.status(200).json({vaild : false, message: 'Invalid discount' });
    }
}

function applyDiscount(price) {
   return price * 0.9
}

const checkoutCart = async(req,res) => {
    const {totalPrice, vaildDiscount} = req.body
    if(vaildDiscount){
        const discountPrice = applyDiscount(totalPrice)
        res.status(200).json({totalPrice : discountPrice, message : 'Checkout Successfully'})
    }
    else {
        res.status(200).json({ totalPrice, message: 'Checkout successful' });
    }

}
module.exports = {discountCart,checkoutCart}
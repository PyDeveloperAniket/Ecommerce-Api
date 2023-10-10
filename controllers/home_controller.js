// Home Page
module.exports.home= async function(req, res) {
    try {
        return res.status(200).json({
            message: 'Welcome to Ecommerce API Admin'
        });
    } catch (error) {
        res.status(502).json({ 
            message: 'Bad Gateway'
        });
    }
}
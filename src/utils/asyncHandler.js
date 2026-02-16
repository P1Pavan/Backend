const asyncHandler = (fn) => async (req, res, next) => {
    try {
         await fn(req,res,next)
    } catch (error) {
        console.log("handler error :::" ,error);
        
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export {asyncHandler}
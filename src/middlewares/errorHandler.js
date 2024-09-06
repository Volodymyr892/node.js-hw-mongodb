export const errorHandler = (err,reg,res, next)=>{
    res.status(500).json({
        message: 'Something went wrong',
        error: err.message,
    });
};
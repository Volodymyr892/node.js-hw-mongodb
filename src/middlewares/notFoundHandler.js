// export const notEoundHandler = (reg,res,next)=> {
//     res.status(404).json({
//         status,
//         message: 'Not found'
//     });
// };
export const notFoundHandler = (req, res, next) => {
    res.status(404).json({
        status: 404,  
        message: 'Not found',  
        data: null,  
    });
};

// export default notFoundHandler;
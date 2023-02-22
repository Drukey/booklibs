export const createError = (status, message) =>{
    const err = new Error();
    err.status= statues;
    err.message = message;
    return err;
}
const joi = require("joi");


module.exports.registerValidation = (data) => {
        const schema = joi.object({
            username: joi.string().min(6).trim().required(),
            password: joi.string().min(6).trim().required(),
            email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        }).unknown();
    
    return schema.validate(data);
}
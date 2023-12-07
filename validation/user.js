import Joi from 'joi'

export const userValidator = Joi.object({
    userName: Joi.string().required().min(6).max(255).message({
        "string.empty": "user name không được để trống",
        "any.required": "user name là bắt buộc",
        "string.min": "user name phải có ít nhất {#limit} ký tự",
        "string.max": "user name phải có ít hơn {#limit + 1} ký tự"
    }),
    email: Joi.string().required().email().message({
        "string.empty": "Email khôn được để trống",
        "any.required": "Email là bắt buộc",
        "string.emal": "Email không đúng định dạng"
    }),
    password: Joi.string().required().min(6).max(255).message({
        "string.empty": "password khôn được để trống",
        "any.required": "password là bắt buộc",
        "string.min": "password phải có ít nhất {#limit} ký tự",
        "string.max": "passwprd phải có ít hơn {#limit + 1} ký tự"
    }),
    confirmPassword: Joi.string().required().min(6).max(255).message({
        "string.empty": "Comfirm password khôn được để trống",
        "any.required": "Comfirm password à bắt buộc",
        "string.min": "Comfirm password phải có ít nhất {#limit} ký tự",
        "string.max": "Comfirm password phải có ít hơn {#limit + 1} ký tự",
        "any.only": "Comfirm password không khớp với password"
    }),
    role: Joi.string()

})


export const signinValidator = Joi.object({
    email: Joi.string().required().email().message({
        "string.empty": "Email khôn được để trống",
        "any.required": "Email là bắt buộc",
        "string.emal": "Email không đúng định dạng"
    }),
    password: Joi.string().required().min(6).max(255).message({
        "string.empty": "password khônG được để trống",
        "any.required": "password là bắt buộc",
        "string.min": "password phải có ít nhất {#limit} ký tự",
        "string.max": "passwprd phải có ít hơn {#limit + 1} ký tự"
    }),
})
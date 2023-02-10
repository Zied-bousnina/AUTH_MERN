const ROLES = {
    "ADMIN": 'ADMIN',
    "USER": 'USER'

}

const isRole = (...roles)=> (req, res, next)=> {
    const role =  roles.find(role=>req.user.role === role.toUpperCase())
    if(!role) return res.status(401).json({message: "no access"})
    next()
    
}

module.exports = {
    ROLES,
    isRole
}
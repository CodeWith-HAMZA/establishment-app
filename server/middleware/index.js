
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const { JWT_SECRET } = require('../constants/env');



// authorize- for RolEs // like pass -> ['owner'] to be able to consume for "owner" 
const authorize = (...allowedRoles) => {

  return (req, res, next) => {
    const userRole = req.user.role;
    
    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };

};


// auth-jwt
const authenticateJWT = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      const user = await User.findById(decoded.id);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      req.user = user;
      next();
    } catch (error) {
      return res.status(403).json({ message: 'Invalid Or Expired Token' });
    }
  } else {
    return res.status(401).json({ message: 'Authorization header missing' });
  }
}


module.exports = { authorize, authenticateJWT };
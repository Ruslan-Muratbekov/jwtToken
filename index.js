require('dotenv').config()
const jwt = require('jsonwebtoken');

const payload = {
	id: 1,
	name: 'Ruslan',
	roles: ['Admin']
}

// const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '15s'})
// const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30s'})

// console.log(`AccessToken ${accessToken}`)
// console.log(`RefreshToken ${refreshToken}`)

let accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlJ1c2xhbiIsInJvbGVzIjpbIkFkbWluIl0sImlhdCI6MTY3Njg4MzY1MCwiZXhwIjoxNjc2ODgzNjY1fQ.ORYfv4oMMwx9xvbIinSM5nSaozxai0jgM2WiBn0asds'

const validAccess = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET)
console.log(validAccess)
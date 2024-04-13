import user from "../Models/User.js"

export const UserSignUp = async (req, res) => {
console.log('awa')
    try {
        const existUser = await user.findOne({ uEmail: req.body.email });
        if (existUser) {
            res.status(400).json({
                message: 'Email already registered..!'
            })
        } else if (!existUser) {
            const prefix = "uid"
            const userID = (prefix + "_" + Date.now())

            const newUser = new user({
                uID: userID,
                uName: req.body.fullname,
                uEmail: req.body.email,
                uLocation: req.body.location,
                uContactNo: req.body.contactno,
                uPassword: req.body.password,
            })

            const newAccount = await newUser.save();
            if (newAccount) {
                res.status(201).json({
                    message: "Registration successfull..!",
                    payload: newAccount
                })
            } else {
                res.status(404).json({
                    message: 'Somthing went wrong creating account..!'
                })
            }
        }

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong..!",
            error: error
        })
    }
}

// export const AdminLogin = async (req, res) => {
//     try {
//         const registeredAdmin = await admin.findOne({ email: req.body.email })
//         if (registeredAdmin) {
//             const enteredPwd = req.body.password;
//             const dbPwd = registeredAdmin.password;

//             const chkPwd = await bcrypt.compare(enteredPwd, dbPwd);
//             if (chkPwd) {
//                 const token = jwt.sign({ email: req.body.email }, process.env.JWT_TOKEN_KEY, { expiresIn: '10s' })
//                 const refreshtoken = jwt.sign({ email: req.body.email }, process.env.REFRESH_TOKEN_KEY, { expiresIn: '40s' })

//                 refreshtokens.push(refreshtoken);
//                 res.status(201).json({
//                     message: 'Login Successfull..!',
//                     token,
//                     refreshtoken,
//                     user: {
//                         adminId: registeredAdmin.adminId,
//                         name: registeredAdmin.name,
//                         mobileNo: registeredAdmin.mobileNo,
//                         gymName: registeredAdmin.gymName,
//                         address: registeredAdmin.address,
//                         logoImg: registeredAdmin.logoImg,
//                         email: registeredAdmin.email,
//                     }
//                 })
//             } else {
//                 res.status(404).json({
//                     message: 'Incorrect password..!'
//                 })
//             }
//         } else {
//             res.status(401).json({
//                 message: 'No account found under this email..!'
//             })
//         }
//     } catch (error) {
//         res.status(500).json({
//             message: 'Somthing went wrong..!',
//             error: error
//         })
//     }
// }

// export const tokenRefresh = (req, res, next) => {
//     const refreshToken = req.body.refreshToken;
//     if (refreshToken == null) {
//         res.status(401).json({
//             message: "Unauthorized..!"
//         })
//     } else if (!refreshtokens.includes(refreshToken)) {
//         res.status(403).json({
//             message: "Forbidden..!"
//         })
//     } else {
//         jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY, (err, user) => {
//             if (err) {
//                 res.status(404).json({
//                     message: "error..!"
//                 })
//             } else {
//                 const token = jwt.sign({ email: req.body.email }, process.env.JWT_TOKEN_KEY, { expiresIn: "10s" });
//                 res.status(201).json({
//                     message: "Session Extended..!",
//                     token
//                 })
//             }
//         })
//     }
// }
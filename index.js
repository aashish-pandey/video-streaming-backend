var express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const register = require("./controllers/Register");
const login = require("./controllers/Login");
var cookieParser = require("cookie-parser");
const upload = require("express-fileupload");

const subscriptionStatus = require("./controllers/SubscriptionStatus");
const planAvailable = require("./controllers/AvailablePlans");
const activateSubscription = require("./controllers/ActivateSubscription");
const accountLoginHistorySave = require("./controllers/AccountLoginHistory");
const logout = require("./controllers/Logout");
const uploadVideo = require("./controllers/UploadVideos");
const uploadMovie = require("./controllers/UploadMovies");
const getMovies = require("./controllers/GetMovies");
const getVideo = require("./controllers/GetVideo");
const getThumbnail = require("./controllers/GetThumbnail");
const saveWatchHistory = require("./controllers/SaveWatchHistory");
const getWatchHistory = require("./controllers/GetWatchHistory");
const getMoviesById = require("./controllers/GetMoviesById");

//admin requests
const registerAdmin = require("./controllers/RegisterAdmin");
const loginAdmin = require("./controllers/LoginAdmin");
const getAllUsers = require("./controllers/GetAllUsers");
const getAllAdmins = require("./controllers/GetAllAdmins");
const getAccountLoginHistories = require("./controllers/GetAccountLoginHistories");
const OnlineStatus = require("./controllers/OnlineStatus");
const SetInactiveUSersOffline = require("./controllers/SetInactiveUsersOffline");
const SetHomeAddress = require("./controllers/SetHomeAddress");
const getMyProfile = require("./controllers/GetMyProfile");
const getMySubscription = require("./controllers/GetMySubscription");
const getSubscriptionPlanByName = require("./controllers/GetSubscriptionPlanByName");
const getTrendingMovies = require("./controllers/GetTrendingMovies");
const saveGlobalChat = require("./controllers/SaveGlobalChat");
const getGlobalChat = require("./controllers/GetGlobalChat");
const deleteAdmin = require("./controllers/AdminSideAdminFuncionalities/DeleteAdmin");
const deleteMovie = require("./controllers/AdminSideAdminFuncionalities/DeleteMovie");
const deleteUser = require("./controllers/AdminSideAdminFuncionalities/DeleteUser");
const editAdmin = require("./controllers/AdminSideAdminFuncionalities/EditAdmin");
const changeAdminDepartment = require("./controllers/AdminSideAdminFuncionalities/ChangeAdminDepartment");
const { sendMail } = require("./MailHandler/SendMail");
const HandleMailSend = require("./MailHandler/HandleMailSend");
const bannerUpload = require("./controllers/AdminSideAdminFuncionalities/AddBanner");
const getBanner = require("./controllers/GetBanner");
const getBannerThumbnail = require("./controllers/GetBannerThumbnail");
const getBannerMovie = require("./controllers/GetBannerMovie");
const forgetPasswordBegin = require("./controllers/ForgetPassword");
const forgetPasswordComplete = require("./controllers/ForgetPasswordComplete");

app = express();

app.use(upload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());

app.set("view engine", "ejs");

const dbURI =
  "mongodb+srv://aashish:aashish@cluster0.vcetuxv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(dbURI)
  .then(() =>
    app.listen(3560, function () {
      console.log("Authentication system is running");
    })
  )
  .catch((err) => console.log(err));



// quick liveness probe
app.get('/health', (_req, res) => {
  res.json({ status: 'up' });
});  

app.get("/getMovies", getMovies);
app.get("/getBanner", getBanner);
app.get("/getVideo/:id", getVideo);
app.get("/getThumbnail/:id", getThumbnail);
app.get("/getBannerThumbnail/:id", getBannerThumbnail);

app.get("/getMoviesByID/:id", getMoviesById);
app.get("/getBannerMovie/:id", getBannerMovie);

app.post("/forgetPasswordBegin/", forgetPasswordBegin);
app.post("/forgetPasswordComplete", forgetPasswordComplete);

app.get("/getMyProfile/:email", getMyProfile);
app.get("/getMySubscription/:email", getMySubscription);
app.get("/getSubscriptionPlanByName/:name", getSubscriptionPlanByName);
app.get("/getTrendingMovies", getTrendingMovies);
app.get("/getGlobalChat", getGlobalChat);

app.post("/sendMail", HandleMailSend);

app.post("/register", register);
app.post("/login", login);
app.post("/logout", logout);
app.post("/subscriptionStatus", subscriptionStatus);
app.post("/availablePlan", planAvailable);
app.post("/activatesubscription", activateSubscription);
app.post("/accountLoginHistorySave", accountLoginHistorySave);
app.post("/uploadvideo", uploadVideo);
app.post("/uploadMovie", uploadMovie);
app.post("/bannerUpload", bannerUpload);
app.post("/saveWatchHistory", saveWatchHistory);
app.post("/getWatchHistory", getWatchHistory);
app.post("/saveGlobalChat", saveGlobalChat);

app.get("/accountLoginHistories/:email", getAccountLoginHistories);

//set Home Address
app.post("/setHomeAddress", SetHomeAddress);

//admin requests
app.post("/registerAdmin", registerAdmin);
app.post("/loginAdmin", loginAdmin);
app.post("/deleteAdmin", deleteAdmin);
app.post("/deleteMovie", deleteMovie);
app.post("/deleteUser", deleteUser);
app.post("/editAdmin", editAdmin);
app.post("/changeAdminDepartment", changeAdminDepartment);

app.get("/getAllUsers", getAllUsers);
app.get("/getAllAdmins", getAllAdmins);
app.get("/getAllMovies", getMovies);
app.get("/getAllSubscriptionPlans", planAvailable);

//maintaing the active login status
app.post("/saveOnlineStatus", OnlineStatus);

//Automatically make inactive users offline
setInterval(SetInactiveUSersOffline, 10000);

// add new subscription plans
// const Plan = require('./models/PlanAvailable')
// app.get('/', function(req, res){

//     const plan  = new Plan({
//         planName: 'Standard',
//         monthlyPrice: '170',
//         noOfDevice: '5'

//     })

//     plan.save(function(err){
//         if(err){

//             res.send("Plan not added");
//         }else{
//             res.send("Plan added")
//         }
//     })

// });

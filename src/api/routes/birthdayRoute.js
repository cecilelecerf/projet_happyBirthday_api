module.exports = (server) => {
    const birthdayController = require('../controllers/birthdayController');
    
    server.get("/getBirthday", birthdayController.getTodaysBirthday)
}
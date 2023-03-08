const parseService = require('../service/parseService.js');
const moment = require("moment");

const CSV_STUDENTS = "2023-etudiants.csv";
const CSV_TEACHERS = "2023-etudiants.csv";



exports.getTodaysBirthday = async (req, res) => {
    const dateDDMM = moment().format('DD/MM');
    const STUDENTS_BIRTHDAY = await parseService.parseFile(CSV_STUDENTS)
    .then(students => {
        return result = students.filter(student => student.birthday.startsWith(dateDDMM));
    });    

    const TEACHERS_BIRTHDAY = await parseService.parseFile(CSV_TEACHERS)
    .then(teachers => {
        return resultee = teachers.filter(teacher => teacher.birthday.startsWith(dateDDMM));
    });
    res.json({
        count_total: STUDENTS_BIRTHDAY.length + TEACHERS_BIRTHDAY.length,
        students_birthday : {
            students : STUDENTS_BIRTHDAY
        },
        teachers_birthday : {
            teachers : TEACHERS_BIRTHDAY
        }
    })
}



const getAllJobs = "SELECT * FROM JOBS";
const getJobByID = "SELECT * FROM JOBS WHERE JOB_ID = $1";
const getJobByTitle = "SELECT * FROM JOBS WHERE TITLE LIKE $1";
const getUncompletedJobs = "SELECT * FROM JOBS WHERE COMPLETED = FALSE";

const getEmployerJobs = "SELECT * FROM JOBS WHERE EMPLOYER_ID IN (SELECT EMPLOYER_ID FROM EMPLOYER WHERE USERNAME = $1)"
const getEmployeeAppliedJobs = "SELECT * FROM JOBS WHERE JOB_ID IN (SELECT JOB_ID FROM APPLIED_BY WHERE EMPLOYEE_ID IN (SELECT EMPLOYEE_ID FROM EMPLOYEE WHERE USERNAME = $1))"

const deleteJobByID = "DELETE FROM JOBS WHERE JOB_ID = $2"

const createJob = "INSERT INTO JOBS(TITLE, DESCRIPTION, JOB_TYPE, DATE_POSTED, SALARY, EMPLOYER_ID) VALUES($1, $2, $3, CURRENT_DATE, $4, $5)"
const applyJob = "INSERT INTO APPLIED_BY(JOB_ID, EMPLOYEE_ID) VALUES($1, $2)"

const updateJob = "UPDATE JOBS SET TITLE = $2, DESCRIPTION = $3, JOB_TYPE = $4, SALARY = $5, COMPLETED = $6 WHERE JOB_ID = $1"


module.exports = {
    getAllJobs,
    getJobByID,
    getJobByTitle,
    getUncompletedJobs,
    getEmployerJobs,
    getEmployeeAppliedJobs,

    deleteJobByID,

    createJob,
    applyJob,

    updateJob
}
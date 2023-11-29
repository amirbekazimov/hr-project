const getHeader = (token) => {
    return {
        'Content-Type': 'application/json',
    };
};

const BASE_URL = 'http://192.168.0.163:8000';

export const getVacancies = async () => {

    const response = await fetch(BASE_URL + '/api/job/job-vacancies/', {
        method: 'GET'
    });
    const data = await response.json();
    return data;
};

export const postVacancy = async (vacancy) => {
    const response = await fetch(BASE_URL + '/api/job/job-vacancies/', {
        method: 'POST',
        headers: getHeader(),
        body: JSON.stringify(vacancy)
    });
    const data = await response.json();
    return data;
};

export const getJobCategories = async () => {
    const response = await fetch(BASE_URL + '/api/job/job-categories/', {
        method: 'GET'
    });
    const data = await response.json();
    return data;
};

export const applyVacancy = async (vacancy) => {
    const response = await fetch(BASE_URL + `/api/job/apply-job-user/`, {
        method: 'POST',
        headers: {
        },
        body: vacancy,
    });
    const data = await response.json();
    return data;
};

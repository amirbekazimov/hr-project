const getHeader = (token) => {
    return {
        'Content-Type': 'application/json',
    };
};

const BASE_URL = 'https://prounity.uz/jobs';

export const getVacancies = async () => {
    const response = await fetch(BASE_URL + '/api/job/jobs-vacancies', {
        method: 'GET'
    });
    const data = await response.json();
    return data;
};

export const postVacancy = async (vacancy) => {
    const response = await fetch(BASE_URL + '/api/job/jobs-vacancies', {
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

export const getTagDetails = async (id) => {
    const response = await fetch(BASE_URL + `/api/job/job-category-crud-views/${id}/`, {
        method: 'GET'
    });
    const data = await response.json();
    return data;
}

export const createTag = async (tag) => {
    const response = await fetch(BASE_URL + `/api/job/job-categories/`, {
        method: 'POST',
        headers: getHeader(),
        body: JSON.stringify(tag)
    });
    const data = await response.json();
    return data;
}

export const deleteTag = async (id) => {
    const response = await fetch(BASE_URL + `/api/job/job-category-crud-views/${id}/`, {
        method: 'DELETE',
        headers: getHeader(),
    });
    const data = await response.json();
    return data;
}

// export const deleteHr = async (id) => {
//     const response = await fetch(BASE_URL + `/api/auth/update-hr/${id}/`, {
//         method: 'DELETE',
//         headers: getHeader()
//     });
//     const data = await response.json();
//     return data;
// }
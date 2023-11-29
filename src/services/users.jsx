const BASE_URL = 'https://prounity.uz/jobs';

const getHeader = (token) => {
    return {
        'Content-Type': 'application/json',
    };
};

export const getHr = async () => {
    const response = await fetch(BASE_URL + '/api/auth/create-hr/', {
        method: 'GET'
    });
    const data = await response.json();
    return data;
};

export const createHr = async (hr) => {
    const response = await fetch(BASE_URL + '/api/auth/create-hr/', {
        method: 'POST',
        headers: getHeader(),
        body: JSON.stringify(hr)
    });
    const data = await response.json();
    return data;
};

export const updateHr = async (id, updatedHr) => {
    const response = await fetch(BASE_URL + `/api/auth/update-hr/${id}/`, {
        method: 'PUT',
        headers: getHeader(),
        body: JSON.stringify(updatedHr)
    });
    const data = await response.json();
    return data;
};

export const deleteHr = async (id) => {
    const response = await fetch(BASE_URL + `/api/auth/update-hr/${id}/`, {
        method: 'DELETE',
        headers: getHeader()
    });
    const data = await response.json();
    return data;
}

export const getApplyedUsers = async () => {
    const response = await fetch(BASE_URL + '/api/job/apply-job-user/', {
        method: 'GET'
    });
    const data = await response.json();
    return data;
};

export const getApplyedUsersDetails = async (id) => {
    const response = await fetch(BASE_URL + `/api/job/apply-job-user-details/${id}/`, {
        method: 'GET'
    });
    const data = await response.json();
    return data;
};

export const deleteApplyedUsers = async (id) => {
    const response = await fetch(BASE_URL + `/api/job/apply-job-user-details/${id}/`, {
        method: 'DELETE',
        headers: getHeader()
    });
    const data = await response.json();
    return data;
};

export const getRole = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(
        `${BASE_URL}/api/auth/profile/`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        }
    );
    const data = await response.json();
    const role = data.msg.groups[0].name;
    localStorage.setItem('role', role);
    return role;
}
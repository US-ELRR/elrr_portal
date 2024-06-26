'use strict';

export const host = process.env.NEXT_PUBLIC_BACKEND_HOST
const api = 'api/';

//courses
export const courses_url = `${host}${api}course`;

//learner data
export const learner_url = `${host}${api}learner?userName=`;


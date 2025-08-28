import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(filename);
  return Promise.allSettled([userPromise, photoPromise])
  .then((results) => {
    return results.map((r) => {
        if (r.status === 'fulfilled') {
          return { status: r.status, value: r.value };
        }
        return { status: r.status, value: r.reason };
      });
    });
}

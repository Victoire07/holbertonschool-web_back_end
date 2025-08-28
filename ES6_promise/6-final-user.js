import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  return Promise.allSettled(promises)
    .then((results) => results.map((result) => (
      result.status === 'fulfilled'
        ? { status: result.status, value: result.value }
        : { status: result.status, value: result.reason }
    )));
}

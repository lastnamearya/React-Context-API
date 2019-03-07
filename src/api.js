export const FAKE_USER = {
  firstName: 'Jigyasu',
  lastName: 'Arya',
  username: 'lastnamearya',
  avatar:
    'https://secure.gravatar.com/avatar/413b990ccd2cf5ba69d609fdba4f0302?s=32'
};

export function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'lastnamearya' && password === 'react') {
        resolve(FAKE_USER);
      } else {
        reject({ message: 'Invalid username or password' });
      }
    }, 300);
  });
}

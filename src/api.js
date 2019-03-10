export const FAKE_USER = {
  firstName: 'Jigyasu',
  lastName: 'Arya',
  username: 'lastnamearya',
  avatar:
    'https://secure.gravatar.com/avatar/413b990ccd2cf5ba69d609fdba4f0302?s=32'
};

export const FAKE_EMAILS = [
  {
    id: 0,
    subject: 'Hey lastnamearya',
    body: 'Yo, just wanted to say hey.'
  },
  {
    id: 1,
    subject: 'React is great',
    body: 'I thought I should let you know.'
  },
  {
    id: 2,
    subject: 'REQUEST FOR ASSISTANCE',
    body:
      'If you send me your bank account number I will reward you with $10 million whole US dollars.'
  }
];

// Generate a preview
FAKE_EMAILS.forEach(email => (email.preview = email.body.substr(0, 46)));

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

export function fetchEmails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(FAKE_EMAILS);
    }, 300);
  });
}

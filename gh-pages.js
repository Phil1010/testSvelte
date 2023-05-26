var ghpages = require('gh-pages');

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/Phil1010/testSvelte.git', // Update to point to your repository
    user: {
      name: 'Phillip', // update to use your name
      email: 'philliptysoun@gmail.com', // Update to use your email
    },
  },
  () => {
    console.log('Deploy Complete!');
  }
);

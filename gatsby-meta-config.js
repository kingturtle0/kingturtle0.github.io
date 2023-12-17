module.exports = {
  title: `kingturtle0.github.io`,
  description: `프론트엔드 개발자, 오영재입니다.`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://kingturtle0.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `kingturtle0/kingturtle0.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `오영재`,
    bio: {
      role: `프론트엔드 개발자`,
      description: ['아는 것을 설명할 수 있는', '모르는 것은 알아낼 수 있는', '개발을 좋아하는'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/kingturtle0`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `dhdnqkrtk22@naver.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2023.10 ~',
        activity: '개인 블로그 운영',
        links: {
          post: '',
          github: 'https://github.com/kingturtle0/kingturtle0.github.io',
          demo: 'https://kingturtle0.github.io',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '크리스마스 트위터 X-mas 개발',
        description:
          '개인 프로젝트로 이름이 X로 바뀐 트위터를 클론코딩하며 크리스마스를 맞아 X-mas를 개발하게 되었습니다. ',
        techStack: ['firebase', 'react', 'typescript'],
        thumbnailUrl: 'x-mas.png',
        links: {
          github: 'https://github.com/kingturtle0/x-mas',
          demo: 'https://x-mas-218be.firebaseapp.com/',
        },
      },
    ],
  },
};

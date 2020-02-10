export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e414b64e963cd5e3054f67b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-iyr8t3xj',
                  apiId: 'a7d6e0f7-fe4a-4890-9ca5-50feb81f0c98'
                },
                {
                  buildHookId: '5e414b65c41e91be62cc704f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-hs2ouob1',
                  apiId: '07dc41a0-f4ed-4ede-9b8a-7e4ecb5f56e7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sobbuh/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-hs2ouob1.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

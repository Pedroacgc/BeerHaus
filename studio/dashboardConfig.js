export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d1f868b6ea3dab201c20bc0',
                  title: 'Sanity Studio',
                  name: 'BeerHaus-studio',
                  apiId: 'f30c717a-69d0-4562-915f-c58426aa98de'
                },
                {
                  buildHookId: '5d1f868bbd3dbfe31a354dbb',
                  title: 'Blog Website',
                  name: 'BeerHaus',
                  apiId: 'dbe5dbbe-b203-4682-ade1-5ceaddeee788'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Pedroacgc/BeerHaus',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://BeerHaus.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

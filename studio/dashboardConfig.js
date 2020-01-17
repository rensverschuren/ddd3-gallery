export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e21ddb400ff3535d6cd7df5',
                  title: 'Sanity Studio',
                  name: 'ddd3-gallery-studio',
                  apiId: 'c67439af-5157-4616-8f62-a498f2c55b9c'
                },
                {
                  buildHookId: '5e21ddb4edb1bd3384db7ae2',
                  title: 'Blog Website',
                  name: 'ddd3-gallery',
                  apiId: '1ff73c32-ef9e-4152-b66d-3eaa418a031b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rensverschuren/ddd3-gallery',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://ddd3-gallery.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

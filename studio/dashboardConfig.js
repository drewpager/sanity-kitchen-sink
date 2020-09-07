export default {
  widgets: [
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
                  buildHookId: '5f56747d72c9455ffbf31e91',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-fwsd6h9t',
                  apiId: 'e8e3c4d8-399f-4601-aee9-cab1fb72aab8'
                },
                {
                  buildHookId: '5f56747e72c9455e2af3204b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-md6ncyxn',
                  apiId: 'e1aaf526-c079-4aa9-8b60-c65bfcdbf5d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/drewpager/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-md6ncyxn.netlify.app', category: 'apps'}
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

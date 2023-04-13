import {defineType, defineField} from 'sanity'

defineType({
    // [...]
    fields: [
        defineField({
            type: 'code',
            name: 'myCodeField',
            title: 'Code with all options',
            options: {
              language: 'javascript',
              languageAlternatives: [
                {title: 'Javascript', value: 'javascript'},
                {title: 'HTML', value: 'html'},
                {title: 'CSS', value: 'css'},
              ],
              withFilename: true,
            },
          })
    ],
  })
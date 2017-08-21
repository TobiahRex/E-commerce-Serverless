
  description: 'The User\'s Market Hero Meta-Data.',
  type: new ObjectType({
    name: 'UserMarketHero',
    fields: () => ({
      tags: {
        description: 'Array of objects, containing all the "Tags" that have been added to this User\'s Market Hero profile, and the respective date.',
        type: new ListType(
          new ObjectType({
            name: 'UserMarketHeroTags',
            fields: () => ({
              name: {
                description: 'The name of the "Tag".',
                type: StringType,
              },
              date: {
                description: 'The Date this "Tag" was added the User\'s Market Hero profile.',
                type: StringType,
              },
            }),
          }),
        ),
      },
    }),
  }),

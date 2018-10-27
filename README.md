#API	



# Interface



## Dictionary

- add word item
- delete word item
- edit word item
  - add translation
  - set progress
  - set study date
- get word: {all, byId, my regex, by type, by progress}
- get word translation(google api)



## Materials

- add global material(moderator)
- add user material(user)
- edit material(moderator)
- get list of materials(all / byCollection / byPopularity / byUserId)
- get collections (all)
- add collection(moderator)
- delete material global(moderator)
- delete material user(user)
- delete colection(moderator)
- edit collection(moderator)
- <dictionary>get translation -> add word



## Excersises

- get data for exc
- save result of exc



## Users

- create user
- update user
- get user



###Statistics

- get stats
- set stats



###Profile

- set history activity
- get history activity
- set current tasks
- get current tasks



# DataBase



## Dictionary



###User dictionary words collection.

`User word item:`

- Word item: Word item {word: string; translations: string[]}
- Progress: Integer (min 0, max 100)
- Last study date: Date
- type: String ([word, phrase])



##Materials

###Global materials collection:

`material item`

- title: string

- body: string
- categories: materialCategoryItem[]
- statistics: {adds: int, views: int, finshed: int }



### MatrialCategoriesCollection:

- name: string



##Users

### User material collection:

- material items list: `material item`
- isFinished: boolean



### UsersCollection:

- name: string
- password: string
- email: string
- isActive: boolean
- visit dates: Date[]
- stats: excersiseItem[]
- materialCategories: 



### UserExcersiseItemCollection:

- excType: string
- excDate: Date
- excScore: int


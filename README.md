# DICTIONARY:

## Data Base (Mongo)

### User dictionary words collection.

### User word item:

- Word item: Word item {word: string; translations: string[]}

-  Progress: Integer (min 0, max 100)

- Last study date: Date

- type: String ([word, phrase])

### Functionality

- add word item

- delete word item

- edit word item

- - add translation
  - set progress
  - set study date

- get word: {all, byId, my regex, by type, by progress}

- get word translation(google api)

# MATERIALS:

## Data base:

### Global materials collection:

- material item

- - title: string
  - body: string
  - categories: string[]
  - statistics: {adds: int, views: int, finshed: int }

### User material collection:

- material items list: material item
- isFinished: boolean

## Functionality

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
- 
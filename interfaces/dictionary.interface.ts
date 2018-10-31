import UserWordItem from "../dto/user-word.item";
import WordItem from "../dto/word.item";
import UserPhraseItem from "../dto/user-phrase.item";

export default interface DictionaryUser {
    /*
    * adds word from global dictionary into user dictionary collection
    * in case if that word isn't in global dictionary, then at first adds
    * word into global dictionary
    * @params word in hebrew, array of english translations
    * @returns in case if record created successful - UserWordItem, in case
    * if record was not created returned Error
    *
     */
    addUserWord(word: string, translations: string[]): UserWordItem;

    /*
    * removes record from user dictionary collection
    * @params word id
    * @returns UserWordItem of deleted word or Error in case if UserWordItem
    * with this id don't existing
     */
    removeUserWord(id: string): UserWordItem;

    /*
    * updates record in user dictionary
    * @param new value of UserWordItem
    * @returns updated UserWordItem if update was successful, Error in case if
    * UserWordItem is not existing
     */
    updateUserWordItem(wordItem: UserWordItem): UserWordItem;

    /*
    * @params(optionals) number of first and last UserWordItem in collection
     */
    getUserWords(first?: number, last?: number): UserWordItem[];
    getUserWordByPattern(regex: string): UserWordItem[];
    getUserWordTranslations(word: String): String[];
    addGlobalWord(req, res): WordItem;
    updateGlobalWord(wordItem: WordItem): WordItem;
    getGlobalWords(first?: number, last?: number): WordItem[];
    getGlobalWordTranslations(word: string): string[];
    getGoogleApiWordTranslations(word: string): string[];
    setUserPhrase(phrase: string, translation: string): UserPhraseItem;
    removeUserPhrase(id: string): UserPhraseItem;
    updateUserPhraseItem(userPraseItem: UserPhraseItem): UserPhraseItem;
    getAllUserPrases(): UserPhraseItem[];
    getUserPhraseByPattern(regex: string): UserPhraseItem[];
    getUserPhraseTranslation(phrase: String): String;
}
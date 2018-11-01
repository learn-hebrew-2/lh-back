import UserWordItem from "../dto/user-word.item";
import WordItem from "../dto/word.item";
import UserPhraseItem from "../dto/user-phrase.item";

export default interface DictionaryUser {
    /**
    * adds word from global dictionary into user dictionary collection
    * in case if that word isn't in global dictionary, then at first adds
    * word into global dictionary
    * @param word in hebrew, array of english translations
    * @returns UserWordItem in case if record created successful
    * @throws ExistingMediaException in case if UserWordItem with same word is
    * allready exist 
    * @throws IllegalArgumentExeption if given arg(s) are not valid
     */
    addUserWord(word: string, translations: string[]): UserWordItem;

    /**
    * removes record from user dictionary collection
    * @param id of UserWordItem witch must be removes
    * @returns removed UserWordItem
    * @throws NoSuchMediaException if there is not exist UserWordItem with given id
    * @throws IllegalArgumentExeption if given arg(s) are not valid
     */
    removeUserWord(id: string): UserWordItem;

    /** 
    * updates record in user dictionary
    * @param UserWordItem with updated new value
    * @returns updated UserWordItem if update was successful
    * @throws NoSuchMediaException in case if in db not exists UserWorditem
    * with given id 
    * @throws IllegalArgumentExeption if given arg(s) are not valid
     */
    updateUserWordItem(wordItem: UserWordItem): UserWordItem;

    /**
    * @param first (optional) - number of first UserWordItem in collection
    * @param last (optional) - number of lust UserWordItem in collection
    * @returns array of UserWordItems from user dictionary in case if
    * there are not existing word items of current user with given atrributes 
    * of method then returns empty array
    * @throws IllegalArgumentExeption if given arg(s) are not valid
     */
    getUserWords(first?: number, last?: number): UserWordItem[];

    /**
    * filters array of user words items by given regular expression 
    * @param regular expressin
    * @returns array of user words or null in case if there is no words item by
    * gived regular expression
    * @throws IllegalArgumentExeption if given arg(s) are not valid
    */
    getUserWordByPattern(regex: string): UserWordItem[];

    /**
    * at first this method search translate in Global Dictionary, if there is
    * not exist given hebrew word with translation, then search translate in 
    * Google Api 
    * @param word in hebrew that must be tanslates
    * @returns array of english words witch compaibles to given hebrew word
    * if there is not translation then returns empty array
    * @throws IllegalArgumentExeption if given arg(s) are not valid
    */
    getUserWordTranslations(word: String): String[];

    /**
     * adds WordItem in Global Dictionary collection
     * @param WordItem 
     * @returns added WordItem (with id)
     * @throws IllegalArgumentExeption if given arg(s) are not valid
     */
    addGlobalWord(WordItem): WordItem;

    
    updateGlobalWord(wordItem: WordItem): WordItem;
    getGlobalWords(first?: number, last?: number): WordItem[];
    getGlobalWordTranslations(word: string): string[];
    getGoogleApiWordTranslations(word: string): string[];
    addUserPhrase(phrase: string, translation: string): UserPhraseItem;
    removeUserPhrase(id: string): UserPhraseItem;
    updateUserPhrase(userPraseItem: UserPhraseItem): UserPhraseItem;
    getUserPrases(fitst?: number, last?: number): UserPhraseItem[];
    getUserPhraseByPattern(regex: string): UserPhraseItem[];
    getUserPhraseTranslation(phrase: String): String;
}
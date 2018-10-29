import UserWordItem from "../dto/user-word.item";
import WordItem from "../dto/word.item";
import UserPhraseItem from "../dto/user-phrase.item";

export default interface DictionaryUser {
    addUserWord(word: string, translation: string[]): UserWordItem;
    removeUserWord(id: string): UserWordItem;
    updateUserWordItem(wordItem: UserWordItem): UserWordItem;
    getUserWords(first?: number, last?: number): UserWordItem[];
    getUserWordByPattern(regex: string): UserWordItem[];
    getUserWordTranslations(word: String): String[];
    addGlobalWord(word: String, translations: string[]): WordItem;
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
import UserWordItem from "../dto/userworditem";
import WordItem from "../dto/worditem";

export default interface DictionaryUser {
    addUserWord(word: string, translation: string[]): UserWordItem;
    removeUserWord(id: string): UserWordItem;
    updateUserWordItem(wordItem: UserWordItem): UserWordItem;
    getAllUserWords(): UserWordItem[];
    getUserWordByPattern(regex: string): UserWordItem[];
    getUserWordTranslations(word: String): String[];


    addGlobalWord(word: String, translations: string[]): WordItem;
    updateGlobalWord(wordItem: WordItem): WordItem; 
    getGlobalWordTranslations(word: string): string[];

    getGoogleApiWordTranslations(word: string): string[];

    
}
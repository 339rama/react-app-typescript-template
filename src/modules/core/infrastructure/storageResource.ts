import { StorageInterface } from './interfaces/storage';

export class Storage {
    constructor(private storage: StorageInterface) { }

    setItem(key: string, value: string) {
        this.storage.setItem(key, value);
    }

    getItem(key: string): string | null {
        return this.storage.getItem(key);
    }

    removeItem(key: string): void {
        return this.storage.removeItem(key);
    }
}

const storageResource = new Storage(localStorage);

export default storageResource;

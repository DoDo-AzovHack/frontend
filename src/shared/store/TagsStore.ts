import { makeAutoObservable } from 'mobx'


class TagsStore {
    choosedTags: number[] = []


    constructor() {
        makeAutoObservable(this)
    }
    

    setChoosedTags = (tags: number[]): void => {
        this.choosedTags = tags
    }
}


export default new TagsStore
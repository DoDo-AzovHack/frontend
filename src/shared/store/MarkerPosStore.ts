import { makeAutoObservable } from 'mobx'


class MarkerPosStore {
    markerPos: string = ""


    constructor() {
        makeAutoObservable(this)
    }
    

    setMarkerPos = (lat: number, lng: number): void => {
        this.markerPos = `${ lat },${ lng }`
    }
}


export default new MarkerPosStore
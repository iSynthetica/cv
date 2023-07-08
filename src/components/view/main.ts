import { Renderer } from './renderer';
import { mainStructure as structure } from '../model/mainStructure';

class MainView extends Renderer {
    constructor() {
        super(structure)
    }

    start() {
        const parent = document.getElementById('cvContent');
        this.render(parent as HTMLElement)
    }
}

export default MainView;
import { Renderer } from './renderer';
import { headerStructure as structure } from '../model/headerStructure';

class HeaderView extends Renderer {
    constructor() {
        super(structure)
    }

    start() {
        const parent = document.getElementById('pageHeader');
        this.render(parent as HTMLElement)
    }
}

export default HeaderView;
import { Renderer } from './renderer';
import { pageStructure as structure } from '../model/pageStructure';

class PageView extends Renderer {
    constructor() {
        super(structure);
    }

    start() {
        const parent = document.body;
        this.render(parent)
    }
}

export default PageView;
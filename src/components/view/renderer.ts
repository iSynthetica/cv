export interface RenderI {
    tag: string,
    id?: string,
    classNames?: string[]
    src?: string,
    text?: string,
    html?: string,
    children?: RenderI[]
}

export class Renderer {
    constructor(private structure: RenderI[]) {}

    render(parent: HTMLElement) {
        for (const item of this.structure) {
            const { tag } = item;
            console.log('Render main structure');
            this.renderEl(tag, item, parent)
        }
    }

    renderEl(tag: string, data: RenderI, parent: HTMLElement) {
        if (tag === 'img') {
            this.renderImg(tag, data, parent);
            return;
        }
        const el = document.createElement(tag) as HTMLElement;
        this._setAttributes(el, data);
        if (data.text) el.innerText = data.text;
        if (data.html) el.innerHTML = data.html;
        if (data.children) {
            for (const item of data.children) {
                const { tag } = item
                this.renderEl(tag, item, el)
            }
        }
        parent.appendChild(el);
    }

    renderImg(tag: string, data: RenderI, parent: HTMLElement) {
        const el = document.createElement(tag) as HTMLImageElement;
        this._setAttributes(el, data);
        if (data.src) {
            el.src = data.src;
        }
        parent.appendChild(el);
    }

    private _setAttributes(el: HTMLElement, data: RenderI) {
        if (data.id) el.id = data.id;
        if (data.classNames && data.classNames.length) {
            for (const className of data.classNames) {
                if (className) el.classList.add(className);
            }
        }
    }
}
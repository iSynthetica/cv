import PageView from "./view/page";
import HeaderView from "./view/header";
import MainView from "./view/main";

class App {
    private _pageView: PageView;
    private _headerView: HeaderView;
    private _mainView: MainView;

    constructor() {
        this._pageView = new PageView();
        this._headerView = new HeaderView();
        this._mainView = new MainView();
    }

    start() {
        window.addEventListener('load', () => {
            this._load.apply(this)
        })
    }

    private _load() {
        this._pageView.start();
        // this._headerView.start();
        this._mainView.start();
    }
}

export default App;
class Slider {
    constructor(_element) {
        this.slider = _element;
        this.items = [this.slider.querySelector('.item-1'), this.slider.querySelector('.item-2'), this.slider.querySelector('.item-3')];
        this.background = this.slider.querySelector('.background');
        this.listeners();
        this.setBackground();
    }

    setBackground = () => {
        console.log(this.background);
        let pic = this.items[0].querySelector('img').getAttribute('src');
        this.background.style.background = `linear-gradient(180deg, rgba(0,0,0,0.6),rgba(0,0,0,0.3)), url(${pic}) no-repeat center fixed`
        this.background.style.backgroundSize = `cover`;
    }

    item_3Click = () => {
        this.items[0].removeEventListener('mousedown', this.item_1Click);
        this.items[2].removeEventListener('mousedown', this.item_3Click);
        this.next();
    }

    item_1Click = () => {
        this.items[0].removeEventListener('mousedown', this.item_1Click);
        this.items[2].removeEventListener('mousedown', this.item_3Click);
        this.previous();
    }

    listeners = () => {
        this.items[2].addEventListener('mousedown', this.item_3Click);
        this.items[0].addEventListener('mousedown', this.item_1Click);
    }

    reclass = () => {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].classList.remove('item-1', 'item-2', 'item-3');
            this.items[i].classList.add('item-' + String(i + 1))
        }

    }

    next = () => {
        this.items.unshift(this.items[2]);
        this.items.pop();
        this.reclass();
        this.listeners();
        this.setBackground();
    }

    previous = () => {
        this.items.push(this.items[0]);
        this.items.shift();
        this.reclass();
        this.listeners();
        this.setBackground();
    }
}

const slider = new Slider(document.querySelector('#slider'));
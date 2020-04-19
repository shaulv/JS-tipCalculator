import { elements, strings, types } from './base';

export const renderHtml = (type, pos, data) => {

    const markup = `
        <form id="${strings.itemPopupId}" class="${strings.itemPopup} ${type}" style="${pos ? 'top:' + (pos - 25) + 'px' : ''}">
            <div class="${strings.itemPopup}__${strings.field} ${strings.name}">
                <label>${strings.name}</label>
                <input placeholder="${strings.namePlaceholder}" type="text" value="${data ? data.name : ''}"/>
            </div>
            <div class="${strings.itemPopup}__${strings.field} ${strings.half} ${strings.price}">
                <label>${strings.price}</label>
                <input placeholder="${strings.pricePlaceholder}" type="number" value="${data ? data.price : ''}" />
            </div>
            <div class="${strings.itemPopup}__${strings.field} ${strings.half} ${strings.tip}">
                <label>${strings.tip}</label>
                <input placeholder="${strings.tipPlaceholder}" type="number" value="${data ? data.tip : ''}" />
            </div>
            <div class="${strings.itemPopup}__${strings.buttons}">
                <div class="${strings.btn} ${strings.cancel}">${strings.cancel}</div>
                <div class="${strings.btn} ${strings.submit}">${type === types.add ? strings.addFriend : strings.saveEdit}</div>
            </div>
        </form>
    `;

    elements.container.insertAdjacentHTML('afterbegin', markup);
    setTimeout(() => {
        document.querySelector(`#${strings.itemPopupId}`).classList.add(`${strings.itemPopup}--${strings.active}`);
    }, 100);
}

export const removeHtml = () => {
    const itemPopup = document.querySelector(`#${strings.itemPopupId}`);
    itemPopup.classList.remove(`${strings.itemPopup}--${strings.active}`);
    setTimeout(() => {
        itemPopup.remove();
    }, 400);
}
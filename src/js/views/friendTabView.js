import { elements, strings, types } from './base';

export const renderHtml = (data) => {
    const markup = `
        <div class="${strings.listItem}" ${strings.dataItemId}="${data.id}">
            <div class="texts">
                <div class="${strings.textsLeft}">
                    <span class="${strings.name}">${data.name}</span>
                </div>
                <div class="${strings.textsRight}">
                    <span class="${strings.tipPracentage}">${strings.tip} (${data.tip}%)</span>
                    <span class="${strings.tipMoney}">$ ${data.tipSum}</span>
                </div>
            </div>
            <div style="display: ${strings.none};" class="${strings.itemSettings}">
                <div class="${strings.itemSettings}__${strings.delete}">
                    <img src="img/plusIcon.svg" />
                </div>
                <div class="${strings.itemSettings}__${types.edit}">
                    <img src="img/editIcon.svg" />
                </div>
            </div>
        </div>
    `;

    elements.friendTabs.insertAdjacentHTML('beforeend', markup);

    return document.querySelector(`.${strings.listItem}:last-child`);
}

export const removeHtml = (data) => {
    data.remove();
}
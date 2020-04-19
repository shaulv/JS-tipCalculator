//import modelName from './models/modelName';
import * as ItemPopup from './models/ItemPopup';
import FriendTab from './models/FriendTab';
import { elements, fields, types, strings } from './views/base';
import * as itemPopupView from './views/itemPopupView';
import * as friendTabView from './views/friendTabView';
//#region Fields
let isItemPopupOpen = false;

let isEditItemSettingsOpen = false;

let itemsList = [];
//#endregion

//#region functions
const openItemPopup = (type, pos, id, data) => {
    if (type === types.add) {
        elements.addBtnImg.classList.add(strings.active);
    }
    itemPopupView.renderHtml(type, pos, data);
    setupEventsItemPopupButtons(type, id);
    isItemPopupOpen = true;
};
const closeItemPopup = () => {
    elements.addBtnImg.classList.remove(strings.active);

    itemPopupView.removeHtml();

    isItemPopupOpen = false;
};
const removeOpeningText = () => {
    elements.friendTabsEmptyText.classList.remove(strings.active);
    elements.friendTabsEmptyText.style.display = strings.none;
};
const closeItemEditSettings = () => {
    const settings = Array.from(document.querySelectorAll(`.${strings.listItem} .${strings.itemSettings}`));
    settings.forEach(e => e.style.display = strings.none);

    const rightTexts = Array.from(document.querySelectorAll(`.${strings.listItem} .${strings.textsRight}`));
    rightTexts.forEach(e => e.style.display = strings.block);
    isEditItemSettingsOpen = false
};
const openItemEditSettings = lastElement => {
    lastElement.children[1].style.display = strings.flex;
    lastElement.children[0].children[1].style.display = strings.none;
    isEditItemSettingsOpen = true;
};
//#endregion



//#region Event Functions
const itemPopupSubmitClick = (type, id) => {

    let validFields = ItemPopup.formValidation(fields());

    if (validFields.isValid) {

        if (type === types.add) {

            itemPopupAddItemSubmitClick();

        } else if (type === types.edit) {

            itemPopupEditItemSubmitClick(id);
        }
    } else {
        if (validFields.errorfields) {
            validFields.errorfields.forEach(e2 => {
                e2.classList.add(strings.error);
            });
        }
    }
};
const itemPopupAddItemSubmitClick = () => {

    const formFields = fields();

    const newTab = new FriendTab(
        formFields.name.value,
        formFields.price.value,
        formFields.tip.value
    );

    itemsList.push(newTab);

    removeOpeningText();

    const lastElement = friendTabView.renderHtml(newTab);

    closeItemPopup();

    setupEventFriendTab(lastElement);
};
const itemPopupEditItemSubmitClick = (id) => {

    const formFields = fields();

    const index = itemsList.findIndex(el => el.id === id);

    document.querySelector(`.${strings.listItem}[${strings.dataItemId}="${id}"] .${strings.name}`).innerHTML = formFields.name.value;
    itemsList[index].name = formFields.name.value;


    document.querySelector(`.${strings.listItem}[${strings.dataItemId}="${id}"] .${strings.tipPracentage}`).innerHTML = `${strings.tip} (${formFields.tip.value}%)`;
    itemsList[index].tip = formFields.tip.value;


    itemsList[index].price = formFields.price.value;
    itemsList[index].calcTip();


    document.querySelector(`.${strings.listItem}[${strings.dataItemId}="${id}"] .${strings.tipMoney}`).innerHTML = `${strings.coinSign} ${itemsList[index].tipSum}`;

    closeItemPopup();

    closeItemEditSettings();

};
const itemDeleteClick = (id) => {

    itemsList.splice(itemsList.findIndex(el => el.id === id), 1);

    const deletedTab = document.querySelector(`.${strings.listItem}[${strings.dataItemId}="${id}"]`);

    deletedTab.classList.add(strings.delete);

    setTimeout(() => {
        deletedTab.remove();
        if (itemsList.length === 0) {
            elements.friendTabsEmptyText.style.display = strings.block;

            setTimeout(() => {
                elements.friendTabsEmptyText.classList.add(strings.active);
            }, 100);
        }
    }, 400);


};
const openEditFriendPopup = (id, pos) => {

    if (!isItemPopupOpen) {
        const index = itemsList.findIndex(el => el.id === id);

        openItemPopup(types.edit, pos, id, itemsList[index]);

    } else {
        closeItemPopup();
    }
};
//#endregion



//#region Events
elements.addBtn.addEventListener(strings.clickEvent, e => {
    e.preventDefault();

    if (!isItemPopupOpen) {
        openItemPopup(types.add);
    } else {
        closeItemPopup();
    }
});
const setupEventsItemPopupButtons = (type, id) => {
    document.querySelector(`.${strings.itemPopup}__${strings.buttons} .${strings.cancel}`).addEventListener(strings.clickEvent, e => {
        e.preventDefault();
        closeItemPopup();
    });

    document.querySelector(`.${strings.itemPopup}.${type} .${strings.itemPopup}__${strings.buttons} .${strings.submit}`).addEventListener(strings.clickEvent, e => {
        e.preventDefault();
        itemPopupSubmitClick(type, id);
    });

};
const setupEventFriendTab = (lastElement) => {

    lastElement.addEventListener(strings.clickEvent, e => {

        e.preventDefault();

        const id = lastElement.dataset.itemid;

        if (e.target.matches(`.${strings.itemSettings}__${strings.delete} , .${strings.itemSettings}__${strings.delete} *`) && !isItemPopupOpen) {
            itemDeleteClick(id);

        } else if (e.target.matches(`.${strings.itemSettings}__${types.edit} , .${strings.itemSettings}__${types.edit} *`)) {

            openEditFriendPopup(id, e.clientY);

        } else if (e.target.matches(`.${strings.listItem}, .${strings.listItem} *`) && !isItemPopupOpen) {
            if (isEditItemSettingsOpen) {

                closeItemEditSettings();

            } else {

                openItemEditSettings(lastElement);

            }
        }

    });
};

//#endregion
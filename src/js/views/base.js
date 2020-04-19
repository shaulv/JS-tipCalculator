export const strings = {
    textsLeft: 'texts__left',
    empty: 'empty',
    friendTabs: 'friend-tabs',
    friendTabsId: 'friendTabs',
    img: 'img',
    addBtn: 'add-btn',
    addBtnId: 'addBtn',
    container: 'container',
    active: 'active',
    error: 'error',
    none: 'none',
    block: 'block',
    flex: 'flex',
    listItem: 'friend-tabs__item',
    itemSettings: 'item-settings',
    textsRight: 'texts__right',
    dataItemId: 'data-itemid',
    name: 'name',
    tipPracentage: 'tip-pracentage',
    tipMoney: 'tip-money',
    delete: 'delete',
    clickEvent: 'click',
    itemPopup: 'item-popup',
    itemPopupId: 'itemPopup',
    buttons: 'buttons',
    cancel: 'cancel',
    submit: 'submit',
    tip: 'tip',
    coinSign: '$',
    field: 'field',
    namePlaceholder: 'type friends name...',
    pricePlaceholder: 'type price...',
    tipPlaceholder: 'type tip...',
    btn: 'btn',
    addFriend: 'add friend',
    saveEdit: 'save edit',
    input: 'input',
    price: 'price',
    half: 'half'
}

export const elements = {
    container: document.querySelector(`.${strings.container}`),
    addBtn: document.getElementById(`${strings.addBtnId}`),
    addBtnImg: document.querySelector(`.${strings.addBtn} ${strings.img}`),
    friendTabs: document.getElementById(`${strings.friendTabsId}`),
    friendTabsEmptyText: document.querySelector(`.${strings.friendTabs}__${strings.empty}`)
};

export const fields = () => {
    return {
        name: document.querySelector(`.${strings.itemPopup}__${strings.field}.${strings.name} ${strings.input}`),
        price: document.querySelector(`.${strings.itemPopup}__${strings.field}.${strings.price} ${strings.input}`),
        tip: document.querySelector(`.${strings.itemPopup}__${strings.field}.${strings.tip} ${strings.input}`)
    }
}

export const types = {
    add: 'add',
    edit: 'edit'
}
import { NgxUiLoaderConfig } from 'ngx-ui-loader';

export const toastrConfig = {
    timeOut: 3000,
    extendedTimeOut: 2000,
    closeButton: true,
    preventDuplicates: true,
    maxOpened: 4,
    toastClass: 'custom-toast toast',
    positionClass: 'toast-top-center'
};

export const paginationConfig = {
    itemsPerPage: 5,
    currentPage: 1,
    itemsPerPageOptions: [2, 3, 5, 8, 10]
};

export const progressBarConfig: NgxUiLoaderConfig = {
    'bgsColor': '#00ACC1',
    'bgsOpacity': 0.5,
    'bgsPosition': 'bottom-right',
    'bgsSize': 60,
    'bgsType': 'ball-spin-clockwise',
    'blur': 0,
    'fgsColor': '#020146',
    'fgsPosition': 'top-right',
    'fgsSize': 40,
    'fgsType': 'three-strings',
    'gap': 24,
    'logoPosition': 'center-center',
    'logoSize': 120,
    'logoUrl': '',
    'masterLoaderId': 'master',
    'overlayBorderRadius': '0',
    'overlayColor': 'transparent',
    'pbColor': '#020146',
    'pbDirection': 'ltr',
    'pbThickness': 8,
    'hasProgressBar': true,
    'text': '',
    'textColor': '#FFFFFF',
    'textPosition': 'center-center',
    'threshold': 500
};

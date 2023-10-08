export type TCustomType = 'info' | 'success' | 'warning' | 'error';

export type TCustomSize = 'small' | 'medium' | 'large';

export type TCustomSortDirection = -1 | 0 | 1;

export type TCustomItem = {
    [key: string]: string,
};

export type TCustomValue = string | number | readonly string[] | undefined;

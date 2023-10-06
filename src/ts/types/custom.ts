export type TCustomType = 'info' | 'success' | 'warning' | 'error';

export type TCustomSize = 'small' | 'medium' | 'large';

export type TCustomItem = {
    [key: string]: string,
};

export type TCustomValue = string | number | readonly string[] | undefined;

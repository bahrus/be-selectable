import {BeDecoratedProps} from 'be-decorated/types';

export interface BeSelectableVirtualProps{
    selected: boolean;
}

export interface BeSelectableProps extends BeSelectableVirtualProps{
    proxy: HTMLAnchorElement & BeSelectableVirtualProps;
}

export interface BeSelectableActions{
    intro(proxy: Element & BeSelectableVirtualProps, target: Element, bdp: BeDecoratedProps): void;
}
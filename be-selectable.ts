import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {BeSelectableActions, BeSelectableProps, BeSelectableVirtualProps} from './types';
import {register} from 'be-hive/register.js';

export class BeSelectableController implements BeSelectableActions{
    intro(proxy: HTMLAnchorElement & BeSelectableVirtualProps, target: HTMLAnchorElement, bdp: BeDecoratedProps): void{
        const verb = target.href === location.href ? 'add': 'remove';
        target.classList[verb]('selected');
    }
}

export interface BeSelectableController extends BeSelectableProps{}

const tagName = 'be-selectable';
const ifWantsToBe = 'selectable';
const upgrade = 'a';

define<BeSelectableProps & BeDecoratedProps<BeSelectableProps, BeSelectableActions>, BeSelectableActions>({
    config:{
        tagName,
        propDefaults:{
            ifWantsToBe,
            upgrade,
            intro: 'intro'
        }
    },
    complexPropDefaults:{
        controller: BeSelectableController,
    }
});

register(ifWantsToBe, upgrade, tagName);
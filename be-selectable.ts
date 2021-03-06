import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {BeSelectableActions, BeSelectableProps, BeSelectableVirtualProps} from './types';
import {register} from 'be-hive/register.js';
declare const appHistory: any;
export class BeSelectableController implements BeSelectableActions{
    
    intro(proxy: HTMLAnchorElement & BeSelectableVirtualProps, target: HTMLAnchorElement, bdp: BeDecoratedProps): void{
        //window.addEventListener('popstate', this.handlePopState);
        appHistory.addEventListener('navigate', this.handleNavigate);
        this.checkLink();
    }
    handleNavigate = (e: Event) => {
        this.checkLink();
    }
    checkLink(){
        const verb = this.proxy.href === location.href ? 'add': 'remove';
        this.proxy.selected = verb === 'add';
        this.proxy.classList[verb]('selected');
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
            intro: 'intro',
            virtualProps: ['selected'],
            emitEvents: ['selected'],
            proxyPropDefaults:{
                selected: false,
            },
            
        },
    },
    complexPropDefaults:{
        controller: BeSelectableController,
    }
});

register(ifWantsToBe, upgrade, tagName);
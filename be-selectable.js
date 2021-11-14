import { define } from 'be-decorated/be-decorated.js';
import { register } from 'be-hive/register.js';
export class BeSelectableController {
    intro(proxy, target, bdp) {
        //window.addEventListener('popstate', this.handlePopState);
        appHistory.addEventListener('navigate', this.handleNavigate);
        this.checkLink();
    }
    handleNavigate = (e) => {
        this.checkLink();
    };
    checkLink() {
        const verb = this.proxy.href === location.href ? 'add' : 'remove';
        this.proxy.selected = verb === 'add';
        this.proxy.classList[verb]('selected');
    }
}
const tagName = 'be-selectable';
const ifWantsToBe = 'selectable';
const upgrade = 'a';
define({
    config: {
        tagName,
        propDefaults: {
            ifWantsToBe,
            upgrade,
            intro: 'intro',
            virtualProps: ['selected', 'emitEvents'],
            proxyPropDefaults: {
                selected: false,
                emitEvents: ['selected'],
            },
        },
    },
    complexPropDefaults: {
        controller: BeSelectableController,
    }
});
register(ifWantsToBe, upgrade, tagName);

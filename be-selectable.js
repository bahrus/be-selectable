import { define } from 'be-decorated/be-decorated.js';
import { register } from 'be-hive/register.js';
export class BeSelectableController {
    intro(proxy, target, bdp) {
        const verb = target.href === location.href ? 'add' : 'remove';
        target.classList[verb]('selected');
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
            intro: 'intro'
        }
    },
    complexPropDefaults: {
        controller: BeSelectableController,
    }
});
register(ifWantsToBe, upgrade, tagName);

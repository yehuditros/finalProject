function convertActionToType(actionName) {
    return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();
}

export const actions = new Proxy(
    {},
    {
        get: function (target, props) {
            if (target[props] === undefined) {
                return function (args) {
                    return {
                        type: convertActionToType(props),
                        payload: args
                    };
                }

            }
            else {
                return target[props];

            }

        }

    }
)
export default class Assert {
    constructor(objects) {
        this.objects = objects;
    }

    options(...options) {
        if (options.length > 0 && Array.isArray(options[0])) options =  options[0];
        for(let obj of this.objects)
        {
            if (!options.includes(obj)) {
                console.error(new Error(`Invalid property value '${obj}' (allowed: ${options.join("|")})`))
            }
        }
    }

    boolean() {
        for(let obj of this.objects) {
            if (typeof obj !== "boolean") {
                console.error(new Error(`Invalid property value '${obj}' (allowed: true|false)`))
            }
        }
    }

    function() {
        for(let obj of this.objects) {
            if (obj && typeof obj !== "function") {
                console.error(new Error(`Invalid property value '${obj}' (allowed: function)`))
            }
        }
    }

    error(error) {
        if(this.objects.length > 0) {
            for(let obj of this.objects) {
                console.error(new Error(`Invalid property value '${obj}': ${error}`))
            }
        } else {
            console.error(new Error(error))
        }
    }
}
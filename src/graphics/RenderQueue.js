export default class RenderQueue {

    constructor() {

        this.commands = [];

    }

    submit(command) {

        this.commands.push(command);

    }

    clear() {

        this.commands.length = 0;

    }

}
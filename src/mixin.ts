import NotImplementedError = require("./not_implemented_error");

class Mixin<P, S> implements React.Mixin<P, S> {
    public refs: {
        [key: string]: React.Component<any>
    };
    public props: P;
    public state: S;

    getDOMNode(): Element {
        throw new NotImplementedError("getDomNode");
    }

    setState(nextState: S, callback?: () => void): void {
        throw new NotImplementedError("setState");
    }

    replaceState(nextState: S, callback?: () => void): void {
        throw new NotImplementedError("replaceState");
    }

    forceUpdate(callback?: () => void): void {
        throw new NotImplementedError("forceUpdate");
    }

    isMounted(): boolean {
        throw new NotImplementedError("isMounted");
    }

    setProps(nextProps: P, callback?: () => void): void {
        throw new NotImplementedError("setProps");
    }

    replaceProps(nextProps: P, callback?: () => void): void {
        throw new NotImplementedError("replaceProps");
    }
}

export = Mixin;

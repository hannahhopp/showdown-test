import m from "mithril";
import showdown from "showdown";

const converter = new showdown.Converter();

const Test = {
    text : '# hello, markdown!',

    view : () => {
        return converter.makeHtml(Test.text);
    } 
}

export default Test;
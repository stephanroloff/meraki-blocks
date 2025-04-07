//JAVASCRIPT FRONTEND AND EDITOR
import React from "react";
import ReactDOM from "react-dom/client";
import { MyComponent } from './MyComponent';

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("#root").forEach(container => {
        const root = ReactDOM.createRoot(container);

        //Attr
        let imgUrl = container.getAttribute('data-image');

        root.render(<MyComponent imgUrl={imgUrl} />);
    });
});
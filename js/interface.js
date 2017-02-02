/*document.addEventListener("DOMContentLoaded", function() {
    // Remove the `js-disabled` class so that potentially interactive elements become usable
    if (document.body.classList.contains('js-disabled')) {
        document.body.classList.remove('js-disabled')
    }
})*/

/*
* Determine the closest ancestor of an element that has a certain class
*/
Element.prototype.getAncestorByClassName = function(className) {
    var currentParent = this.parentElement;
    while (true) {
        // If the root of the DOM is reached, an ancestor cannot be found anymore.
        if (currentParent === null) {
            return null
        }

        if (currentParent.classList.contains(className)) {
            return currentParent
        }

        var currentParent = currentParent.parentElement;
    }
}




function handleClick(type) {
    var buttons = document.getElementsByClassName("button--" + type)
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            var wordWrapper = this.getAncestorByClassName("word-wrapper")
            wordWrapper.classList.toggle(type)
        })
    }
}

handleClick("target")
handleClick("signal")
